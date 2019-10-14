import React, { Component } from 'react'
import {connect} from "react-redux"
import {createPlayer} from "../store/actions/playerCreationActions"
import "../css/playerCreation.css"

class PlayerCreation extends Component {
    state = {
        username: "",
        color: "red",
        formName: "redPlayer"
    }

    componentDidMount = () => {
        this.props.logout()
        this.props.clearResources()
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
        if (this.state.color !== "" && this.state.username !== ""){
            this.props.createPlayer(e.target.username.value, e.target.color.value)
            this.props.history.replace("/card")
        } else {
            alert("Please enter your name")
        }
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
                <button type="submit" className="submit">Create Player</button>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPlayer: (playerName, color) => dispatch(createPlayer(playerName, color)),
        logout: () => dispatch({type: "LOGOUT_PLAYER"}),
        clearResources: () => dispatch({type: "CLEAR_RESOURCES"})
    }
}

export default connect(null, mapDispatchToProps)(PlayerCreation)
