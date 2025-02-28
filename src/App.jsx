import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import "./App.css"
import Hero from './components/hero/Hero'
import FeaturedServices from './components/features/FeaturedServices'
import ProductsContainer from './components/products/ProductsContainer'
import HappyCustomers from './components/happyCustomers/HappyCustomers'
import Footer from './components/footer/Footer'

const App = () => {
  return (
   
       <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={
          <>
            
            <Hero />
            <FeaturedServices/>
            <ProductsContainer/>
            <HappyCustomers/>
          </>
        } />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />  */}
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
