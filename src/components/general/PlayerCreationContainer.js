import React, { Component } from 'react'
import PlayerCreationComponent from "./PlayerCreationComponent"
import CreateCard from "./CreateCard"
import {connect} from "react-redux"
import {createPlayer} from "../../store/actions/playerCreationActions"
import {changeResources} from "../../store/actions/resourceActions"

class PlayerCreationContainer extends Component {
    state = {
        playerCreation: true,
        setupPhase: false,
        playerData: {
            username: "",
            color: "red",
            formName: "redPlayer",
            solo: false
        },
        creditData: {
            corporateCredits: 0,
            cardsBought: 0,
            startingCredits: 0
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
            playerData: {
                ...this.state.playerData,
                [e.target.name]: e.target.value,
                formName: `${e.target.value}Player`
            }
        })
    }

    handleCreditChange = (e) => {
        e.preventDefault()
        let targetName = e.target.name
        this.setState({
            ...this.state,
            creditData: {
                ...this.state.creditData,
                [e.target.name]: Number(e.target.value)
            }
        }, () => this.calculateStartingCredits(targetName))
    }

    calculateStartingCredits = (name) => {
        if (name === "corporateCredits") {
            this.setState({
                ...this.state,
                creditData: {
                    ...this.state.creditData,
                    startingCredits: this.state.creditData.corporateCredits
                }
            })
        } else {
            this.setState({
                ...this.state,
                creditData: {
                    ...this.state.creditData,
                    startingCredits: this.state.creditData.corporateCredits - (3*this.state.creditData.cardsBought)

                }
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.creditData.corporateCredits !== 0){
            this.props.createPlayer(this.state.playerData.username, this.state.playerData.color, this.state.playerData.solo)
            this.props.changeResources("credits", this.state.creditData.startingCredits)
            this.props.history.replace("/card")
        } else {
            alert("Please enter your corporations starting credits")
        }
    }

    renderCreateCard = e => {
        e.preventDefault()
        if (this.state.playerData.color !== "" && this.state.playerData.username !== "") {
            this.setState({
                ...this.state,
                playerCreation: false
            })
        } else {
            alert("Please enter your name")
        }
    }

    render() {
        return (
            <div>
                {this.state.playerCreation === true ? <PlayerCreationComponent playerData={this.state.playerData} handlePlayerCreation={(e) => this.handlePlayerCreation(e)} renderCreateCard={e => this.renderCreateCard(e)} handleColorChange={e => this.handleColorChange(e)}/> : <CreateCard handleCreditChange={(e) => this.handleCreditChange(e)} handleSubmit={(e) => this.handleSubmit(e)} creditData={this.state.creditData}/>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPlayer: (playerName, color, gameType) => dispatch(createPlayer(playerName, color, gameType)),
        changeResources: (resource, amt) => dispatch(changeResources(resource, amt)),
        logout: () => dispatch({type: "LOGOUT_PLAYER"}),
        clearResources: () => dispatch({type: "CLEAR_RESOURCES"})
    }
}

export default connect(null, mapDispatchToProps)(PlayerCreationContainer)