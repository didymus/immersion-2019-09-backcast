module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/underscore/underscore.js',
      'node_modules/backbone/backbone.js',
      'node_modules/chai/chai.js',
      'node_modules/sinon/pkg/sinon-server-1.17.3.js',
      'node_modules/sinon/pkg/sinon-1.17.3.js',
      'node_modules/sinon-chai/lib/sinon-chai.js',

      'test/lib/templateUrl.js',

      'src/models/video.js',
      'src/collections/videos.js',
      'src/views/*.js',

      'test/{data,views,models,collections}/*.js',
    ],
    frameworks: ['mocha'],
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    port: 9876,
  });
};