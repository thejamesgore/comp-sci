import { useState } from 'react'

import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import Visualiser from './components/Visualiser'

function App() {
  const [array, setArray] = useState([50, 40, 30, 20, 10])

  const generateNewArray = (newArray) => {
    setArray(newArray)
  }

  console.log(`array is ->>`, array)

  return (
    <div className="App">
      <Header />
      <ControlPanel onGenerateNewArray={generateNewArray} />
      <Visualiser array={array} />
    </div>
  )
}

export default App
