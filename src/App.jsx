import { useState, useEffect } from 'react'
import './App.css'
import { Header, ControlPanel, Visualiser, Statistics } from './components'
import { bubbleSort, selectionSort, mergeSort } from './utils/algos'
import { generateRandomArray } from './utils/utils'

function App() {
  const [array, setArray] = useState([50, 40, 30, 20, 10])
  const [animations, setAnimations] = useState([])
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort')
  const [speed, setSpeed] = useState(10)

  useEffect(() => {
    const initialArray = generateRandomArray(50)
    setArray(initialArray)
  }, [])

  const generateNewArray = (newArray) => {
    setArray(newArray)
    setAnimations([]) // Reset animations for the new array
  }

  const startSort = () => {
    let animations
    switch (selectedAlgorithm) {
      case 'bubbleSort':
        animations = bubbleSort(array)
        break
      case 'selectionSort':
        animations = selectionSort(array)
        break
      case 'mergeSort':
        animations = mergeSort(array)
        break
      default:
        animations = bubbleSort(array)
    }
    setAnimations(animations)
  }

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed)
  }

  return (
    <div className="App">
      <Header />
      <ControlPanel
        onGenerateNewArray={generateNewArray}
        onStartSort={startSort}
        onAlgorithmChange={setSelectedAlgorithm}
        onSpeedChange={handleSpeedChange}
      />
      <Visualiser array={array} animations={animations} speed={speed} />
    </div>
  )
}

export default App
