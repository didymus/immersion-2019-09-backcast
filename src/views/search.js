const SearchView = Backbone.View.extend({
  //Event handler for Search
  events: {
    'click button': 'performSearch', //Call performSearch if clicked
    'keyup input': 'handleKeyUp' //Call handle keyup if enter is pressed
  },


  //If enter(keyCode 13) is pressed, perform search
  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.performSearch();
    }
  },
  //Search function
  performSearch: function() {
    //Searches collection for a specific input
    this.collection.search(this.$('input').val().trim());
    this.$('input').val('');
  },
  //Render search view
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html'),

});

window.SearchView = SearchView;
