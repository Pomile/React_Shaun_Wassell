import React, {useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { DangerButton } from './Button'

export const CounterButton = ({ clicksHandler, numberOfClicks }) => {
  const { name } = useParams()
  const location = useLocation()
  const someQueryParam = parse(location.search).someparam
  useEffect(()=>{
    console.log('useEffect called')
    return () => {
      console.log('unmounting')
    }
  }, [])

  return (
    <>
      <p>{name} have clicked the button {numberOfClicks} times.</p>
      <p>This is the param from the url query string: {someQueryParam}</p>
      <DangerButton onClick={clicksHandler}>Click Me!</DangerButton>
    </>
  )
}