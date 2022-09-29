import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  
  const [name, setName] = useState('')
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState()

  const calcularBMI = () => {
    let bmi = Number(weight) / (Number(height) * Number(height))
    setResult(bmi)
  }


  return (
    <div className="App">
      <div className='form'>
        <header>BMI App</header>
          <input placeholder='name' onChange={(e) => {setName(e.target.value)}}/>
          <input placeholder='height' onChange={(e) => {setHeight(e.target.value)}}/>
          <input placeholder='weight' onChange={(e) => {setWeight(e.target.value)}}/>
          <button onClick={calcularBMI}>calculate</button>
        <footer>By Lucas</footer>
      </div>
    </div>
  )
}

export default App
