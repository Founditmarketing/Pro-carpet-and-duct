import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Equipment from '../components/Equipment';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import PageSEO from '../components/PageSEO';

const Home: React.FC = () => {
  return (
    <main>
      <PageSEO
        title="Pro Carpet & Duct Cleaning | Alexandria & Pineville, LA Specialists"
        description="Pro Carpet & Duct Cleaning: Alexandria's trusted air duct and carpet cleaners since 1985. Specialized 230°F industrial steam cleaning. Family owned. Open 24/7."
        path="/"
      />
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
