//types
import {
    CURRENT_PAGE,
    GET_NEXT_PAGE,
    GET_PREV_PAGE,
    PAGE_COUNT,
} from './types';

export function getNextPage(payload: boolean) {
    return {
        type: GET_NEXT_PAGE,
        payload: payload,
    };
}

export function getPrevPage(payload: boolean) {
    return {
        type: GET_PREV_PAGE,
        payload: payload,
    };
}

export function setCurrentPage(currentPage: number) {
    return {
        type: CURRENT_PAGE,
        payload: currentPage,
    };
}

export function setPageCount(count: number) {
    return {
        type: PAGE_COUNT,
        payload: count,
    };
}
