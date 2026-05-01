import React, { useState } from 'react';

const About: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'past' | 'present'>('present');

  return (
    <section className="py-16 md:py-24 px-4 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-last lg:order-first mt-12 lg:mt-0">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>

            <div className="relative h-[280px] sm:h-[380px] md:h-[550px] w-full mt-4 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/20 rounded-full blur-[60px] pointer-events-none"></div>

              {/* 1985 Image (Back Left - Tall Format) */}
              <div 
                onClick={() => setActivePhoto('past')}
                className={`absolute top-0 left-0 w-[60%] h-[95%] rounded-md overflow-hidden transition-all duration-500 ease-out border-4 md:border-[6px] border-slate-900 cursor-pointer origin-bottom-left ${activePhoto === 'past' ? 'z-30 scale-[1.03] shadow-[0_20px_40px_rgba(0,0,0,0.8)]' : 'z-10 scale-100 shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1'}`}
              >
                <div className={`absolute inset-0 bg-primary/30 transition-colors duration-500 pointer-events-none z-10 ${activePhoto === 'past' ? 'opacity-0' : 'opacity-100'}`}></div>
                <img
                  src="/procarpetowner&sonold.png"
                  alt="Pete and Dustin Terracina (1985)"
                  className="w-full h-full object-cover object-top filter grayscale-[20%] sepia-[15%]"
                />
              </div>

              {/* Present Image (Front Right - Wide Format) */}
              <div 
                onClick={() => setActivePhoto('present')}
                className={`absolute bottom-2 right-0 w-[75%] h-[65%] rounded-md overflow-hidden transition-all duration-500 ease-out border-4 md:border-[6px] border-slate-900 cursor-pointer origin-top-right ${activePhoto === 'present' ? 'z-30 scale-[1.03] shadow-[0_20px_40px_rgba(0,0,0,0.8)]' : 'z-20 scale-100 shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1'}`}
              >
                <div className={`absolute inset-0 bg-primary/30 transition-colors duration-500 pointer-events-none z-10 ${activePhoto === 'present' ? 'opacity-0' : 'opacity-100'}`}></div>
                <img
                  src="/procarpetowner&son.jpg"
                  alt="Pete and Dustin Terracina (Present)"
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 mb-6 bg-secondary text-white uppercase text-xs font-bold tracking-widest leading-none rounded-sm">
              Our Legacy
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">A Family Tradition Since 1985</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-300">
              <p className="font-medium">
                Family-owned-and-operated by the father-son team of <span className="text-secondary font-bold">Pete and Dustin Terracina</span>, Pro Carpet & Duct Cleaning has been Central Louisiana's trusted name for over 30 years.
              </p>
              <p className="hidden md:block">
                We started in 1985 with a simple mission: provide the most thorough, affordable cleaning services in Alexandria. Today, we're proud to maintain an <span className="text-secondary font-bold">A+ BBB rating</span> and a reputation for excellence.
              </p>
              <div className="p-4 md:p-6 bg-white/5 border border-white/10 border-l-4 border-l-secondary rounded-r-md backdrop-blur-sm mt-4">
                <blockquote className="italic text-slate-200 font-bold leading-relaxed text-sm md:text-base">
                  "We treat every home like it's our own. When you call us, you're getting the Indoor Air Specialists who care about your family's health."
                </blockquote>
                <p className="mt-4 text-xs font-bold text-secondary uppercase tracking-widest">— Pete Terracina, Founder</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="group">
                  <h4 className="text-4xl font-black text-white group-hover:text-secondary transition-colors">1985</h4>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">Established</p>
                </div>
                <div className="group">
                  <h4 className="text-4xl font-black text-white group-hover:text-secondary transition-colors">A+</h4>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">BBB Accredited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;