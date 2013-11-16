/*
i suppose that you would use this as follows:
  var scene1 = require('scene1');
  etc...

  var app = require('game');
  app({
    //default args
    scene1 : scene1,
    anotherScene : anotherScene
    etc...

    onready: function{
        this.selectScene(this.scene1);
    }
  });
 */
var app = require('game');
app({
    width: 200,
    height: 350,
    oncreate: function(){
        this.loader.foo(500);
    },
    onready: function(){
        this.selectScene(this.startScreen);
    }
});
