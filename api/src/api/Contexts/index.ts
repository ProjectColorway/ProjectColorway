import { nullColorwayObj, nullPresetObj } from "constants";
import { DataStore, Dispatcher } from "..";
import { PresetKey, presets } from "@api/Presets";
import { checkClient } from "@api/ClientMod";

export const contexts: {
    colorwaySourceFiles: { name: string, url: string; }[],
    customColorways: { name: string, colorways?: Colorway[], presets?: Preset[]; }[],
    activeColorwayObject: ColorwayObject,
    activeAutoPreset: string,
    colorwayData: SourceObject[],
    showColorwaysButton: boolean,
    colorwayUsageMetrics: (ColorwayObject & { uses: number; })[],
    colorwaysManagerDoAutoconnect: boolean,
    colorwaysPreset: PresetKey,
    colorwaysManagerAutoconnectPeriod: number,
    hasManagerRole: boolean,
    isConnected: boolean,
    boundKey: { [managerKey: string]: string; },
    colorwaysBoundManagers: { [managerKey: string]: string; }[];
    presets: {
        [PresetID: string]: {
            name: string;
            preset: (colors: { accent?: string, primary?: string, secondary?: string, tertiary?: string; }) => string;
            id: string;
            author: string;
            [key: string]: any;
        };
    };
    version: string;
    themePresets: Preset[];
    activePresetObject: PresetObject;
} = {
    colorwaySourceFiles: [],
    customColorways: [],
    activeColorwayObject: nullColorwayObj,
    activeAutoPreset: "hueRotation",
    colorwayData: [],
    showColorwaysButton: false,
    colorwayUsageMetrics: [],
    colorwaysManagerDoAutoconnect: true,
    colorwaysPreset: "discord",
    colorwaysManagerAutoconnectPeriod: 3000,
    hasManagerRole: false,
    isConnected: false,
    boundKey: { "00000000": `${checkClient()}.${Math.random().toString(16).slice(2)}.${new Date().getUTCMilliseconds()}` },
    colorwaysBoundManagers: [],
    presets: {},
    version: "1.0.0",
    themePresets: [],
    activePresetObject: nullPresetObj
};

export const unsavedContexts = ["presets", "themePresets", "isConnected", "boundKey", "hasManagerRole", "colorwayData"];

const contextKeys = Object.keys(contexts).filter(key => unsavedContexts.includes(key) === false);

export async function initContexts() {
    const data = await DataStore.getMany(contextKeys);

    contextKeys.forEach(async <Key extends ContextKey>(key: Key, i: number) => {
        if (data[i] === undefined) {
            DataStore.set(key, contexts[key] as Context<Key>);
            if (key === "version") {
                // openChangelogModal();
            }
        } else {
            if (key === "version" && (!data[i] || data[i] !== contexts.version)) {
                await DataStore.set(key, contexts.version);
                // openChangelogModal();
            }
            contexts[key] = data[i];
        }
    });

    contexts.presets = presets;

    const responses: Response[] = await Promise.all(
        contexts.colorwaySourceFiles.map(source =>
            fetch(source.url)
        )
    );

    contexts.colorwayData = await Promise.all(
        responses
            .map((res, i) => ({ response: res, name: contexts.colorwaySourceFiles[i].name }))
            .map((res: { response: Response, name: string; }) =>
                res.response.json().then(dt => ({ colorways: dt.colorways as Colorway[], source: res.name, type: "online" })).catch(() => ({ colorways: [] as Colorway[], source: res.name, type: "online" }))
            )) as { type: "online" | "offline", source: string, colorways: Colorway[]; }[];

    Object.keys(contexts).forEach(<Key extends ContextKey>(c: Key) => {
        Dispatcher.dispatch("COLORWAYS_CONTEXT_UPDATED", {
            c,
            value: contexts[c]
        });
    });

    return contexts;
}

export function setContext<C extends keyof typeof contexts>(context: C, value: typeof contexts[C], save = true): typeof contexts[C] {
    contexts[context] = value as never;
    Dispatcher.dispatch("COLORWAYS_CONTEXT_UPDATED", {
        c: context,
        value: value
    });
    save && DataStore.set(context, value);
    return value;
}

export function setContexts<C extends ContextKey>(...conts: ([C, Context<C>] | [C, Context<C>, boolean])[]) {
    conts.forEach(context => {
        if (context[2]) {
            setContext(context[0], context[1], context[2]);
        }
    });
}
