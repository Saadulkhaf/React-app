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
        streams.post('/streams', formValues);
    })
};