var emitter = class Emitter {
    constructor() {
        this.events = {};
        this.on = function(type, listener) {
            if (this.events[type] == undefined) {
                this.events[type] = [];
            }
            this.events[type].push(listener);
        };
        this.emit = function(type) {
            this.events[type].forEach(element => {
                element();
            });
        }
    }
};


module.exports = emitter;