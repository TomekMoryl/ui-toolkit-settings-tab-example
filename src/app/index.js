/**
 * Copyright 2017 by Avid Technology, Inc.
 */

const {eventEmitter} = require('../eventEmitter/EventEmitter');
import appConfig from '../package.json';


export default class ApplicationContainer {
    constructor() {
        this.inputString = this.inputString.bind(this);
        this.div = document.createElement('div');
        this.div.innerHTML = `Go to User Settings and use ${appConfig['identity']['appName']} to change this message`;
        eventEmitter.on('user-tab', (payload) => {
            this.inputString(payload);
        });
    }

    returnElement() {
        return this.div;
    }
    inputString(text) {
        this.div.innerHTML = text;
    }
}