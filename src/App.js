
import React, {useEffect, useState} from 'react'
import './App.css'
import NavBar from './components/pages/NavBar'
import {BrowserRouter as Router,Switch, Route,Redirect} from 'react-router-dom'
import QueryForm from './components/QueryForm'
import QueryList from './components/QueryList'
import Details from './components/Details'
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import Footer from './components/Footer'
import Intro from './components/Intro'
import SignUp from "./components/SignUp"
import Login from "./components/Login";
import Profile from './components/Profile'
//to do , show current user page etc


function App() {

  const [queryList, setQueryList] = useState([])
  const [isloaded, setIsLoaded] = useState("")
  const [alterList, setAlterList] = useState([])

  const url = "https://flat-ping.herokuapp.com/queries/"
  const [currentUser, setCurrentUser] = useState(null)


  // TODO data fetching should be moved to dashboard/details pages
  // data needs to be stored in somewhere central like redux or a hook instance
  useEffect(()=> {
      fetch(url)
      .then((r)=>r.json())
      .then(queryArray =>{
      setQueryList(queryArray)
      setIsLoaded(true)
      })},[])

  useEffect(() => {
  
    const token = localStorage.getItem("token")
    console.log('token', { token })
    if (token) {
      fetch("https://flat-ping.herokuapp.com/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
        setCurrentUser(user)
        })
    }
  }, [])
    
      console.log({ currentUser })

  function handleUpdateQuery(updatedQuery) {
    const updatedQueries = queryList.map((query)=> query.id===updatedQuery.id ? updatedQuery: query)
    setQueryList(updatedQueries)
  }

  function handleNewQuery(newQuery){
    setQueryList([...queryList, newQuery])
  }

  function handleDeleteQuery(deletedQuery) {
    const updatedQueries = queryList.filter((query) => query.id !== deletedQuery.id)
    setQueryList(updatedQueries)
  }

  /*   fetching initial alter table */ 
  useEffect(()=> {
      fetch("https://flat-ping.herokuapp.com/alters/")
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
    <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <Switch>
      <Route path ='/QueryList' >
        <QueryList  
          currentUser={currentUser} 
          setCurrentUser={setCurrentUser}
          queryList={queryList}
          onUpdateQuery = {handleUpdateQuery}
          onDeleteQuery = {handleDeleteQuery}
          alterList= {alterList}
        />
      </Route>
      <Route path="/signup">
        <SignUp 
          currentUser={currentUser} 
          setCurrentUser={setCurrentUser}
        />
      </Route>
      <Route path="/login">
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Route>
      <Route path="/profile">
            {currentUser ? (
              <Profile currentUser={currentUser} />
            ) : (
              <Redirect to="/signup" />
            )}
          </Route>
      

      <Route path='/Details'>
      
        <Details 
          alterList ={alterList}
          queryList ={queryList}
        />
      </Route>
      
    
      <Route path ='/' >
        <SkipNavContent />
        <QueryForm onAddQuery = {handleNewQuery}/>
        <Intro/>
        <Footer/>
      </Route>
    </Switch>
   </Router>
   
 
     
  </>
  )
}

export default App
