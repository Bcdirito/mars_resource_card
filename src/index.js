import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"
import playerReducer from "./store/reducers/playerCreationReducer"
import resourceReducer from "./store/reducers/resourceReducer"

const rootReducer = combineReducers({player: playerReducer, resource: resourceReducer})

const store = createStore(rootReducer)

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>, 
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
