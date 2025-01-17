import { useState } from 'react'
import { Login } from './components/Login'
import { Landing_page } from './components/Landing_page'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing_page/>
    </>
  )
}

export default App
