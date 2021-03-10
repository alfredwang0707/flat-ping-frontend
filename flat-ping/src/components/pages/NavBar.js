import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FiMonitor} from 'react-icons/fi'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Button} from '../Button'
import './NavBar.css'
import {IconContext} from 'react-icons/lib'


function NavBar({currentUser, setCurrentUser}) {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    const [button, setButton] = useState(true)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(()=> {
        showButton()
    },[])

window.addEventListener("resize", showButton)

    function handleLogout() {
        //setuser,remove user from state 
        setCurrentUser(null);
        localStorage.removeItem("token");
    }


    return (
   <>
     <IconContext.Provider value={{ color: '#fff' }}>
    <nav className="navbar">
        <div className="navbar-container container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                <FiMonitor className="navbar-icon"/>
                Flat-Ping
            </Link> 
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/QueryList'className="nav-links" onClick={closeMobileMenu}>
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/SignUp'className="nav-links" onClick={closeMobileMenu}>
                            SignUp
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to='/profile'className="nav-links" onClick={closeMobileMenu}>
                            Profile
                        </Link>
                        
                    </li>
                    {
                        !currentUser ? (
                            <li className="nav-item">
                                <Link to='/Login'className="nav-links" onClick={closeMobileMenu}>
                                    Login
                                </Link>
                                
                            </li>
                        ) : (
                            <li className="nav-button">
                                {button ? (
                                    <Link to='/sign-up' className="button-link">
                                        <Button buttonStyle="button-outline" onClick={handleLogout}>Log Out</Button>
                                    </Link>
                                ): (
                                    <Link to='/sign-up' className="button-link">
                                        <Button 
                                        buttonStyle="button-outline"
                                        buttonSize="button-mobile"
                                        
                                        onClick={handleLogout}>
                                        Log Out
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        )
                    }

                    

              
                </ul>
        </div>
    </nav>
    </IconContext.Provider>
   </>
    )
}

export default NavBar
