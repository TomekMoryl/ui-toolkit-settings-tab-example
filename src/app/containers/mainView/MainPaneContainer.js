/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import React from 'react';
import {connect} from 'react-redux';
import AppPanel from './AppPanel';
import makeAction from '../../redux/actions/makeAction';
import actionTypes from '../../redux/actions/actionTypes';

class PaneContainer extends React.Component {

    componentDidMount() {
        this.props.getUserSettings();
    }

    render() {
        return (
            <AppPanel/>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    getUserSettings: makeAction(actionTypes.USER_SETTINGS_GET),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PaneContainer);

