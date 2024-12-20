# Project Colorway
With the goal of making it easy to add theming functionality to any website, Project Colorway is a vast list of pre-made color themes ready to be implemented in seconds.

## Adding the API:
### Pure HTML/JS:
* Add this to your HTML header:
```html
<script type="application/javascript" src="https://raw.githubusercontent.com/ProjectColorway/ProjectColorway/master/api/dist/index.js"></script>
```

## Using the API:
### Pure HTML/JS:
* Start by defining the different parts of the API inside your js file, exposed inside the `window` object:
```js
const PCAPI, { Dispatcher, DataStore, Styles, HTMLColorwayElement, start: startPCAPI, stop: stopPCAPI, Hooks } = new window.PCAPI("MyAppName");
```
* Start the API:
```js
startPCAPI();
```
* Listen for data changes on the API:
    * Using `Hooks`
```js
const { Hooks } = new window.PCAPI("");

// Manage a single context
function getColorwayObj() {
    const [activeColorwayObject, setActiveColorwayObject destroyActiveColorwayObject] = Hooks.simpleContext("activeColorwayObject");

    console.log(activeColorwayObject()) // => { id: null... }

    setActiveColorwayObject({ id: "new colorway"... })

    console.log(activeColorwayObject()) // => { id: "new colorway"... }

    return destroyActiveColorwayObject();
}

// Or the entire contexts object
function updateAll() {
    const [contexts, destroyContexts] = Hooks.simpleContexts();

    myContexts = contexts();

    return destroyContexts();
}
```

* Cleanup:
```js
stopPCAPI();
```

* Manage CSS styles:
```js
const { Styles } = new window.PCAPI("");

// Adding a style
Styles.setStyle(id, css);

// Removing said style
Styles.removeStyle(id, css);
```

You can learn more in the project [Wiki](https://github.com/ProjectColorway/ProjectColorway/wiki)

## Projects using Colorways:
[Github Desktop](https://github.com/DaBluLite/gh-desktop): An Electron-based desktop app for Github, writtend in JSX (Non-react) and TS\
[Discord Colorways](https://github.com/DaBluLite/DiscordColorways): Simple color schemes/themes for Discord, meant to expand the functionality of the built in light and dark themes, by offering more simple color choices, that aren't locked behind Nitro
