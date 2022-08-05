import React from 'react';
import { useGlobalContext } from './Contaxt';
import './Style.css'

const Search = () => {
    const { query, searchPost } = useGlobalContext()
    return (
        <>
            <h1>Welcome ! Our Tech News</h1>
            <form >
                <input type="text"
                    placeholder='Search Here...'
                    value={query}
                    onChange={(e) => searchPost(e.target.value)}
                />
            </form>
        </>
    );
};

export default Search;