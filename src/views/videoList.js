const VideoListView = Backbone.View.extend({

  //Initialize the video in list view
  initialize: function() {
    //Render the collection when it syncs
    this.listenTo(this.collection, 'sync', this.render);
  },

  //Renders video list view
  render: function() {
    //Remove children from $el
    this.$el.children().detach();
    //Puts video list on html page template
    this.$el.html(this.template());
    
    this.$el.children().append(
      this.collection.map(function(video) {
        //Maps through rendering list entry videos 
        return new VideoListEntryView({model: video}).render().el;
      })
    );
    // for (let i = 0; i < this.collection.length; i++) {
    //   this.renderVideoListEntry(this.collection.at(i));
    // }
    return this;
  },


  template: templateURL('src/templates/videoList.html'),

});

window.VideoListView = VideoListView;
