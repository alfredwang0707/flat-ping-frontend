import React, { useState } from "react"
function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

  }

  return (
      <>
    
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label className="name">Name</label>
      <input
        type="text"
        id="name"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="username">Username, this is your login account name</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="email">Email</label>
      <input
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    


      <label className="password">Password</label>
      <input
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