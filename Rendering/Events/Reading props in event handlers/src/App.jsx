import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AlertButton({ message, children}) {
  return (
    <button onClick={() => alert(message)}>{children}</button>
  )
}

function App() {

  return (
    <>
     <AlertButton message={"Playing!"}>Play Movie</AlertButton>
     <AlertButton message={"Uploading!"}>Upload Image</AlertButton>
    </>
  )
}

export default App
