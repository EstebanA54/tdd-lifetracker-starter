import * as React from "react"
import "./Landing.css"

export default function Landing() {
    return (
        <nav className="landing">
           <div className="hero">
            <img src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
            alt="Fitnesswatch"/>
            <h1>Life Tracker</h1>
            <p>Helping you keep track of your daily routine</p>
            </div> 
        </nav>
    )
}
