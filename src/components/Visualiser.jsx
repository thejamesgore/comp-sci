import { useEffect, useState } from 'react'

export default function Visualizer({ array, animations }) {
  const [localArray, setLocalArray] = useState([])
  const [localAnimations, setLocalAnimations] = useState([])
  const [comparingIndices, setComparingIndices] = useState([-1, -1])

  // Sync the local state with the new props
  useEffect(() => {
    console.log('Array prop changed:', array)
    console.log('Animations prop changed:', animations)

    setLocalArray([...array]) // Ensure a new array instance is used
    setLocalAnimations([...animations]) // Ensure a new array instance is used
    setComparingIndices([-1, -1])
  }, [array, animations])

  // Handle the animation steps
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
    }, 10)

    return () => clearTimeout(timer)
  }, [localAnimations, localArray])

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
