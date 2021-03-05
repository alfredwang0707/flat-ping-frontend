import React, { useState } from "react"

function Profile({ currentUser }) {
  const [email, setEmail] = useState(currentUser.email)
  const [name, setName] = useState(currentUser.name)
  const { username } = currentUser

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: make a fetch request to edit the current user
    // then update that user in state in our App component
  }


  return (
    <form onSubmit={handleSubmit}>
      <h1>{username}'s Profile</h1>

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