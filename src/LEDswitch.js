var Gpio = require('onoff').Gpio,
led = new Gpio(17,'out');

function LEDswitch(flag) {
     if(flag == "/on") {
        led.writeSync(1);
     } else if(flag == "/off") {
         led.writeSync(0);
     }
}

function LEDonabort() {
console.log("LED onabort");
	led.writeSync(0);
	led.unexport();

}

module.exports ={switch: LEDswitch,onabort:LEDonabort}; 
