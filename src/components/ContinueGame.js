import React from "react"
import {Link} from "react-router-dom"
import "../css/continueGame.css"

const ContinueGame = (props) => (
    <div className="continueGame">
        <h1>Continue Last Game?</h1>
        <Link to="/card"><button>Continue</button></Link>
        <Link to="/create-player"><button>New Game</button></Link>
    </div>
)

export default ContinueGame