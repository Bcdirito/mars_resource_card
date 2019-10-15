import React from "react"
import {Link} from "react-router-dom"
import "../css/continueGame.css"

const ContinueGame = () => (
    <div className="continueGame">
        <h1>Continue Last Game, {localStorage["player"]}?</h1>
        <Link to="/card"><button className="gameButton" id="continueGameButton">Continue</button></Link>
        <Link to="/create-player"><button className="gameButton" id="newGame">New Game</button></Link>
    </div>
)

export default ContinueGame