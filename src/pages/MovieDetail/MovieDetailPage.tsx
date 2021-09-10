import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//action
import { setMovieDetail } from '../../redux/movie/actions';

//helpers
import { getMovieIDFromPathname } from '../../helpers/utils';

//selector
import {
    movieDetailInfo,
    movieDetailRequestFail,
    movieDetailRequestSuccess,
} from '../../redux/movie/movieSelectors';

//container
import MovieDetailContainer from '../../containers/MovieDetailContainer/MovieDetailContainer';

export default function MovieDetailPage(props: any) {
    const { history } = props;
    const dispatch = useDispatch();

    const movieDetailContent = useSelector(movieDetailInfo);
    const detailRequestSuccess = useSelector(movieDetailRequestSuccess);
    const detailRequestFail = useSelector(movieDetailRequestFail);

    const movieID = getMovieIDFromPathname(history);

    useEffect(() => {
        dispatch(setMovieDetail(movieID));
    }, []);

    return (
        <MovieDetailContainer
            movieDetailContent={movieDetailContent}
            requestStatus={{
                success: detailRequestSuccess,
                fail: detailRequestFail,
            }}
        />
    );
}
