import React from "react"
import { Link } from "react-router-dom"
import "../css/finalTerraform.css"

const FinalTerraform = (props, logout, clearResources) => {

    return(<div id="finalTerraformDiv" className={localStorage.color}>
        <h1>{localStorage.player}'s Final Terraform Score</h1>
        <span className={localStorage.color} id="terraRating">Terraform Rating: {localStorage.terraRating}</span>
        <br></br>
        <Link to="/create-player"><button className="startOverButton">Start New Game</button></Link>
    </div>)
}

export default FinalTerraform