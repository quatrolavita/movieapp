import { combineReducers } from 'redux';

//reducers
import movieReducer from './movie/reducer';

// @ts-ignore
const rootReducer = combineReducers({ movie: movieReducer });

export default rootReducer;
