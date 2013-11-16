/**
 * Created by Dave on 11/15/13.
 */
/*
the use would begin as such:
    var app = require('application');
    var someApp = new app(args);
     where, args = {}
 */

ENGINE.Application = (function(args){
    //private
    var that = this;
    _.extend(this, args);

    this.loader = new ENGINE.Loader();
    this.assets = new ENGINE.Assets(loader);

    //public
    return {
        /*
            starts the application,
         */
        start : function (){
            if(this.width && this.height){
                this.layer = cq(this.width, this.height);
            }else{
                this.layer = cq()
            }
            this.layer.framework(this, this);
            if(this.parentNode){
                this.layer.appendTo(this.parentDiv);
            }else{
                this.layer.appendTo('body');
            }

            //run the callback...
            this.oncreate();

            //fire the loader
            this.loader.ready(function(){
                that.onready();
            });
        }

    };
});

ENGINE.Application.prototype = function(){
    //private

    /*
     * calls the method in current scene with given arguments, for example:
     * 	this.dispacth("onmousemove", 32, 64);
     * will trigger onmousemove method in current scene (if it has one)
     */
    var dispatch = function(method){
        if(this.scene && this.scene[arguments[0]]){
            this.scene[arguments[0]].apply(this.scene, Array.prototype.slice.call(arguments, 1));
        }
    };

    var onstep = function(delta){
        this.dispatch("onstep", delta);
    };


    //public
    return{

    }
}

exports.application = ENGINE.Application;