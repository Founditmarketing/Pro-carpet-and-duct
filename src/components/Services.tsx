import { Fan, Droplets, Sofa, CheckCircle2, ArrowRight, Layers, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Carpet Cleaning',
    desc: 'Deep hot-water extraction using Hurricane™ truck-mounted blowers and 200°F industrial steam.',
    icon: <Droplets className="w-8 h-8" />,
    iconColor: 'text-secondary',
    features: ['Eliminates VIRUSES & GERMS', 'Pet Odor Destruction', 'Faster Drying Times', 'Hurricance™ Heavy Suction'],
    link: '/carpet'
  },
  {
    id: 2,
    title: 'Air Duct Cleaning',
    desc: 'State-of-the-art Rotobrush™ technology that works like an enormous air purifier for your home.',
    icon: <Fan className="w-8 h-8" />,
    iconColor: 'text-primary',
    features: ['35% More Air Flow', 'Lower Utility Bills', 'Pollutant Encapsulation', 'Rotobrush™ Technology'],
    link: '/air-duct'
  },
  {
    id: 3,
    title: 'Ceramic Tile & Grout',
    desc: '3000-PSI high-pressure spinner cleaning followed by professional sealing to guard your grout.',
    icon: <Layers className="w-8 h-8" />,
    iconColor: 'text-secondary',
    features: ['Professional Grout Sealing', 'Marble, Granite & Slate', 'Commercial & Residential', '3000-PSI Precision'],
    link: '/ceramic-tile'
  },
  {
    id: 4,
    title: 'Upholstery Cleaning',
    desc: 'High-pressure steam cleaning for antique and everyday furniture using Dupont™ protection.',
    icon: <Sofa className="w-8 h-8" />,
    iconColor: 'text-primary',
    features: ['Antique Furniture Care', 'Dupont™ Fiber Shield', 'Deep Dirt Extraction', 'Safe for All Fabrics'],
    link: '/upholstery'
  },
  {
    id: 5,
    title: 'Commercial Cleaning',
    desc: 'Specialized industrial-grade cleaning for grocery stores, offices, and commercial venues.',
    icon: <Building2 className="w-8 h-8" />,
    iconColor: 'text-secondary',
    features: ['24/7 Availability', 'Reduced Business Downtime', 'Large Scale Experience', 'A+ BBB Rated Results'],
    link: '/contact'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">Expert Cleaning Solutions</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Since 1985, we've provided Alexandria's most powerful residential and commercial cleaning. We don't just clean—we sanitize.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link to={s.link} key={s.id} className="group bg-white hover:bg-primary rounded-md p-8 shadow-md hover:shadow-[0_30px_60px_rgba(15,23,42,0.4)] hover:-translate-y-3 transition-all duration-500 border border-slate-200 hover:border-primary overflow-hidden relative z-10 cursor-pointer block">
              {/* Massive background ripple effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] transform translate-x-16 -translate-y-16 transition-all duration-[800ms] ease-out group-hover:scale-[16] group-hover:bg-secondary/10 z-0"></div>

              <div className="w-16 h-16 rounded-md bg-slate-50 group-hover:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-inner border border-slate-100 group-hover:border-white/20 relative z-10 backdrop-blur-sm">
                <div className={`${s.iconColor} group-hover:text-white transition-colors duration-500`}>{s.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-primary group-hover:text-white mb-3 uppercase tracking-tight transition-colors duration-500 relative z-10">{s.title}</h3>
              <p className="text-slate-600 group-hover:text-slate-300 mb-6 leading-relaxed min-h-[5rem] transition-colors duration-500 relative z-10">
                {s.desc}
              </p>
              <ul className="space-y-3 mb-8 relative z-10">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 group-hover:text-slate-200 transition-colors duration-500">
                    <CheckCircle2 className="w-4 h-4 text-accent group-hover:text-secondary transition-colors duration-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-secondary group-hover:text-white font-black hover:text-red-700 group-hover:hover:text-white transition-colors duration-500 uppercase tracking-widest text-xs relative z-10">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;