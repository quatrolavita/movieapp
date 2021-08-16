import axios from 'axios';

//config
import config from '../config';

export const api = axios.create({
    baseURL: config.API_BASE_URL,
    params: { apikey: config.API_KEY },
});
