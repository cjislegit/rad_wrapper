import React, { Component } from 'react';
import './App.css';
import InputForm from './components/inputForm';
import NavBar from './components/navBar';
import KeywordOutput from './components/keywordOutput';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <InputForm />
        <KeywordOutput />
      </div>
    );
  }
}

export default App;
