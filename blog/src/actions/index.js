import JsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await JsonPlaceHolder.get('/posts');
        
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    };
    
};

export const fetchUser = (id) => {
    return async (dispatch, getState) => {
        const response = await JsonPlaceHolder.get(`/users/${id}`);
        // console.log(response.data);

        dispatch({type: 'FETCH_USER', payload: response.data});
    };
};