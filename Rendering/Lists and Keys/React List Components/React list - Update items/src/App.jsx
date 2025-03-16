import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialList = [
  { id: 'a', name: 'Learn React', complete:false},
  { id: 'b', name: 'Learn Firebase', complete:false},
  { id: 'c', name: 'Learn GraphQL', complete:false},
];

const ListWithAddItem = () => {
  const [list, setList] = useState(initialList);
  
  const handleChangeCheckbox = id => {
    setList(
      list.map(item => {
        if(item.id === id){
          return { ...item, complete: !item.complete};
        }else{
          return item;
        }
       })
    )
  }

  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <label><input type="checkbox" checked={item.complete} onChange={() => handleChangeCheckbox(item.id)} />
            {item.name}
            </label>
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
