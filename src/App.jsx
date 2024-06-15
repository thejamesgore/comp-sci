import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SortingVisualiser from './pages/SortingVisualiser'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SortingVisualiser />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
