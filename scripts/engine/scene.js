Scene = function(parent, args){
    _.extend(this, args);
	
	if (this.oncreate) this.oncreate();
};

Scene.prototype = {
	/*
	 * default reactions to events so we don't have to bother
	 * whether the action has been provided or not
	 */
	
	onenter:	 function() { },
	onleave:	 function() { },
	onrender:	 function() { },
	onstep:		 function() { }
};

module.exports = Scene;
