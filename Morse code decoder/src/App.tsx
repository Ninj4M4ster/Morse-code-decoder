import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
      return (
        <div id="container">
          <div id='light' className='off'></div>
          {/* <Screen /> */}
          <button id="morseButton" onMouseDown={lightOn} onMouseUp={lightOff} ></button>
        </div>
      );
  }
};

function lightOn() {
  const light = document.getElementById('light');
  if (light instanceof HTMLElement){
    light.className = 'on';};
}
function lightOff() {
  const light = document.getElementById('light');
  if (light instanceof HTMLElement){
    light.className = 'off';};
}
export default App;
