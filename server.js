var zetta = require('zetta');
var LED = require('zetta-mock-led');
var Sine = require('zetta-sine-wave');
 
zetta()
  .use(LED)
  .use(Sine)
  .listen(1337, function(){
    console.log('Zetta is running at http://beaglebone.local:1337');
  });
