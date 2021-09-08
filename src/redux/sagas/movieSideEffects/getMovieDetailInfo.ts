import { call, put, select, takeLatest } from 'redux-saga/effects';

//api
import { getDetailMovieInfo } from '../../../api/api';

//selectors
import * as movieSelector from './../../movie/movieSelectors';

//action, type
import { MOVIE_DETAIL_REQUEST } from '../../movie/types';
import {
    movieDetail,
    setMovieDetailRequestFail,
    setMovieDetailRequestSuccess,
} from '../../movie/actions';

function* getMovieDetailInfoWorker() {
    // @ts-ignore
    const iMDBId = yield select(movieSelector.movieId);

    try {
        // @ts-ignore
        const movieDetailInfo = yield call(getDetailMovieInfo, iMDBId);
        console.log('movieDetailInfo', movieDetailInfo);
        yield put(movieDetail(movieDetailInfo.data));
        yield put(setMovieDetailRequestSuccess(true));
    } catch (e) {
        yield put(setMovieDetailRequestFail(true));
    }
}

export function* getMovieDetailInfoWatcher() {
    yield takeLatest(MOVIE_DETAIL_REQUEST, getMovieDetailInfoWorker);
}
