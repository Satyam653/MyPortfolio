import { useState } from 'react'


import './App.css';
import Header from './Header.jsx';
import Content from './Content.jsx';
import ParticlesBackground from "./ParticlesBackground";

function App() {

  return (
   <>
   
   <div className = "layout relative z-10" >
      <ParticlesBackground />
   <Header name = "Satyam Kumar" />
   <Content/>

   </div>
   </>
  )
}

export default App
