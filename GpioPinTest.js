var Gpio = require('onoff').Gpio,
led = new Gpio(17,'out');

var iv = setInterval(function() {
	led.writeSync(led.readSync() == 0 ? 1 : 0)
}, 500);


setTimeout(function() {
	clearInterval(iv);
led.writeSync(0);
led.unexport();
},5000);


console.log("end");

