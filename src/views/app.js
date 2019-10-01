const AppView = Backbone.View.extend({

  el: '#app',

  //Initializes and renders the app
  initialize: function() {
    this.videos = new Videos();
    //Tells Backbone to listen for sync on videos and call firstSearch 
    this.listenTo(this.videos, 'sync', this.firstSearch);
    //Default search in this.videos.search() below
    this.videos.search('Cute huskies');
    this.render();
  },

  firstSearch: function() {
    //Selects first video 
    this.videos.at(0).select();
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
    
    //Render player view
    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();
    
    //Render list view
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
  
    //Render search view
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();
  
    return this;
  },

  template: templateURL('src/templates/app.html')
});

window.AppView = AppView;
