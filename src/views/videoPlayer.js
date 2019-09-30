const VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),

});

window.VideoPlayerView = VideoPlayerView;
