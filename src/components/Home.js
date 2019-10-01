import React from 'react'
import {Link} from "react-router-dom"
import "../css/home.css"

const Home = (props) => (
    <div className="welcomeText">
        <h1>
            Welcome to your Terraforming Mars Resource Card
        </h1>
        <Link to={localStorage["color"] ? "/continue-game" : "/create-player"} className="enterLink"><h2>Enter</h2></Link>
    </div>
)

export default Home
