# PCAPI (Project Colorway API)
The simplest and most barebones way of implementing Colorways on a web app or website

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

You can learn more in the project [Wiki](https://github.com/ProjectColorway/ProjectColorway/wiki)