import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component{

    state = {videos: [], selectedVideo: null};

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        })
        this.setState({videos: response.data.items});
        // console.log(term);
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
        // console.log("From the App", video);
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoDetails selectedVideo={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>  
        );
    }
}

export default App;