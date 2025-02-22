import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
