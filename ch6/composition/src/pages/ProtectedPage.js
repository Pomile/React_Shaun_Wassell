import React from "react"
import { Navigate } from 'react-router-dom'

export const ProtectedPage = () => {
  const authenticated = false
  return authenticated
    ? <h1>Only authenticated users allowed!</h1>
    : <Navigate to="/"/>
}