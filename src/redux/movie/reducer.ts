//types
import { initialStateTypes } from '../../interfaces/redux/initialStateTypes';
import { MOVIE_LIST } from './types';

const initialState: initialStateTypes = {
    pageList: [],
};

export default function movieReducer(state = initialState, action: any) {
    switch (action.type) {
        case MOVIE_LIST: {
            return { ...state, pageList: action.payload };
        }
        default:
            return state;
    }
}
