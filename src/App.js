import React, { Component } from 'react';
import Header from './components/Header/Header.js'; //for linter purposes, the React should be first for convention
import './App.css';

// const Component = React.Component; **Replaced by line 1

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
