import { useEffect, useState } from 'react'

export default function Visualizer({ array, animations, speed }) {
  const [localArray, setLocalArray] = useState([])
  const [localAnimations, setLocalAnimations] = useState([])
  const [comparingIndices, setComparingIndices] = useState([-1, -1])

  useEffect(() => {
    setLocalArray([...array])
    setLocalAnimations([...animations])
    setComparingIndices([-1, -1])
  }, [array, animations])

  useEffect(() => {
    if (localAnimations.length === 0) return

    const [i, j] = localAnimations[0]
    setComparingIndices([i, j])

    const timer = setTimeout(() => {
      const newArray = [...localArray]
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      setLocalArray(newArray)
      setLocalAnimations(localAnimations.slice(1))
      setComparingIndices([-1, -1])
    }, speed)

    return () => clearTimeout(timer)
  }, [localAnimations, localArray, speed])

  return (
    <div className="visualizer">
      {localArray.map((value, index) => (
        <div
          key={index}
          className={`bar ${
            comparingIndices.includes(index) ? 'bar-being-compared' : ''
          }`}
          style={{ height: `${value}px` }}
        ></div>
      ))}
    </div>
  )
}
