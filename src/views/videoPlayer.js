const VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.render);
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    //Line 10 renders the video's content by showing the first model in the list,
    //applying it to the template and placing it on the dom.
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),

});

window.VideoPlayerView = VideoPlayerView;
