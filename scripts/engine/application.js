var Application = function(args) {
	var app = this;
	
	_.extend(this, {
        /*
            This is where application defaults go, allowed to be
            overwritten by args
         */
        width : 0,
        height: 0,
        appendToNode : "body",
        oncreate: function(){
            //the absolute default
            app.loader.foo(500);
        }
    } ,args);
	
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
	if(this.width && this.height){
        this.layer = cq(this.width, this.height);
    }else{
        this.layer = cq()
    }
    this.layer.framework(this,this);
	
	/*
	 *  add it to the document
        defaulting to body, if nothing is provided.
    */
    this.layer.appendTo(this.appendToNode);

	/*
	 * create loader and assets manager
	 */
    var Loader = require('./loader');
    var Assets = require('./assets');
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

Application.prototype = {
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

    /* game logic loop */
    onstep: function(delta, time) {
        this.dispatch("onstep", delta, time);
    },

    /* rendering loop */
    onrender: function(delta, time) {
        this.dispatch("onrender", delta, time);
    },

    /* window resize */
    onresize: function(width, height) {
        this.dispatch("onresize", width, height);
    },

    /* mouse events */
    onmousedown: function(x, y) {
        this.dispatch("onmousedown", x, y);
    },
    onmouseup: function(x, y) {
        this.dispatch("onmouseup", x, y);
    },
    onmousemove: function(x, y) {
        this.dispatch("onmousemove", x, y);
    },
    onmousewheel: function(delta) {
        this.dispatch("onmousewheel", delta);
    },

    /* touch events */
    ontouchstart: function(x, y, touches) {
        this.dispatch("ontouchstart", x, y, touches);
    },
    ontouchend: function(x, y, touches) {
        this.dispatch("ontouchend", x, y, touches);
    },
    ontouchmove: function(x, y, touches) {
        this.dispatch("ontouchmove", x, y, touches);
    },

    /* keyboard events */
    onkeydown: function(key) {
        this.dispatch("onkeydown", key);
    },
    onkeyup: function(key) {
        this.dispatch("onkeyup", key);
    },

    /* gamepad events (chrome only) */
    ongamepaddown: function(button, gamepad) {
        this.dispatch("ongamepaddown", button, gamepad);
    },
    ongamepadup: function(button, gamepad) {
        this.dispatch("ongamepadup", button, gamepad);
    },
    ongamepadmove: function(xAxis, yAxis, gamepad) {
        this.dispatch("ongamepadmove", xAxis, yAxis, gamepad);
    }
};



module.exports = Application;
