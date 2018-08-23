# ar-drone realtime terminal controller
Here is a simple terminal-based controller to use the `ar-drone` library with.
Consider this an example script :)

You can find the code for the ar-drone library for Node [here](https://github.com/felixge/node-ar-drone).
Credit goes to all those amazing contributors.

## Install

Using this controller requires a local node(version 6+) to install and a compatible [Parrot drone](https://www.parrot.com/us/drones/parrot-ardrone-20-elite-edition#parrot-ardrone-20-elite-edition).

```
git clone git@github.com:louiemontes/easyControlsARDrone.git
cd dronez
npm install
```

## Select proper drone number
Check Wifi and connect to your drone's number

## Start script
```
node repl.js
```