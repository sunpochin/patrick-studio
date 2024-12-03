import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { Instructors } from './components/Instructors';
import { Pricing } from './components/Pricing';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Instructors />
      <Schedule />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;