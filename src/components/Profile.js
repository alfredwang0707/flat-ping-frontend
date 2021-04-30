import React, { useState } from "react"
import "./Profile.css"

function Profile({ currentUser }) {
  const [email, setEmail] = useState(currentUser.email)
  const [name, setName] = useState(currentUser.name)
  const { username, id } = currentUser

  function handleSubmit(e) {
    e.preventDefault()
    console.log(currentUser)
    // TODO: make a fetch request to edit the current user
    // then update that user in state in our App component
//    const token = localStorage.getItem("token")
    const token = localStorage.getItem("token")
    const userData ={
      email,
      name
    }
    fetch(`https://flat-ping.herokuapp.com/users/${id}`, {
      method: "PATCH",
      headers: {
         Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', 
      },
      body:JSON.stringify(userData)
    })
       .then(r=> r.json())
       
    setEmail(userData.email)
    setName(userData.name)
  }


  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <h2> Welcome Back {username}</h2>

      <label className="email">Current email</label>
      <input
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="name">Current name</label>
      <input
        type="text"
        id="name"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

    <input type="submit" value="Update" />
    </form>
  )
}

export default Profile