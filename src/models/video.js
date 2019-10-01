const Video = Backbone.Model.extend({

  initialize: function(video) {
    // set id for dynamic html tags
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});

window.Video = Video;
