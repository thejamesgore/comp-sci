import React, { useState } from 'react'

const ControlPanel = ({
  onGenerateNewArray,
  onStartSort,
  onAlgorithmChange,
}) => {
  const [arraySize, setArraySize] = useState(50)
  const [isSorting, setIsSorting] = useState(false)

  const handleGenerateArray = () => {
    const array = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 100)
    )
    onGenerateNewArray(array)
    setIsSorting(false)
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
      <select onChange={(e) => onAlgorithmChange(e.target.value)}>
        <option value="bubbleSort">Bubble Sort</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="quickSort">Quick Sort</option>
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
      <div className={`array-container ${isSorting ? 'sorting' : ''}`}></div>
    </div>
  )
}

export default ControlPanel
