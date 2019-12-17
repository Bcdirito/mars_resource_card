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

    render() {
        return (
            <div>
                {this.state.playerCreation === true ? <PlayerCreationComponent /> : <CreateCard />}
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

export default connect(null, mapDispatchToProps)(PlayerCreationComponent)