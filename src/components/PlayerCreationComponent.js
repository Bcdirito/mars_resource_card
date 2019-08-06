import React, { Component } from 'react'
import {connect} from "react-redux"
import {createPlayer} from "../store/actions/playerCreationActions"
import "../css/playerCreation.css"

class PlayerCreation extends Component {
    state = {
        username: "",
        color: "",
        formName: "redPlayer"
    }

    handleChange = e => {
        if (e.target.name === "color") this.colorChange(e)
        else this.nameChange(e)
    }

    colorChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }, ()=>this.setState({
            formName: `${this.state.color}Player`
        }))
    }

    nameChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createPlayer(e.target.username.value, e.target.color.value)
        this.props.history.replace("/card")
    }

    enterButtonArea = e => {
        e.target.className = "hoverSubmit"
    }

    exitButtonArea = e => {
        e.target.className = "submit"
    }

    render() {
        return (
        <div className="playerCreation">
            <h2>Create Your Player</h2>
            <form onSubmit={e => this.handleSubmit(e)} className={this.state.formName}>
                <label>Name:</label>
                <br/>
                <input type="text" name="username"
                 className="username" value={this.state.username} onChange={e => this.handleChange(e)}/>
                 <br/>
                <label>Color:</label>
                <br/>
                <select name="color" className="colorSelector" value={this.state.value} onChange={e => this.handleChange(e)}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                </select>
                <br/>
                <button type="submit" className="submit" onMouseEnter={e => this.enterButtonArea(e)} onMouseLeave={e => this.exitButtonArea(e)}>Create Player</button>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPlayer: (playerName, color) => dispatch(createPlayer(playerName, color))
    }
}

export default connect(null, mapDispatchToProps)(PlayerCreation)
