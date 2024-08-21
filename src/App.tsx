import { useState } from 'react'
import './App.css'
import TablaPersonas from './Components/TablaPersonas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TablaPersonas/>
    </>
  )
}

export default App
