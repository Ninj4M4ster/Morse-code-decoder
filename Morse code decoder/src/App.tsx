import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

interface IProps {
}

interface IState {
  word?: string;
}

class App extends React.Component<IProps, IState> {
  alphabeth = {
    "A" : ".-", "B": "-...", "C": "-.-.",
    "D" : "-..", "E": ".", "F": "..-.",
    "G": "--.", "H": "....", "I": "..",
    "J": ".---", "K": "-.-", "L": ".-..",
    "M": "--", "N": "-.", "O": "---",
    "P": ".--.", "Q": "--.-", "R": ".-.",
    "S": "...", "T": "-", "U": "..-",
    "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--..", "1": ".----",
    "2": "..---", "3": "...--", "4": "....-",
    "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----.", "0": "-----"
  }
  time: number = 0;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      word: ""
    };
    this.mouseUpFn = this.mouseUpFn.bind(this);
    this.mouseDownFn = this.mouseDownFn.bind(this);
  }

  render() {
      return (
        <div id="container">
          <div id='light' className='off'></div>
          <div id="screen">{this.state.word}</div>
          <button id="clearButton" onClick={() => {this.setState({word: ""})}}>Clear</button>
          <button id="morseButton" 
          onMouseDown={this.mouseDownFn} 
          onMouseUp={this.mouseUpFn}></button>
        </div>
      );
  };

  mouseDownFn() {
    const light = document.getElementById('light');
    if (light instanceof HTMLElement){
      light.className = 'on';};
    this.time = new Date().getTime();
  };

  mouseUpFn() {
    const light = document.getElementById('light');
    if (light instanceof HTMLElement){
      light.className = 'off';};
    this.setState({word: this.state.word + 'a'});
    const timeEnd = new Date().getTime();
    if (typeof this.time !== "undefined"){
      const timeOfClick = timeEnd - this.time;
      if (timeOfClick <= 100){
        console.log('short');
      }
      else{
        if (timeOfClick <= 1000){
          console.log('long');
        }
      }
    }
  };
};
export default App;
