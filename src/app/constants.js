import appConfig from '../package';

const constants = {
    AVID_ACS_ATTRIBUTES: 'apis/avid.acs.attributes',
    REALM: 'global',
    VERSION: '3',
    FETCH_ATTRIBUTES_QUERY: 'attributes?name=',
    APP_NAME: appConfig['identity']['appName'],
    USER_SETTINGS: 'userSettings',


    USER_SETTINGS_QUERY_PARAM() {
        return `${this.APP_NAME}-${AV.User.name}-${this.USER_SETTINGS}`;
    },
    USER_SETTINGS_GET_API_URI() {
        return `/${this.AVID_ACS_ATTRIBUTES};realm=${this.REALM};version=${this.VERSION}/${this.FETCH_ATTRIBUTES_QUERY}${this.USER_SETTINGS_QUERY_PARAM()}`;
    },

    USER_SETTINGS_ADD_API_URL() {
        return `/${this.AVID_ACS_ATTRIBUTES};realm=${this.REALM};version=${this.VERSION}/attributes`;
    },
};

export default Object.freeze(constants);
