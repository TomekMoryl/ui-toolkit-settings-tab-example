import UserTabSettings from './UserTabSettings';

const settingsTabEntry = {
    config: {
        index: 202,
        displayName: 'Test Tab AVID'
    },
    factory: () => {
        return new UserTabSettings();
    },
};

export default settingsTabEntry