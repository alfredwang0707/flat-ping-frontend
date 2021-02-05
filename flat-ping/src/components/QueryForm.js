import React, {useState} from 'react'

function QueryForm({onAddQuery}) {
    const [queryLink, setQueryLink] =useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        const formData = {
            name,
            email,
            queryLink,
            user_id: 1
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
            value ={queryLink}
            name="text" 
            className="query-input"
            onChange={(e)=> setQueryLink(e.target.value)}
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
        <button className="button-small">
         New Query
        </button>
     </form>
    )
}

export default QueryForm
