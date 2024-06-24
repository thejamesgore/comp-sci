import React, { useState } from 'react'
import { LinkedList } from '../utils/structs'
import './ListsVisualiser.css'

const ListsVisualiser = () => {
  const [list] = useState(new LinkedList())
  const [elements, setElements] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [removeValue, setRemoveValue] = useState('')

  const addElement = () => {
    if (inputValue.trim() === '') return
    list.append(inputValue)
    setElements(list.toArray())
    setInputValue('')
  }

  const removeElement = () => {
    if (removeValue.trim() === '') return
    list.remove(removeValue)
    setElements(list.toArray())
    setRemoveValue('')
  }

  return (
    <div className="ListsVisualiser">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={addElement}>Add</button>
      </div>
      <div>
        <input
          type="text"
          value={removeValue}
          onChange={(e) => setRemoveValue(e.target.value)}
          placeholder="Remove value"
        />
        <button onClick={removeElement}>Remove</button>
      </div>
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

export default ListsVisualiser
