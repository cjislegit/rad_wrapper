import React, { Component } from 'react';
import './App.css';
import InputForm from './components/inputForm';
import NavBar from './components/navBar';
import KeywordOutput from './components/keywordOutput';

class App extends Component {
  state = {
    inputFormTextarea: ''
  };

  render() {
    const handleChange = event => {
      const { value } = event.target;
      this.setState({
        inputFormTextarea: value
      });
    };

    return (
      <div className="App">
        <NavBar />
        <InputForm
          keywords={this.state.inputFormTextarea}
          handleChange={handleChange}
        />
        <KeywordOutput />
      </div>
    );
  }
}

export default App;
