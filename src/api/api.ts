import { apiMovieList } from './baseAPIConfig';

export default async function getPopularMovies(queryParams: any) {
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
