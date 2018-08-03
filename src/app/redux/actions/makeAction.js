export const makeAction = (type) => {
    return (payload) => ({
        type,
        payload,
    });
};

export default makeAction;
