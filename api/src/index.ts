/*!
 * Project Colorway Web API
 * Copyright 2024, DaBluLite
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import HTMLColorwayElement from "HTMLColorwayElement";
import * as API from "./api";

class ProjectColorwayAPI {
    constructor(appName: string) {
        this.app = appName;
    }
    app = "";
    Dispatcher = API.Dispatcher;
    DataStore = API.DataStore;
    Styles = API.Styles;
    HTMLColorwayElement = HTMLColorwayElement;
    Utils = API.Utils;
    WebSocket = API.WebSocket;
    Hooks = API.Hooks;
    Contexts = API.Contexts;
    DiscordClient = API.ClientMod;
    start() {
        this.Contexts.initContexts().then(() => {
            window.customElements.define("active-colorway", this.HTMLColorwayElement, { extends: "style" });
    
            document.head.append(Object.assign(document.createElement("style", { is: "active-colorway" }), { id: "active-colorway" }));
    
            this.WebSocket.connect();
        });
    }
    stop() {
        this.Dispatcher.dispatch("COLORWAYS_REMOVE_ACTIVE_COLORWAY_CSS", {});
        this.Dispatcher.dispatch("COLORWAYS_CLOSE_WS", {});
    }
    version = "2.0.0"
}

Object.assign(window, { PCAPI: ProjectColorwayAPI })