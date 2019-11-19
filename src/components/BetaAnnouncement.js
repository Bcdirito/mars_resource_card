import React from "react"
import {Link} from "react-router-dom"
import "../css/beta.css"

const BetaAnnouncement = (props) => {
    return (
        <div className="announcement">
            <h2>This app is currently in beta testing stages. Currently, this is only optimized for desktop. We are continuing to work on optimizing for all platforms and all input would be greatly accepted.</h2>
            <Link to={localStorage["color"] ? "/continue-game" : "/create-player"}><h2 className="enterBeta">Enter</h2></Link>
        </div>
    )
}

export default BetaAnnouncement