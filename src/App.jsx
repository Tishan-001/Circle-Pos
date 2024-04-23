import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStart from "./GetStart/Getstart";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    {/* <ToastContainer /> */}
    <Routes>
      <Route path="/" element={<GetStart />} />
      
    </Routes>
  </Router>
  )
}

export default App
