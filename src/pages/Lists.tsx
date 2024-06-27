import React, { useState } from 'react'
import ListsVisualiser from '../components/ListsVisualiser'
import DoubleLLVisualiser from '../components/DoubleLLVisualiser'
import './Lists.css'

const Lists = () => {
  const [isDoubleLinkedList, setIsDoubleLinkedList] = useState(false)

  const toggleListType = () => {
    setIsDoubleLinkedList(!isDoubleLinkedList)
  }

  return (
    <div className="lists-page">
      <div className="toggle-container">
        <button className="toggle-button" onClick={toggleListType}>
          {isDoubleLinkedList
            ? 'Show Single Linked List'
            : 'Show Double Linked List'}
        </button>
      </div>
      {isDoubleLinkedList ? <DoubleLLVisualiser /> : <ListsVisualiser />}
    </div>
  )
}

export default Lists
