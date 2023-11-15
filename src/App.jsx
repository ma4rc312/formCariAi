import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useQserv from './data/qserv'
import ChartMain from './components/estadistics'
import * as Reactstrap from "reactstrap";
import { motion } from "framer-motion";


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
      <Reactstrap.CardHeader className='carHeaderStyle'>
        <h1>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 1000 }}>Formulario</span> <span className="cariAiText">CariAi</span>
        </h1>
        </Reactstrap.CardHeader>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
     
      <Reactstrap.Form 
        id="work-form" 
        method="POST" 
        onSubmit={handleSubmit}
      >

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Reactstrap.FormGroup className="mb-3" style={{ marginRight: '25px' }}>
      <label>Hora de entrada</label>
      <p></p>
      <Reactstrap.Input 
        type="time" 
        className="form-control-alternative"
        id="entry-time" 
        name="attendanceIn" 
        value={formData.attendanceIn} 
        onChange={handleInputChange} 
        required 
      />
    </Reactstrap.FormGroup>

    <Reactstrap.FormGroup className="mb-3"   style={{ marginLeft: '20px' }} >
      <label>Hora de salida</label>
      <p></p>
      <Reactstrap.Input 
        type="time" 
        className="form-control-alternative"
        id="exit-time" 
        name="attendanceOut" 
        value={formData.attendanceOut} 
        onChange={handleInputChange} 
        required 
      />
    </Reactstrap.FormGroup>
  </div>        
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '6px'}}>
       <motion.button 
         type="submit"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
       >
         Calcular horas
       </motion.button>
   </div>

      </Reactstrap.Form >
     </div>

      {/* Graficas */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: '60px'}}>
        <ChartMain data={data} />
      </div>

       {/* Footer */}
       <Reactstrap.CardFooter style={{ backgroundColor: '#f1f1f1', padding: '20px', textAlign: 'center', marginTop: '10px'}}>
        <p>&copy; 2023 Marcela</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <a href="https://vitejs.dev" >
              <img
                src={viteLogo}
                alt="Vite logo"
                style={{ width: '20px' }}
              />
            </a>
            <a
              href="https://react.dev"
            >
              <img
                src={reactLogo}
                alt="React logo"
                style={{ width: '20px' }}
              />
            </a>
          </div>
        </div>
      </Reactstrap.CardFooter>

    </>
  )
}

export default App
