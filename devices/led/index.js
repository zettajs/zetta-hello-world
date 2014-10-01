var Device = require('zetta-device');
var util = require('util');

var Led = module.exports = function() {
  Device.call(this);
};
util.inherits(Led, Device);

Led.prototype.init = function(config) {
  var self = this;

  config
    .state('off')
    .type('led')
    .name('led!')
    .when('off', { allow: ['turn-on'] })
    .when('on', { allow: ['turn-off'] })
    .map('turn-on', function turnOn(cb) {
      self.state = 'on';
      if(cb) {
        cb();
      }
    })
    .map('turn-off', function turnOff(cb) {
      self.state = 'off';
      if(cb) {
        cb();
      }
    });
};
