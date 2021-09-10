import { combineReducers } from 'redux';

//reducers
import movieReducer from './movie/reducer';
import filterReducer from './filter/reducer';
import uiEffectReducer from './uiEffects/reducer';

// @ts-ignore
const rootReducer = combineReducers({
    movie: movieReducer,
    filter: filterReducer,
    uiEffect: uiEffectReducer,
});

export default rootReducer;
