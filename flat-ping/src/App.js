
import React, {useEffect, useState} from 'react'
import './App.css'
import NavBar from './components/pages/NavBar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import QueryForm from './components/QueryForm'
import QueryList from './components/QueryList'
import Details from './components/Details'

function App() {

  const [queryList, setQueryList] = useState([])
  const [isloaded, setIsLoaded] = useState("")
  const [alterList, setAlterList] = useState([])

  const url = "http://localhost:3000/queries/"
  useEffect(()=> {
      fetch(url)
      .then((r)=>r.json())
      .then(queryArray =>{
      setQueryList(queryArray)
      setIsLoaded(true)
      })},[])

  function handleUpdateQuery(updatedQuery) {
    const updatedQueries = queryList.map((query)=> query.id===updatedQuery.id ? updatedQuery: query)
    setQueryList(updatedQueries)
  }

  function handleNewQuery(newQuery){
    setQueryList([...queryList, newQuery])
  }

  /*   fetching initial alter table */ 
  useEffect(()=> {
      fetch("http://localhost:3000/alters/")
      .then((r)=>r.json())
      .then(alterArray =>{
      console.log("app.js",alterArray)
      setAlterList(alterArray)
      setIsLoaded(true)
      })},[])

     

  

if (!isloaded) return <h2> Loading...</h2>
// console.log("app.js", queryList)
  return ( 
   <Router>
    <NavBar/>
    <Switch>
      <Route path ='/QueryList' >
        <QueryList  
        queryList={queryList}
        onUpdateQuery = {handleUpdateQuery}
        alterList= {alterList}
        />
      </Route>

      <Route path='/Details'>
        <Details 
        alterList ={alterList}
        />
      </Route>
      
      <Route path ='/' >
        <QueryForm onAddQuery = {handleNewQuery}/>
      </Route>
    </Switch>
   </Router>
      
  
  );
}

export default App;
