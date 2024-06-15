import { useEffect, useState } from 'react'

export default function Visualizer({ array, animations, speed }) {
  const [localArray, setLocalArray] = useState([])
  const [localAnimations, setLocalAnimations] = useState([])
  const [comparingIndices, setComparingIndices] = useState([-1, -1])
  const [swappingIndices, setSwappingIndices] = useState([-1, -1])

  useEffect(() => {
    setLocalArray([...array])
    setLocalAnimations([...animations])
    setComparingIndices([-1, -1])
    setSwappingIndices([-1, -1])
  }, [array, animations])

  useEffect(() => {
    if (localAnimations.length === 0) return

    const [i, j, isSwap] = localAnimations[0]
    setComparingIndices(isSwap ? [-1, -1] : [i, j])
    setSwappingIndices(isSwap ? [i, j] : [-1, -1])

    const timer = setTimeout(() => {
      const newArray = [...localArray]
      if (isSwap) {
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      }
      setLocalArray(newArray)
      setLocalAnimations(localAnimations.slice(1))
      setComparingIndices([-1, -1])
      setSwappingIndices([-1, -1])
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
          } ${swappingIndices.includes(index) ? 'bar-being-swapped' : ''}`}
          style={{ height: `${value}px` }}
        ></div>
      ))}
    </div>
  )
}
