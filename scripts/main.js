/*

   Then we attach the scenes to the current app;
 */
(function(){
    var App = require('./engine/application');
    var app = new App({
        width: 200,
        height: 350,
        oncreate: function(){
            this.loader.foo(500);
        },
        onready: function(){
            this.selectScene(this.startScreen);
        }
    });
    /*
    this could be done by finger here, if there are only a
    handful of scenes.
    I.E
        app.scene1 = require('assets/scenes/scene1')(app);
     */
    var attachScenes = require('./gameScenes')(app);
}());

