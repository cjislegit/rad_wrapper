import React, { Component } from 'react';
import './App.css';
import InputForm from './components/inputForm';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <InputForm />
      </div>
    );
  }
}

export default App;
