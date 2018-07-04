export default class UserSettings {
    render({ domElement }) {
        let testTabDom = document.createElement("p");
        testTabDom.innerHTML = 'Your first user settings tab !';
        domElement.appendChild(testTabDom);
        return Promise.resolve(domElement);
    }
};
