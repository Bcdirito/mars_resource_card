import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import ResourceCard from "./components/ResourceCard"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => (
          <Home {...props}/>
        )}/>
        <Route exact path="/card" render={(props) => (
          <ResourceCard {...props} />
        )}/>
      </Switch>
    );
  }
}

export default App;
