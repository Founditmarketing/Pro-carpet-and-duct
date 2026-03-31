import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GALLERY_IMAGES = [
  "2029.jpg",
  "2035.jpg",
  "2054.jpg",
  "2064.jpg",
  "641530494_1438217601428163_5113084011264232196_n.jpg",
  "643427510_1438217578094832_8010017952902864810_n.jpg",
  "PXL_20260331_155853743.jpg",
  "Screen-Shot-2020-06-22-at-1.14.25-PM.png",
  "procarpetchurch1.jpeg",
  "procarpetchurchjob.jpeg",
  "procarpetchurchjob.jpg",
  "procarpetducts.jpg",
  "procarpetducts1.jpg",
  "procarpetducts3.jpg",
  "procarpetducts4.jpg",
  "procarpetoakhillschool.jpg",
  "procarpetowner&son.jpg",
  "procarpetowner&sonold.png",
  "procarpetsabinstatebank.jpg",
  "procarpettrailer.jpg",
  "procarpettruck&trailer.jpg"
];

const Gallery: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="pb-0 animate-fade-in-up bg-slate-50 min-h-screen">
      {/* Slim Hero Section */}
      <section className="bg-primary text-white pt-40 pb-20 px-4 relative overflow-hidden hidden md:block border-b border-white/10">
        <div className="container mx-auto relative z-10 text-center max-w-4xl pt-8 pb-4">
          <span className="inline-block py-1.5 px-4 rounded-sm bg-white/10 text-secondary font-bold text-xs uppercase tracking-widest mb-6 border border-white/10">Project Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-lg">Our Work In Action</h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Over three decades of restoring residential and commercial properties throughout Central Louisiana.
          </p>
        </div>
      </section>

      {/* Slim Mobile Hero Section */}
      <section className="bg-primary text-white pt-36 pb-16 px-4 relative overflow-hidden md:hidden border-b border-white/10">
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-sm bg-white/10 text-secondary font-bold text-[10px] uppercase tracking-widest mb-4">Project Portfolio</span>
          <h1 className="text-3xl font-serif font-bold mb-4 leading-tight drop-shadow-lg">Our Work In Action</h1>
          <p className="text-sm text-slate-200 font-medium drop-shadow-md">
            Decades of restoring properties throughout Central Louisiana.
          </p>
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="container mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        
        {/* CSS Multi-Column Masonry setup. Breakpoints drive column count. */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative overflow-hidden rounded-xl shadow-lg group bg-slate-200"
            >
              <img 
                src={`/${src}`} 
                alt={`Pro Carpet Project ${index + 1}`}
                className="w-full h-auto block object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 brightness-90 group-hover:brightness-110"
                loading={index < 8 ? "eager" : "lazy"} 
              />
              {/* Optional Subtle Overlay Gradient for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
};

export default Gallery;
