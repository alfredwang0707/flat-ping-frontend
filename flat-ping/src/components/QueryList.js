
import Query from './Query'
import React, {useState, useEffect} from 'react'

function QueryList() {
    const [queryList, setQueryList] = useState([])

    const url = "http://localhost:3000/queries/"
    useEffect(()=> {
        fetch(url)
        .then((r)=>r.json())
        .then((queryLists) =>
        setQueryList(queryList))
    },[queryList])

    const query = queryList.map((queryObj)=>(
        <Query key={queryObj.id} query={queryObj} />

    ))
        
    return (
        <div>
            <Query value ={query}/>
        </div>
    )
}

export default QueryList
