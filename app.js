const Disable = require('./disable');
const disable = new Disable();

disable.on('disable', function(args) {
    console.log("HELLO " + args.id);
});

disable.disable(20);
