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

const ComplexList = () => (
  <ul>
    {list.map(item => (
      <li key={item}>
        <div>{item.id}</div>
        <div>{item.firstName}</div>
        <div>{item.lastName}</div>
        <div>{item.year}</div>
      </li>
    ))}
  </ul>
)


function App() {

  return (
    <>
      <ComplexList />
    </>
  )
}

export default App
