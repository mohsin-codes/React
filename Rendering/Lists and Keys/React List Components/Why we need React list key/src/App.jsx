import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialList = [
  {id:'a', name:'Learn React'},
  {id:'b', name:'Learn GraphQL'},
];

const ListWithoutKey = () => (
  <div> 
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

const ListWithUnstableIndex = () => {
  const [list, setList] = useState(initialList)

  const handleClick = () => {
    setList(list.slice().reverse());
  }

  return(
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
          <label><input type="checkbox"/>{item}</label>
          </li>
        ))}
      </ul>

      <button type='button' onClick={handleClick}>Reverse List</button>
    </div>
  )
}

const ListWithStableIndex = () => {
  const [list, setList] = useState(initialList)

  const handleClick = () => {
    setList(list.slice().reverse());
  }

  return(
    <div>
      <ul>
        {list.map(item => (
          <li key={item.id}>
          <label><input type="checkbox"/>{item.name}</label>
          </li>
        ))}
      </ul>

      <button type='button' onClick={handleClick}>Reverse List</button>
    </div>
  )
}


function App() {

  return (
    <>  
      <ListWithStableIndex />
    </>
  )
}

export default App
