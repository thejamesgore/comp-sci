import React, { useState } from 'react'

const ControlPanel = ({ onGenerateNewArray, onStartSort }) => {
  const [arraySize, setArraySize] = useState(50)

  // Function to generate a new array based on the current array size
  const handleGenerateArray = () => {
    const array = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 100)
    )
    onGenerateNewArray(array)
  }

  // Function to start the sorting process
  const handleStartSort = () => {
    onStartSort()
  }

  // Function to handle array size change
  const handleArraySizeChange = (e) => {
    setArraySize(e.target.value)
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
        Array Size:
        <input
          type="range"
          min="10"
          max="100"
          value={arraySize}
          onChange={handleArraySizeChange}
        />
      </label>
      <button onClick={handleGenerateArray}>Generate New Array</button>
      <button onClick={handleStartSort}>Start</button>
    </div>
  )
}

export default ControlPanel
