import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    header: {
        Authorization: 'Client-ID 5b49c4eb764d18cc9aa6ffb44d63c8ba9492b20a9fa4e17fbfc66a5b7ba40f2e'
    }
});