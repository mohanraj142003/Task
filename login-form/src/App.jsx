import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './assets/Signin';
import Signup from './assets/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route index path='/' element={<Signin/>}/>
    <Route index path='/signup' element={<Signup/>}/>
    <Route index path='/signin' element={<Signin/>}/>
  </Routes>
  </BrowserRouter>
   
  )
}

export default App
