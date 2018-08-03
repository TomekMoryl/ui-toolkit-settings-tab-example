import React, {Component} from 'react';
import {connect} from 'react-redux';

class AppPanel extends Component {

    render() {
        return (
            <div className="tc">
                <p className="f2 lh-copy shadow-3"> Welcome {AV.User.name} </p>
                <br/>
                <p className="f6"> You can change message below in user settings</p>
                <br/>
                {this.props.userSettings.userMessage ?
                    < p style={{
                        color: this.props.userSettings.userMessageColor,
                        fontSize: this.props.userSettings.userMessageSize,
                    }}>
                        {this.props.userSettings.userMessage}
                    </p>
                    :
                    <p className="f4">Go to settings tab to change this message</p>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userSettings: state.userSettingsReducers.userSettings,
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppPanel);
