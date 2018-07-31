import React, {Component} from 'react';
import {connect} from 'react-redux';

import CustomMessage from '../../../app/components/settingsTabView/CustomMessage';
import ChangeColor from '../../../app/components/settingsTabView/ChangeColor';
import ChangeFontSize from '../../../app/components/settingsTabView/ChangeFontSize';
import makeAction from '../../redux/actions/makeAction';
import actionTypes from '../../redux/actions/actionTypes';

class AppPanel extends Component {

    render() {
        return (
            <div>
                <p className="f5 tc lh-copy shadow-2"> Welcome in settings tab {AV.User.name}</p>
                <br/>
                <CustomMessage changeSettings={this.props.changeUserSettings} userSettings={this.props.userSettings}/>
                <ChangeColor changeSettings={this.props.changeUserSettings} userSettings={this.props.userSettings}/>
                <ChangeFontSize changeSettings={this.props.changeUserSettings} userSettings={this.props.userSettings}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userSettings: state.userSettingsReducers.userSettings,
});

const mapDispatchToProps = {
    changeUserSettings: makeAction(actionTypes.USER_SETTINGS_ADD),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppPanel);
