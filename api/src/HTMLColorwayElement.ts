import { simpleContexts } from "@api/Hooks";
import { Dispatcher } from "./api";

export default class extends HTMLStyleElement {
    constructor() {
        super();
        this.updateCSS();
    }

    connectedCallback() {
        Dispatcher.addListener("COLORWAYS_CONTEXT_UPDATED", () => this.updateCSS());
        Dispatcher.addListener("COLORWAYS_REMOVE_ACTIVE_COLORWAY_CSS", () => this.remove());
    }

    disconnectedCallback() {
        Dispatcher.removeListener("COLORWAYS_CONTEXT_UPDATED", () => this.updateCSS());
        Dispatcher.removeListener("COLORWAYS_REMOVE_ACTIVE_COLORWAY_CSS", () => this.remove());
    }

    updateCSS<Key extends ContextKey>(obj?: { c: Key, value: Context<Key>; }) {
        const [contexts, destroyContexts] = simpleContexts();
        if (contexts().activeColorwayObject.id) {
            contexts().presets[contexts().colorwaysPreset] ? (this.textContent = contexts().presets[contexts().colorwaysPreset].preset(contexts().activeColorwayObject.colors)) : void 0;
        }

        if (contexts().activeColorwayObject.id === null) {
            this.textContent = null;
        }

        return destroyContexts();
    }
}
