import WorkFlowWrapper from './WorkFlowWrapper';

const workflowTabEntry = {
    config: {
        index: 205,
        displayName: 'Test Tab AVID'
    },
    factory() {
        return new WorkFlowWrapper;
    },
};

export default workflowTabEntry