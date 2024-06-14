import { useState } from 'react'

import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import Visualiser from './components/Visualiser'

function App() {
  const [array, setArray] = useState([50, 40, 30, 20, 10])

  return (
    <div className="App">
      <Header />
      <ControlPanel />
      <Visualiser array={array} />
    </div>
  )
}

export default App
