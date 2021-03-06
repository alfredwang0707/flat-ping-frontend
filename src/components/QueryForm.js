import React, {useState, useEffect} from 'react'
import './QueryForm.css'
import emailjs from 'emailjs-com'


function QueryForm({onAddQuery, currentUser}) {
    const [url, setUrl] =useState("")
    const [name, setName] = useState("") 
    const [email, setEmail] = useState("")

    useEffect(() => {
      if(currentUser) {
          setName(currentUser.name)
          setEmail(currentUser.email)
      }
    }, [currentUser])

    console.log(currentUser)
    const {id} = currentUser || {}
    
    const handleSubmit = event => {
        event.preventDefault()
        const emailFormValues = {
            email,
            name,
            url
        };
        // TODO welcome email template
        emailjs.send('service_3444ry9', 'template_cbmwvq4', emailFormValues, 'user_uSdC48xNgCDYxIKKNtYFr')
        .then((result) => { 
            console.log('email sent', result.text);
        }, (error) => {
            console.log('email failed to send', error.text);
        });
         
        
        const formData = {
            name,
            email,
            url,
            user_id: id,
            status: "active"
        }
        console.log({formData})
        fetch(`https://flat-ping.herokuapp.com/queries`, {
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
        
        <h1 className="intro-title">We monitor website changes for you</h1>
        <div className="form-container">
            <form className="query-form" onSubmit={handleSubmit}>
            <input
                type="text"
                aria-label="your name here"
                placeholder="Your name here"
                value={name}
                className="query-input"
                onChange={(e)=> setName(e.target.value)}
                required
            />
            <input 
                type="text" 
                aria-label="a link to monitor"
                placeholder="Add a link to monitor"
                value ={url}
                name="text" 
                className="query-input"
                onChange={(e)=> setUrl(e.target.value)}
                required
                // onChange={(e)=> console.log(e.target.value)}
            />
            <input 
                type="text" 
                aria-label="enter email for notifications"
                placeholder="email for notifications"
                value ={email}
                name="text" 
                className="query-input"
                onChange={(e)=> setEmail(e.target.value)}
                required
            
            />
            <button className="button-medium">
            Start Monitoring! Current Frequency is Every 24hrs
            </button>
        </form>
        </div>
      
        
  
   </>
 
    )
}

export default QueryForm
