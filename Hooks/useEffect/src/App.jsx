import { useEffect, useState } from 'react'
import './App.css'

function Clock(){
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
     const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
     }, 1000);

     return () => clearInterval(interval)
  }, [])

  return (
    <>
      <h1>{time}</h1>
    </>
  )
}

function App() {

  return (
    <>
      <Clock />
    </>
  )
}

export default App
