var zetta = require('zetta');
var WaveGenerator = require('./devices/wave');
var Led = require('./devices/led');
var app = require('./apps');

zetta()
  .use(WaveGenerator)
  .use(Led)
  .use(app)
  .listen(1337);
