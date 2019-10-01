const AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.renderVideoList();
    this.renderVideoPlayer();
    this.renderSearchView();
  },


  render: function() {
    this.$el.html(this.template());
    //return new VideoListEntryView({model: video}).render();
    return this;
  },

  renderVideoList: function() {
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
  }, 

  renderVideoPlayer: function() {
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();
  },

  renderSearchView: function() {
    new SearchView({
      el: this.$('.search')
    }).render();
  },
  
  template: templateURL('src/templates/app.html')
});

window.AppView = AppView;
