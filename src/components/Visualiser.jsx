// src/components/Visualizer.jsx
import { useEffect, useState } from 'react'

export default function Visualizer({ array }) {
  const [animations, setAnimations] = useState([])

  return (
    <div className="visualizer">
      {array.map((value, index) => (
        <div key={index} className="bar" style={{ height: `${value}px` }}></div>
      ))}
    </div>
  )
}
