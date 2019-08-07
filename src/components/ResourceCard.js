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
      this.props.reloadProduction(localStorage)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.username === ""){
      this.setState({
        username: this.props.player.playerName,
        color: `${this.props.player.color}Player`
      }, () => console.log(this.state))
    }
  }


  render() {
    console.log(this.state.resources)
    return (
      <div id="resourceCard" className={this.state.color}>
        <div>
          <h2>{this.state.username}'s Card</h2>
          <div className="resources">
            <div id="credits" className="resourceArea">
              <span className="resourceHeader">Credits Production: {this.state.resources.credits.production}</span>
              <br></br>
              <span className="resourceHeader">Total Credits: {this.state.resources.credits.amount}</span>
            </div>
            <div id="steel" className="resourceArea">
              <span className="resourceHeader">Steel Production: {this.state.resources.steel.production}</span>
                <br></br>
                <span className="resourceHeader">Total Steel: {this.state.resources.steel.amount}</span>
            </div>
            <div id="titanium" className="resourceArea">
            <span className="resourceHeader">Titanium Production:</span>
                <br></br>
                <span className="resourceHeader">Total Titanium:</span>
            </div>
            <div id="plants" className="resourceArea">
            <span className="resourceHeader">Plant Production:</span>
                <br></br>
                <span className="resourceHeader">Total Plant:</span>
            </div>
            <div id="energy" className="resourceArea">
              <span className="resourceHeader">Energy Production:</span>
              <br></br>
              <span className="resourceHeader">Total Energy:</span>
            </div>
            <div id="heat" className="resourceArea">
            <span className="resourceHeader">Heat Production:</span>
              <br></br>
              <span className="resourceHeader">Total Heat:</span>
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
