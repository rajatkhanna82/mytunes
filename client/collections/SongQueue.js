// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    //this.set("playlistName",params)
  },
  enqueue : function(song){
    console.log('adding');
    console.log(this.add(song))
    if (this.length === 1) {
      this.at(0).play();
    }
  },
  end: function(song){
    console.log('calling dequeue');
    this.shift();
    if(this.at(0)) {
      this.at(0).play();
    }
  },

});
