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
        var times = 0;
        me.led.turnOff();
        function initMotor() {
            var speed = 0;
            me.led.brightness(speed);
            while(speed < 256) {
                me.led.brightness(speed);
                var i = 0;
                while(i < 10000) {
                    i++;
                }
                speed++;
            }
        }

        var motorInterval = setInterval(function() {
            console.log('Time: ',times);
            if (times === 3) {
                clearInterval(motorInterval);
                me.led.turnOff();
            } else {
                initMotor();
                times++;
            }
        }, (10).seconds());

    }
}).start();