import Query from './Query'
import React from 'react'

const QueryList = ({queryList, onUpdateQuery})=> {

    console.log("querylist", queryList)
    const singleQuery = queryList.map((queryObj)=>(
        <Query 
        key={queryObj.id} 
        query={queryObj} 
        onUpdateQuery = {onUpdateQuery}    
        />

    ))
        
    return (
        <div>
            {singleQuery}
        </div>
    )
}

export default QueryList
