var zetta = require('zetta');
var LED = require('zetta-mock-led');
var Sine = require('zetta-sine-wave-driver');
 
var app = require('./apps/app');
 
zetta()
  .use(LED)
  .use(Sine)
  .use(app)
  .link('http://hello-zetta.herokuapp.com/')
  .listen(1337, function(){
    console.log('Zetta is running at http://beaglebone.local:1337');
  });
