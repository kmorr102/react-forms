import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenitcate from './components/Authenitcate'

function App() {
  const [token,setToken ] = useState(null)

  return (
    <>
    <Authenitcate
    token={token}
    />
    <SignUpForm 
    setToken={setToken}
    />
   
    </>
  )
}

export default App
