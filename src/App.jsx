import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button>subscribe</Button>
      </div>
      
     
    </>
  )
}

export default App
