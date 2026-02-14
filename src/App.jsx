import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HelpSection from './components/HelpSection/HelpSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import PopularResidences from './components/PopularResidences/PopularResidences';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Properties from './components/Properties/Properties';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HelpSection />
              <WhyChooseUs />
              <PopularResidences />
              <Testimonials />
            </>
          } />
          <Route path="/properties" element={<Properties />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
