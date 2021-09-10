import { call, put, select, takeLatest } from 'redux-saga/effects';

//helpers
import { calculatePageCount, getCurrentYear } from '../../../helpers/utils';

//selectors
import * as filterSelector from '../../filter/filterSelectors';

//actions
import { getPopularMovies } from '../../../api/api';
import { MOVIE_LIST_REQUEST } from '../../movie/types';
import { movieList } from '../../movie/actions';
import { setPageCount } from '../../filter/actions';
import { setPageLoader } from '../../uiEffects/actions';

function* fetchMovieListInfo() {
    yield put(setPageLoader(true));
    const queryParams = {
        year: getCurrentYear(),
        // @ts-ignore
        page: yield select(filterSelector.selectorCurrentPage),
    };

    try {
        // @ts-ignore
        const response: any = yield call(getPopularMovies, queryParams);
        console.log('MOVIE LIST', response);
        yield put(movieList(response.data.movie_results));
        // @ts-ignore
        const pageCount = yield call(
            calculatePageCount,
            response.data.Total_results
        );
        yield put(setPageCount(pageCount));
        yield put(setPageLoader(false));
    } catch (e) {
        console.error(e);
    }
}

export function* movieListInfoWatcher() {
    yield takeLatest(MOVIE_LIST_REQUEST, fetchMovieListInfo);
}
