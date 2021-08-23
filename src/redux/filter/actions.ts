//types
import { CURRENT_PAGE, GET_NEXT_PAGE, GET_PREV_PAGE } from './types';

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

export function getCurrentPage(currentPage: number) {
    return {
        type: CURRENT_PAGE,
        payload: currentPage,
    };
}
