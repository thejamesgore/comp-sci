import { useState, useEffect } from 'react'

import './App.css'

import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import Visualiser from './components/Visualiser'
import { bubbleSort, selectionSort, insertionSort } from './utils/algos'
import { generateRandomArray } from './utils/utils'

function App() {
  const [array, setArray] = useState([50, 40, 30, 20, 10])
  const [animations, setAnimations] = useState([])

  useEffect(() => {
    const initialArray = generateRandomArray(50)
    setArray(initialArray)
  }, [])

  const generateNewArray = (newArray) => {
    setArray(newArray)
  }

  const startSort = () => {
    let animations

    // add whatever algos to a switch

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
