
const settingsTabConfig = {
    config: {
        path: [{index: 1, id: 'group1', displayName: 'Test App AVID'}, {id: 'subgroup1', displayName: 'Sub Group 1'}],
        index: 1,
        displayName: 'User Settings 1'
    },
    factory() {
        return new UserSettings();
    },
};

export default settingsTabConfig