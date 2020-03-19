import { combineReducers } from 'redux';

// reducers

const songsListReducer = () => {
    return [
        {title: 'All of me', duration: '4:05'},
        {title: 'Love me like you do', duration: '3:12'},
        {title: 'Swing', duration: '2:30'},
        {title: 'Are you with me', duration: '3:20'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    console.log('asdasdasdas')
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    };

    return selectedSong;
};

export default combineReducers({
    songs: songsListReducer,
    selectedSong: selectedSongReducer
});