import actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    userSettings: [{
        userMessage: 'To change this message go to settings tab',
        userMessageColor: '#ffffff',
        userMessageSize: '0.5vw',
    }],
    downloadUserSettings: false,

};

const userSettingsReducers = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.USER_SETTINGS_GET_SUCCESS: {
            return {
                ...state,
                userSettings: action.payload,
                downloadUserSettings:true,
            };
        }
        case actionTypes.USER_SETTINGS_GET_FAILED: {
            return {
                ...state,
                downloadUserSettings: false,
            };
        }
        case actionTypes.USER_SETTINGS_ADD_SUCCESS: {
            return {
                ...state,
                userSettings: action.payload,
                downloadUserSettings:true,
            };
        }
        case actionTypes.USER_SETTINGS_ADD_FAILED: {
            return {
                ...state,
                downloadUserSettings: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default userSettingsReducers;
