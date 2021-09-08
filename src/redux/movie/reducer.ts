//types
import { initialStateTypes } from '../../interfaces/redux/initialStateTypes';
import {
    MOVIE_DETAIL,
    MOVIE_DETAIL_REQUEST,
    MOVIE_DETAIL_REQUEST_FAIL,
    MOVIE_DETAIL_REQUEST_SUCCESS,
    MOVIE_LIST,
    MOVIE_LIST_REQUEST,
} from './types';

const initialState: initialStateTypes = {
    movieList: [],
    movieDetail: {},
    movieId: '',
    movieDetailRequestSuccess: false,
    movieDetailRequestFail: false,
};

export default function movieReducer(state = initialState, action: any) {
    switch (action.type) {
        case MOVIE_LIST_REQUEST: {
            return { ...state };
        }
        case MOVIE_LIST: {
            return { ...state, movieList: action.payload };
        }
        case MOVIE_DETAIL_REQUEST: {
            return { ...state, movieId: action.payload };
        }
        case MOVIE_DETAIL: {
            return { ...state, movieDetail: action.payload };
        }
        case MOVIE_DETAIL_REQUEST_SUCCESS: {
            return { ...state, movieDetailRequestSuccess: action.payload };
        }
        case MOVIE_DETAIL_REQUEST_FAIL: {
            return { ...state, movieDetailRequestFail: action.payload };
        }

        default:
            return state;
    }
}
