import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import ResourceCard from "./components/ResourceCard"
import PlayerCreation from "./components/PlayerCreationComponent"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => (
            <Home {...props}/>
          )}/>
          <Route exact path="/card" render={(props) => (
            <ResourceCard {...props} />
          )}/>
          <Route exact path="/create-player" render={(props) => (
            <PlayerCreation {...props} />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
