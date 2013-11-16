/*
So, if the purpose of this file is simply to set up the shared namespace for everything within the engine,
    is it's existence justified?

If we think about it this way, the code:
    var app = new Application({ //object with defaults for app })
will only realistically appear once, on the creation of the app.

There can't forseably be a reason to create multiple instances of App, so Application.js should be a singleton
 */
var ENGINE = {};
