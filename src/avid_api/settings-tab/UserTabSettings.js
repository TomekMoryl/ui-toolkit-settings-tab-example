const {eventEmitter} = require('../../eventEmitter/EventEmitter');


export default class UserTabSettings {
    render({domElement}) {
        let domEdit = document.createElement("div");
        let inputField = document.createElement('input');
        let button = document.createElement('button');
        let buttonText = document.createTextNode('Apply');
        let textNode = document.createTextNode('Enter new message ');
        inputField.setAttribute('id', 'inputField');
        button.addEventListener('click', function () {
            eventEmitter.trigger('user-tab', document.getElementById('inputField').value);
            console.log('tutaj ' + document.getElementById('inputField').value);
        });
        button.appendChild(buttonText);
        domEdit.appendChild(textNode);
        domEdit.appendChild(inputField);
        domEdit.appendChild(button);
        domElement.appendChild(domEdit);

        return Promise.resolve(domElement);
    }
};

