import { combineReducers } from 'redux';

//reducers
import movieReducer from './movie/reducer';
import filterReducer from './filter/reducer';

// @ts-ignore
const rootReducer = combineReducers({
    movie: movieReducer,
    filter: filterReducer,
});

export default rootReducer;
