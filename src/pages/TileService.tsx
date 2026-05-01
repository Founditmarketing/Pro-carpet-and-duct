import React, { useEffect } from 'react';
import { Phone, CheckCircle2, Droplets, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TileService: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-lg">Ceramic Tile & Grout Restoration</h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Instantly reverse years of discoloration and soil buildup along your grout lines with high-pressure rotary extraction.
          </p>
        </div>
      </section>

      {/* Slim Mobile Hero Section */}
      <section className="bg-primary text-white pt-36 pb-16 px-4 relative overflow-hidden md:hidden border-b border-white/10">
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-sm bg-white/10 text-secondary font-bold text-[10px] uppercase tracking-widest mb-4">Premium Extraction</span>
          <h1 className="text-3xl font-serif font-bold mb-4 leading-tight drop-shadow-lg">Ceramic Tile & Grout Restoration</h1>
          <p className="text-sm text-slate-200 font-medium drop-shadow-md">
            Reverse years of discoloration and soil buildup with high-pressure rotary extraction.
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">Revive Porous Grout Lines</h2>
              <div className="w-20 h-1.5 bg-secondary mb-8 rounded-full"></div>
              
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                When you mop a ceramic tile floor, the dirty water inevitably settles into the lowest points—the grout lines. Because grout is highly porous, it absorbs that dirty water like a sponge. Over time, this entirely changes the color of your floor, turning bright white lines pitch black. Normal scrubbing simply isn't enough.
              </p>
              
              <ul className="space-y-6 md:space-y-8 mb-8">
                <li className="flex items-start gap-4 p-4 md:p-6 rounded-lg bg-slate-50 border border-slate-100 hover:border-secondary/30 transition-colors group">
                  <div className="p-2 bg-white rounded shadow-sm group-hover:bg-secondary/10 transition-colors">
                    <Droplets className="w-6 h-6 text-secondary shrink-0" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1 text-lg">High-Pressure Rotary Extraction</strong>
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">We use contained, high-pressure steam spinning at hundreds of RPMs to literally blast the deeply embedded dirt out of the grout pores without splashing the surrounding walls.</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 p-4 md:p-6 rounded-lg bg-slate-50 border border-slate-100 hover:border-secondary/30 transition-colors group">
                  <div className="p-2 bg-white rounded shadow-sm group-hover:bg-secondary/10 transition-colors">
                    <Sparkles className="w-6 h-6 text-secondary shrink-0" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1 text-lg">Deep Discoloration Reversal</strong>
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">The difference is night and day. We strip away grease, hard water deposits, and embedded mop-water dirt to restore the original grout color.</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 p-4 md:p-6 rounded-lg bg-slate-50 border border-slate-100 hover:border-secondary/30 transition-colors group">
                  <div className="p-2 bg-white rounded shadow-sm group-hover:bg-secondary/10 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1 text-lg">Protective Clear Sealing</strong>
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">After the floor is fully restored, we apply a premium impregnating sealer that acts as an invisible barrier, preventing massive spills and dirt from soaking into the grout in the future.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Col: Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-xl translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 -z-10 opacity-20"></div>
              <img 
                src="/procarpetsabinstatebank.jpg" 
                alt="Professional Tile and Grout Cleaning" 
                className="rounded-xl w-full h-[350px] md:h-[600px] object-cover shadow-2xl border-4 border-white relative z-10"
              />
              {/* Highlight Badge */}
              <div className="absolute -bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-12 bg-white p-4 md:p-6 rounded-lg shadow-xl border-t-4 md:border-t-0 md:border-l-4 border-secondary flex items-center gap-4 z-20 w-[90%] md:w-auto">
                <div className="bg-primary/5 p-3 rounded-full shrink-0">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base md:text-xl">Like-New Shine</div>
                  <div className="text-slate-500 text-xs md:text-sm font-medium">Protect Your Investment</div>
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
            Don't let grimy floors ruin your indoor air quality. Call the most trusted name in Alexandria for a free quote today.
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

export default TileService;
