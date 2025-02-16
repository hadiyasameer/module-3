import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import Main from './Components/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App