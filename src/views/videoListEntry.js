const VideoListEntryView = Backbone.View.extend({
  //Sets up entry title clickability
  events: {
    'click .video-list-entry-title': 'handeClick'

  },
  //If clicked, run select
  handleClick: function() {
    this.model.select();
  },
  //Render videoListEntry view on page
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),

});

window.VideoListEntryView = VideoListEntryView;
