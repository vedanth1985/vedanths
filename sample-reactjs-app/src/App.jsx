import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Sample ReactJS App</h1>
      <p>Edit <code>src/App.jsx</code> and save to test hot reload.</p>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          Count is {count}
        </button>
      </div>
      <p className="footer">Built with Vite + React, ready for Docker.</p>
    </div>
  )
}

export default App
