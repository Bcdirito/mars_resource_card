import React, { Component } from 'react'
import {connect} from "react-redux"
import {changeProduction, changeResources, generateResources} from "../../store/actions/resourceActions"
import "../../css/resourceCard.css"

class ResourceCard extends Component {
  state = {
    username: this.props.player.playerName,
    color: `${this.props.player.color}Player`,
    terraRating: this.props.player.terraRating,
    resources: this.props.resources,
    device: localStorage.getItem("device"),
    totalField: {
      resource: "",
      direction: ""
    }
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

    if (prevState.terraRating !== this.props.player.terraRating){
      this.setState({
        ...this.state,
        terraRating: this.props.player.terraRating
      })
    }

    for (const key in this.props.resources){
      if (this.props.resources[key] !== this.state.resources[key]) {this.updateResources(this.props.resources)}
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
    e.preventDefault()
    let resource = this.state.totalField.resource
    let changeAmt = this.state.totalField.direction === "increase" ? Number(e.target.firstElementChild.value) : Number(e.target.firstElementChild.value) * -1
    if (this.state.totalField.direction === "increase") this.props.changeResources(resource, changeAmt)
    else {
      if (this.state["resources"][resource]["amount"] - 1 >= 0) this.props.changeResources(resource, changeAmt)
      else alert(`You don't have enough ${resource} to use!`)
    }

    this.resetTotalField()
  }

  resetTotalField = () => {
    this.setState({
      ...this.state,
      totalField: {
        resource: "",
        direction: ""
      }
    })
  }

  changeTerraform = (e) => {
    if (e.target.name === "incTerr") this.props.changeTerraform(1)
    else this.props.changeTerraform(-1)
  }

  endCurrentGame = () => {
    let answer = window.confirm("Would you like to end this game?")
    if (answer === true) this.logoutUser()
    else alert(`Keep Terraforming ${this.state.username}`)
  }

  endGeneration = () => {
    let answer = window.confirm("Has the generation ended?")
    if (answer === true) {
      this.newGeneration(this.state.resources, this.state.terraRating, true)
    }
  }

  newGeneration = (resources, terraRating, newCardsBool=false) => {
    let newCardsAmt = newCardsBool === true ? Number(prompt("How many cards did you buy this turn?", "0")) * 3 : 0
    let newGeneration = Object.assign(resources)
    
    for (const key in newGeneration){
      if (key === "credits") {
        newGeneration[key]["amount"] += ((Number(terraRating) + newGeneration[key]["production"]) - newCardsAmt)
      } else if (key === "energy") {
        newGeneration["heat"]["amount"] += newGeneration[key]["amount"]
        newGeneration[key]["amount"] = newGeneration[key]["production"]
      } else {
        newGeneration[key]["amount"] += newGeneration[key]["production"]
      }
    }

    this.updateResources(newGeneration)
    this.props.generateResources(newGeneration, this.state.terraRating)
  }

  logoutUser = () => {
    alert(`Thank you for all that you've done ${this.state.username}`)
    this.newGeneration(this.state.resources, this.state.terraRating)
    this.props.history.replace("/endgame")
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
            <button className={`${this.state.device}Button`} name="decProd" onClick={e => this.changeProduction(e)}>&darr;</button>
            <button className={`${this.state.device}Button`} name="incProd" onClick={e => this.changeProduction(e)}>&uarr;</button>
          </div>
          </div>
          <div className="amount">
          <span className="resourceHeader">Total {resourceName}: {resourceObj["amount"]}</span>
          <div className="changeButtons" name={key}>
            <button className={`${this.state.device}Button`} name="decTot" onClick={(e) => this.displayForm(e, key)}>&darr;</button>
            <button className={`${this.state.device}Button`} name="incTot" onClick={(e) => this.displayForm(e, key)}>&uarr;</button>
          </div>
          </div>
          {this.state.totalField.resource === key ? this.renderForm(key) : null}
        </div>
      )
    })

    return resourceSpaces
  }

  displayForm = (e, resourceName) => {
    this.setState({
      ...this.state,
      totalField: {
        resource: resourceName,
        direction: e.target.name === "incTot" ? "increase" : "decrease"
      }
    })
  }

  renderForm = () => {
    return (
      <form onSubmit={(e) => this.changeResources(e)}>
        <input type="text"></input>
        <br/>
        <button className={`${this.state.device}Button formButton`}>Update Total</button>
      </form>
    )
  }

  render() {
    return (
      <div id="resourceCard" className={this.state.color}>
        <div>
          <h2>{this.state.username}'s Card</h2>
          <span className={this.state.color} id="terraRating">Terraform Rating: {this.state.terraRating}</span>
          <div className="terraRatingButton">
            <button className={`${this.state.device}Button`} name="incTerr" onClick={(e) => this.changeTerraform(e)}>&uarr;</button>
            <button className={`${this.state.device}Button`} name="decTerr" onClick={(e) => this.changeTerraform(e)}>&darr;</button>
          </div>
          <div className="resources">
            {this.renderResources(this.state.resources)}
            <div className="underResourceButtons">
              <button className={`${this.state.device}Button generation`} onClick={() => this.endGeneration()}>New Generation</button>
              <button className={`${this.state.device}Button quit`} onClick={() => this.endCurrentGame()}>End Game</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player,
    resources: state.resources,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeProduction: (resource, amt) => dispatch(changeProduction(resource, amt)),
    changeResources: (resource, amt) => dispatch(changeResources(resource, amt)),
    changeTerraform: (amt) => dispatch({type: "CHANGE_TERRAFORM", amt}),
    generateResources: (resources, rating) => dispatch(generateResources(resources, rating)),
    reloadPlayer: (player) => dispatch({type: "MAINTAIN_PLAYER", player}),
    reloadResources: (resources) => dispatch({type: "MAINTAIN_RESOURCES", resources})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceCard)