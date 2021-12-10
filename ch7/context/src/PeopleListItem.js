import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"



export const PeopleListItem = ({ person }) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className='list-item-container'
      style={{
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color:  theme === 'dark' ? 'white' : 'black',
      }}
    >
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
      <p>Hair color: {person.hairColor}</p>
    </div>
  )
}