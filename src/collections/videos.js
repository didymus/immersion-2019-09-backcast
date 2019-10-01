const Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  //Google YouTube API url


  search: function(query) { // fetch request that conforms to Postman data
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
// parse it out
  parse: function(response) {
    return response.items;
  }
  
});

window.Videos = Videos;
