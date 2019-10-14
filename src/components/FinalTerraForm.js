import React from "react"
import { Link } from "react-router-dom"
import "../css/finalTerraform.css"

const FinalTerraform = (props, logout, clearResources) => {
    const generateFinalResources = () => {
        let resourceObj = JSON.parse(localStorage.resources)
        return Object.keys(resourceObj).map(key => {
            return (<div className={localStorage.color + " resourceSpan"} key={key}>
                Total {`${key[0].toUpperCase()}${key.slice(1)}`}: {resourceObj[key]["amount"]}
            </div>)
        })
        
    }
    
    return(<div id="finalTerraformDiv" className={localStorage.color}>
        <h1>{localStorage.player}'s Final Terraform Score</h1>
        <span className={localStorage.color} id="terraRating">Terraform Rating: {localStorage.terraRating}</span>
        <br></br>
        <div className="resourceTable">
            {generateFinalResources()}
        </div>
        <Link to="/create-player"><button className="startOverButton">Start New Game</button></Link>
    </div>)
}

export default FinalTerraform