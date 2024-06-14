import React, { useState } from 'react'

const ControlPanel = ({ onGenerateNewArray, onStartSort }) => {
  const [arraySize, setArraySize] = useState(50)

  const handleGenerateArray = () => {
    const array = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 100)
    )
    onGenerateNewArray(array)
  }

  const handleArraySizeChange = (e) => {
    setArraySize(e.target.value)
  }

  const handleStartSort = () => {
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
    </div>
  )
}

export default ControlPanel
