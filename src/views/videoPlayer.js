const VideoPlayerView = Backbone.View.extend({
  //Initialize player
  initialize: function() {
    //Listen for a video selection and initialize video by running the selectVideo function
    this.listenTo(this.collection, 'select', this.selectVideo);
  },
  //Sets video selection
  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),

});

window.VideoPlayerView = VideoPlayerView;
