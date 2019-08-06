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
    if (localStorage.color && localStorage.player){
      this.setState({
        ...this.state,
        username: localStorage.player,
        color: `${localStorage.color}Player`
      })
    }
  }

  componentDidUpdate = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div id="resourceCard" className={this.state.color}>
        <div>
          <h2>{this.state.username}'s Card</h2>
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
    changeResources: (resource, amt) => dispatch(changeResources(resource, amt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceCard)
