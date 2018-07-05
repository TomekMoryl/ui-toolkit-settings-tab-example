export default class UserTabSettings {
    render({domElement}) {
        let domEdit = document.createElement("p");
        domEdit.innerHTML = 'Your first settings tab !';
        domElement.appendChild(domEdit);
        return Promise.resolve(domElement);
    }
};
