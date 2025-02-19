import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getImageURL from './utils.js'

function App() {
  return (
    <>
    <Avatar 
      person={{ 
        name: 'Lin Lanying', 
        imageId: '1bX5QH6'
      }} 
      size={100} />
    <Avatar 
      size={80}
      person={{
        name: 'Aklilu Lemma',
        imageId: 'OKS67lh'
      }}
    />  
    <Avatar 
      size={50}
      person={{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
      }}
    />  
  </>
  )
}

export default App

function Avatar({person, size = 100}){
  return (
    <img
      className="avatar" 
      src={getImageURL(person.imageId)} 
      alt={person.name} 
      width={size}
      height={size}
    />
  );
}