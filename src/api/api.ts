import { api } from './baseAPIConfig';

export default async function getMovieByTitle(title: string) {
    try {
        const movieInfo = await api.get('', { params: { t: title } });
        return movieInfo;
    } catch (e) {
        console.error('movieInfoError', e);
    }
}
