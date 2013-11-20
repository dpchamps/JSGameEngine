Another JS Game Engine
======================

This project lays the groundwork down for the basic organization
and execution for a canvas-based game. It takes the very basic concepts
layed down in Rezoner's Trikker article
[Rezoner's games from scratch - Architecture](http://trickkr.com/item/66/rezoners-games-from-scratch-architecture)

***

Common JS, NPM & Browserify
----------------------------------

All parts of the engine are modularized, and designed to work in such a way:

    browserify scripts/main.js > engineBundle.js

As of now, the basic usage of the engine requires four script tags in this order:

    underscore
    canvasquery
    canvasquery.framework
    engineBundle

Ideally, underscore, canvasQuery and the framework should be bundled right into the engineBundle.
Then, a package.json file can be placed in the root directory, and building the final script would require the following:

    npm install
    browserify scripts/main.js > game.js

***

Project direction
-----------------

The ultimate direction is to move the engine into a backbone framework. This is simply the front-end side of things.
The next step is to write server side code, which I honestly don't know how to do, so I'll just write my thoughts down.

The idea is to have support for multiplayer, scoreboards, and protected information coming from the server. With the
CommonJS modules, it will be easy to share between server  and browser.