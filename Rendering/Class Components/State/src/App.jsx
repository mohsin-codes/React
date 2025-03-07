import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

class Counter extends Component{
  state={
    age:42,
  };

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1
    });
  }

  render(){
    return (
      <>
        <button onClick={this.handleAgeChange}>Increment Age</button>
        <p>You are {this.state.age}.</p>
      </>
    )
  }
}

function App() {

  return (
    <>
      <Counter />
    </>
  )
}

export default App
