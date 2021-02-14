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

            <p className="use-case">Thousands of use cases</p>
        <div className="cases-container">
            <div className="cases-container-item">
                <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5ZYjSK9fE8tT29y57rBGLap7-XanJpJYwA&usqp=CAU" alt="vaccine"></img>
               <h2> Monitor Vaccine Availability</h2>
            </div>
            <div className="cases-container-item">
                <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflvwaORfZQ-Uf5GZ1XAXsaR5jRRfnGmdYWQ&usqp=CAU" alt="job"></img>
               <h2> Job Hunting Career page Monitoring</h2>
            </div>
            <div className="cases-container-item">
                <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMm3RyGTF7JOcWxdaaYwb6bYQqicegBKaGw&usqp=CAU" alt="quality"></img>
               <h2> Quality Assurance,affiliates,SEO </h2>
            </div>
            <div className="cases-container-item">
                <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyPKTfNpcc8sHxNa5cd2nbbtVjeM2d-Zmpw&usqp=CAU" alt="price"></img>
               <h2> Price Monitoring</h2>
            </div>
            <div className="cases-container-item">
                <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqpPb3PjCv34NBjP3lrIXS1gc7gvMkFjwag&usqp=CAU" alt="legal"></img>
               <h2> Regulation and Compliance</h2>
            </div>
        </div>
        </>
    )
}

export default Intro
