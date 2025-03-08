import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class UserPreview extends Component{
  constructor(props){
    super(props);
    this.state = { 
      fullname: ""
    };
  }

  static getDerivedStateFromProps(props, state){
    console.log("Inside getDerivedStateFromProps");
    return{
      fullname: `${props.firstName} ${props.lastName}`
    }
  }

  render(){
    return <h1>{this.state.fullname}</h1>
  }
}

function App() {

  return (
    <>
      <UserPreview firstName="Mohsin" lastName="Khan"/>
    </>
  )
}

export default App
