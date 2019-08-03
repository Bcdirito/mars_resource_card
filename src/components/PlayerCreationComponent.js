import React, { Component } from 'react'
import {connect} from "react-redux"
import {createPlayer} from "../store/actions/playerCreationActions"

class PlayerCreation extends Component {
    state = {
        username: "",
        color: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createPlayer(e.target.username.value, e.target.color.value)
    }

    render() {
        return (
        <div className="playerCreation">
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>Name:</label>
                <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)}/>
                <label>Color:</label>
                <select name="color" value={this.state.value} onChange={e => this.handleChange(e)}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                </select>
                <input type="submit" value="Create Player" />
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPlayer: (playerName, color) => dispatch({type: "CREATE_PLAYER", playerName, color})
    }
}

export default connect(null, mapDispatchToProps)(PlayerCreation)
