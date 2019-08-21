import React, { Component } from 'react'
import {connect} from "react-redux"
import {changeProduction, changeResources} from "../store/actions/resourceActions"
import "../css/resourceCard.css"

class ResourceCard extends Component {
  state = {
    username: this.props.player.playerName,
    color: `${this.props.player.color}Player`,
    terraRating: this.props.player.terraRating,
    resources: this.props.resources,
  }

  componentDidMount = () => {
    if (this.state.username === "" && localStorage.player){
      this.props.reloadPlayer(localStorage)
      this.props.reloadResources(localStorage.resources)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    
    if(prevState.username !== this.props.player.playerName){
      this.setState({
        username: this.props.player.playerName,
        color: `${this.props.player.color}Player`
      })
    }

    for (const key in this.props.resources){
      if (this.props.resources[key] !== this.state.resources[key]) this.updateResources(this.props.resources)
    }
  }

  updateResources = (resources) => {
    this.setState({
      ...this.state,
      resources: resources
    })
  }

  changeProduction = (e) => {
    let resource = e.target.parentElement.attributes[1].value
    if (e.target.name === "incProd") this.props.changeProduction(resource, 1)
    else {
      if (resource !== "credits") this.decreasingResourceChecker(resource)
      else this.decreasingCreditsChecker(resource)
    }
  }

  decreasingResourceChecker = (resource) => {
    if (this.state.resources[resource]["production"] - 1 >= 0)
    this.props.changeProduction(resource, -1)
    else alert(`Can't decrease ${resource} production any further`)
  }

  decreasingCreditsChecker = (resource) => {
    if (this.state.resources[resource]["production"] - 1 >= -5) this.props.changeProduction(resource, -1)
    else alert(`Can't decrease ${resource} production any further`)
  }

  changeResources = (e) => {
    console.log(e.target.parentElement.parentElement.id)
  }

  endCurrentGame = () => {
    let answer = window.confirm("Would you like to end this game?")
    if (answer === true) this.logoutUser()
    else alert(`Keep Terraforming ${this.state.username}`)
  }

  endGeneration = () => {
    let answer = window.confirm("Has the generation ended?")
    if (answer === true) this.props.generateResources()
  }

  logoutUser = () => {
    alert(`Thank you for all that you've done ${this.state.username}`)
      this.props.logout()
      this.props.clearResources()
      this.props.history.replace("/")
  }

  renderResources = (resources) => {
    let resourceSpaces = Object.keys(resources).map(key => {
      let resourceObj = this.state.resources[key]
      let resourceName = `${key[0].toUpperCase()}${key.slice(1)}`
      return (
        <div key={key} id={key} className="resourceArea">
          <div className="production">
          <span className="resourceHeader">{resourceName} Production: {resourceObj["production"]}</span>
          <div className="changeButtons" name={key}>
            <button name="decProd" onClick={e => this.changeProduction(e)}>&darr;</button>
            <button name="incProd" onClick={e => this.changeProduction(e)}>&uarr;</button>
          </div>
          </div>
          <div className="amount">
          <span className="resourceHeader">Total {resourceName}: {resourceObj["amount"]}</span>
          <div className="changeButtons">
            <button name="decTot">&darr;</button>
            <button name="incTot">&uarr;</button>
          </div>
          </div>
        </div>
      )
    })

    return resourceSpaces
  }


  render() {
    return (
      <div id="resourceCard" className={this.state.color}>
        <div>
          <h2>{this.state.username}'s Card</h2>
          <span className={this.state.color} id="terraRating">Terraform Rating: {this.state.terraRating}</span>
          <div className="resources">
            {this.renderResources(this.state.resources)}
            <button className="generation" onClick={() => this.endGeneration()}>New Generation</button>
            <button className="quit" onClick={() => this.endCurrentGame()}>End Game</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player,
    resources: state.resources
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeProduction: (resource, amt) => dispatch(changeProduction(resource, amt)),
    changeResources: (resource, amt) => dispatch(changeResources(resource, amt)),
    reloadPlayer: (player) => dispatch({type: "MAINTAIN_PLAYER", player}),
    reloadResources: (resources) => dispatch({type: "MAINTAIN_RESOURCES", resources}),
    logout: () => dispatch({type: "LOGOUT_PLAYER"}),
    clearResources: () => dispatch({type: "CLEAR_RESOURCES"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceCard)
