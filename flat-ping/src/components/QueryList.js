import Query from './Query'
import React from 'react'

const QueryList = ({queryList})=> {

    console.log("querylist", queryList)
    const singleQuery = queryList.map((queryObj)=>(
        <Query key={queryObj.id} query={queryObj} />

    ))
        
    return (
        <div>
            {singleQuery}
        </div>
    )
}

export default QueryList
