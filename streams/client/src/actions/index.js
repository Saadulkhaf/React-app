import streams from '../apis/streams';

export const SignIn = (userId) => {
    return{
        type: 'SIGN_IN',
        payload: userId
    };
};

export const SignOut = () => {
    return{
        type: 'SIGN_OUT'
    };
};

export const createStream = (formValues) => {
    return (async(dispatch) => {
        const response =await streams.post('/streams', formValues);

        dispatch({type: 'CREATE_STREAM', payload: response.data})
    })
};