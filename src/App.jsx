import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useQserv from './data/qserv'
import ChartMain from './components/estadistics'

function App() {
  const [formData, setFormData] = useState({
    attendanceIn: '',
    attendanceOut: '',
    concepts: [
      { id: "HO", name: "HO", start: "08:00", end: "17:59" },
      { id: "HED", name: "HED", start: "18:00", end: "20:59" },
      { id: "HEN", name: "HEN", start: "21:00", end: "05:59" }
    ]
  })
  const [data,setData]=useState([])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    const { postQserv } = useQserv()
    const res = await postQserv(formData)
    setData(res.data)
    console.log(res.data)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img 
            src={viteLogo} 
            className="logo" 
            alt="Vite logo" 
          />
        </a>
        <a 
          href="https://react.dev" 
          target="_blank"
        >
          <img 
            src={reactLogo} 
            className="logo react" 
            alt="React logo" 
          />
        </a>
      </div>
      <h1>Form Cari Ai</h1>
      <form 
        id="work-form" 
        method="POST" 
        onSubmit={handleSubmit}
      >
        <label >Hora de entrada</label>
        <input 
          type="time" 
          id="entry-time" 
          name="attendanceIn" 
          value={formData.attendanceIn} 
          onChange={handleInputChange} 
          required 
        />

        <label >Hora de salida</label>
        <input 
          type="time" 
          id="exit-time" 
          name="attendanceOut" 
          value={formData.attendanceOut} 
          onChange={handleInputChange} 
          required 
        />

        <button type="submit">Calcular horas</button>
      </form>
      <ChartMain data={data}/>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
