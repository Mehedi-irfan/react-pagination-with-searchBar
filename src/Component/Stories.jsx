import React from 'react'
import { useGlobalContext } from '../Context'
import './Style.css'

const Stories = () => {
    const { hits, nbPages, isLoading, removePost } = useGlobalContext();

    if (isLoading) {
        return (
            <h1>Loading......</h1>
        )
    }
    return (
        <>
            <div className="stories-div">
                {
                    hits.map((post) => {
                        const { title, author, url, num_comments, objectID } = post;
                        return (
                            <>
                                <div className="card" key={objectID}>
                                    <h2>{title}</h2>
                                    <p>
                                        By <span>{author}</span> | <span> {num_comments}</span> Comments
                                    </p>
                                    <div className="card-button">
                                        <a href={url} target={'_blank'}>Read More</a>
                                        <a href="#" onClick={() => removePost(objectID)}> Remove</a>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Stories