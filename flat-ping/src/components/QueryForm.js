import React, {useState} from 'react'
import './QueryForm.css'

function QueryForm({onAddQuery}) {
    const [url, setUrl] =useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        const formData = {
            name,
            email,
            url,
            user_id: 1,
            status: "active"
        }
        console.log({formData})
      fetch(`http://localhost:3000/queries`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
          .then(r => r.json())
          .then(onAddQuery)
          setUrl("")
          setEmail("")
          setName("")
      
    } 

   
    return (
     <form className="query-form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="add a name here"
            value={name}
            className="query-input"
            onChange={(e)=> setName(e.target.value)}
        />
        <input 
            type="text" 
            placeholder="Add a link to monitor"
            value ={url}
            name="text" 
            className="query-input"
            onChange={(e)=> setUrl(e.target.value)}
            // onChange={(e)=> console.log(e.target.value)}
        />
        <input 
            type="text" 
            placeholder="email for notifications"
            value ={email}
            name="text" 
            className="query-input"
            onChange={(e)=> setEmail(e.target.value)}
           
        />
        <button className="button-medium">
         New Query
        </button>
     </form>
    )
}

export default QueryForm
