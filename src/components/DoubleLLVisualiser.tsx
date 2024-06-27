import React, { useState } from 'react'

import './ListsVisualiser.css'

const DoubleLLVisualiser = () => {
  //   const [list] = useState(() => new DoublyLinkedList())
  //   const [elements, setElements] = useState([])
  //   const [inputValue, setInputValue] = useState('')
  //   const [removeValue, setRemoveValue] = useState('')
  //   const [insertValue, setInsertValue] = useState('')
  //   const [position, setPosition] = useState('')

  //   const addElement = () => {
  //     if (inputValue.trim() === '') return
  //     list.append(inputValue)
  //     setElements(list.toArray())
  //     setInputValue('')
  //   }

  //   const prependElement = () => {
  //     if (inputValue.trim() === '') return
  //     list.prepend(inputValue)
  //     setElements(list.toArray())
  //     setInputValue('')
  //   }

  //   const insertElement = () => {
  //     if (insertValue.trim() === '' || position.trim() === '') return
  //     const pos = parseInt(position, 10)
  //     if (isNaN(pos) || pos < 0) return
  //     list.insert(insertValue, pos)
  //     setElements(list.toArray())
  //     setInsertValue('')
  //     setPosition('')
  //   }

  //   const removeElement = () => {
  //     if (removeValue.trim() === '') return
  //     list.remove(removeValue)
  //     setElements(list.toArray())
  //     setRemoveValue('')
  //   }

  //   const popElement = () => {
  //     const poppedNode = list.pop()
  //     if (poppedNode) {
  //       setElements(list.toArray())
  //     }
  //   }

  return (
    <div className="lists-visualiser">
      {/* <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={addElement}>Add</button>
        <button onClick={prependElement}>Prepend</button>
      </div>
      <div>
        <input
          type="text"
          value={insertValue}
          onChange={(e) => setInsertValue(e.target.value)}
          placeholder="Insert value"
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Position"
        />
        <button onClick={insertElement}>Insert</button>
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
      <div>
        <button onClick={popElement}>Pop</button>
      </div>
      <div className="list">
        {elements.map((element, index) => (
          <div key={index} className="node">
            {index > 0 && <div className="arrow">←</div>}
            <div className="circle">{element}</div>
            {index < elements.length - 1 && <div className="arrow">→</div>}
          </div>
        ))}
        {elements.length > 0 && <div className="null">null</div>}
      </div> */}
    </div>
  )
}

export default DoubleLLVisualiser
