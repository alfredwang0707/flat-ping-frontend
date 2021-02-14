import React from 'react'
import './Intro.css'
import image1 from "../components/IntroImages/image1.png"
import image2 from "../components/IntroImages/image2.png"
import image3 from "../components/IntroImages/image3.png"

function Intro() {
    return (
        <>
        <div className="about-us-title">
            <h1>We monitor the websites for you so you don't have to!</h1>
            <h2>Simple yet powerful change analytics</h2>
        </div>
        <div className="about-us">
            <div className="about-us-item">
                <h2>Before</h2>
                <img src={image1} alt="image1"></img>
            </div>
            <div className="about-us-item">
                <h2>After</h2>
                <img src={image2} alt="image2"></img>
            </div>
            <div className="about-us-item">
                <h2>Difference</h2>
                <img src={image3} alt="image3"></img>
            </div>
        </div>

        <div className="cases-container">
            <p>Thousands of use cases</p>
            <div className="cases-container-item">
                Monitor Vaccine Availability
            </div>
            <img src ="vaccine"></img>
        </div>
        </>
    )
}

export default Intro
