import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedList = props.videos.map(video => {
        return <VideoItem />
    })
    return(
    <div>{renderedList}</div>
    );
}

export default VideoList;