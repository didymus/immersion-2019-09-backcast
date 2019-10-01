const Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  //Google's youtube API url


  search: function(query) { //this is a fetch request that conforms to Postman
    //syntax
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });
  },

  parse: function(response) {
    return response.items;
  }
  
  
});

window.Videos = Videos;
