import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./Home"
import ResourceCard from "./ResourceCard"
import PlayerCreation from "./PlayerCreationComponent"
import ContinueGame from "./ContinueGame"
import FinalTerraform from './FinalTerraForm';
import BetaAnnouncement from "../BetaAnnouncement"

const GeneralRouter = () => {
    return (
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
            <Route exact path="/beta" render={() => (
                <BetaAnnouncement />
            )}/>
            <Route component={Home}/>
      </Switch>
    )
}

export default GeneralRouter