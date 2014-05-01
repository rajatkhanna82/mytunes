// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> (<%= playCount %>)</td>'),

  events: {
    'click': function() {
      //console.log(this.model);
      this.model.remove();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
