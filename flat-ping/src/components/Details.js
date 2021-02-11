import React,{ useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import './Details.css' 

function Details({alterList}) {
    const useQuery=() => {
        return new URLSearchParams(useLocation().search)
    }
    const [id,setId] = useState()
    let query = useQuery()
    useEffect(() => {
        setId(query.get("id"))
    }, [])
    
    return (
        <div>
            {
                alterList?.map((item,index)=>{
                    console.log("details.js", id, item.query_id)
                    if(parseInt(id) === parseInt(item.query_id)){

                
                    return(
                        <div className="alterlist-div"
                        key = {index}
                        >
         
                            <p>Before Picture</p>
                            <img src={item.oldImagePath} alt="old pic"/>
                            <p>After Picture</p>
                            <img src={item.newImagePath} alt="new pic"/>
                                <p>Picture of the differnce</p>
                            <img src={item.diffImagePath} alt="diff pic"/>

                        </div>
                    )}
                    else {
                        return false
                    }
                })
            }
        </div>
    )
}

export default Details
