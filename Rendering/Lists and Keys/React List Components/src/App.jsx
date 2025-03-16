import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list = [
{
  id: 'a',
  firstname: 'Robin',
  lastname: 'Wieruch',
  year: 1998,
},
{
  id: 'b',
  firstname: 'Dave',
  lastname: 'Davidds',
  year: 1990,
},
];

const List = ({list}) => (
  <ul>
    { 
      (list || []).map(item => (
        <ListItem key={item.id} item={item} />
      ))
    }
  </ul>
)

const ListItem = ({item}) => (
  <li>
    <div>{item.id}</div>
    <div>{item.firstname}</div>
    <div>{item.lastname}</div>
    <div>{item.year}</div>
  </li>
)

function App() {
  return (
    <>
      <List list={list} />
    </>
  )
}

export default App
