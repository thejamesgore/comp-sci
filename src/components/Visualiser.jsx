import { useEffect, useState } from 'react'

export default function Visualizer({ array, animations }) {
  const [localArray, setLocalArray] = useState(array)
  const [localAnimations, setLocalAnimations] = useState([])
  const [comparingIndices, setComparingIndices] = useState([-1, -1])
  const [sortedIndices, setSortedIndices] = useState([])

  useEffect(() => {
    setLocalArray(array)
    setLocalAnimations(animations)
    setSortedIndices([]) // Reset sorted indices when a new array is set
  }, [array, animations])

  useEffect(() => {
    if (localAnimations.length === 0) return

    const [i, j, isFinalPosition] = localAnimations[0]
    setComparingIndices([i, j])

    const timer = setTimeout(() => {
      const newArray = localArray.slice()
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      setLocalArray(newArray)
      setLocalAnimations(localAnimations.slice(1))
      setComparingIndices([-1, -1])

      if (isFinalPosition) {
        setSortedIndices((prev) => [...prev, j])
      }
    }, 10)

    return () => clearTimeout(timer)
  }, [localAnimations, localArray])

  return (
    <div className="visualizer">
      {localArray.map((value, index) => (
        <div
          key={index}
          className={`bar 
            ${comparingIndices.includes(index) ? 'bar-being-compared' : ''} 
            ${sortedIndices.includes(index) ? 'bar-sorted' : ''}`}
          style={{ height: `${value}px` }}
        ></div>
      ))}
    </div>
  )
}
