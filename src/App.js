import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import ResourceCard from "./components/ResourceCard"
import PlayerCreation from "./components/PlayerCreationComponent"
import ContinueGame from "./components/ContinueGame"
import FinalTerraform from './components/FinalTerraForm';

const App = (props) => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={(props) => (
        <Home {...props}/>
      )}/>
      <Route exact path="/continue-game" render={(props) => (
        <ContinueGame {...props} />
      )}/>
      <Route exact path="/card" render={(props) => (
        <ResourceCard {...props} />
      )}/>
      <Route exact path="/create-player" render={(props) => (
        <PlayerCreation {...props} />
      )}/>
      <Route exact path="/endgame" render={(props) => (<FinalTerraform {...props}/>
      )}/>
      <Route component={Home}/>
    </Switch>
  </div>
);

export default App;
