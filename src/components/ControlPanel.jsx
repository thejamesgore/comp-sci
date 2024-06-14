import React from 'react'

const ControlPanel = ({ onGenerateNewArray, onStarteSort }) => {
  //   nice little call back function to randomly create an array
  const handleGenerateArray = () => {
    const array = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 100)
    )
    onGenerateNewArray(array)
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
      <input type="range" min="10" max="100" />
      <input type="range" min="1" max="100" />
      <button onClick={handleGenerateArray}>Generate New Array</button>
      <button onClick={handleStartSort}>Start</button>
    </div>
  )
}

export default ControlPanel
