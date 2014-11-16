var Cylon = require('cylon');

Cylon.robot({
    connection: {
        name: 'raspi',
        adaptor: 'raspi'
    },
    device: {
        name: 'led',
        driver: 'led',
        pin: 11
    },
    work: function(me) {

        function initMotor() {
            var speed = 0;
            me.led.brightness(speed);
            while(speed < 256) {
                me.led.brightness(speed);
                var i = 0;

                while(i < 100000) {
                    i++;
                }

                speed++;

            }
        }

        every((10).second(), function() {
            me.led.turnOff();
            initMotor();
        });

    }
}).start();