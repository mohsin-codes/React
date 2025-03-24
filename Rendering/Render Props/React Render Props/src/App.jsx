import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'


class MouseTracker extends Component{
  state = {x:0, y:0};

  handleMouseMove= (event) => {
    this.setState({x: event.clientX, y: event.clientY});
  };

  render(){
    return (
      <div onMouseMove={this.handleMouseMove} style={{height: "200px", border: "1px solid black"}}>
      {this.props.render(this.state)}
      </div>
    )
  }
}


function App() {

  return (
      <MouseTracker render={({x, y}) => (
        <p style={{background: 'red', color: 'white', fontSize: '20px'}}>Mouse Position : {x}, {y}</p>
      )  
    }/>
  )
}

export default App
