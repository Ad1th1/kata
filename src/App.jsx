import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

import './App.css'
import Instructor from './components/Instructor/Instructor'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Home />
        <Instructor />
      </main>
    </div>
  )
}

export default App