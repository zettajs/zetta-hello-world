var zetta = require('zetta');
var LED = require('zetta-mock-led');
 
zetta()
  .use(LED)
  .listen(1337, function(){
    console.log('Zetta is running at http://beaglebone.local:1337');
  });
