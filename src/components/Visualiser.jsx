// src/components/Visualizer.jsx
import { useEffect, useState } from 'react'

export default function Visualizer({ array, animations }) {
  const [localArray, setLocalArray] = useState(array)
  const [localAnimations, setLocalAnimations] = useState([])

  useEffect(() => {
    setLocalArray(array)
    setLocalAnimations(animations)
  }, [array, animations])

  useEffect(() => {
    if (localAnimations.length === 0) return
    const [i, j] = localAnimations[0]
    setTimeout(() => {
      const newArray = localArray.slice()
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      setLocalArray(newArray)
      setLocalAnimations(localAnimations.slice(1))
    }, 10)
  }, [localAnimations, localArray])

  return (
    <div className="visualizer">
      {localArray.map((value, index) => (
        <div key={index} className="bar" style={{ height: `${value}px` }}></div>
      ))}
    </div>
  )
}
