import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import Visualiser from './components/Visualiser'
import { bubbleSort } from './sortingAlgos/algos'

function App() {
  const [array, setArray] = useState([50, 40, 30, 20, 10])
  const [animations, setAnimations] = useState([])

  const generateNewArray = (newArray) => {
    setArray(newArray)
  }

  const startSort = () => {
    const animations = bubbleSort(array)
    setAnimations(animations)
  }

  return (
    <div className="App">
      <Header />
      <ControlPanel
        onGenerateNewArray={generateNewArray}
        onStartSort={startSort}
      />
      <Visualiser array={array} animations={animations} />
    </div>
  )
}

export default App
