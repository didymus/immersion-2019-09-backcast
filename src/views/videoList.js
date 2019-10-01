const VideoListView = Backbone.View.extend({

  // initialize the video in list view
  initialize: function() {
    // render collection on `sync`
    this.listenTo(this.collection, 'sync', this.render);
  },

  // renders video list view
  render: function() {
    // remove children from $el
    this.$el.children().detach();
    // put video list on html page
    this.$el.html(this.template());
    // append entries
    this.$el.children().append(
      this.collection.map(function(video) {
        // map through and render list entry videos to prescribed format
        return new VideoListEntryView({model: video}).render().el;
      })
    );
    return this;
  },

  template: templateURL('src/templates/videoList.html'),
});

window.VideoListView = VideoListView;
