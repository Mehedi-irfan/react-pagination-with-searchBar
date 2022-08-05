import React from 'react'
import { useGlobalContext } from '../Context'
import './Style.css'

export const Pagination = () => {
    const { page, nbPages, getPrevPagination, getNextPagination } = useGlobalContext();
    return (
        <>
            <div className="pagination-btn">
                <button onClick={() => getPrevPagination()}>PREV</button>
                <p>
                    {page + 1} or {nbPages}
                </p>
                <button onClick={() => getNextPagination()}>NEXT</button>
            </div>
        </>
    )
}
