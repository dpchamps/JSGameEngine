ENGINE.Application = function(args) {
	var app = this;
	
	_.extend(this, args);
	
	/*
	 * create canvas wrapper - we will draw on it.
	 *  .framework:
         * bind events to the application using eveline library
         * 	it checks if the provided object has properties corresponding with
         * events supported by the library like:
         * 			onmousemove
         * 			ongamepadup etc..
         * 	then if the property exists, binds the callback to the proper DOM event
     */
    //                              events, context
	this.layer = cq(425,425).framework(this,this);
	
	/*
	 * add it to the document
	 */
	//this.layer.appendTo("body");
    this.layer.appendTo(".jumbotron");
	

	
	/*
	 * create loader and assets manager
	 */
	this.loader = new ENGINE.Loader();
	this.assets = new ENGINE.Assets(this.loader);
	
	/*
	 * run a callback provided by the end-developer
	 */
	this.oncreate();
	
	/*
	 * fire loader
	 */
	this.loader.ready(function(){
		app.onready();
	});
	
	
};

ENGINE.Application.prototype = {
	/*
	 * calls the method in current scene with given arguments, for example:
	 * 	this.dispacth("onmousemove", 32, 64);
	 * will trigger onmousemove method in current scene (if it has one)
	 */
	dispatch: function(method){
		if(this.scene && this.scene[arguments[0]]){
			this.scene[arguments[0]].apply(this.scene, Array.prototype.slice.call(arguments, 1));
		}
	},
	selectScene: function(scene){
		/*
		 * tell the current scene it is being closed
		 */
		this.dispatch("onleave");
		/*
		 * swap current scene
		 */
		this.scene = scene;
		/*
		 * bring the new scene in
		 */
		this.dispatch("onenter");
	},
	/*
	 * Now pass the events from eveline to the current scene.
	 */
	
	/*
	 * game logic step (setInterval)
	 */
	onstep: function(delta){
		this.dispatch("onstep", delta);
	},
	/*
	 * rendering loop (requestAnimationFrame)
	 */
	onrender: function(delta){
		this.dispatch("onrender", delta);
	},
	/*
	 * the key gets translated to a string
	 */
	onkeydown: function(key){
		this.dispatch("onkeydown", key);
	},
    onmouseup: function(x,y){
        this.dispatch("onmouseup", x,y);
    }

	/*
	 * add more events at a later time
	 */
};
