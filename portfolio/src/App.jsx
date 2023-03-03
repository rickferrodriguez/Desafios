import { useState } from 'react'
import sportLogo from './assets/sport.svg'
import './App.css'
import {Header} from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main>
        <section>
          <img className="logo main" src={sportLogo} alt="React logo" />
          <h1>Hi I'm Richard</h1>
        </section>
      </main>
    </>
  )
}

export default App
