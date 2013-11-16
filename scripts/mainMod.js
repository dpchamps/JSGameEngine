// var app = require('application');
/*
let's hide the whole fucking namespace
 */
/*
where appArgs is an object
 */
var game = (function(appArgs){
   //private
    var App = require('application');
    var game = new App(appArgs);

    //public
    return{
        addScene: function(sceneName, sceneArgs){
            app[sceneName] = new ENGINE.Scene(sceneArgs);
        },
        addCollection: function(sceneTarget, collectionName){
            app[sceneTarget][collectionName] = new ENGINE.Collection(app[sceneTarget]);
        },
        addEntity: function(sceneTarget, collectionName, entity, args){
            app[sceneTarget][collectionName].add(entity, args);
        }

    };
});

if(typeof exports !== 'undefined'){
    if (typeof module !== 'undefined' && module.exports){
        exports = module.exports = game;
    }
    exports = module.exports = game;
}