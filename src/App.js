import React from 'react';
import './App.css';
// import Home from "./components/Home"
// import ResourceCard from "./components/ResourceCard"
// import PlayerCreation from "./components/PlayerCreationComponent"
// import ContinueGame from "./components/ContinueGame"
// import FinalTerraform from './components/FinalTerraForm';
// import BetaAnnouncement from "./components/BetaAnnouncement"
import MobileAlert from "./components/MobileAlert"
import GeneralRouter from "./components/GeneralRouter"

import mobileChecker from "./utils/mobileChecker"

const App = (props) => {
  
  let device = mobileChecker(window.navigator)

  return (
    <div className="App">
      {device === "desktop" ?  <GeneralRouter /> : <MobileAlert />}
    </div>
  )
};

export default App;
