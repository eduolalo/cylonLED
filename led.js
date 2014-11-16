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
    work: function(item) {
        every((.20).second(),
        function() {
            item.led.toggle();
        });
    }
}).start();