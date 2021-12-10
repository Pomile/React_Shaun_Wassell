import React from "react";
import { PeopleList } from "../PeopleList";

const people =[{
  name: 'John',
  age: 24,
  hairColor: 'Brown'
},
{
  name: 'John2',
  age: 24,
  hairColor: 'Brown2'
},
{
  name: 'John3',
  age: 24,
  hairColor: 'Brown3'
}]

export const PeopleListPage = () => {
  return (
    <>
    <h1>People List Page</h1>
    <PeopleList people={people} />
    </>
  )
}