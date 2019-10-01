const AppView = Backbone.View.extend({

  el: '#app',

  // initializes and renders the app
  initialize: function() {
    this.videos = new Videos();
    // tells Backbone to listen for `sync` on videos to call firstSearch
    this.listenTo(this.videos, 'sync', this.firstSearch);
    // default `search`
    this.videos.search('simulation theory');
    this.render();
  },

  firstSearch: function() {
    // selects first video 
    this.videos.at(0).select();
  },
// render the app
  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
    
    // render player view
    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();
    
    // render list view
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
  
    // render search view
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();
  
    return this;
  },

  template: templateURL('src/templates/app.html')
});

window.AppView = AppView;
