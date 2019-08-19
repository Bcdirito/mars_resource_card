import React, { Component } from 'react'
import {connect} from "react-redux"
import {changeProduction, changeResources} from "../store/actions/resourceActions"
import "../css/resourceCard.css"



class ResourceCard extends Component {
  state = {
    username: this.props.player.playerName,
    color: `${this.props.player.color}Player`,
    resources: this.props.resources
  }

  componentDidMount = () => {
    if (this.state.username === "" && localStorage.player){
      this.props.reloadPlayer(localStorage)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.username !== this.props.player.playerName){
      this.setState({
        username: this.props.player.playerName,
        color: `${this.props.player.color}Player`
      })
    }

    this.updateResources(this.props.resources)
  }

  updateResources = (resources) => {
    console.log(resources)
  }


  inverseHover = e => {
    e.target.className = "inverseButtonArea"
  }

  originalHover = e => {
    e.target.className = "buttonArea"
  }

  renderResources = (resources) => {
    let resourceSpaces = Object.keys(resources).map(key => {
      let resourceObj = this.state.resources[key]
      let resourceName = `${key[0].toUpperCase()}${key.slice(1)}`
      return (
        <div key={key} id={key} className="resourceArea">
          <span className="resourceHeader">{resourceName} Production: {resourceObj["production"]}</span>
          <br/>
          <span className="resourceHeader">Total {resourceName}: {resourceObj["amount"]}</span>
          <div className="buttonArea">
          <button onMouseEnter={e => this.inverseHover(e)} onMouseLeave={e => this.originalHover(e)}>Update Production</button>
          <br></br>
          <button onMouseEnter={e => this.inverseHover(e)} onMouseLeave={e => this.originalHover(e)}>Update Total</button>
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
          <div className="resources">
            {this.renderResources(this.state.resources)}
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
    reloadProduction: (player) => dispatch({type: "MAINTAIN_PRODUCTION", player})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceCard)
