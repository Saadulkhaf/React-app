import React from 'react';

const VideoDetails = (props) => {

    

    if(props.selectedVideo == null){
        return(
            <div>Loading</div>
        );
    }else{
        const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;
        return(
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc}/>
                </div>
                <div className="ui segment">
                    <h4>{props.selectedVideo.snippet.title}</h4>
                    <p>{props.selectedVideo.snippet.description}</p>
                </div>
                
            </div>
            );
    }
    
}

export default VideoDetails;