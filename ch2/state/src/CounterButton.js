import React, {useEffect} from 'react'

export const CounterButton = ({ clicksHandler, numberOfClicks }) => {

  useEffect(()=>{
    console.log('useEffect called')
    return () => {
      console.log('unmounting')
    }
  }, [])

  return (
    <>
      <p>You have clicked the button {numberOfClicks} times.</p>
      <button onClick={clicksHandler}>Click Me!</button>
    </>
  )
}