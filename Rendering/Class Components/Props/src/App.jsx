import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

class Greeting extends Component{
  render(){
    return  <h1>Hello, {this.props.name}!</h1>
  }
}

function App() {

  return (
    <>
      <Greeting name="Mohsin"/>
    </>
  )
}

export default App
