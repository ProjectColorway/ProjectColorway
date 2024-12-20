export * as Colors from "./Colors";
export * as Fs from "./Fs";
export * as Clipboard from "./Clipboard";

export function compareColorwayObjects(obj1: ColorwayObject, obj2: ColorwayObject) {
    return obj1.id === obj2.id &&
        obj1.source === obj2.source &&
        obj1.sourceType === obj2.sourceType &&
        obj1.colors.accent === obj2.colors.accent &&
        obj1.colors.primary === obj2.colors.primary &&
        obj1.colors.secondary === obj2.colors.secondary &&
        obj1.colors.tertiary === obj2.colors.tertiary;
}

export const kebabCase = (string: string) => string
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s_]+/g, "_")
    .replace(/\./g, "_")
    .toLowerCase();

export function classes(...classes: Array<string | null | undefined | false>) {
    return classes.filter(Boolean).join(" ");
}
