import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Star, Phone, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [formStep, setFormStep] = useState(1);

  return (
    <>
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-primary text-white pt-36 lg:pt-32 pb-16">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/procarpetowner&son.jpg"
            alt="Pro Carpet Owner and Son"
            className="w-full h-full object-cover object-[40%_center] md:object-center opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 mt-[-1px] via-primary/60 to-primary/80"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            {/* Left Column - Content */}
            <div className="w-full lg:w-[48%] space-y-6 md:space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-white text-xs md:text-sm font-bold uppercase tracking-widest shadow-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>Established 1985 • Family Owned</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white mb-2 shadow-sm drop-shadow-md">
                Powerful Cleaning. <br />
                <span>Pure Results.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed font-medium">
                Alexandria's first source for powerful Carpet, Duct, Upholstery & Ceramic Tile cleaning. We use 200°F industrial steam to eliminate odors, viruses, and dirt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+13184454818"
                  className="px-8 py-4 bg-secondary hover:bg-red-700 text-white rounded-md font-bold shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <Phone className="w-5 h-5" />
                  Call (318) 445-4818
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white rounded-md font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  Our Services <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* BBB Badge & Trust */}
              <div className="pt-8 flex flex-wrap items-center gap-6 justify-center md:justify-start">
                <div className="flex flex-col items-center md:items-start gap-1">
                  <img src="/bbblogo.png" alt="BBB A+ Rating" className="h-11 w-auto object-contain drop-shadow-sm" />
                  <p className="text-[10px] uppercase font-bold text-slate-300 tracking-tighter">Accredited Business</p>
                </div>

                <div className="h-12 w-px bg-white/10 hidden md:block"></div>

                <a href="https://www.google.com/maps/place/Pro+Carpet+%26+Duct+Cleaning/@31.3036439,-92.4837381,17z/data=!3m1!4b1!4m6!3m5!1s0x863ab5867bacf2ff:0x5d8b7e10ef83c54f!8m2!3d31.3036439!4d-92.4837381!16s%2Fg%2F11jd_bktsx?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-left flex items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-2.5 outline outline-1 outline-white/20 rounded-md transition-all cursor-pointer group shadow-lg hover:shadow-xl hover:scale-105 transform">
                  <div className="bg-white rounded-full p-1 shadow-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-yellow-400 gap-0.5 mb-0.5">
                      <Star className="w-3 h-3 fill-current drop-shadow-md" />
                      <Star className="w-3 h-3 fill-current drop-shadow-md" />
                      <Star className="w-3 h-3 fill-current drop-shadow-md" />
                      <Star className="w-3 h-3 fill-current drop-shadow-md" />
                      <Star className="w-3 h-3 fill-current drop-shadow-md" />
                    </div>
                    <span className="text-[10px] md:text-[11px] text-white font-bold uppercase tracking-widest group-hover:text-sky-300 transition-colors drop-shadow-md">Verified On Google</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="hidden lg:block w-full lg:w-[48%] relative">
              <div className="relative z-10 w-full max-w-[640px] ml-auto xl:-mr-4 p-8 lg:p-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2.5 rounded-xl flex-shrink-0 text-white border border-white/10 shadow-sm mt-1">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[22px] font-sans font-black text-white tracking-tight drop-shadow-md leading-tight">Get a Quick Quote</h3>
                      <p className="text-white/80 text-[13px] font-medium drop-shadow-sm">Takes less than 30 seconds.</p>
                    </div>
                  </div>
                  {formStep === 2 && (
                    <button type="button" onClick={() => setFormStep(1)} className="text-white/60 hover:text-white text-[10px] pb-1 font-bold uppercase tracking-widest transition-colors flex flex-col items-center">
                      <ArrowRight className="w-4 h-4 rotate-180 mb-0.5" />
                      Back
                    </button>
                  )}
                </div>

                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  if (formStep === 1) setFormStep(2);
                  else {
                    console.log("Form Submitted");
                  }
                }}>
                  {/* Step 1 Visual Container */}
                  <div className={`space-y-6 animate-fade-in-up ${formStep === 1 ? 'block' : 'hidden'}`}>
                    <div className="relative group">
                      <label htmlFor="service" className="block text-[11px] font-bold text-white/90 uppercase tracking-widest mb-1.5 pl-1 drop-shadow-sm">Service Needed</label>
                      <select id="service" className="w-full bg-white/15 border-0 border-b border-white rounded-t-md rounded-b-none px-5 py-4 text-white text-base focus:border-white focus:ring-0 transition-colors outline-none appearance-none cursor-pointer font-medium drop-shadow-sm" defaultValue="" required>
                        <option value="" disabled className="text-white/60">Select Service...</option>
                        <option value="carpet" className="text-slate-800">Carpet Cleaning</option>
                        <option value="duct" className="text-slate-800">Air Duct Cleaning</option>
                        <option value="tile" className="text-slate-800">Ceramic Tile & Grout</option>
                        <option value="upholstery" className="text-slate-800">Upholstery Cleaning</option>
                        <option value="commercial" className="text-slate-800">Commercial Cleaning</option>
                      </select>
                      <div className="pointer-events-none absolute bottom-[16px] right-4 flex items-center text-white/80 group-hover:text-white transition-colors">
                        <svg className="fill-current h-4 w-4 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="block text-[11px] font-bold text-white/90 uppercase tracking-widest mb-1.5 pl-1 drop-shadow-sm">Zip Code</label>
                      <input type="text" id="zipCode" placeholder="Enter Zip..." className="w-full bg-white/15 border-0 border-b border-white rounded-t-md rounded-b-none px-5 py-4 text-white text-base placeholder-white/80 focus:border-white focus:ring-0 transition-colors outline-none font-medium drop-shadow-sm" required maxLength={5} />
                    </div>

                    <div className="pt-6">
                      <button type="submit" className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-4 rounded-md shadow-[0_8px_20px_rgba(220,38,38,0.35)] transform hover:-translate-y-1 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 group border border-red-500/20 animate-shadow-pulse">
                        Next Step
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Step 2 Visual Container */}
                  <div className={`space-y-6 animate-fade-in-up flex-col h-full ${formStep === 2 ? 'flex' : 'hidden'}`}>
                    <div>
                      <label htmlFor="fullName" className="block text-[11px] font-bold text-white/90 uppercase tracking-widest mb-1.5 pl-1 drop-shadow-sm">Full Name</label>
                      <input type="text" id="fullName" placeholder="John Doe" className="w-full bg-white/15 border-0 border-b border-white rounded-t-md rounded-b-none px-5 py-4 text-white text-base placeholder-white/80 focus:border-white focus:ring-0 transition-colors outline-none font-medium drop-shadow-sm" required={formStep === 2} />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-bold text-white/90 uppercase tracking-widest mb-1.5 pl-1 drop-shadow-sm">Phone Number</label>
                      <input type="tel" id="phone" placeholder="(318) 555-0123" className="w-full bg-white/15 border-0 border-b border-white rounded-t-md rounded-b-none px-5 py-4 text-white text-base placeholder-white/80 focus:border-white focus:ring-0 transition-colors outline-none font-medium drop-shadow-sm" required={formStep === 2} />
                    </div>

                    <div className="pt-6 mt-auto">
                      <button type="submit" className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-4 rounded-md shadow-[0_8px_20px_rgba(220,38,38,0.35)] transform hover:-translate-y-1 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 group border border-red-500/20">
                        Submit for Quote
                        <Zap className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Benefit Carousel Ticker */}
        <div className="absolute bottom-0 left-0 w-full z-20 bg-slate-900/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_30px_rgba(56,189,248,0.15)] overflow-hidden flex items-center h-14">
          {/* Glow accent along the top edge */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>

          <div className="flex animate-ticker whitespace-nowrap items-center w-max">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span className="text-white font-bold tracking-widest text-xs lg:text-sm uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] ml-4 lg:ml-6">Certified Indoor Air Specialists</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(220,38,38,0.9)] mx-4 lg:mx-6"></span>
                <span className="text-sky-300 font-bold tracking-widest text-xs lg:text-sm uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">75% Less Allergens & Dust</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(220,38,38,0.9)] mx-4 lg:mx-6"></span>
                <span className="text-sky-300 font-bold tracking-widest text-xs lg:text-sm uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">35% Increased Air Flow</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(220,38,38,0.9)] mx-4 lg:mx-6"></span>
                <span className="text-sky-300 font-bold tracking-widest text-xs lg:text-sm uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">Lower Energy Bills</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(220,38,38,0.9)] mx-4 lg:mx-6"></span>
                <span className="text-white font-bold tracking-widest text-xs lg:text-sm uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Healthier Home & Family</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(220,38,38,0.9)] mx-4 lg:mx-6"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;