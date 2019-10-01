const VideoPlayerView = Backbone.View.extend({
  // initialize player
  initialize: function() {
    // listen for `select `and initialize selected
    this.listenTo(this.collection, 'select', this.selectVideo);
  },
  // set video selection
  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    // if exists
    if (this.model) {
      // show on page
      this.$el.html(this.template(this.model.attributes));
    } else {
      // else display `loading please wait...`
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),
});

window.VideoPlayerView = VideoPlayerView;
