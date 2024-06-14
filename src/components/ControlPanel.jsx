import React, { useState } from 'react'
import { generateRandomArray } from '../utils/utils'

const ControlPanel = ({ onGenerateNewArray, onStartSort }) => {
  const [arraySize, setArraySize] = useState(50)
  const [isSorting, setIsSorting] = useState(false)

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

  return (
    <div className="control-panel">
      <select>
        <option>Bubble Sort</option>
        <option>Merge Sort</option>
        <option>Quick Sort</option>
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
      <button onClick={handleStartSort}>Start</button>
      <div className={`array-container ${isSorting ? 'sorting' : ''}`}>
        {/* Assuming array bars are rendered here */}
      </div>
    </div>
  )
}

export default ControlPanel
