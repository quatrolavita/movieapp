import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

//styles
import styles from './components/PaginationComponents.module.css';

import {
    selectorCurrentPage,
    selectorPageCount,
} from '../../redux/filter/filterSelectors';
import { Arrow } from './components/Arrow';
import { setCurrentPage } from '../../redux/filter/actions';

export const Pagination = (props: any) => {
    const currentPage = useSelector(selectorCurrentPage);
    const pageCount = useSelector(selectorPageCount);
    const dispatch = useDispatch();

    const handlePageChange = (data: any) => {
        console.log('data', data);
        const selectedPage = data.selected;
        dispatch(setCurrentPage(selectedPage));
    };

    return (
        <div className={styles.paginationWrapper}>
            <ReactPaginate
                pageCount={pageCount}
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
                forcePage={currentPage}
            />
        </div>
    );
};
