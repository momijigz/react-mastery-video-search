import axios from 'axios';
const YOUT_KEY = '<add-your-own-api>';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: YOUT_KEY
    }
})