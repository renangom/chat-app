import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  )
}

export default App
