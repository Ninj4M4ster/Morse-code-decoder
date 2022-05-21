import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { TIMEOUT } from 'dns';

interface IProps {
}

interface IState {
  word?: string;
  symbols?: string;
  timer?: NodeJS.Timeout;
}

class App extends React.Component<IProps, IState> {
  alphabeth: any = {
    ".-": "A", "-...": "B", "-.-.": "C",
    "-..": "D", ".": "E", "..-.": "F",
    "--.": "G", "....": "H", "..": "I",
    ".---": "J", "-.-": "K", ".-..": "L",
    "--": "M", "-.": "N", "---": "O",
    ".--.": "P", "--.-": "Q", ".-.": "R",
    "...": "S", "-": "T", "..-": "U",
    "...-": "V", ".--": "W", "-..-": "X",
    "-.--": "Y" , "--..": "Z", ".----": "1",
    "..---": "2", "...--": "3", "....-": "4",
    ".....": "5", "-....": "6", "--...": "7",
    "---..": "8", "----.": "9", "-----": "0"
  }
  time: number = 0;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      word: "",
      symbols: "",
    };
    this.mouseUpFn = this.mouseUpFn.bind(this);
    this.mouseDownFn = this.mouseDownFn.bind(this);
    this.timeoutFn = this.timeoutFn.bind(this);
  }

  render() {
      return (
        <div id="container">
          <div id='light' className='off'></div>
          <div id="screen">{this.state.word}</div>
          <button id="clearButton" onClick={() => {this.setState({word: "", symbols: ""})}}>Clear</button>
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
    if (typeof this.state.timer != 'undefined'){
      clearTimeout(this.state.timer);
    }
  };

  mouseUpFn() {
    const light = document.getElementById('light');
    if (light instanceof HTMLElement){
      light.className = 'off';};
    const timeEnd = new Date().getTime();
    let symbolStr = this.state.symbols;
    if (typeof this.time !== "undefined"){
      const timeOfClick = timeEnd - this.time;
      if (timeOfClick <= 150){
        symbolStr += '.';
      }
      else{
        if (timeOfClick <= 1000){
          symbolStr += '-';
        }
      }
    }
    this.setState({symbols: symbolStr, timer: setTimeout(this.timeoutFn, 1200)})
  };

  timeoutFn() {
    if (typeof this.state.symbols != 'undefined'){
      console.log(typeof this.alphabeth[this.state.symbols]);
      if (typeof this.alphabeth[this.state.symbols] == 'undefined'){
        const light = document.getElementById('light');
        if (light instanceof HTMLElement){
          light.className = 'red';
          setTimeout(this.timeoutRedLight, 200);
        }
        this.setState({symbols: ''});
      }
      else{
        const value = this.state.word + this.alphabeth[this.state.symbols];
        this.setState({word: value, symbols: ''});
      }
    };
  };

  timeoutRedLight() {
    const light = document.getElementById('light');
    if (light instanceof HTMLElement){
      light.className = 'off';
    }
  }

};
export default App;
