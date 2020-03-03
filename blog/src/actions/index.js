import _ from 'lodash';
import JsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await JsonPlaceHolder.get('/posts');
        
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    };
    
};

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await JsonPlaceHolder.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER', payload: response.data});
    }
}

// export const fetchUser = (id) => {
//     return  (dispatch, getState) => {
//         _fetchUser(id, dispatch);
//     };
// };

// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await JsonPlaceHolder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: response.data});
// });