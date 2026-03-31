import { useEffect } from 'react';
import { Fan, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const HvacDuctCleaning = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Rotobrush Air Duct Sanitization",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pro Carpet & Duct Cleaning"
    },
    "areaServed": [
      { "@type": "City", "name": "Pineville", "sameAs": "https://en.wikipedia.org/wiki/Pineville,_Louisiana" },
      { "@type": "City", "name": "Alexandria", "sameAs": "https://en.wikipedia.org/wiki/Alexandria,_Louisiana" }
    ],
    "description": "Advanced Rotobrush technology to physically scrub and sanitize HVAC ductwork, removing mold, allergens, and dust buildup in CenLa.",
    "serviceType": "Air Duct Cleaning Service"
  };

  return (
    <main className="pt-28 md:pt-36 pb-0 animate-fade-in-up bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="container mx-auto px-4 max-w-5xl mb-20">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Pineville & Alexandria Service Entity</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">Advanced HVAC Rotobrush Air Duct Cleaning &amp; Sanitization in Pineville</h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
          Don't just blow dust around. We use the industry-leading Rotobrush™ system to physically scrub the interior walls of your HVAC ductwork, pulling out years of accumulated allergens, pet dander, and mold spores.
        </p>

        <Link to="/contact" className="inline-flex items-center gap-3 bg-secondary text-white font-black px-8 py-4 rounded-sm hover:bg-red-700 transition-all shadow-xl uppercase tracking-[0.2em] text-sm mb-16">
          Get a Duct Sanitization Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 bg-slate-50 p-8 md:p-12 rounded-lg border-l-8 border-secondary shadow-lg">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <Fan className="w-6 h-6 text-secondary shrink-0" /> 
                Why is the Rotobrush system better than air whipping?
              </h3>
              <p className="text-slate-600 leading-relaxed">Negative air vacuums just suck loose debris. The Rotobrush has a high-speed spinning brush head that actively scrubs the caked-on mold and heavy particulate matter stuck to the sidewalls of your ducting while a massive vacuum instantly extracts it.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <ShieldCheck className="w-6 h-6 text-secondary shrink-0" /> 
                Will this stop my chronic indoor allergies?
              </h3>
              <p className="text-slate-600 leading-relaxed">If your HVAC system is pushing mold spores, dust mites, and pet dander through the vents 24/7, your allergies will never stop. Thorough duct sanitization stops the cycle and dramatically enhances indoor breathing quality.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-primary p-8 rounded-md shadow-md text-white">
              <h3 className="text-2xl font-bold mb-4 font-serif">The Dust Mite Danger</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Most Louisiana homes build up pounds of dust and pollen inside their vents over just a few years due to high humidity. This creates the perfect breeding ground for microscopic dust mites.
              </p>
              <div className="bg-white/10 p-4 rounded-sm border border-white/20">
                <p className="font-bold tracking-wider uppercase text-xs text-secondary mb-2">Our Process</p>
                <p className="text-sm">We don't just extract the dust; we apply an antimicrobial fogger deep into the system to kill living bacteria and mold spores, preventing them from blowing into your living room.</p>
              </div>
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

export default HvacDuctCleaning;
