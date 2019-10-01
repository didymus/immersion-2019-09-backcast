const VideoListEntryView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  //make a click event handler that will call a selecting function
  events: {
    'click .video-list-entry-title': 'callSelect'
  },
  //Create a function that selects the model that is clicked
  callSelect: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html'),

});

window.VideoListEntryView = VideoListEntryView;
