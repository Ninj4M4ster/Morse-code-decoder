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

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      word: ""
    };
    this.mouseUpFn = this.mouseUpFn.bind(this);
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
  };

  mouseUpFn() {
    const light = document.getElementById('light');
    if (light instanceof HTMLElement){
      light.className = 'off';};
    this.setState({word: this.state.word + 'a'})
  };
};
export default App;
