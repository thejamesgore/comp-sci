import React, { useState } from 'react'
// import LinkedList
import './NodeVisualiser.css'

const NodeVisualiser = () => {
  const [elements, setElements] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addElement = () => {
    if (inputValue.trim() === '') return
    setElements([...elements, inputValue])
    setInputValue('')
  }

  return (
    <div className="nodevisualizer">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={addElement}>Add</button>
      <div className="list">
        {elements.map((element, index) => (
          <div key={index} className="node">
            <div className="circle">{element}</div>
            {index < elements.length - 1 && <div className="arrow">→</div>}
          </div>
        ))}
        {elements.length > 0 && <div className="arrow">→</div>}
        {elements.length > 0 && <div className="null">null</div>}
      </div>
    </div>
  )
}

export default NodeVisualiser
