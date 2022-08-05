import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Component/Reducer";

const API = 'https://hn.algolia.com/api/v1/search?';

const initialstate = {
    isLoading: true,
    hits: [],
    query: 'HTML',
    nbPages: 0,
    page: 0
}
const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate);


    const fetchApiData = async (url) => {
        dispatch({
            type: "SET_LOADING"
        })

        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: 'GET_STORIES',
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    //remove the post
    const removePost = (post_id) => {
        dispatch({
            type: "Remove_Post",
            payload: post_id
        })
    }

    //search post
    const searchPost = (search_queary) => {
        dispatch({
            type: "SERACH_QUEARY",
            payload: search_queary
        })
    }

    //pagination
    ///Next pagination btn
    const getNextPagination = () => {
        dispatch({
            type: "GET_NEXT_PAGINATION"
        })
    }

    ///PREV pagination btn
    const getPrevPagination = () => {
        dispatch({
            type: "GET_PREV_PAGINATION"
        })
    }

    //get the data from the api and call the api function
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getNextPagination, getPrevPagination }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }