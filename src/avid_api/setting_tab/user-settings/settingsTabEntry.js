import appConfig from '../../../package.json';

const viewName = `${appConfig['identity']['appName']}-workflow`;

export default class settingsTabEntry {
    getLayoutConfig() {
        return {
            type: viewName,
            state: this.state,
        };
    }

    onInit({ dispatch }) {
        this.dispatch = dispatch;
        settingsTabEntry.dispatch = dispatch;
    }

    onRender(headerContentEl, views) {
        this.innerView = Object.assign({}, views[viewName]);

        this.headerContentEl = headerContentEl;
    }

    onShow() {
        console.log('[ExamplePlugin] onShow');
    }

    onClose() {
        return Promise.resolve();
    }

    onHide() {
        console.log('[ExamplePlugin] onHide');
    }

    onUnrender() {
        console.log('[ExamplePlugin] onUnrender');
    }

    onBeforeUnrender() {
        console.log('[ExamplePlugin] onBeforeUnrender');
    }

    onDestroy() {
        console.log('[ExamplePlugin] onDestroy');
    }

    setContext(context) {
        console.log('[ExamplePlugin] context', context);
    }

    get publicScope() {
        return {};
    }
}
