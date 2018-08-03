import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import 'tachyons';

import PaneContainer from '../../app/containers/settingsTabView/SettingsTabMainPaneContainer';
import {store} from '../../app/store/store';


export default class UserTabSettings {

    render({domElement}) {
        this.el = domElement;
        ReactDOM.render(
            <Provider store={store}>
                <PaneContainer/>
            </Provider>,
            domElement,
        );
    }

    destroy() {
        ReactDOM.unmountComponentAtNode(this.el);
    }
}
