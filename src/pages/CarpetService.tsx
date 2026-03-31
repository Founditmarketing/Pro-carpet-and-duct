import React, { useEffect } from 'react';
import { Phone, CheckCircle2, Droplets } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const CarpetService: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="pb-0 animate-fade-in-up">
      {/* Slim Hero Section */}
      <section className="bg-primary text-white pt-40 pb-20 px-4 relative overflow-hidden hidden md:block border-b border-white/10">
        <div className="container mx-auto relative z-10 text-center max-w-4xl pt-8 pb-4">
          <span className="inline-block py-1.5 px-4 rounded-sm bg-white/10 text-secondary font-bold text-xs uppercase tracking-widest mb-6 border border-white/10">Premium Extraction</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-lg">Expert Carpet Cleaning</h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Industrial truck-mounted steam extraction at 200°F. We melt away dirt, remove stubborn stains, and sanitize fibers instantly.
          </p>
        </div>
      </section>

      {/* Slim Mobile Hero Section */}
      <section className="bg-primary text-white pt-36 pb-16 px-4 relative overflow-hidden md:hidden border-b border-white/10">
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-sm bg-white/10 text-secondary font-bold text-[10px] uppercase tracking-widest mb-4">Premium Extraction</span>
          <h1 className="text-3xl font-serif font-bold mb-4 leading-tight drop-shadow-lg">Expert Carpet Cleaning</h1>
          <p className="text-sm text-slate-200 font-medium drop-shadow-md">
            Industrial 200°F steam extraction. We melt dirt, remove stains, and sanitize instantly.
          </p>
        </div>
      </section>

      {/* Body Content Section */}
      <section className="py-16 md:py-28 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-50 -z-10 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Col: Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">Why Our Route Method is Superior</h2>
              <div className="w-20 h-1.5 bg-secondary mb-8 rounded-full"></div>
              
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                Over time, your carpets act like massive filters, trapping airborne pollutants, allergens, and tracked-in soils. Normal vacuuming only scratches the surface. If left untreated, these particles act like tiny razor blades, actively cutting and destroying the carpet fibers every time you walk on them.
              </p>
              
              <ul className="space-y-6 md:space-y-8 mb-8">
                <li className="flex items-start gap-4 p-4 md:p-6 rounded-lg bg-slate-50 border border-slate-100 hover:border-secondary/30 transition-colors group">
                  <div className="p-2 bg-white rounded shadow-sm group-hover:bg-secondary/10 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1 text-lg">200°F Thermal Shock Sanitization</strong>
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">Our truck-mounted system generates superheated water that liquefies heavy oils and sanitizes fibers at an industrial level.</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 p-4 md:p-6 rounded-lg bg-slate-50 border border-slate-100 hover:border-secondary/30 transition-colors group">
                  <div className="p-2 bg-white rounded shadow-sm group-hover:bg-secondary/10 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1 text-lg">Residue-Free Rinse</strong>
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">We don't leave soapy, sticky residues behind that quickly attract new dirt. Your carpet feels soft, fresh, and authentically clean.</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 p-4 md:p-6 rounded-lg bg-slate-50 border border-slate-100 hover:border-secondary/30 transition-colors group">
                  <div className="p-2 bg-white rounded shadow-sm group-hover:bg-secondary/10 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1 text-lg">Rapid Dry Technology</strong>
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">Massive suction power strips out 95% of the moisture instantly, meaning your floors are ready for traffic in hours, not days.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Col: Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-xl translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 -z-10 opacity-20"></div>
              <img 
                src="/procarpetchurchjob.jpg" 
                alt="Professional Carpet Cleaning Extraction" 
                className="rounded-xl w-full h-[350px] md:h-[600px] object-cover shadow-2xl border-4 border-white relative z-10"
              />
              {/* Highlight Badge */}
              <div className="absolute -bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-12 bg-white p-4 md:p-6 rounded-lg shadow-xl border-t-4 md:border-t-0 md:border-l-4 border-secondary flex items-center gap-4 z-20 w-[90%] md:w-auto">
                <div className="bg-primary/5 p-3 rounded-full shrink-0">
                  <Droplets className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base md:text-xl">Zero Residue</div>
                  <div className="text-slate-500 text-xs md:text-sm font-medium">100% Satisfaction Guarantee</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Wrapper */}
      <section className="bg-secondary text-white py-16 md:py-24 px-4 relative mt-12 md:mt-0">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to transform your home?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-10 text-base md:text-lg font-medium drop-shadow-sm">
            Don't let damaged carpets ruin your indoor air quality. Call the most trusted name in Alexandria for a free quote today.
          </p>
          <a href="tel:+13184454818" className="inline-flex items-center gap-3 bg-white text-secondary hover:bg-slate-50 font-bold text-base md:text-lg px-8 py-4 rounded-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            Call Now: (318) 445-4818
          </a>
        </div>
      </section>
    </main>
  );
};

export default CarpetService;
