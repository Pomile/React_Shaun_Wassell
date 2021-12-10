import React, { useEffect } from 'react'
import { Button } from './Button'

export const CongratulationMessage = ({ numberOfClicks, threshold, onHide }) => {
  useEffect(()=>{
    return () => {
      console.log('CongratulationMessage is unmounted')
    }
  }, [])
  return numberOfClicks >= threshold
    ? 
    <>
      <h1>Congratulations! You have clicked the button {numberOfClicks} times.</h1>
      <Button onClick={onHide}>Hide</Button>
    </>
    : null
}