import { useEffect, useState } from 'react'

export default function Visualizer({ array, animations, speed }) {
  const [localArray, setLocalArray] = useState([])
  const [localAnimations, setLocalAnimations] = useState([])
  const [comparingIndices, setComparingIndices] = useState([-1, -1])
  const [swappingIndices, setSwappingIndices] = useState([-1, -1])
  const [overwritingIndex, setOverwritingIndex] = useState(-1)

  useEffect(() => {
    setLocalArray([...array])
    setLocalAnimations([...animations])
    setComparingIndices([-1, -1])
    setSwappingIndices([-1, -1])
    setOverwritingIndex(-1)
  }, [array, animations])

  useEffect(() => {
    if (localAnimations.length === 0) return

    const [i, j, type] = localAnimations[0]
    if (type === 'compare') {
      setComparingIndices([i, j])
      setSwappingIndices([-1, -1])
      setOverwritingIndex(-1)
    } else if (type === 'swap') {
      setComparingIndices([-1, -1])
      setSwappingIndices([i, j])
      setOverwritingIndex(-1)
    } else if (type === 'overwrite') {
      setComparingIndices([-1, -1])
      setSwappingIndices([-1, -1])
      setOverwritingIndex(i)
    }

    const timer = setTimeout(() => {
      const newArray = [...localArray]
      if (type === 'swap') {
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      } else if (type === 'overwrite') {
        newArray[i] = j // Here, j is the value to overwrite
      }
      setLocalArray(newArray)
      setLocalAnimations(localAnimations.slice(1))
      setComparingIndices([-1, -1])
      setSwappingIndices([-1, -1])
      setOverwritingIndex(-1)
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
          } ${swappingIndices.includes(index) ? 'bar-being-swapped' : ''} ${
            overwritingIndex === index ? 'bar-being-overwritten' : ''
          }`}
          style={{ height: `${value}px` }}
        ></div>
      ))}
    </div>
  )
}
