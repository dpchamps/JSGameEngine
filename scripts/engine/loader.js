ENGINE.Loader = function(){
	
	// all of the items to load
	this.total = 0;
	
	// items in the queue
	this.count = 0;
	
	// progress from 0 to 1
	this.progress = 0;
	
	//all callbacks can be fired once the loading is complete
	this.callbacks = [];
	
	//the flag...
	this.loading = false;
};

ENGINE.Loader.prototype = {
	
	add: function() {
		this.loading = true;
		this.count += 1;
		this.total += 1;
	},
	
	image: function(image) {
		var loader = this;
		
		//listen for when the image is ready
		image.addEventListener("load", function(){
			loader.onItemReady();
		});
		
		//if the image can't be loaded, ERROR
		image.addEventListener("error", function(){
			loader.onItemError(this.src);
		});
		
		//increase item count
		this.add();
	},
    /* sometimes it is convinient to simulate loading by using timeout */
    foo: function(duration) {
        var loader = this;

        this.add();

        setTimeout(function() {
            loader.onItemReady();
        }, duration);
    },
	
	/*
	 * a load simulation method using setTimeout:
	 * 	ex:	
	 * 		loader.delay(1000);
	 * 	will simulate a one second load for some asset
	 */
	
	delay: function(duration){
		var loader = this;
		
		//simulation
		setTimeout(function(){
			loader.onItemReady();
		}, duration);
		
		this.add();
	},
	
	//all the stuff that happens once loading is complete
	ready: function(callback){
		if(!this.loading){
			//if there's nothing to load, fire the callback now
			callback();
		}else{
			//if still loading, throw the callback on the pile!
			this.callbacks.push(callback);
		}
	},
	
	//called when the item is finished loading
	onItemReady: function(){
		
		//decrease the count of items in the queue
		this.count -= 1;
		
		/*
		 * update the progress, which can be accessed from the outside
		 * (for progress bars and the such)
		 */
		this.progress = (this.total - this.count) / this.total;
		
		/*
		 * check to see if there are any items in the queue left.
		 * if now, fire all callbacks and reset the loader
		 */
		
		if(this.count <=0){
			this.loading = false;
			
			//callbacks, I choose you
			for(var i =0; i < this.callbacks.length; i+=1){
				this.callbacks[i]();
			}
			
			//remove all those callbacks
			this.callbacks = [];
			this.total = 0;
			this.count = 0;
			
		}
	},
	
	//when some asset fails to load
	onItemError: function(source){
		console.log("unable to load ", source);
	}
};
