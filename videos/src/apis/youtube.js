import axios from 'axios';

const KEY = 'AIzaSyDhMwi_P5bYrFmja4h14MjZjnEMbrfn-yk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
        
    }
});