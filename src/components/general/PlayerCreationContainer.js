import React, { Component } from 'react'
import PlayerCreationComponent from "./PlayerCreationComponent"
import CreateCard from "./CreateCard"
import {connect} from "react-redux"
import {createPlayer} from "../../store/actions/playerCreationActions"

class PlayerCreationContainer extends Component {
    state = {
        playerCreation: true,
        setupPhase: false,
        playerData: {
            username: "",
            color: "red",
            formName: "redPlayer",
            solo: false
        }
    }

    componentDidMount = () => {
        this.props.logout()
        this.props.clearResources()
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handlePlayerCreation = (e) => {
        this.setState({
            ...this.state,
            playerData: {
                ...this.state.playerData,
                [e.target.name]: e.target.value
            }
        })
    }

    handleColorChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }, ()=>this.setState({
            formName: `${this.state.color}Player`
        }))
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

    render() {
        return (
            <div>
                {this.state.playerCreation === true ? <PlayerCreationComponent playerData={this.state.playerData} handlePlayerCreation={(e) => this.handlePlayerCreation(e)}/> : <CreateCard handleSubmit={(e) => this.handleSubmit(e)}/>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPlayer: (playerName, color, gameType) => dispatch(createPlayer(playerName, color, gameType)),
        logout: () => dispatch({type: "LOGOUT_PLAYER"}),
        clearResources: () => dispatch({type: "CLEAR_RESOURCES"})
    }
}

export default connect(null, mapDispatchToProps)(PlayerCreationContainer)