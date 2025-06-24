import { useState } from 'react'


import './App.css';
import Header from './Header.jsx';
import Content from './Content.jsx';


function App() {

  return (
   <>
    
   <div className = "layout">
   <Header name = "Satyam Kumar" />
   <Content/>

   </div>
   </>
  )
}

export default App
