import React from "react";
import pic2 from '../../assets/Registrationform/pic2.png'
import Section1 from '../../assets/Registrationform/Section1.png'
import pic3 from '../../assets/Registrationform/pic3.png'
import { useState } from "react";
import './rf.css';

export default function Rf3() {
    return(
    <div className="top">
        <h1>Registration Form</h1>
        <div className="page1image">
        <img  src={pic3} alt=''></img>
        </div>

        <div className="page1img">
        <img  src={Section1} alt=''></img>
        </div>

        <div className="formsection">
            <div className="fir">
                <h2><strong>Scheduling</strong></h2>
                <p>Schedule a Consultation with us</p>
            </div>

            <div>
                <h4><strong>Date:</strong></h4>
                <iframe src="https://calendar.google.com/calendar/embed?src=85f4bb1ec75e77c256ac2b25ab913e7c7f087043841cd338713433723b973407%40group.calendar.google.com&ctz=Asia%2FKarachi" ></iframe>

            </div>

        </div>    
    </div>
    )
}