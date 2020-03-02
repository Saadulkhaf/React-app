import JsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await JsonPlaceHolder.get('/posts');
        
        dispatch({type: 'FETCH_POSTS', payload: response})
        console.log(response);
    };
    
};