// PlayerView.js - Defines a backbone view class for the music player.
var CurrentSongView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div />',

  className: "jumbotron",

  template: _.template('<h2><%= artist %> - <%= title %><small> plays:<%= playCount %></small></h2>'),

  initialize: function() {
    this.$el.on('ended', function(){
      this.model.ended();
      }.bind(this));
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes))
  }

});
