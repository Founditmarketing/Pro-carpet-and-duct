import React, { useEffect, useState } from 'react';
import { Phone, MapPin, Clock, Facebook, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { sendQuoteEmail } from '../utils/sendEmail';

const ContactPage: React.FC = () => {
  const { pathname } = useLocation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Carpet Deep Cleaning');
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const result = await sendQuoteEmail({ name, phone, email, service, message });

    if (result.success) {
      setStatus('success');
      setName(''); setPhone(''); setEmail(''); setMessage('');
    } else {
      setStatus('error');
      setErrorMsg(result.error || 'Something went wrong.');
    }
  };

  return (
    <main className="pt-28 md:pt-36 pb-20 animate-fade-in-up bg-primary min-h-screen relative overflow-hidden">
      <section className="container mx-auto max-w-7xl px-4 py-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div className="text-white relative flex flex-col justify-center">
            <div className="relative z-10 w-full mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">Fast, Reliable Cleaning Operations.</h1>
              <p className="text-slate-300 text-lg leading-relaxed drop-shadow-md max-w-lg">
                Whether you need a routine carpet refresh, emergency air duct sanitization, or a commercial bid, we have crews ready 24/7 in Central Louisiana.
              </p>
            </div>

            <div className="space-y-8 md:space-y-10">
              <a href="tel:+13184454818" className="flex items-start gap-4 md:gap-5 hover:text-white transition-all group">
                <div className="bg-secondary p-3 md:p-4 rounded-full group-hover:scale-110 transition-all border border-secondary shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                   <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Direct Line (24/7)</div>
                   <div className="text-2xl md:text-3xl font-bold group-hover:text-secondary transition-colors drop-shadow-md">(318) 445-4818</div>
                </div>
              </a>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="bg-white/5 p-3 md:p-4 rounded-full border border-white/10 shadow-inner">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                   <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Service Hubs</div>
                   <ul className="text-base md:text-lg text-slate-200 font-medium space-y-2">
                     <li>3603 Bayou Rapides Rd., Alexandria</li>
                     <li>522 Washboard Rd, Pineville</li>
                   </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="bg-white/5 p-3 md:p-4 rounded-full border border-white/10 shadow-inner">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                   <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Operating Hours</div>
                   <div className="text-base md:text-lg text-slate-200 font-medium">Open 24 Hours / 7 Days a week</div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 relative z-10 flex items-center justify-between lg:justify-start lg:gap-8">
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-slate-400">Follow Our Work</span>
              <a href="https://www.facebook.com/procarpetandductcleaning/" target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-secondary flex items-center justify-center transition-colors border border-white/10 hover:border-secondary shadow-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative mt-8 lg:mt-0 md:pl-8 lg:border-l border-white/10">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">Contact Our Team</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">Request A Free Quote</h2>
            <p className="text-slate-300 mb-8 text-lg font-medium">We typically reply with an accurate estimate within an hour.</p>

            {status === 'success' ? (
              <div className="bg-emerald-900/40 border-2 border-emerald-500/40 rounded-md p-12 text-center">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-300 font-medium">Dustin or Pete will give you a call shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-black text-white uppercase tracking-widest">Full Name</label>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-slate-900 bg-slate-50" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-black text-white uppercase tracking-widest">Phone Number</label>
                    <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-slate-900 bg-slate-50" placeholder="(318) 445-4818" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-black text-white uppercase tracking-widest">Email (optional — for reply)</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-slate-900 bg-slate-50" placeholder="john@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-black text-white uppercase tracking-widest">Priority Service</label>
                  <div className="relative">
                    <select value={service} onChange={e => setService(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all text-slate-900 font-bold appearance-none bg-slate-50 cursor-pointer">
                      <option>Carpet Deep Cleaning</option>
                      <option>Air Duct Sanitization</option>
                      <option>Ceramic Tile &amp; Grout</option>
                      <option>Upholstery Refresh</option>
                      <option>Commercial Venue Cleaning</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-black text-white uppercase tracking-widest">Specific Concerns</label>
                  <textarea rows={4} value={message} onChange={e => setMessage(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-slate-900 bg-slate-50 resize-none" placeholder="Tell us about allergies, pet odors, or building size..."></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-900/40 border border-red-500/40 rounded-sm px-4 py-3 text-red-300 text-sm font-bold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="w-full bg-secondary hover:bg-red-700 disabled:opacity-70 text-white font-black py-5 rounded-sm shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] mt-4">
                  {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {status === 'loading' ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
};

export default ContactPage;
