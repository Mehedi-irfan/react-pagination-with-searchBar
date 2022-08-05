const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING0':
            return {
                ...state,
                isLoading: true
            };
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            };
        case "Remove_Post":
            return {
                ...state,
                hits: state.hits.filter((post) => post.objectID !== action.payload)
            };
        case "SERACH_QUEARY":
            return {
                ...state,
                query: action.payload
            };
        case "GET_NEXT_PAGINATION":
            let pageIncrement = state.page + 1;
            if (pageIncrement >= state.nbPages) {
                pageIncrement = 0;
            }
            return {
                ...state,
                page: pageIncrement
            };
        case "GET_PREV_PAGINATION":
            let pageNum = state.page - 1;
            if (pageNum <= 0) {
                pageNum = 0;
            }
            return {
                ...state,
                page: pageNum
            }
    }
    return state;
}
export default reducer;