import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Equipment from '../components/Equipment';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Equipment />
      <BeforeAfter />
      <div id="about">
        <About />
      </div>
      <Testimonials limit={3} />
      <Contact />
    </main>
  );
};

export default Home;
