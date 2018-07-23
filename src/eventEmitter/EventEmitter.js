class EventEmitter {
    constructor() {
        if (!EventEmitter.instance) {
            this.events = [];
            EventEmitter.instance = this;
        }
        return EventEmitter.instance;
    }

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    trigger(eventName, ...rest) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback =>
                callback.apply(null, rest)
            );
        }
    }
}

const eventEmitter = new EventEmitter();
Object.freeze(eventEmitter);

module.exports = {eventEmitter};