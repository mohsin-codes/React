import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

class NASACounter extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 10
    }
  }

  componentDidMount() {
    const myTimer = setInterval(() => {
      this.state.count > 0 ?
      this.setState({count : this.state.count - 1}) :
      clearInterval(myTimer); 
    }, 1000);
  }

  render(){
    return (
      <div>
        <h1>
        NASA Countdown: <br /> {this.state.count || "🌏"} <br/>
        {"⭐".repeat(this.state.count)||"🚀"}
        </h1>
        {this.state.count === 0 && <h2>LIFT OFF!!!</h2>}
      </div>
    )
  }
}

function App() {

  return (
    <>
      <NASACounter />
    </>
  )
}

export default App
