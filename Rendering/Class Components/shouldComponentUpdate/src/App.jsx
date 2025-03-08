import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

class ShowWholeNumber extends Component{
  constructor(props){
    super(props)
    this.state = {
      num: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return Math.round(nextProps.num) === Math.round(this.props.num);
  }

  render() {
    return (
      <div>
        The whole number is: {Math.round(this.props.num)} 
      </div>
    )
  }
}


function App() {

  return (
    <>
      <ShowWholeNumber num = "2" />
    </>
  )
}

export default App
