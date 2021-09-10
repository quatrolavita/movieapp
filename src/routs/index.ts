import Index from '../pages/Index/Index';
import MovieDetailPage from '../pages/MovieDetail/MovieDetailPage';

export const routes = [
    {
        path: '/',
        component: Index,
        exact: true,
    },
    {
        path: '/movie-detail/:id',
        component: MovieDetailPage,
    },
];
