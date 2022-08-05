import { createContext, useContext, useEffect, useReducer } from "react";
import reduer from "./Reducer";

const AppContext = createContext();

const API = "https://hn.algolia.com/api/v1/search?";

const AppProvider = ({ children }) => {

    const initalstate = {
        isLoading: true,
        hits: [],
        page: 0,
        nbPages: 0,
        query: 'html'
    }

    const [state, dispatch] = useReducer(reduer, initalstate)

    const getDataFromAPI = async (url) => {
        //set loading
        dispatch({
            type: "Set_loading"
        })

        try {
            const res = await fetch(url)
            const data = await res.json()
            dispatch({
                type: "get_api_data",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    //remove the post from the data
    const removePost = (remove_post) => {
        dispatch({
            type: "remove_post",
            payload: remove_post
        })
    }

    //searach the data from the api 
    const searchPost = (search_queary) => {
        dispatch({
            type: "search_query",
            payload: search_queary
        })
    }

    //pagination
    //next button pagination
    const getNextPagination = () => {
        dispatch({
            type: "get_next_pagination"
        })
    }
    //prev button pagination
    const getPrevPagination = () => {
        dispatch({
            type: "get_prev_pagination"
        })
    }

    //data from Api
    useEffect(() => {
        getDataFromAPI(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page]);

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getPrevPagination, getNextPagination }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }