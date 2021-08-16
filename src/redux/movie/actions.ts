import { MOVIE_LIST } from './types';

import getMovieByTitle from '../../api/api';

export function getDeepLinks() {
    return async () => {
        try {
            const response = await getMovieByTitle('paris');
            return {
                type: MOVIE_LIST,
                payload: response?.data,
            };
        } catch (e) {
            console.error('error', e);
        }
    };
}
