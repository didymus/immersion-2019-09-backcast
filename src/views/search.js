const SearchView = Backbone.View.extend({
  // event handler for Search
  events: {
    'click button': 'performSearch', // call performSearch if clicked
    'keyup input': 'handleKeyUp' // call handleKeyUp if `enter` pressed
  },


  // if `enter` (keyCode 13) is pressed performSearch
  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.performSearch();
    }
  },
  // search function
  performSearch: function() {
    // search collection for given input
    this.collection.search(this.$('input').val().trim());
    this.$('input').val('');
  },
  // render search view
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html'),

});

window.SearchView = SearchView;
