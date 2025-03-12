import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list = [
  {
    id: 'a',
    firstName: 'Robin',
    lastName: 'Weiruch',
    year: 1988,
  },
  {
    id: 'b',
    firstName: 'Dave',
    lastName: 'Davidds',
    year: 1990,
  },
]

const nestedList = [list, list];

const NestedList = () => (
  <ul>
    {nestedList.map((nestedList, index) => (
      <ul key={index}>
        <h4>List {index + 1}</h4>
        {nestedList.map(item => (
        <li key={item}>
          <div>{item.id}</div>
          <div>{item.firstName}</div>
          <div>{item.lastName}</div>
          <div>{item.year}</div>
        </li>
        ))}
      </ul>
    ))}
  </ul>
)

function App() {

  return (
    <>
      <NestedList />
    </>
  )
}

export default App
