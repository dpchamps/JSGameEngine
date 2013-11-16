// var app = require('application');
var app = new ENGINE.Application({
	
	//get the width and height of the window
	snakeSize: 17,
    gameBoard: 25,


	oncreate: function(){
        this.width = this.snakeSize * this.gameBoard;
        this.height = this.snakeSize * this.gameBoard;
        //this.layer =  cq(this.width, this.height);
        /* load anything to let the objects being create before calling ready */
        this.loader.foo(500);
    },
	
	//when the assets are loaded, select the game screen
	onready: function(){
		this.selectScene(this.startScreen);
	}

});
