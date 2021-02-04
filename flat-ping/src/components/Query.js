import React from 'react'

function Query({query}) {

    const {name, url, id, status} = query

    return (
        <div className="query-card-div">
           <div>{name}</div>
           <div>{url}</div>
           <div>{id}</div>
           <div>{status}</div>
        </div>
    )
}

export default Query
