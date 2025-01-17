describe('VideoPlayerView', function() {
  let view;
  let collection;
  let model;

  beforeEach(function() {
    sinon.spy(VideoPlayerView.prototype, 'render');

    collection = new Videos(fakeVideoData);
    view = new VideoPlayerView({ collection: collection });
    view.template = _.template('<div class="video-player-details"><%= snippet.title %></div>');

    model = collection.at(0);
    model.select();
  });

  afterEach(function() {
    VideoPlayerView.prototype.render.restore();
  });

  it('should render a video\'s content', function() {
    expect(view.$el.text()).to.match(new RegExp(model.attributes.snippet.title));
  });

  it('should re-render when an item is selected', function() {
    collection.at(0).select();
    expect(view.render).to.have.been.called;
  });
});
