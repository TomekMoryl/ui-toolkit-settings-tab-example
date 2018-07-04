import UserSettings from './UserSettings';

const settingsTabConfig = {
    config: {
        index: 202,
        displayName: 'Test Tab AVID'
    },
    factory: () => {
        return new UserSettings();
    },
};

export default settingsTabConfig