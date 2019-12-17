import React, { Component } from 'react'
import {connect} from "react-redux"
import {createPlayer} from "../../store/actions/playerCreationActions"
import "../../css/playerCreation.css"

const PlayerCreation = (props) => {
    state = {
        username: "",
        color: "red",
        formName: "redPlayer",
        solo: false
    }

    componentDidMount = () => {
        this.props.logout()
        this.props.clearResources()
    }

    colorChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }, ()=>this.setState({
            formName: `${this.state.color}Player`
        }))
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.color !== "" && this.state.username !== ""){
            this.props.createPlayer(e.target.username.value, e.target.color.value, e.target.solo.value)
            this.props.history.replace("/card")
        } else {
            alert("Please enter your name")
        }
    }

    return (
        <div className="playerCreation">
            <h2>Create Your Player</h2>
            <form onSubmit={e => this.handleSubmit(e)} className={this.state.formName}>
                <label>Name:</label>
                <br/>
                <input type="text" name="username"
                 className="username" value={this.state.username} onChange={e => this.handleChange(e)}/>
                 <br/>
                <div className="newGameSelectors">
                    <div className="selector">
                        <label>Color:</label>
                        <br/>
                            <select name="color" className="colorSelector" value={this.state.color} onChange={e => this.colorChange(e)}>
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
                        <select name="solo" className="gameSelector" value={this.state.solo} onChange={e => this.handleChange(e)}>
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

export default connect(null, mapDispatchToProps)(PlayerCreation)
