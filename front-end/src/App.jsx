import { useState } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Welcome to the OTC Medical Supplies App!</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Under Construction
        </p>
        <Footer/>
    </>
  )
}

export default App
