import React, { Component } from 'react'
import {connect} from "react-redux"
import {changeProduction, changeResources} from "../store/actions/resourceActions"
import "../css/resourceCard.css"

export default class ResourceCard extends Component {
  state = {
    username: "",
    color: ""
  }

  render() {
    return (
      <div className="resourceCard">
        <h2>{this.state.username}'s Card</h2>
      </div>
    )
  }
}
