const VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for(let i = 0; i < this.collection.length; i++) {
      this.renderVideoListEntry(this.collection.at(i));
    }
    return this;
  },

  renderVideoListEntry: function(video) {
    new VideoListEntryView({
      el: '.video-list',
      model: video
    }).render();
  },
  
  template: templateURL('src/templates/videoList.html'),

});

window.VideoListView = VideoListView;
