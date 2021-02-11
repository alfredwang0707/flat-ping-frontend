import React, {useState} from 'react'
import './QueryForm.css'
import emailjs from 'emailjs-com'

function QueryForm({onAddQuery}) {
    const [url, setUrl] =useState("")
    const [name, setName] = useState("") 
    const [email, setEmail] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        const emailFormValues = {
            email,
            name
        };
        emailjs.send('service_t977a4l', 'template_kygf2vn', emailFormValues, 'user_uSdC48xNgCDYxIKKNtYFr')
        .then((result) => { 
            console.log('email sent', result.text);
        }, (error) => {
            console.log('email failed to send', error.text);
        });
         
        
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
          .then((result) => {
            onAddQuery(result);
            setUrl("")
            setEmail("")
            setName("")
          })
          
      
    } 

   
    return (
        <>
        <div className="form-container">
            <form className="query-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your name here"
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
            Start Monitoring! Current Frequency is Every [1] minute
            </button>
        </form>
        </div>
        
  
   </>
 
    )
}

export default QueryForm
