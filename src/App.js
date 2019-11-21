import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import ResourceCard from "./components/ResourceCard"
import PlayerCreation from "./components/PlayerCreationComponent"
import ContinueGame from "./components/ContinueGame"
import FinalTerraform from './components/FinalTerraForm';
import BetaAnnouncement from "./components/BetaAnnouncement"
import OrientationAlert from "./components/OrientationAlert"

const App = (props) => (
  <div className="App">
    {window.innerWidth < 568 ? <OrientationAlert /> : <Switch>
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
      <Route exact path="/beta" render={() => (
        <BetaAnnouncement />
      )}/>
      <Route component={Home}/>
    </Switch>}
  </div>
);

export default App;
