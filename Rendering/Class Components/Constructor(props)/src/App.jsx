import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {counter : 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()
  {
    this.setState({
      counter: this.state.counter + 1 
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Increment Counter</button>
        <p>Counter: {this.state.counter}</p>
      </>
    )
  }
}


function App() {

  return (
    <>
      <Counter props="5"/>
    </>
  )
}

export default App
