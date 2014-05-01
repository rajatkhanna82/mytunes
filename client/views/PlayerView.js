// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  className: "audio",

  initialize: function() {
    this.$el.on('ended', this.handlePlaybackEnded);

  },

  handlePlaybackEnded: function(){
    alert('ended11')
    this.model.dequeue();
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },
  getSong: function(){
    return this.model;
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
