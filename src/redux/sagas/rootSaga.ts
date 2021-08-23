import { all } from 'redux-saga/effects';

//sagas
import { movieListInfoWatcher } from './movieSideEffect/getMovieListInfo';

export default function* rootSaga() {
    yield all([movieListInfoWatcher()]);
}
