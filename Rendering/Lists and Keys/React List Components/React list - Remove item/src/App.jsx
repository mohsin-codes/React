import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialList = [
  { id: 'a', name: 'Learn React'},
  { id: 'b', name: 'Learn Firebase'},
  { id: 'c', name: 'Learn GraphQL'},
];

const ListWithAddItem = () => {
  const [list, setList] = useState(initialList);
  
  const handleClick = (id) => {
    setList(list.filter(item => item.id !== id));
  }
  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <label> {item.name} </label>
            
            <button type='button' onClick={() => handleClick(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {

  return (
    <>
      <ListWithAddItem />
    </>
  )
}

export default App
