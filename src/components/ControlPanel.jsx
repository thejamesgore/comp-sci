import React, { useState } from 'react'

const ControlPanel = ({ onGenerateNewArray, onStarteSort }) => {
  const [arraySize, setArraySize] = useState()

  //   nice little call back function to randomly create an array
  const handleGenerateArray = () => {
    const array = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 100)
    )
    onGenerateNewArray(array)
  }

  const handleArraySizeChange = (e) => {
    setArraySize(e.target.value)
  }

  const handleStartSort = () => {
    onStarteSort()
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
