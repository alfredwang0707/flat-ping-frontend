
import React, {useEffect, useState} from 'react'
import './App.css'
import NavBar from './components/pages/NavBar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import QueryForm from './components/QueryForm'
import QueryList from './components/QueryList'

function App() {

  const [queryList, setQueryList] = useState([])
  const [isloaded, setIsLoaded] = useState("")

  const url = "http://localhost:3000/queries/"
  useEffect(()=> {
      fetch(url)
      .then((r)=>r.json())
      .then(queryArray =>{
      console.log("app.js",queryArray)
      setQueryList(queryArray)
      setIsLoaded(true)
      })},[])

  const handleUpdatedQuery = qry => {
    const newQuery = [qry, ...queryList]
    setQueryList(newQuery)
  }

  

if (!isloaded) return <h2> Loading...</h2>
console.log("app.js", queryList)
  return ( 
   <Router>
    <NavBar/>
    <Switch>
      <Route path ='/QueryList' >
        <QueryList  queryList={queryList}/>
      </Route>
      
      <Route path ='/' >
        <QueryForm/>
      </Route>
    </Switch>
   </Router>
      
  
  );
}

export default App;
