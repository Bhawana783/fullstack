import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Servicecard from './components/Servicecard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Servicecard title = "My service page" description = " it is full of details of our service work."></Servicecard>
        <Servicecard title = "My service work" description = " it has detailed description given."></Servicecard>
        
      </div>
      
    </>
  )
}

export default App
