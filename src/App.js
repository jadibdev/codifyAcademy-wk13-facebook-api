import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook API Log In </h1>
        </header>
        <h1></h1>
        <Facebook />
      </div>
    );
  }
}

export default App;
