import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Full from './components/Full'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Hero/>} />
          <Route exact path='/full' element={<Full/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
