import { useEffect } from 'react';
import { ShieldAlert, Droplets, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const CeramicTileSealing = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ceramic Tile Deep Scrubbing & Grout Sealing",
    "provider": { "@type": "LocalBusiness", "name": "Pro Carpet & Duct Cleaning" },
    "description": "High-pressure ceramic tile degreasing and color grout sealing for kitchens, bathrooms, and commercial floors in CenLa.",
    "serviceType": "Floor Cleaning Service"
  };

  return (
    <main className="pt-28 md:pt-36 pb-0 animate-fade-in-up bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="container mx-auto px-4 max-w-5xl mb-20">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Central Louisiana Service Entity</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">Deep Ceramic Tile Scrubbing &amp; Grout Sealing Restoration in CenLa</h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
          Don't rip up your expensive tile. Our high-pressure 1200 PSI heated extraction literally blasts years of black grease and grime right out of the porous grout lines, restoring your floors to their original showroom color.
        </p>

        <Link to="/contact" className="inline-flex items-center gap-3 bg-secondary text-white font-black px-8 py-4 rounded-sm hover:bg-red-700 transition-all shadow-xl uppercase tracking-[0.2em] text-sm mb-16">
          Request Grout Sealing Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 bg-slate-50 p-8 md:p-12 rounded-lg border-l-8 border-secondary shadow-lg">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <ShieldAlert className="w-6 h-6 text-secondary shrink-0" /> 
                Why did my grout lines turn completely black?
              </h3>
              <p className="text-slate-600 leading-relaxed">Grout is highly porous, like a hard sponge. When you mop with dirty water, it acts like a squeegee, pushing the liquid dirt directly into the grout lines where it permanently settles and stains.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <Droplets className="w-6 h-6 text-secondary shrink-0" /> 
                Does clear grout sealer actually protect the color?
              </h3>
              <p className="text-slate-600 leading-relaxed">Yes. After we scrub and blast the dirt out using 200°F water, we immediately apply a professional-grade clear or colored sealant. This fills the microscopic pores, locking the exact color in and blocking future dirty mop water from staining it.</p>
            </div>
          </div>

           <div className="flex flex-col justify-center">
            <div className="bg-white p-8 rounded-md shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4">The Danger of Mopping Unsealed Floors</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Unsealed floors absorb dirty swamp water every time you mop the house.
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Over-the-counter floor cleaners just build up a greasy, waxy sticky film on the tile surface.
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Our 1200 PSI truck mount vacuum extracts the water faster than it lays it down, leaving no mess behind.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border-t border-slate-200">
         <Testimonials limit={3} />
      </div>
    </main>
  );
};

export default CeramicTileSealing;
