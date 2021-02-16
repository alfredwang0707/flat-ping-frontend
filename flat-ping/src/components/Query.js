import React from 'react'

import {useHistory} from  'react-router-dom'


function Query({query, onUpdateQuery, onDeleteQuery, alterList, }) {
    // console.log("query", alterList)
    const {name, url, id, status} = query
    const history = useHistory()
    
    function handleUpdateClick(){
        const newStatus = status === "active" ? "inactive" : "active";
        const updateStatus ={
            status: newStatus
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

    const handleDeleteClick = () => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            fetch(`http://localhost:3000/queries/${id}`,{
                method: "DELETE",
            })
            // Promise.resolve()
            .then(() => {
                console.log(query)
                onDeleteQuery(query);
            })
        } // do nothing if no
    }
   


    return (
        <div className="query-card-div">
            <p>Name: {name}</p>
            <p>Url: {url}</p>
            <p>Monitor Status: {status}</p>
            
            <div style={{ paddingTop: '15px' }}>
                <div class="details-button" onClick={handleUpdateClick}>
                    { status === 'active' ? 'Stop' : 'Start' } Monitor
                    <i class="fa fa-warning"></i>
                </div>          
                <div class="details-button" onClick={()=> history.push(`/Details?id=${id}`)}>
                    Details
                    <i class="fa fa-question"></i>
                </div>
                <div class="delete-button" onClick={handleDeleteClick}>
                    Delete
                    <i class="fa fa-times"></i>
                </div>
            </div>
    

     
        </div>
    )
}

export default Query
