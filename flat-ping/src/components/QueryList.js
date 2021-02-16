import Query from './Query'
import React from 'react'
import './QueryList.css'


const QueryList = ({queryList, onUpdateQuery, onDeleteQuery, alterList})=> {
    console.log("alterlist", alterList)
    // console.log("querylist", queryList)


    const singleQuery = queryList.map((queryObj, index)=>(
     
     <Query 
        
        key={queryObj.id} 
        query={queryObj} 
        onUpdateQuery = {onUpdateQuery}  
        onDeleteQuery = {onDeleteQuery}
        alterList={alterList}  
        index= {index}
        />
        
    
    ))
        
    return (
        <div className="query-container">
            {singleQuery}
        </div>
    )
}

export default QueryList
