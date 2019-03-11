import React, { Component } from 'react';
import './App.css';
import InputForm from './components/inputForm';
import NavBar from './components/navBar';
import KeywordOutput from './components/keywordOutput';

class App extends Component {
  state = {
    inputFormTextarea: '',
    wrappedKeywords: '',
    exactChecked: true,
    phraseChecked: true,
    broadChecked: false,
    broadModifiedChecked: false
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
      let outPut = newOutPut(this.state.inputFormTextarea);
      this.setState({
        wrappedKeywords: outPut
      });
    };

    const newOutPut = s => {
      let finalArray = [];
      let newArray = s
        .replace(/,/g, '')
        .replace(/\n/g, '+')
        .split('+');
      if (this.state.exactChecked) {
        newArray.forEach(element => {
          finalArray.push('[' + element + ']');
        });
      }
      if (this.state.phraseChecked) {
        newArray.forEach(element => {
          finalArray.push('"' + element + '"');
        });
      }
      if (this.state.broadModifiedChecked) {
        newArray.forEach(element => {
          //Break element into array
          let newElement = element.split(' ');
          //Add + to each array element
          newElement.forEach((e, index, array) => {
            array[index] = '+' + e;
          });

          //Turn element back into string
          newElement = newElement.toString().replace(/,/, ' ');
          finalArray.push(newElement);
        });
      }
      if (this.state.broadChecked) {
        newArray.forEach(element => {
          finalArray.push(element);
        });
      }
      return finalArray.toString().replace(/,/g, '\n');
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
