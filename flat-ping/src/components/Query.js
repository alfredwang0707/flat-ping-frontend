import React from 'react'
import Details from './Details'
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

    // function handleDetails(){
        
    //     return(
    //         <div>
    //             <Details />
    //         </div>
    //     )
    // } 

    return (
        <div className="query-card-div">
           <div>{name}</div>
           <div>{url}</div>
           <div>{id}</div>
           <div>{status}</div>
           
           <button className="button-medium"
           onClick={handleUpdateClick}>
               Stop Monitoring
           </button>
           <button className="button-medium"
           onClick={()=> history.push(`/Details?id=${id}`)}
           >
            Details
           </button>
     
        </div>
    )
}

export default Query
