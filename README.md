# Project Colorway
With the goal of making it easy to add theming functionality to any website, Project Colorway is a vast list of pre-made color themes ready to be implemented in seconds.

## Adding the API:
### Pure HTML/JS:
* Add this to your HTML header:
```html
<script type="application/javascript" src="https://raw.githubusercontent.com/DaBluLite/ProjectColorway/master/api/dist/index.js"></script>
```

## Using the API:
### Pure HTML/JS:
* Start by defining the different parts of the API inside your js file, exposed inside the `window` object:
```js
const { Dispatcher, DataStore, Styles, Colorways } = window.PCAPI;
```
* Start the API. Add this to the bottom of your `body` tag:
```html
<script>
    window.PCAPI.start();
</script>
```
* Set up listeners for changes on the active colorway:
```js
const { Dispatcher } = window.PCAPI;
Dispatcher.onColorwayChanged(activeColorwayObject => {
    console.log(activeColorwayObject) // example of return value: => { id: "hi", css: "", sourceType: "offline", source: "" }
})
```

You can learn more in the project [Wiki](https://github.com/DaBluLite/ProjectColorway/wiki)

## Projects using Colorways:
[Github Desktop](https://github.com/DaBluLite/gh-desktop): An Electron-based desktop app for Github, writtend in JSX (Non-react) and TS\
[Discord Colorways](https://github.com/DaBluLite/DiscordColorways): Simple color schemes/themes for Discord, meant to expand the functionality of the built in light and dark themes, by offering more simple color choices, that aren't locked behind Nitro
