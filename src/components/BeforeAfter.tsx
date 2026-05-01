import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BeforeAfter: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Sabine State Bank",
      category: "Commercial Cleaning",
      image: "/procarpetsabinstatebank.jpg",
    },
    {
      id: 2,
      title: "Oak Hill School",
      category: "Educational Facility",
      image: "/procarpetoakhillschool.jpg",
    },
    {
      id: 3,
      title: "Local Church Restoration",
      category: "Large Scale Restoration",
      image: "/procarpetchurchjob.jpg",
    }
  ];

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Featured Projects</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">The Power of Clean.</h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
            See our <span className="text-primary font-black">Hurricane™ truck-mounted systems</span> in action on recent commercial restorations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-md overflow-hidden shadow-xl border border-slate-200 bg-white">
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 bg-white relative z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] flex flex-col items-start border-t border-slate-100">
                <span className="text-xs font-black tracking-widest text-secondary uppercase mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">{project.title}</h3>
                <Link to="/gallery" className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-slate-800 uppercase tracking-widest hover:text-secondary transition-colors group/link mt-2">
                  View Full Gallery <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;