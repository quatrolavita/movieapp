import { MOVIE_LIST, MOVIE_LIST_REQ } from './types';

export function setMovieList() {
    return {
        type: MOVIE_LIST_REQ,
    };
}

export function movieList(payload: object[]) {
    return {
        type: MOVIE_LIST,
        payload: payload,
    };
}
