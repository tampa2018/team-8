import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from "./components/home";
import Login from "./components/signin";
import SignUp from "./SignUp/signupview";

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path="/home" component={Home} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </div>
    );
  }
}

export default App;
