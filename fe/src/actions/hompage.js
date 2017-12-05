
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_SEARCH = 'SET_SEARCH'
export const RECIEVE_TYPE_LIST = 'RECIEVE_TYPE_LIST'
export const LOAD_CATEGORY = 'LOAD_CATEGORY'
export const LOAD_ITEM_MOVIE = 'LOAD_ITEM_MOVIE'
export const RECIEVE_ITEM_MOVIE = 'RECIEVE_ITEM_MOVIE'
export const RECIEVE_MOVIE_ATTACH = 'RECIEVE_MOVIE_ATTACH'

export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    }
}

export function setSearch(search) {
    return {
        type: SET_SEARCH,
        search
    }
}

export function loadCategory() {
    return {
        type: LOAD_CATEGORY
    }
}

export function recieveTypeList(list) {
    return {
        type: RECIEVE_TYPE_LIST,
        list
    }
}

export function loadItemMovie(movieId, loginStatus) {
    return {
        type: LOAD_ITEM_MOVIE,
        movieId,
        loginStatus
    }
}

export function recieveItemMovieInfo(info) {
    return {
        type: RECIEVE_ITEM_MOVIE,
        movieInfo: info
    }
}

export function recieveMovieAttach(attach) {
    return {
        type: RECIEVE_MOVIE_ATTACH,
        attach
    }
}