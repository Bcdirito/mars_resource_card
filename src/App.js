import React from 'react';
import './App.css';
import MobileAlert from "./components/MobileAlert"
import GeneralRouter from "./components/general/GeneralRouter"

import mobileChecker from "./utils/mobileChecker"

const App = (props) => {
  
  let device = mobileChecker(window.navigator)

  return (
    <div className="App">
      {device === "Desktop" ?  <GeneralRouter /> : <MobileAlert />}
    </div>
  )
};

export default App;
