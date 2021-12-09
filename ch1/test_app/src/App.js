import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
// Hardcoded test data

const people =[{
  name: 'John',
  age: 24,
  hairColor: 'Brown'
},
{
  name: 'John2',
  age: 24,
  hairColor: 'Brown2'
},
{
  name: 'John3',
  age: 24,
  hairColor: 'Brown3'
}]
function App() {
  let userName = 'Евгений'
  let numOfMessages = '5'
  const handler = () => {
    alert('Clicked!')
  }
  return (
    <div className="App">
      <Greeting userName={userName} numOfMessages={numOfMessages}/>
      <PeopleList people={people} />
      <button onClick={handler}>Click me!</button>
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
