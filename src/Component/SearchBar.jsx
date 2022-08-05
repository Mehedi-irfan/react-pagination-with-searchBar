import React from 'react'
import { useGlobalContext } from '../Context';
import './Style.css'


const SearchBar = () => {
    const { searchPost, query } = useGlobalContext()
    return (
        <>
            <h1>Welocme To Our Tech News</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input type="text"
                        placeholder='Search here..'
                        value={query}
                        onChange={(e) => searchPost(e.target.value)}
                    />
                </div>
            </form>
        </>
    )
}

export default SearchBar