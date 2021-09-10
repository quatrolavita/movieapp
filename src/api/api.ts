import { apiMovieDetail, apiMovieList } from './baseAPIConfig';

export async function getPopularMovies(queryParams: any) {
    try {
        return await apiMovieList.get('', {
            params: {
                type: 'get-popular-movies',
                page: queryParams.page,
                year: queryParams.year,
            },
        });
    } catch (e) {
        console.error('movieInfoError', e);
    }
}

export async function getDetailMovieInfo(iMDBId: string) {
    try {
        return await apiMovieDetail.get('', {
            params: {
                i: iMDBId,
            },
        });
    } catch (e) {
        console.error('movieDetailErrorInfo', e);
    }
}
