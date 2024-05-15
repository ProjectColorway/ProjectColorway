import { DataStore, Styles, Dispatcher } from "../";

export function set({ id, css, sourceType, source }: ColorwayObject) {
    Styles.setStyle("active-colorway", css);
    DataStore.set("activeColorwayObject", { id: id, css: css, sourceType: sourceType, source: source })

    Dispatcher.dispatch("colorways:colorway-updated", { id: id, css: css, sourceType: sourceType, source: source });
}

export async function setGenerated({ id, sourceType, source, accent, primary, secondary, tertiary, genString }: Partial<ColorwayObject> & {
    accent: string,
    primary: string,
    secondary: string,
    tertiary: string,
    genString?: string }) {
    const colorwayGenString: string | null = (genString || await DataStore.get("colorwayGenString")).replaceAll("{{accent}}", accent).replaceAll("{{primary}}", primary).replaceAll("{{secondary}}", secondary).replaceAll("{{tertiary}}", tertiary);
    if(colorwayGenString) {
        Styles.setStyle("active-colorway", colorwayGenString);
        DataStore.set("activeColorwayObject", { id: id, css: colorwayGenString, sourceType: sourceType, source: source })
    } else {
        throw new Error("Project Colorway Error: generator function")
    }

    Dispatcher.dispatch("colorways:colorway-updated", { id: id, css: colorwayGenString, sourceType: sourceType, source: source });
}

export function setGenerator(genString: string) {
    DataStore.set("colorwayGenString", genString);
}

export function remove() {
    Styles.removeStyle("active-colorway");
    DataStore.set("activeColorwayObject", { id: null, css: null, sourceType: null, source: null });
    return true;
}

export async function get(): Promise<ColorwayObject> {
    return await DataStore.get("activeColorwayObject")
}

export async function start() {
    const activeColorwayObject: ColorwayObject = await DataStore.get("activeColorwayObject");
    if(!activeColorwayObject) {
        DataStore.set("activeColorwayObject", { id: null, css: null, sourceType: null, source: null })
    } else {
        Styles.setStyle("active-colorway", activeColorwayObject.css);

        Dispatcher.dispatch("colorways:colorway-updated", activeColorwayObject);
    }
}