import React, { Component } from 'react';
import './App.css';
import InputForm from './components/inputForm';
import NavBar from './components/navBar';
import KeywordOutput from './components/keywordOutput';

class App extends Component {
  state = {
    inputFormTextarea: '',
    keywordArray: []
  };

  render() {
    const handleChange = event => {
      const { value } = event.target;
      this.setState({
        inputFormTextarea: value
      });
    };

    const handleClick = event => {
      event.preventDefault();
      let arraryHolder = this.state.inputFormTextarea.split('\n');
      this.setState({
        keywordArray: 'arraryHolder'
      });
      console.log(this.state.keywordArray);
    };

    return (
      <div className="App">
        <NavBar />
        <InputForm
          keywords={this.state.inputFormTextarea}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        <KeywordOutput />
      </div>
    );
  }
}

export default App;
