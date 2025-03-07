import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'
import { createContext } from 'react'

const ThemeContext = createContext(null);

class Button extends Component{
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
}

function App() {

  return (
    <>
      <ThemeContext.Provider value="light">
        <Button>Click me!</Button>
      </ThemeContext.Provider>
    </>
  )
}

export default App
