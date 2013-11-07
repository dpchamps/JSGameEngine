/*
Entities are objects that has some common methods - for us it will render and step. The game can call all the entities in one loop without carring are they tanks, soldiers, or trees - for the game loop they are just entitites which have definitions of what should they do on step and how they should be rendered.

ENGINE.Soldier = function(args) {

  _.extend(this, { x: 0, y: 0 }, args);
};

ENGINE.Soldier.prototype = {

  step: function(delta) { 

    // some logic update 
  },

  render: function(delta) { 

    // draw the thing 
  },

  remove: function() {

    // mark for removal 
    this._remove = true;

    // tell the collection that it has some entities to remove in the next step     
    this.collection.dirty = true;
  }
};
 */