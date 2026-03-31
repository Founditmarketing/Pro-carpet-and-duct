import { useEffect } from 'react';
import { Factory, Sparkles, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const CommercialTileDegreasing = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Restaurant Tile & Grout Degreasing",
    "provider": { "@type": "LocalBusiness", "name": "Pro Carpet & Duct Cleaning" },
    "description": "Industrial-grade grease extraction and commercial kitchen tile scrubbing for Alexandria restaurants.",
    "serviceType": "Commercial Cleaning Service"
  };

  return (
    <main className="pt-28 md:pt-36 pb-0 animate-fade-in-up bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="container mx-auto px-4 max-w-5xl mb-20">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Alexandria Commercial Entity</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">Commercial Restaurant Tile &amp; Grout Degreasing in Alexandria</h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
          Slippery kitchen floors are a liability. We utilize 200°F turbo-heated pressure washing connected to immense suction to instantly cut through caked-on fryer grease and restore traction to your commercial tile lines.
        </p>

        <Link to="/contact" className="inline-flex items-center gap-3 bg-secondary text-white font-black px-8 py-4 rounded-sm hover:bg-red-700 transition-all shadow-xl uppercase tracking-[0.2em] text-sm mb-16">
          Request Commercial Bid
          <ArrowRight className="w-5 h-5" />
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 bg-slate-50 p-8 md:p-12 rounded-lg border-l-8 border-secondary shadow-lg">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <Factory className="w-6 h-6 text-secondary shrink-0" /> 
                Can you strip built-up waxy degreaser off our floors?
              </h3>
              <p className="text-slate-600 leading-relaxed">Yes. Traditional deck brushing only smears heavy kitchen grease into the grout joints. We use intense industrial solvents designed to instantly dissolve layers of hardened, sticky degreaser buildup.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <Sparkles className="w-6 h-6 text-secondary shrink-0" /> 
                Do you operate after business hours?
              </h3>
              <p className="text-slate-600 leading-relaxed">Absolutely. We understand downtime costs you money. We deploy our extraction teams fully 24/7 across Louisiana to ensure your dining room or kitchen is completely sanitized and dry before you unlock the doors the next morning.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white p-8 rounded-md shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4">Passing Health Inspections</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Deep black grout lines harbor immense amounts of dangerous bacteria.
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Our sanitization process guarantees a massive visual improvement, immediately upgrading the overall cleanliness score of your dining space and kitchen.
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

export default CommercialTileDegreasing;
