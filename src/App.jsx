import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SortingVisualiser, Lists } from './pages'
import Header from './components/Header'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<SortingVisualiser />} />
            <Route path="/lists" element={<Lists />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
