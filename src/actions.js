import { CHANGE_SEARCH_FIELD } from './constants';


export const setSearchField = (text) => {
    return {
        type : CHANGE_SEARCH_FIELD,
        payload : text
    }
}