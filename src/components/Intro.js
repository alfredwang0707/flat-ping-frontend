import React from 'react'
import './Intro.css'
import image1 from "../components/IntroImages/image1.png"
import image2 from "../components/IntroImages/image2.png"
import image3 from "../components/IntroImages/image3.png"

function Intro() {
    return (
        <>
        <div className="about-us-title">
           
            
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

        <p className="use-case">Thousands of use cases</p>
        <div className="cases-container">
            <div className="circle">
            <div className="cases-container-item">
                <img src ="https://static.thenounproject.com/png/3484777-200.png" alt="vaccine"></img>
               <h2> Monitor Vaccine Availability</h2>
            </div>
            </div>
            <div className="circle">
            <div className="cases-container-item">
                <img src ="https://image.flaticon.com/icons/png/512/942/942818.png" alt="job"></img>
               <h2> Job Hunting, Career Page Monitoring</h2>
            </div>
            </div>
            <div className="circle">
            <div className="cases-container-item">
                 <img src ="https://static.thenounproject.com/png/3324388-200.png" alt="job"></img>
                <h2> Quality Assurance, Affiliates, SEO </h2>
            </div>
            </div>
            <div className="circle">
            <div className="cases-container-item">
                <img src ="https://static.thenounproject.com/png/2764070-200.png" alt="price"></img>
               <h2> Price Monitoring</h2>
            </div>
            </div>
            <div className="circle">
            <div className="cases-container-item">
                <img src ="https://static.thenounproject.com/png/3115583-200.png" alt="legal"></img>
               <h2> Regulation & Compliance</h2>
            </div>
            </div>
        </div>
        </>
    )
}

export default Intro