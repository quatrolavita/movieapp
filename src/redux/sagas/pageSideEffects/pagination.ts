import { put, takeLatest } from 'redux-saga/effects';
import { setMovieList } from '../../movie/actions';
import { CURRENT_PAGE } from '../../filter/types';

function* changePageWorker() {
    yield put(setMovieList());
}

export function* changePageWatcher() {
    yield takeLatest(CURRENT_PAGE, changePageWorker);
}
