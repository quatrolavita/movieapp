import { all } from 'redux-saga/effects';

//sagas
import { movieListInfoWatcher } from './movieSideEffects/getMovieListInfo';
import { getMovieDetailInfoWatcher } from './movieSideEffects/getMovieDetailInfo';
import { changePageWatcher } from './pageSideEffects/pagination';

export default function* rootSaga() {
    yield all([
        movieListInfoWatcher(),
        getMovieDetailInfoWatcher(),
        changePageWatcher(),
    ]);
}
