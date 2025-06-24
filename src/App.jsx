import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './Header.jsx';
import Content from './Content.jsx';


function App() {

  return (
   <>
    
   <div className = "layout">
   <Header name = "Satyam Kumar" src = "./src/assets/photo.jpeg"/>
   <Content/>

   </div>
   </>
  )
}

export default App
