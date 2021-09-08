import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

//styles
import styles from './components/PaginationComponents.module.css';

import { pageCount } from '../../redux/filter/filterSelectors';
import { Arrow } from './components/Arrow';
import { setCurrentPage } from '../../redux/filter/actions';

export const Pagination = (props: any) => {
    const dispatch = useDispatch();
    const pageAmount: any = useSelector(pageCount);

    const handlePageChange = (data: any) => {
        console.log('data', data);
        const selectedPage = data.selected;
        dispatch(setCurrentPage(selectedPage));
    };

    return (
        <ReactPaginate
            pageCount={pageAmount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={5}
            previousLabel={<Arrow left />}
            nextLabel={<Arrow right />}
            containerClassName={styles.pagination}
            pageClassName={styles.paginatePage}
            breakClassName={styles.paginateSplit}
            pageLinkClassName={styles.pageLink}
            breakLinkClassName={styles.breakLink}
            activeClassName={styles.active}
            onPageChange={handlePageChange}
        />
    );
};
