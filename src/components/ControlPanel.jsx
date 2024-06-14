import React from 'react'

const ControlPanel = () => {
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
      <button>Generate New Array</button>
      <button>Start</button>
    </div>
  )
}

export default ControlPanel
