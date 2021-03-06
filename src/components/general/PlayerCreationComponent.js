import React from 'react'
import "../../css/playerCreation.css"

const PlayerCreationComponent = (props) => {
    return (
        <div className="playerCreation">
            <h2>Create Your Player</h2>
            <form onSubmit={e => props.renderCreateCard(e)} className={props.playerData.formName}>
                <label>Name:</label>
                <br/>
                <input type="text" name="username"
                 className="username" value={props.playerData.username} onChange={e => props.handlePlayerCreation(e)}/>
                 <br/>
                <div className="newGameSelectors">
                    <div className="selector">
                        <label>Color:</label>
                        <br/>
                            <select name="color" className="colorSelector" value={props.playerData.color} onChange={e => props.handleColorChange(e)}>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="black">Black</option>
                        </select>
                    </div>
                    <div className="selector">
                        <label>Game Type:</label>
                        <br/>
                        <select name="solo" className="gameSelector" value={props.playerData.solo} onChange={e => props.handleGameStyleChange(e)}>
                            <option value="group">Group</option>
                            <option value="solo">Solo</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="submit">Create Player</button>
            </form>
        </div>
    )
}

export default PlayerCreationComponent
