import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import Visualiser from './components/Visualiser'
import { bubbleSort, mergeSort, quickSort } from './utils/algos'
import { generateRandomArray } from './utils/utils'

function App() {
  const [array, setArray] = useState([50, 40, 30, 20, 10])
  const [animations, setAnimations] = useState([])
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort')

  useEffect(() => {
    const initialArray = generateRandomArray(50)
    setArray(initialArray)
  }, [])

  const generateNewArray = (newArray) => {
    setArray(newArray)
  }

  const startSort = () => {
    let animations
    switch (selectedAlgorithm) {
      case 'bubbleSort':
        animations = bubbleSort(array)
        break
      case 'mergeSort':
        animations = mergeSort(array)
        break
      case 'quickSort':
        animations = quickSort(array)
        break
      default:
        animations = bubbleSort(array)
    }
    setAnimations(animations)
  }

  return (
    <div className="App">
      <Header />
      <ControlPanel
        onGenerateNewArray={generateNewArray}
        onStartSort={startSort}
        onAlgorithmChange={setSelectedAlgorithm}
      />
      <Visualiser array={array} animations={animations} />
    </div>
  )
}

export default App
