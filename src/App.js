import React, { Component } from 'react';
import './App.css';
import InputForm from './components/inputForm';
import NavBar from './components/navBar';
import KeywordOutput from './components/keywordOutput';

class App extends Component {
  state = {
    inputFormTextarea: '',
    keywordArray: [],
    wrappedKeywords: ''
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
      let keywordArray = this.state.keywordArray;
      let arraryHolder = this.state.inputFormTextarea.split('\n');
      keywordArray.push(arraryHolder);
      this.setState({
        keywordArray: arraryHolder,
        wrappedKeywords: keywordArray
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
        <KeywordOutput wrappedKeywords={this.state.wrappedKeywords} />
      </div>
    );
  }
}

export default App;
