import { useState } from 'react'
import Navbar from './componen/Navbar'
import Tombol from './componen/tombol'

function App() {
  const [angka, setAngka] = useState(0)
  const angkaarray=[1,2,3,4,5,6,7,8,9]

  return (
    <>
    
    
    
    <Tombol pesanTombol={'masuk weh'}warna ={`success`}/>
    <Tombol pesanTombol={'pencet bang'}warna ={`primary`}/>
    <Tombol pesanTombol={'sekali deui'}warna ={`danger`}/>
    
   
        
    </>
  )
}

export default App
