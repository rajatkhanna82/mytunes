// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    playCount: 0
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playCount', this.get('playCount') + 1);
    console.log(this.playCount);
  },
  enqueue: function(){
    // Triggers an enqueue event for the current songQueue
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  end: function(){
    console.log('emit end')
    this.trigger('end', this);
  },
});
