import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${ props => props.buttonColor || 'transparent'};
  border: 4px solid black;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  outline: none;
  padding: 16px;
`

export const Button = ({ children, buttonColor, ...props }) => {
  return (
    <StyledButton buttonColor={buttonColor} {...props}>{children}</StyledButton>
  )
}

export const DangerButton = ({ children, buttonColor, ...props }) => {
  return (
    <Button buttonColor={'red'} {...props}>{children}</Button>
  )
}