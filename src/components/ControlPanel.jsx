import React, { useState } from 'react'
import { generateRandomArray } from '../utils/utils'

const ControlPanel = ({
  onGenerateNewArray,
  onStartSort,
  onAlgorithmChange,
}) => {
  const [arraySize, setArraySize] = useState(50)
  const [isSorting, setIsSorting] = useState(false)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Bubble Sort')

  const handleGenerateArray = () => {
    const array = generateRandomArray(arraySize)
    onGenerateNewArray(array)
    setIsSorting(false) // Reset sorting state when generating a new array
  }

  const handleArraySizeChange = (e) => {
    setArraySize(e.target.value)
  }

  const handleStartSort = () => {
    setIsSorting(true)
    onStartSort()
  }

  const handleAlgorithmChange = (e) => {
    const algorithm = e.target.value
    setSelectedAlgorithm(algorithm)
    onAlgorithmChange(algorithm)
  }

  return (
    <div className="control-panel">
      <select value={selectedAlgorithm} onChange={handleAlgorithmChange}>
        <option value="bubbleSort">Bubble Sort</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="quickSort">Quick Sort</option>
        {/* Add more options as needed */}
      </select>
      <label>
        Array Size: {arraySize}
        <input
          value={arraySize}
          type="range"
          min="10"
          max="100"
          onChange={handleArraySizeChange}
        />
      </label>
      <button onClick={handleGenerateArray}>Generate New Array</button>
      <button onClick={handleStartSort} disabled={isSorting}>
        Start
      </button>
      <div className={`array-container ${isSorting ? 'sorting' : ''}`}>
        {/* Assuming array bars are rendered here */}
      </div>
    </div>
  )
}

export default ControlPanel
