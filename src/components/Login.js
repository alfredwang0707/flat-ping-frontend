import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css" 

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  function handleSubmit(e) {
    e.preventDefault()
    const formData = { username, password }
   
    fetch("https://flat-ping.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
      
    })
    .then((r) => r.json())
    .then((data) => {
      setCurrentUser(data.user)
      localStorage.setItem("token", data.token)
      console.log('saved token', { token: data.token })
    })
    .catch(err => {
      console.log('failed to login', err)
    })
    history.push("/Alters")

  }

  return (
    <div>
      <form className="login-form" aria-label="log in form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          placeholder="enter your username here"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="enter your password here"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login