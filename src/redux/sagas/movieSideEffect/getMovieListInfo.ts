import { call, put, select, takeLatest } from 'redux-saga/effects';

//helpers
import { getCurrentYear } from '../../../helpers/utils';

//selectors
import * as filterSelector from '../../filter/filterSelectors';

//actions
import getPopularMovies from '../../../api/api';
import { MOVIE_LIST_REQ } from '../../movie/types';
import { movieList } from '../../movie/actions';

function* fetchMovieListInfo() {
    const queryParams = {
        year: getCurrentYear(),
        // @ts-ignore
        page: yield select(filterSelector.currentPage),
    };

    try {
        // @ts-ignore
        const response: any = yield call(getPopularMovies, queryParams);
        console.log('MOVIE LIST', response);
        yield put(movieList(response.data.movie_results));
    } catch (e) {
        console.error(e);
    }
}

export function* movieListInfoWatcher() {
    yield takeLatest(MOVIE_LIST_REQ, fetchMovieListInfo);
}
