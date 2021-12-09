import React, { useState } from "react";

export const ControlledFormPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [favouriteColor, setFavouriteColor] = useState('')



  return (
    <form>
      <h3>Enter your info:</h3>
      <div>
        <input 
          type="text"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Favourite color"
          onChange={e => setFavouriteColor(e.target.value)}
          value={favouriteColor}
        />
      </div>
      <button onClick={e => {
        e.preventDefault()
        alert(`
        Your name is: ${name}\n
        Your email is: ${email}\n
        Your favourite color is: ${favouriteColor}\n
        `)
      }}>Submit</button>
    </form>
  )
}