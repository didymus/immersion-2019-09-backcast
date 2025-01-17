describe('VideosCollection', function() {
  xdescribe ('when retrieving live data from YouTube', function() {
    let collection;

    beforeEach(function() {
      collection = new Videos(fakeVideoData);
      sinon.stub(collection, 'fetch');
    });

    afterEach(function() {
      collection.fetch.restore();
    });

    it('should have a search function', function() {
      expect(collection.search).to.be.a('function');
    });

    it('should initiate an ajax request when search is called', function() {
      collection.search();
      expect(collection.fetch).to.have.been.called;
    });

    it('should initiate an ajax request when search is called with the specified data', function() {
      collection.search('something_to_search_for');
      expect(collection.fetch).to.have.been.calledWithMatch({
        data: {
          q: 'something_to_search_for',
        },
      });
    });

    it('should convert the fetched data into an array', function() {
      expect(collection.parse).to.be.a('function');
      const response = collection.parse({ items: fakeVideoData });
      expect(response).to.be.equal(fakeVideoData);
    });
  });
});