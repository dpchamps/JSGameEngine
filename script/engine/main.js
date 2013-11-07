var app = new ENGINE.Application({
	
	//get the width and height of the window
	width: window.innerWidth,
	height: window.innerHeight,
	
	//don't do anything just yet...
	oncreate: function(){
		
	},
	
	//when the assets are loaded, select the game screen
	onready: function(){
		this.selectScene(this.game);
	}
	
});
