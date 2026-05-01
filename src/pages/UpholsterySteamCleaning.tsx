import { useEffect } from 'react';
import { ArrowRight, Sofa, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const UpholsterySteamCleaning = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Upholstered Sectional & Sofa Steam Cleaning",
    "provider": { "@type": "LocalBusiness", "name": "Pro Carpet & Duct Cleaning" },
    "description": "Delicate hot-water extraction and steam sanitization for living room sofas, sectionals, and dining chairs across CenLa.",
    "serviceType": "Upholstery Cleaning Service"
  };

  return (
    <main className="pt-28 md:pt-36 pb-0 animate-fade-in-up bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="container mx-auto px-4 max-w-5xl mb-20">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Alexandria Service Entity</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">Professional Sectional &amp; Sofa Steam Cleaning in Alexandria, LA</h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
          Your couches absorb body oils, dead skin cells, and microscopic dust mites every single day. We use highly calibrated, delicate steam extraction to sanitize the deepest layers of your favorite furniture without damaging the fabric.
        </p>

        <Link to="/contact" className="inline-flex items-center gap-3 bg-secondary text-white font-black px-8 py-4 rounded-sm hover:bg-red-700 transition-all shadow-xl uppercase tracking-[0.2em] text-sm mb-16">
          Request Upholstery Estimate
          <ArrowRight className="w-5 h-5" />
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 bg-slate-50 p-8 md:p-12 rounded-lg border-l-8 border-secondary shadow-lg">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <Sofa className="w-6 h-6 text-secondary shrink-0" /> 
                Will steam ruin the color of my couch?
              </h3>
              <p className="text-slate-600 leading-relaxed">No. We individually inspect the stitching and fabric tags of every single piece of upholstery we clean. We adjust our heat calibration and pressure specifically to the material, guaranteeing color-fastness.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <Sparkles className="w-6 h-6 text-secondary shrink-0" /> 
                Can you get dark body oils out of recliner armrests?
              </h3>
              <p className="text-slate-600 leading-relaxed">Yes. Our heavy-duty enzymatic upholstery detergents rapidly break down tough protein bonds (body oils) and sweat stains, extracting the dark film back to its original tone.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-primary p-8 rounded-md shadow-md text-white">
              <h3 className="text-2xl font-bold mb-4 font-serif">Stop Hiding Stains</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Flipping the cushions to hide heavy pet stains and wine spills only traps the bacteria deeper into the furniture base.
              </p>
              <div className="bg-white/10 p-4 rounded-sm border border-white/20">
                <p className="font-bold tracking-wider uppercase text-xs text-secondary mb-2">The Solution</p>
                <p className="text-sm">We use a dedicated upholstery hand-tool that concentrates the maximum power of our truck-mounted vacuum directly into a narrow stream, literally vacuuming out the water instantly.</p>
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

export default UpholsterySteamCleaning;
