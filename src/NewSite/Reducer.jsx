const reduer = (state, action) => {
    switch (action.type) {
        case "Set_loading":
            return {
                ...state,
                isLoading: true
            }
        case "get_api_data":
            return {
                ...state,
                hits: action.payload.hits,
                isLoading: false,
                nbPages: action.payload.nbPages
            };
        case 'remove_post':
            return {
                ...state,
                hits: state.hits.filter((post) => post.objectID !== action.payload)
            }
        case 'search_query':
            return {
                ...state,
                query: action.payload
            };
        case 'get_next_pagination':
            let pageIncrement = state.page + 1;
            if (pageIncrement >= state.nbPages) {
                pageIncrement = 0
            }
            return {
                ...state,
                page: pageIncrement
            };
        case 'get_prev_pagination':
            let pageNumb = state.page - 1;
            if (pageNumb < 0) {
                pageNumb = 0
            }
            return {
                ...state,
                page: pageNumb
            }
    }
}
export default reduer;