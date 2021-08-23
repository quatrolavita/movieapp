import axios from 'axios';

//config
import config from '../config';

export const apiMovieList = axios.create({
    baseURL: config.API_BASE_URL,
    headers: {
        // 'x-rapidapi-host': config.X_RAPIDAPI_HOST,
        // 'x-rapidapi-key': config.X_RAPIDAPI_KEY,
    },
});
