import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SortingVisualiser from './pages/SortingVisualiser'
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
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
