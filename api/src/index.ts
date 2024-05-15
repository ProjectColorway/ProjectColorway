import { DataStore, Dispatcher, Colorways, Styles } from "./api";
import { defaultColorwaySource } from "./constants";

(async function () {
    const [
        customColorways,
        colorwaySourceFiles,
        colorwayGenString
    ]: (OfflineSource[] | string[] | string)[] = await DataStore.getMany([
        "customColorways",
        "colorwaySourceFiles",
        "colorwayGenString"
    ]);

    const defaults = [
        { name: "customColorways", checkedValue: customColorways, defaults: [] as OfflineSource[] },
        { name: "colorwaySourceFiles", checkedValue: colorwaySourceFiles, defaults: [defaultColorwaySource] },
        { name: "colorwayGenString", checkedValue: colorwayGenString, defaults: null }
    ];

    defaults.forEach(({ name, checkedValue, defaults }) => {
        if (!checkedValue) DataStore.set(name, defaults);
    });

    Colorways.start();
})();

Object.assign(window, { PCAPI: { 
    Colorways,
    Dispatcher,
    DataStore,
    Styles,
    version: "1.0.0"
} })