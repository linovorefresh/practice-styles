import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Hero/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
