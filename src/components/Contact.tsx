import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { sendQuoteEmail } from '../utils/sendEmail';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Carpet Cleaning (Industrial Steam)');
  const [message, setMessage] = useState('');

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
    <section id="contact" className="py-24 px-4 bg-white relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Column: Form */}
          <div className="animate-fade-in-up">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">Contact Our Team</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">Request A Free Quote</h2>
            <p className="text-slate-600 mb-8 text-lg font-medium">
              Ready for a cleaner, healthier home? Fill out the form below or call us directly. We're <span className="text-secondary font-bold">Open 24/7</span> for your convenience.
            </p>

            {status === 'success' ? (
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-md p-12 text-center shadow-xl">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 font-medium">Dustin or Pete will give you a call shortly to discuss your home's needs.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-black text-primary uppercase tracking-widest">Full Name</label>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-slate-100 focus:border-secondary focus:bg-slate-50 outline-none transition-all font-bold text-slate-900" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-black text-primary uppercase tracking-widest">Phone Number</label>
                    <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-slate-100 focus:border-secondary focus:bg-slate-50 outline-none transition-all font-bold text-slate-900" placeholder="(318) 445-4818" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-black text-primary uppercase tracking-widest">Email (optional)</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-slate-100 focus:border-secondary focus:bg-slate-50 outline-none transition-all font-bold text-slate-900" placeholder="john@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-black text-primary uppercase tracking-widest">Priority Service</label>
                  <select value={service} onChange={e => setService(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-slate-100 focus:border-secondary focus:bg-slate-50 outline-none transition-all text-slate-600 font-bold appearance-none">
                    <option>Carpet Cleaning (Industrial Steam)</option>
                    <option>Air Duct Cleaning (Rotobrush™)</option>
                    <option>Ceramic Tile &amp; Grout Sealing</option>
                    <option>Upholstery Refresh</option>
                    <option>Commercial Venue Cleaning</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-black text-primary uppercase tracking-widest">Specific Concerns</label>
                  <textarea rows={4} value={message} onChange={e => setMessage(e.target.value)} className="w-full px-5 py-4 rounded-sm border-2 border-slate-100 focus:border-secondary focus:bg-slate-50 outline-none transition-all font-bold text-slate-900" placeholder="Tell us about allergies, pet odors, or building size..."></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-sm px-4 py-3 text-red-700 text-sm font-bold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="w-full bg-primary hover:bg-slate-900 disabled:opacity-70 text-white font-black py-5 rounded-sm shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em]">
                  {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 text-secondary" />}
                  {status === 'loading' ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-md border-l-8 border-secondary shadow-lg">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary shadow-md shrink-0">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="space-y-1 overflow-hidden">
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Direct Line • 24/7</p>
                  <a href="tel:+13184454818" className="text-2xl md:text-3xl font-black text-primary hover:text-secondary transition-colors tracking-tighter">(318) 445-4818</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-md border-l-8 border-primary shadow-lg">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-md shrink-0">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-1 overflow-hidden">
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Email Inquiries</p>
                  <a href="mailto:procarpetandductcleaning@gmail.com" className="text-lg md:text-xl font-black text-primary hover:text-secondary transition-colors tracking-tight truncate block">procarpetandductcleaning@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map & Areas */}
          <div className="space-y-8 lg:pt-12">
            <div className="bg-primary rounded-md p-2 shadow-2xl h-[450px] relative">
              <div className="absolute top-6 left-6 z-10 bg-white text-primary px-5 py-3 rounded-sm text-xs font-black shadow-2xl flex items-center gap-3 border-b-4 border-secondary">
                <MapPin className="w-5 h-5 text-secondary" />
                SERVING ALL OF CENTRAL LOUISIANA
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108428.61867119106!2d-92.5375785084931!3d31.30064366606821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86254c7d0e451b6d%3A0x6292723030d35091!2sAlexandria%2C%20LA!5e0!3m2!1sen!2sus!4v1709228955681!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.125rem', filter: 'grayscale(0.1) contrast(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Alexandria', 'Pineville', 'Ball', 'Boyce', 'Woodworth', 'Lecompte', 'Forest Hill', 'Tioga', 'Libuse'].map((city) => (
                <div key={city} className="flex items-center gap-3 bg-white p-4 rounded-sm border-2 border-slate-50 hover:border-secondary/20 hover:bg-slate-50 transition-all group">
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(211,47,47,0.5)]"></div>
                  <span className="text-xs font-black text-primary uppercase tracking-widest">{city}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;