import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Title = (props) => props.render();

function App() {

  return (
    <>
     <Title props={()=><h1>✨ First Render prop!✨</h1>}></Title>
    </>
  )
}

export default App
