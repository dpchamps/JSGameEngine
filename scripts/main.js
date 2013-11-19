/*

   Then we attach the scenes to the current app;
 */
(function(){
    var App = require('engine/application');
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
    var attachScenes = require('./gameScenes');
    attachScenes(app);
}());

