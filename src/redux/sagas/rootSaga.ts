import { all } from 'redux-saga/effects';

//sagas
import { movieListInfoWatcher } from './movieSideEffect/getMovieListInfo';
import { getMovieDetailInfoWatcher } from './movieSideEffect/getMovieDetailInfo';

export default function* rootSaga() {
    yield all([movieListInfoWatcher(), getMovieDetailInfoWatcher()]);
}
