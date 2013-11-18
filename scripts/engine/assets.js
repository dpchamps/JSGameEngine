Assets = function(loader){
	
	//make use of dat loader
	this.loader = loader;
	
	//set lookup directories
	this.paths = {
		images: "assets/images"
	};
	
	//the raw assets
	this.data = {
		images: []
	};
};

Assets.prototype = {
	/*
	 * get image by key, where the key is created by removing the filename
	 * e.g, 
	 * 		   units/fighter.png
	 *	key =  units/fighter
	 */
	image: function(key){
		return this.data.images[key];
	},
	
	//add many images
	addImages: function(filenames){
		for(var i = 0; i < filenames.length; i+=1){
			this.addImage(filenames[i]);
		}
	},
	
	//add one image
	addImage: function(filename){
		var image = new Image;
		
		//throw it into the loader
		this.loader.image(image);
		
		//set the key
		var key = filename.match(/(.*)\..*/)[1];
		
		//add to assets
		this.data.images[key] = image;
		
		image.src = this.paths.images + filename;
	}
};
