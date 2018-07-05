import UserTabSettings from './UserTabSettings';

const settingsTabConfig = {
    config: {
        index: 202,
        displayName: 'Test Tab AVID'
    },
    factory: () => {
        return new UserTabSettings();
    },
};

export default settingsTabConfig