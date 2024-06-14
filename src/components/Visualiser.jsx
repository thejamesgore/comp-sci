import React from 'react'

const Visualiser = ({ array }) => {
  return (
    <div className="visualiser">
      {array.map((value, index) => (
        <div key={index} className="bar" style={{ height: `${value}` }}></div>
      ))}
    </div>
  )
}

export default Visualiser
