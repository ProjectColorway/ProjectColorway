# Manager-type Implementations
The official implementation for manager-implementations that allow for interconnectivity between other implementations

## Features:
### Control supported implementations from one app
Managers connect all colorways instances running on the device (API, DiscordColorways, Github Desktop, etc.) and allows them to share settings, sources and colorways, without having to do anything. Everything is being taken care of automagically.

### (Web based implementations only) Multi CSS
Multi CSS allows for each app to have multiple CSS strings, all inside one colorway. Multi CSS colorways can only be created from managers, and the translation process of a Multi CSS colorway to a normal colorway is handled manager-side, once a client requests for the manager to return all other sources from connected clients, including the manager's

## How it works:
### Managers
Assigning the local manager works in a first-come-first-served manner, as in, the first manager to open the websocket server (`ws://127.0.0.1:4140`), becomes the manager, thus, all traffic goes through the manager. Once the server is running, all routines (see below) are directed to the manager-implementation

### Clients
A properly configured client