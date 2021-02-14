
import React, {useEffect, useState} from 'react'
import './App.css'
import NavBar from './components/pages/NavBar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import QueryForm from './components/QueryForm'
import QueryList from './components/QueryList'
import Details from './components/Details'
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import Footer from './components/Footer'
import Intro from './components/Intro'



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

  function handleDeleteQuery(deletedQuery) {
    const updatedQueries = queryList.filter((query) => query.id !== deletedQuery.id);
    setQueryList(updatedQueries)
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
    <>
  
   <Router>
   
   
    <SkipNavLink />
    <NavBar/>
    <Switch>
      <Route path ='/QueryList' >
        <QueryList  
        queryList={queryList}
        onUpdateQuery = {handleUpdateQuery}
        onDeleteQuery = {handleDeleteQuery}
        alterList= {alterList}
        />
      </Route>

      <Route path='/Details'>
        <Details 
        alterList ={alterList}
        />
      </Route>
      
    
      <Route path ='/' >
        <SkipNavContent />
        <QueryForm onAddQuery = {handleNewQuery}/>
        <Intro/>
      </Route>
    </Switch>
   </Router>
   
   <Footer/>
     
  </>
  );
}

export default App;
