const EventEmitter = require('events');

class Disable extends EventEmitter {
    disable(systemId) {
        this.emit('disable', { id: systemId });
    }
}

module.exports = Disable;
