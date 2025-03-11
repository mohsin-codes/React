import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const myList = ['a', 'b', 'c']

const SimpleList = ({list}) => (
  <ul>
    {list.map(item => ( <li key={item}>{item}</li> ))}
  </ul>
);

function App() {

  return (
    <>
      <SimpleList list={myList}/>
    </>
  )
}

export default App
