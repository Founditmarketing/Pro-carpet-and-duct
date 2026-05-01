import React, { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import { useLocation } from 'react-router-dom';

const Reviews: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="pb-0 animate-fade-in-up">
      {/* Slim Hero Section */}
      <section className="bg-primary text-white pt-40 pb-20 px-4 relative overflow-hidden hidden md:block border-b border-white/10">
        <div className="container mx-auto relative z-10 text-center max-w-4xl pt-8 pb-4">
          <span className="inline-block py-1.5 px-4 rounded-sm bg-white/10 text-secondary font-bold text-xs uppercase tracking-widest mb-6 border border-white/10">Community Certified</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-lg">Verified Customer Reviews</h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            The most trusted indoor air quality and carpet cleaning specialists in Central Louisiana, backed by our 5-star reputation.
          </p>
        </div>
      </section>

      {/* Slim Mobile Hero Section */}
      <section className="bg-primary text-white pt-36 pb-16 px-4 relative overflow-hidden md:hidden border-b border-white/10">
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-sm bg-white/10 text-secondary font-bold text-[10px] uppercase tracking-widest mb-4">Community Certified</span>
          <h1 className="text-3xl font-serif font-bold mb-4 leading-tight drop-shadow-lg">Verified Reviews</h1>
          <p className="text-sm text-slate-200 font-medium drop-shadow-md">
            The most trusted indoor air quality specialists in Central Louisiana, backed by our 5-star reputation.
          </p>
        </div>
      </section>

      {/* Testimonials Masonry Block */}
      <div className="bg-slate-50 border-t border-slate-200">
         <Testimonials />
      </div>

    </main>
  );
};

export default Reviews;
