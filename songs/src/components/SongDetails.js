import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    console.log(props.song);
    if(!props.song){
        return <div>Please Selecet a song</div>
    }
return (<div>
        <h2>Title: {props.song.title}</h2>
        <br/>
        Duration: {props.song.duration}
        </div>)
};
const mapStateToProps = (state) => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetails);