import './App.css'
import { CounterButton } from './CounterButton'
import { CongratulationMessage } from './CongratulationsMessage'
import { useState } from 'react'

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0)
  const [hideMessage, setHideMessage] = useState(false)

  const clicksHandler = () => {
    setNumberOfClicks(numberOfClicks + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          hideMessage
          ? null
          : <CongratulationMessage numberOfClicks={numberOfClicks} threshold={10} onHide={() => {setHideMessage(true)}}/>
        }
        <CounterButton numberOfClicks={numberOfClicks} clicksHandler={clicksHandler}/>
      </header>
    </div>
  );
}

export default App;
