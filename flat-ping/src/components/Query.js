import React from 'react'

function Query({query, onUpdateQuery}) {

    const {name, url, id, status} = query

    function handleUpdateClick(){

        const updateStatus ={
            status: "inactive"
        }

        fetch(`http://localhost:3000/queries/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateStatus)
        })
        .then((r)=>r.json())
        .then(onUpdateQuery)
    }


    return (
        <div className="query-card-div">
           <div>{name}</div>
           <div>{url}</div>
           <div>{id}</div>
           <div>{status}</div>
           <button
           onClick={handleUpdateClick}>
               Stop Monitoring
           </button>
        </div>
    )
}

export default Query
