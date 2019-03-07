import React, { Component } from 'react';
import './App.css';
import InputForm from './components/inputForm';
import NavBar from './components/navBar';
import KeywordOutput from './components/keywordOutput';

class App extends Component {
  state = {
    inputFormTextarea: '',
    keywordArray: [],
    wrappedKeywords: '',
    exactChecked: true,
    phraseChecked: true,
    broadChcecked: false
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
      //Replaces commas with line breaks
      let outPut = this.state.inputFormTextarea.replace(/,/g, '\n');
      let keywordArray = this.state.keywordArray;
      //Makes string into array
      let arraryHolder = this.state.inputFormTextarea.split('\n');
      keywordArray.push(arraryHolder);
      this.setState({
        keywordArray: arraryHolder,
        wrappedKeywords: keywordArray
      });
      console.log(outPut);
    };

    const handleCheck = event => {
      const { name, checked } = event.target;
      this.setState({
        [name]: checked
      });
    };

    return (
      <div className="App">
        <NavBar />
        <InputForm
          keywords={this.state.inputFormTextarea}
          exactChecked={this.state.exactChecked}
          phraseChecked={this.state.phraseChecked}
          broadChcecked={this.state.broadChecked}
          handleChange={handleChange}
          handleClick={handleClick}
          handleCheck={handleCheck}
        />
        <KeywordOutput wrappedKeywords={this.state.wrappedKeywords} />
      </div>
    );
  }
}

export default App;
