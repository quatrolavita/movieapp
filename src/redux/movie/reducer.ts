//types
import { initialStateTypes } from '../../interfaces/redux/initialStateTypes';
import { MOVIE_LIST, MOVIE_LIST_REQ } from './types';

const initialState: initialStateTypes = {
    movieList: [],
};

export default function movieReducer(state = initialState, action: any) {
    switch (action.type) {
        case MOVIE_LIST_REQ: {
            return { ...state };
        }
        case MOVIE_LIST: {
            return { ...state, movieList: action.payload };
        }
        default:
            return state;
    }
}
