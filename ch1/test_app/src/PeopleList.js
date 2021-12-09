import { PeopleListItem } from "./PeopleListItem"
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid black;
  padding: 20px;
`

export const PeopleList = ({ people }) => {
  return (
    <Wrapper>
      {
        people.map(person => (
            <PeopleListItem person={person} key={person.name} />
          )
        )
      }
    </Wrapper>
  )
}