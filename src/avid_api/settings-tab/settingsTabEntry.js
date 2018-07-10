import UserTabSettings from './UserTabSettings';
import appConfig from '../../package.json';


const settingsTabEntry = {
    config: {
        index: 202,
        displayName: appConfig['identity']['appName'],
    },
    factory: () => {
        return new UserTabSettings();
    },
};

export default settingsTabEntry