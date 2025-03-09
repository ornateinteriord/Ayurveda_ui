import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import FeaturedServices from './components/features/FeaturedServices';
import ProductsContainer from './components/products/ProductsContainer';
import HappyCustomers from './components/happyCustomers/HappyCustomers';
import Footer from './components/footer/Footer';
import AboutUs from './components/aboutUs/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import ContactUs from './components/contactUs/ContactUs';
import NotFound from './components/notFound/NotFound';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Products from './components/allProducts/Products';
import Herbs from './components/allProducts/Herbs';
import Oils from './components/allProducts/Oils';
import Healthcare from './components/allProducts/HealthCare';
import Foods from './components/allProducts/Foods';
import CartDialog from './components/cartdialog/CartDialog';
import "./App.css"


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedServices />
              <ProductsContainer />
              <HappyCustomers />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Products Page */}
        <Route path="/products" element={<Products />}>
          <Route path="herbs" element={<Herbs />} />
          <Route path="oils" element={<Oils />} />
          <Route path="health" element={<Healthcare />} />
          <Route path="foods" element={<Foods />} />
        </Route>
        <Route path="/cartdialog" element={<CartDialog />} />
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;