/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import '../../node_modules/cloudux-bootstrap/dist/css/cloudux.min.css';
import 'tachyons';

import rootSaga from './redux/saga/index';
import PaneContainer from './containers/mainView/MainPaneContainer';
import {store, sagaMiddleware} from './store/store';

export default class ApplicationContainer {
    constructor() {
        sagaMiddleware.run(rootSaga);
    }

    render(element) {
        ReactDOM.render(
            <Provider store={store}>
                <PaneContainer/>
            </Provider>,
            element
        );
    }
}
