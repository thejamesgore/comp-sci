import React, { useState } from 'react';
import { DoublyLinkedList } from '../utils/structs'; // Ensure this path is correct
import './DoubleLLVisualiser.css';

const DoubleLLVisualiser = () => {
  const [list] = useState(() => new DoublyLinkedList());
  const [elements, setElements] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [removeValue, setRemoveValue] = useState('');
  const [insertValue, setInsertValue] = useState('');
  const [position, setPosition] = useState('');

  const addElement = () => {
    if (inputValue.trim() === '') return;
    list.append(inputValue);
    setElements(list.toArray());
    setInputValue('');
  };

  const prependElement = () => {
    if (inputValue.trim() === '') return;
    list.prepend(inputValue);
    setElements(list.toArray());
    setInputValue('');
  };

  const insertElement = () => {
    if (insertValue.trim() === '' || position.trim() === '') return;
    const pos = parseInt(position, 10);
    if (isNaN(pos) || pos < 0) return;
    list.insert(insertValue, pos);
    setElements(list.toArray());
    setInsertValue('');
    setPosition('');
  };

  const removeElement = () => {
    if (removeValue.trim() === '') return;
    list.remove(removeValue);
    setElements(list.toArray());
    setRemoveValue('');
  };

  const popElement = () => {
    const poppedNode = list.pop();
    if (poppedNode) {
      setElements(list.toArray());
    }
  };

  return (
    <div className="doublell-visualiser">
      <div>
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
      <div className="doubly-list">
        {elements.length === 0 && <div className="null">null</div>}
        {elements.map((element, index) => (
          <React.Fragment key={index}>
            {index === 0 && <div className="null">null</div>}
            <div className="node">
              <div className="circle">{element}</div>
              {index < elements.length - 1 && (
                <div className="arrows">
                  <div className="arrow up">↑</div>
                  <div className="arrow down">↓</div>
                </div>
              )}
            </div>
            {index === elements.length - 1 && <div className="null">null</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DoubleLLVisualiser;
