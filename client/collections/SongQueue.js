// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //this.set("playlistName",params)
    this.on('ended', function(song){
      this.dequeue();
    });
    this.on('add', function(song){
      if (this.length === 1) {
        // dequeue
        // IF THERE IS ONLY ONE SONG, IT WILL REPEATLY PLAY THE FIRST SONG
        this.playFirst();
      }
    });
    this.on('removing', function(song){

      if(song === this.at(0)){
        console.log('current song');
        this.dequeue();
      } else {
        this.remove(song);
      }

    });
    for(var i=0; arguments.length >0 && i< arguments.length;i++){
      this.enqueue(arguments[i]);
    }
  },
  enqueue: function(song){
    console.log('adding');
    //console.log(this.add(song));
    this.add(song);

  },
  dequeue: function(){
    this.shift();

    // send current song to appModel
    if(this.at(0)) {
      this.at(0).play();
    }
  },
  playFirst: function(){
    this.at(0).play();
  },

});
