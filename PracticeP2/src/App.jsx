import { useState } from 'react'
import './components/App.scss'
import Points from "./components/Points"


function App() {
  const [count, setCount] = useState(0)

  return (
  <Points />
  )
}

export default App
