import React from 'react'
import {Link} from "react-router-dom"
import "../../css/home.css"

const Home = () => (
    <div className="welcomeText">
        <h1>Welcome to your Terraforming Mars Resource Card</h1>
        <Link to="/beta" className="enterLink"><h2>Enter</h2></Link>
    </div>
)

export default Home
