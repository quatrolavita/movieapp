import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//action
import { setMovieDetail } from '../../redux/movie/actions';

//helpers
import { getMovieIDFromPathname } from '../../helpers/utils';

//container
import MovieDetailContainer from '../../containers/MovieDetailContainer/MovieDetailContainer';

export default function MovieDetailPage(props: any) {
    const { history } = props;
    const dispatch = useDispatch();

    const movieID = getMovieIDFromPathname(history);

    useEffect(() => {
        dispatch(setMovieDetail(movieID));
    }, []);

    return <MovieDetailContainer />;
}
