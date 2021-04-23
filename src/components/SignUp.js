import React, { useState } from "react"
import {useHistory} from "react-router-dom"
import './SignUp.css'

function SignUp({setCurrentUser}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [newName, setNewName] = useState("")
  const history = useHistory()

  const newUser = {name: newName, username, password, email}
  function handleSubmit(e) {
    e.preventDefault()
      fetch("https://flat-ping.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((data) => {
        setCurrentUser(data.newUser)
        console.log( 'signup',data.newUser)
        localStorage.setItem("token", data.token)
        console.log('saved token', {token: data.token})
      })
      history.push("/profile")
  
  }


  /*********************  JSX  ******************************/


  return (
      <>
    
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="signup-h2">Sign Up</h2>
      <h3 className="signup-h3"> you would need to log in again after register</h3>

      <label className="name">Name</label>
      <input
        aria-label="name"
        required
        type="text"
        id="name"
        autoComplete="off"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <label className="username">Username, this is your login account name</label>
      <input
        aria-label="username"
        required
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="email">Email</label>
      <input
        aria-label="email"
        required
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    


      <label className="password">Password</label>
      <input
        aria-label="password"
        required
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input type="submit" value="Signup" />
    </form>
  

  </>
  )
}

export default SignUp