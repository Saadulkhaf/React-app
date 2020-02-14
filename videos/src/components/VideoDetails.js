import React from 'react';

const VideoDetails = (props) => {
    if(props.selectedVideo == null){
        return(
            <div>Loading</div>
        );
    }else{
        return(
            <div>{props.selectedVideo.snippet.title}</div>
            );
    }
    
}

export default VideoDetails;