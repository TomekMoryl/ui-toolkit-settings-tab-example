import SettingsTabEntry from './settingsTabEntry';
import WorkFlowTabEntry from '../workflow/WorkFlowTabEntry'

export default {
    config: {
        index: 206,
        displayName: 'Test Tab AVID'
    },
    factory() {
        return new WorkFlowTabEntry;
    },
};
