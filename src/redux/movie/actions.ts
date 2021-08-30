import {
    MOVIE_DETAIL,
    MOVIE_DETAIL_REQUEST,
    MOVIE_DETAIL_REQUEST_FAIL,
    MOVIE_DETAIL_REQUEST_SUCCESS,
    MOVIE_LIST,
    MOVIE_LIST_REQUEST,
} from './types';

export function setMovieList() {
    return {
        type: MOVIE_LIST_REQUEST,
    };
}

export function movieList(payload: object[]) {
    return {
        type: MOVIE_LIST,
        payload: payload,
    };
}

export function setMovieDetail(iMDBId: string) {
    return {
        type: MOVIE_DETAIL_REQUEST,
        payload: iMDBId,
    };
}

export function setMovieDetailRequestSuccess(status: boolean) {
    return {
        type: MOVIE_DETAIL_REQUEST_SUCCESS,
        payload: status,
    };
}

export function setMovieDetailRequestFail(status: boolean) {
    return {
        type: MOVIE_DETAIL_REQUEST_FAIL,
        payload: status,
    };
}

export function movieDetail(movieDetail: object) {
    return {
        type: MOVIE_DETAIL,
        payload: movieDetail,
    };
}
