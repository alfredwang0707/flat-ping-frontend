import React from 'react'

import {useHistory} from  'react-router-dom'


function Query({query, onUpdateQuery, alterList, }) {
    // console.log("query", alterList)
    const {name, url, id, status} = query
    const history = useHistory()
    
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

    const handleDeleteClick = (index) => {
        console.log(index)
    }
   


    return (
        <div className="query-card-div">
            
                <p>Name of the Website</p>
            
             <div className="query-items">{name}</div>
                <p>Link current monitoring</p>
           <div className="query-items">{url}</div>
                <p>Current Status of the Link</p>
           <div className="query-items">{status}</div>
           
           {/* <button className="button-medium"onClick={handleUpdateClick}>
               Stop Monitoring
           </button>
           <button className="button-medium" onClick={()=> history.push(`/Details?id=${id}`)}>
                Details
           </button> */}
           <div></div>
            <div class="details-button" onClick={handleUpdateClick}>
            Stop Monitor
            <i class="fa fa-warning"></i></div>
           
        
            <div class="details-button" onClick={()=> history.push(`/Details?id=${id}`)}>
            Details
            <i class="fa fa-question"></i></div>
            <div></div>

           <div></div>
            <div class="delete-button">
            Delete
            <i class="fa fa-times"></i></div>
            <div></div>

     
        </div>
    )
}

export default Query
