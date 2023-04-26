import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import  NavBar from './components/Nav'

import Home from './pages/Home'
import PostIt from './pages/PostIt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/postIt' element={<PostIt/>}/> 
      </Routes>
    </>
  )
}

export default App
