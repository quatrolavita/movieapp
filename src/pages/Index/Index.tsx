import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

//container
import IndexContainer from '../../containers/IndexContainer/IndexContainer';

//action
import { setMovieList } from '../../redux/movie/actions';

//selectors
import { movieList } from '../../redux/movie/movieSelectors';
import { compose } from 'redux';

function Index(props: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMovieList());
    }, []);

    return <IndexContainer {...props} />;
}

const mapStateToProps = (state: any) => {
    return {
        movieList: movieList(state),
    };
};

export default compose(connect(mapStateToProps, null))(Index);
