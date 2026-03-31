import { useEffect } from 'react';
import { ShieldAlert, Droplets, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const PetOdorRemoval = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pet Urine Odor & Stain Carpet Extraction",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pro Carpet & Duct Cleaning",
      "telephone": "+1-318-445-4818",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3603 Bayou Rapides Rd",
        "addressLocality": "Alexandria",
        "addressRegion": "LA",
        "postalCode": "71303",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Alexandria", "sameAs": "https://en.wikipedia.org/wiki/Alexandria,_Louisiana" },
      { "@type": "City", "name": "Pineville", "sameAs": "https://en.wikipedia.org/wiki/Pineville,_Louisiana" }
    ],
    "description": "Professional pet odor removal, deep enzymatic stain treatment, and 200°F steam carpet extraction for residential homes in Alexandria and Pineville.",
    "serviceType": "Carpet Cleaning Service"
  };

  return (
    <main className="pt-28 md:pt-36 pb-0 animate-fade-in-up bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="container mx-auto px-4 max-w-5xl mb-20">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Alexandria & Pineville Service Entity</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">Expert Pet Urine Odor &amp; Stain Carpet Extraction in Alexandria, LA</h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
          Standard carpet cleaning only masks smells. Our 200°F industrial steam extraction penetrates the carpet pad to physically destroy odor-causing bacteria and permanent urine crystals.
        </p>

        <Link to="/contact" className="inline-flex items-center gap-3 bg-secondary text-white font-black px-8 py-4 rounded-sm hover:bg-red-700 transition-all shadow-xl uppercase tracking-[0.2em] text-sm mb-16">
          Request Extraction Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 bg-slate-50 p-8 md:p-12 rounded-lg border-l-8 border-secondary shadow-lg">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <ShieldAlert className="w-6 h-6 text-secondary shrink-0" /> 
                Can you get old dog urine smell out of the carpet pad?
              </h3>
              <p className="text-slate-600 leading-relaxed">Yes. If left untreated, urine seeps into the subfloor and crystallizes. We utilize heavy-duty enzymatic pre-treatments followed by high-suction Hurricane™ extraction to pull liquid from the depth of the pad, not just the surface fibers.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary flex gap-3 items-center">
                <Droplets className="w-6 h-6 text-secondary shrink-0" /> 
                Will the stains come back after the carpet dries?
              </h3>
              <p className="text-slate-600 leading-relaxed">"Wicking" occurs when surface-level cleaning fails to reach the pad. Because our truck-mounted extraction physically removes the soil from the base layer, stains do not wick back up. Your carpets dry fast and remain clean.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white p-8 rounded-md shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4">Why DIY Rentals Fail on Pet Stains</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Grocery store rentals lack the heat (200°F) required to sanitize bacteria.
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Weak suction leaves carpets soaking wet, which actually promotes rapid mold growth inside the pad.
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Over-the-counter soaps leave a sticky residue that rapidly attracts new dirt, making the stain look worse weeks later.
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

export default PetOdorRemoval;
