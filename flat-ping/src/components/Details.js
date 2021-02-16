import React,{ useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import './Details.css' 

function Details({alterList, queryList}) {
    const useQueryParams=() => {
        return new URLSearchParams(useLocation().search)
    }
    const queryParam = useQueryParams()
    useEffect(() => {
        setId(parseInt(queryParam.get("id")))
    }, [])

    const [id,setId] = useState()

    const query = queryList.find(item => item.id === id) || {};
    const { name, url, status } = query;

    const userAlerts = alterList.filter(alter => alter.query_id === id);

    if(userAlerts.length === 0){ 
        return(
            <div className="query-message"> No changes were recorded. We are currently{`${status==='active' ? '' : ' not'}`} actively monitoring this query. </div>)

    }

    return (
        <div>
            <div className="details-title">
                <h5 >Name: { name }</h5>
                <h5 >Url: { url }</h5>
            </div>
            {
                userAlerts.map((item,index)=>{
                    const { updated_at } = item;
                    const displayedDate = new Date(updated_at).toLocaleString();
                        
                    return(
                        <div 
                            key = {index}
                            style={{ paddingTop: '16px' }}
                        >
                            <div className="alter-list-div-items">
                                <span className="sr-only">Sorry but we can't really describe the difference However this change was </span>
                                <p> Alerted: {displayedDate} </p>
                            </div>
                            <div className="alterlist-div">
                                <div className="alter-list-div-items">
                                    <p>Before Picture</p>
                                    <img src={item.oldImagePath} alt="old pic"/>
                                </div>
                                <div className="alter-list-div-items">
                                    <p>After Picture</p>
                                    <img src={item.newImagePath} alt="new pic"/>
                                </div>
                                <div className="alter-list-div-items">
                                    <p>Picture of the differnce</p>
                                    <img src={item.diffImagePath} alt="diff pic"/>
                                </div>
                            </div>

                        </div>
                    )}
                
                )
            } 
        </div>
    )
}

export default Details
