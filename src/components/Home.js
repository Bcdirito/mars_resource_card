import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../css/home.css"

export default class Home extends Component {

    inverseHover = (e) => {
        e.target.className = "linkHover"
    }
    
    originalHover = (e) => {
        e.target.className = ""
    }

    render() {
        return (
        <div className="welcomeText">
            <h1>
              Welcome to your Terraforming Mars Resource Card
            </h1>
            <Link to={"/card"}><h2 onMouseEnter={e => this.inverseHover(e)} onMouseLeave={e => this.originalHover(e)}>Enter</h2></Link>
        </div>
        )
    }
}
