import React from 'react';
import { Flame, Droplets, Zap, Gauge, ShieldCheck, Leaf, CheckCircle2 } from 'lucide-react';

const Equipment: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">Industrial Grade Technology</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">The Power of <span className="text-secondary underline decoration-white/20">230°F</span> Cleaning</h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
            Most rental units and portable cleaners only reach 140°F. Our <span className="text-white font-bold">Hurricane™ truck-mounted systems</span> generate industrial steam that melts oil and kills bacteria on contact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          <div className="bg-white/5 p-5 md:p-8 rounded-md border border-white/10 hover:border-secondary transition-all group backdrop-blur-sm">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-secondary rounded-sm flex items-center justify-center mb-3 md:mb-6 group-hover:-rotate-12 transition-transform shadow-lg">
              <Flame className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1.5 md:mb-3 uppercase tracking-tight">Virus Killing Heat</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-snug md:leading-relaxed">
              Temperatures up to 230° for germ, virus, and odor elimination. It's not just a clean appearance—it's industrial-grade sanitization.
            </p>
          </div>

          <div className="bg-white/5 p-5 md:p-8 rounded-md border border-white/10 hover:border-secondary transition-all group backdrop-blur-sm">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-sm flex items-center justify-center mb-3 md:mb-6 group-hover:-rotate-12 transition-transform shadow-lg">
              <Zap className="w-5 h-5 md:w-8 md:h-8 text-secondary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1.5 md:mb-3 uppercase tracking-tight">Hurricane™ Suction</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-snug md:leading-relaxed">
              Powered by massive truck-mounted blower engines, providing heavy-duty suction that portable electric units simply cannot match.
            </p>
          </div>

          <div className="bg-white/5 p-5 md:p-8 rounded-md border border-white/10 hover:border-secondary transition-all group backdrop-blur-sm">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-sm flex items-center justify-center mb-3 md:mb-6 group-hover:-rotate-12 transition-transform shadow-lg">
              <Droplets className="w-5 h-5 md:w-8 md:h-8 text-secondary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1.5 md:mb-3 uppercase tracking-tight">Hyper-Drying</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-snug md:leading-relaxed">
              Industrial air flow means 95% of moisture is removed instantly. Your carpets are ready to walk on in hours, not days.
            </p>
          </div>

          <div className="bg-white/5 p-5 md:p-8 rounded-md border border-white/10 hover:border-secondary transition-all group backdrop-blur-sm">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-sm flex items-center justify-center mb-3 md:mb-6 group-hover:-rotate-12 transition-transform shadow-lg">
              <Gauge className="w-5 h-5 md:w-8 md:h-8 text-secondary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1.5 md:mb-3 uppercase tracking-tight">Residue Free</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-snug md:leading-relaxed">
              Super-heated industrial water dissolves oils naturally, reducing the need for soaps that leave sticky dirt-attracting residues.
            </p>
          </div>
        </div>

        {/* Deep Dive Section */}
        <div className="bg-white/5 rounded-md border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="grid md:grid-cols-2">
            {/* Thermal Sanitization Column */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-secondary/20 rounded-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Thermal Shock</h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                At <strong className="text-white">230°F</strong>, our water molecules become industrial steam. This creates a "thermal shock" that instantly:
              </p>
              <ul className="space-y-4 font-bold text-sm">
                <li className="flex items-start gap-4 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>Destroys Bacteria & Viruses on contact without harsh chemicals.</span>
                </li>
                <li className="flex items-start gap-4 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>Eliminates Dust Mites and penetrates deep into carpet fibers.</span>
                </li>
              </ul>
            </div>

            {/* Chemical-Free Column */}
            <div className="p-8 md:p-12 relative">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-accent/20 rounded-sm">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Eco-Safe Power</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed font-medium">
                  Our extreme temperatures act as a powerful natural solvent. This allows us to protect your home environment while getting deeper results.
                </p>
                <ul className="space-y-4 font-bold text-sm">
                  <li className="flex items-start gap-4 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>No Sticky Residue: fibers stay cleaner for much longer.</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Safe for Pets & Kids: floors are safe immediately after drying.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Thermometer Bar Footer */}
          <div className="bg-primary/50 p-6 md:p-10 border-t border-white/10 flex flex-col md:flex-row items-center gap-8">
            <span className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Heat Performance</span>
            <div className="flex-1 w-full h-10 bg-black/30 rounded-full relative overflow-hidden ring-1 ring-white/10 shadow-inner">
              {/* Gradient bar */}
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-amber-400 to-secondary w-[85%] opacity-90 transition-all duration-1000"></div>

              {/* Labels overlaid */}
              <div className="absolute inset-0 flex items-center justify-between px-6 text-[10px] md:text-xs font-black text-slate-900 z-10 uppercase tracking-tighter">
                <span className="text-blue-900">140°F Rental Cleaners</span>
                <span className="text-white drop-shadow-md text-sm animate-pulse">Up to 230° germ virus and odor elimination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;