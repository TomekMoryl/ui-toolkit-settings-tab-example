import UserTabSettings from './UserTabSettings';
import appConfig from '../../package.json';


const settingsTabConfig = {
    config: {
        index: 202,
        displayName: appConfig['identity']['appName'],
    },
    factory: () => {
        return new UserTabSettings();
    },
};

export default settingsTabConfig