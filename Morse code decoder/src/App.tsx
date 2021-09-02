import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {word: ''}
  render() {
    const word = this.state['word'];
      return (
        <div id="container">
          <div id='light' className='off'></div>
          <div id="screen">{word}</div>
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
  }
};
export default App;
