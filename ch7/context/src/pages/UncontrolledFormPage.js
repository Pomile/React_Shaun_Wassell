import React, { useRef } from "react";

export const UncontrolledFormPage = () => {
  const nameInput = useRef()
  const emailInput = useRef()
  const colorInput = useRef()

  return (
    <form>
      <h3>Enter your info:</h3>
      <div>
        <input 
          type="text"
          placeholder="Name"
          ref={nameInput}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          ref={emailInput}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Favourite color"
          ref={colorInput}
        />
      </div>
      <button onClick={e => {
        e.preventDefault()
        alert(`
        Your name is: ${nameInput.current.value}\n
        Your email is: ${emailInput.current.value}\n
        Your favourite color is: ${colorInput.current.value}\n
        `)
      }}>Submit</button>
    </form>
  )
}