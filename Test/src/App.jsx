import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [stateCar, setStateCar] = useState(0)

const encenderApagar = () => {
  // setStateCar(!stateCar)
  setStateCar(prevValue => !prevValue)
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="xd">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="xd">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TEST</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>contador {count}</button>
        <h3>Vehiculo estado: {stateCar ? "encendido" : "apagado"}</h3>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </div>
    </>
  )
}

export default App
