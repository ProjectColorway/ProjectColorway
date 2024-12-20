# Manager-type Implementations
The official implementation for manager-implementations that allow for interconnectivity between other implementations

## Features:
### Control supported implementations from one app
Managers connect all colorways instances running on the device (API, DiscordColorways, Github Desktop, etc.) and allows them to share settings, sources and colorways, without having to do anything. Everything is being taken care of automagically.

## How it works:
### Managers
Assigning the local manager works in a first-come-first-served manner, as in, the first manager to open the websocket server (`ws://127.0.0.1:4140`), becomes the manager, thus, all traffic goes through the manager. Once the server is running, all routines (see below) are directed to the manager-implementation

### Clients
A properly configured client will store its bound key, connection status and manager status (is compatible) until the end of the app's lifecycle.