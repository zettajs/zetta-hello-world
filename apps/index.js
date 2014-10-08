module.exports = function(server) {
  var waveQuery = server.where({ type: 'generator' });
  var ledQuery = server.where({ type: 'led' });
  server.observe([waveQuery, ledQuery], function(wave, led){
 
    wave.streams.wave.on('data', function(m) {
      if(m.data > 0) {
        led.call('turn-on');
      } else {
        led.call('turn-off');
      }
    });
 
  });
}
