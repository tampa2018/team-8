import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import app from "./firebase";

import Home from "./components/home";
import Login from "./components/signin";
import SignUp from "./SignUp/signupview";

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render(){
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }



  //render() {
    return (
      <div>
      <Router>
        <div>
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
