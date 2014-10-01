var Device = require('zetta-device');
var util = require('util');

var WaveGenerator = module.exports = function() {
  Device.call(this);
  this.wave = 0;
};
util.inherits(WaveGenerator, Device);

WaveGenerator.prototype.init = function(config) {
  config
    .name('SinWave')
    .type('generator')
    .monitor('wave');

  var self = this;
  var vals = [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25, 0, -0.25, -0.5, -0.75, -1];
  var counter = 0;
  setInterval(function() {
    self.wave = vals[counter % 17];
    counter++;
  }, 60);
};
