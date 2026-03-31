import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CarpetService from './pages/CarpetService';
import AirDuctService from './pages/AirDuctService';
import UpholsteryService from './pages/UpholsteryService';
import TileService from './pages/TileService';
import Reviews from './pages/Reviews';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';
import StickyCallButton from './components/StickyCallButton';
import { Phone, MapPin, Facebook, Clock, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header wrapper for Top Bar + Nav */}
      <header className={`fixed top-0 w-full z-50 flex flex-col transition-transform duration-300 ${isScrolled ? '-translate-y-9' : 'translate-y-0'}`}>
        {/* Top Info Bar */}
        <div className="bg-primary text-slate-300 px-4 md:px-8 text-xs font-semibold flex items-center justify-between w-full h-9">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <MapPin className="w-3.5 h-3.5 text-secondary" /> Serving Alexandria & Cenla
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <Clock className="w-3.5 h-3.5 text-secondary" /> Emergency Service Available
            </span>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end w-full md:w-auto text-[10px] md:text-xs">
             <a href="tel:+13184454818" className="flex items-center gap-1.5 text-white font-bold tracking-wider uppercase hover:text-secondary transition-colors">
               <Phone className="w-3.5 h-3.5 text-secondary" /> Call For A Free Quote: (318) 445-4818
             </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`w-full h-20 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="w-full px-4 md:px-8 h-full flex items-center justify-between">
          <div className="flex items-center h-full py-2 relative z-10 transition-transform duration-500 ease-out">
            <img 
              src="/procarpetlogotransparent-2.png" 
              alt="Pro Carpet & Duct Logo" 
              className={`w-auto object-contain origin-left transition-all duration-500 ease-out ${isScrolled ? 'h-10 md:h-[70%] lg:h-full scale-100 mt-0 drop-shadow-md' : 'h-12 md:h-full scale-100 lg:scale-[1.35] mt-1 lg:mt-7 drop-shadow-lg'}`} 
            />
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold text-white drop-shadow-md justify-end flex-grow pr-4">
            <Link to="/" className="hover:text-secondary transition-colors uppercase tracking-widest">Home</Link>
            <Link to="/carpet" className="hover:text-secondary transition-colors uppercase tracking-widest">Carpet</Link>
            <Link to="/air-duct" className="hover:text-secondary transition-colors uppercase tracking-widest">Air Duct</Link>
            <Link to="/upholstery" className="hover:text-secondary transition-colors uppercase tracking-widest">Upholstery</Link>
            <Link to="/ceramic-tile" className="hover:text-secondary transition-colors uppercase tracking-widest">Ceramic Tile</Link>
            <Link to="/reviews" className="hover:text-secondary transition-colors uppercase tracking-widest">Reviews</Link>
            <Link to="/gallery" className="hover:text-secondary transition-colors uppercase tracking-widest">Gallery</Link>
            <Link to="/contact" className="hover:text-secondary transition-colors uppercase tracking-widest">Contact Us</Link>
            
            <div className="flex items-center ml-2 border-l border-white/30 pl-6 xl:pl-8">
              <a href="https://www.facebook.com/procarpetandductcleaning/" target="_blank" rel="noreferrer" className="hover:text-secondary transition-transform hover:scale-110"><Facebook className="w-5 h-5" /></a>
            </div>

            <a href="tel:+13184454818" className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-red-700 transition-all flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-bold uppercase tracking-tight ml-4">
              <Phone className="w-4 h-4" />
              (318) 445-4818
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-1 sm:gap-4 pr-2">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white p-2 ml-2 hover:text-secondary transition-colors">
              <Menu className="w-7 h-7 drop-shadow-md" />
            </button>
          </div>
        </div>
      </nav>

      </header>
      
      {/* Mobile Menu Backdrop (Moved outside header for z-index stacking) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Slide-Out Panel (Moved outside header) */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-primary shadow-2xl z-[9999] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] lg:hidden flex flex-col border-l border-white/5 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/40">
          <img src="/procarpetlogotransparent-2.png" alt="Pro Carpet Logo" className="h-10 w-auto object-contain" />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-8">
          <Link to="/" className="group flex items-center gap-4 text-xl font-bold text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-2 h-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors"></div> Home
          </Link>
          <Link to="/carpet" className="group flex items-center gap-4 text-xl font-bold text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-2 h-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors"></div> Carpet
          </Link>
          <Link to="/air-duct" className="group flex items-center gap-4 text-xl font-bold text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
             <div className="w-2 h-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors"></div> Air Duct
          </Link>
          <Link to="/upholstery" className="group flex items-center gap-4 text-xl font-bold text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
             <div className="w-2 h-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors"></div> Upholstery
          </Link>
          <Link to="/ceramic-tile" className="group flex items-center gap-4 text-xl font-bold text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
             <div className="w-2 h-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors"></div> Ceramic Tile
          </Link>
          <Link to="/reviews" className="group flex items-center gap-4 text-xl font-bold text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
             <div className="w-2 h-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors"></div> Reviews
          </Link>
          <Link to="/gallery" className="group flex items-center gap-4 text-xl font-bold text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
             <div className="w-2 h-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors"></div> Gallery
          </Link>
          <Link to="/contact" className="group flex items-center gap-4 text-xl font-bold text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
             <div className="w-2 h-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors"></div> Contact Us
          </Link>
        </div>

        {/* Contact Footer */}
        <div className="p-8 bg-slate-900 border-t border-white/10 flex flex-col gap-6">
          <a href="tel:+13184454818" className="flex items-center gap-4 text-white font-bold hover:text-secondary transition-colors group">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors border border-secondary/20 text-secondary group-hover:text-white shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
               <span className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Call 24/7 For Action</span>
               <span className="text-xl">(318) 445-4818</span>
            </div>
          </a>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carpet" element={<CarpetService />} />
        <Route path="/air-duct" element={<AirDuctService />} />
        <Route path="/upholstery" element={<UpholsteryService />} />
        <Route path="/ceramic-tile" element={<TileService />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 px-6 border-t border-slate-900">
        <div className="container mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
               <img src="/procarpetlogotransparent-2.png" alt="Pro Carpet & Duct Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Alexandria's premier indoor air quality specialists. Serving Pineville, Alexandria, and surrounding areas since 1985. Family owned and operated.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b border-secondary/30 pb-2">Contact</h4>
            <div className="space-y-4 text-slate-200 text-sm">
              <a href="tel:+13184454818" className="flex items-center gap-3 hover:text-secondary transition-colors font-bold">
                <Phone className="w-4 h-4 text-secondary" />
                (318) 445-4818
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>3603 Bayou Rapides Rd., Alexandria, LA 71303</span>
                  <span>522 Washboard Rd, Pineville, LA 71360</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b border-secondary/30 pb-2">Hours</h4>
            <div className="space-y-4 text-slate-200 text-sm">
              <div className="flex items-center gap-3 bg-secondary/10 p-3 rounded-md border border-secondary/20">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-bold text-base uppercase tracking-wider text-secondary">Open 24/7</span>
              </div>
              <p className="text-xs text-slate-400">Emergency cleaning services available around the clock.</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b border-secondary/30 pb-2">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {['Alexandria', 'Pineville', 'Ball', 'Boyce', 'Forest Hill', 'Woodworth', 'Lecompte', 'Tioga', 'Libuse'].map(city => (
                <span key={city} className="px-3 py-1 bg-white/10 rounded-sm text-xs text-slate-200 border border-white/10 hover:border-secondary hover:text-white transition-colors cursor-default">{city}</span>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://www.facebook.com/procarpetandductcleaning/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} Pro Carpet & Duct Cleaning. All rights reserved. <br className="md:hidden" /> Established 1985.
        </div>
      </footer>

      <StickyCallButton />
    </div>
    </Router>
  );
};

export default App;