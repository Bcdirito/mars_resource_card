import React from 'react'
import "../../css/playerCreation.css"

const PlayerCreationComponent = (props) => {
    console.log(props)
    return (
        <div className="playerCreation">
            <h2>Create Your Player</h2>
            <form /*onSubmit={e => this.handleSubmit(e)}*/ className={props.playerData.formName}>
                <label>Name:</label>
                <br/>
                <input type="text" name="username"
                 className="username" value={props.playerData.username} onChange={e => this.handleChange(e)}/>
                 <br/>
                <div className="newGameSelectors">
                    <div className="selector">
                        <label>Color:</label>
                        <br/>
                            <select name="color" className="colorSelector" value={props.playerData.color} onChange={e => this.colorChange(e)}>
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
                        <select name="solo" className="gameSelector" value={props.playerData.solo} onChange={e => this.handleChange(e)}>
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
