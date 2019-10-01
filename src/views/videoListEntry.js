const VideoListEntryView = Backbone.View.extend({
  // set up potential to click .video-list-entry-title
  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  // if clicked then select()
  handleClick: function() {
    this.model.select();
  },
  // render video list entry view on page
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),
});

window.VideoListEntryView = VideoListEntryView;
