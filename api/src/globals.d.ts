import { contexts } from "@api/Contexts";

declare global {

interface Colorway {
    [key: string]: any,
    name: string,
    "dc-import"?: string,
    accent: string,
    primary: string,
    secondary: string,
    tertiary: string,
    original?: boolean,
    author: string,
    colors?: string[],
    isGradient?: boolean,
    sourceType?: "online" | "offline" | "temporary" | null,
    source?: string,
    linearGradient?: string;
}

interface ColorPickerProps {
    color: number;
    showEyeDropper: boolean;
    suggestedColors: string[];
    label: any;
    onChange(color: number): void;
}

interface ColorwayObject {
    id: string | null,
    css?: string | null,
    sourceType: "online" | "offline" | "temporary" | "auto" | null | undefined,
    source: string | null | undefined,
    colors: {
        accent: string,
        primary: string,
        secondary: string,
        tertiary: string;
    },
    linearGradient?: string;
}

interface Preset {
    name: string;
    css: string;
    sourceType: "online" | "offline" | "theme" | null | undefined,
    source: string | null | undefined,
    author: string,
    conditions?: PresetCondition[];
}

interface PresetObject {
    id: string | null;
    css: string | null;
    sourceType: "online" | "offline" | "theme" | null | undefined,
    source: string | null | undefined,
    conditions?: PresetCondition[];
}

interface PresetCondition {
    if: string;
    is: "greaterThan" | "lowerThan" | "equal";
    than: string;
    onCondition: string;
    onConditionElse?: string;
}

interface SourceObject {
    type: "online" | "offline",
    source: string,
    colorways?: Colorway[],
    presets?: Preset[];
}

enum SortOptions {
    NAME_AZ = 1,
    NAME_ZA = 2,
    SOURCE_AZ = 3,
    SOURCE_ZA = 4,
    SOURCETYPE_ONLINE = 5,
    SOURCETYPE_OFFLINE = 6,
    COLORCOUNT_ASCENDING = 7,
    COLORCOUNT_DESCENDING = 8,
    MOST_USED = 9,
    LEAST_USED = 10
}

interface StoreObject {
    sources: StoreItem[];
}

interface StoreItem {
    name: string,
    id: string,
    description: string,
    url: string,
    authorGh: string;
}

const enum ModalTransitionState {
    ENTERING,
    ENTERED,
    EXITING,
    EXITED,
    HIDDEN,
}

interface ModalProps {
    transitionState: ModalTransitionState;
    onClose(): void;
}

type ContextKey = keyof typeof contexts;
type Context<Key extends ContextKey> = typeof contexts[Key];

}

export {};