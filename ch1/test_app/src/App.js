import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Greeting } from './Greeting';

function App() {
  let userName = 'Евгений'
  let numOfMessages = '5'
  return (
    <div className="App">
      <Greeting userName={userName} numOfMessages={numOfMessages}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
