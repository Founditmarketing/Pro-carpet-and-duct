import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { sendQuoteEmail } from '../utils/sendEmail';

const StickyCallButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Carpet Deep Cleaning');
  const [details, setDetails] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const result = await sendQuoteEmail({ name, phone, service, message: details });
    if (result.success) {
      setStatus('success');
      setName(''); setPhone(''); setDetails('');
    } else {
      setStatus('error');
      setErrorMsg(result.error || 'Something went wrong.');
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setStatus('idle');
    setErrorMsg('');
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show footer after scrolling past 400px (roughly past the hero)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-primary/95 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-[80] lg:hidden flex justify-between items-center gap-4 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <a
          href="tel:+13184454818"
          className="flex-1 flex items-center justify-center gap-3 bg-secondary text-white font-black py-4 px-6 rounded-sm shadow-xl hover:bg-red-700 transition-all uppercase tracking-widest text-sm"
        >
          <Phone className="w-5 h-5 shadow-sm" />
          Call Us Now
        </a>
        <button
          className="flex-none p-4 bg-white/10 text-white rounded-sm font-semibold border border-white/20 active:bg-white/30 transition-all group pointer-events-auto"
          onClick={() => setIsModalOpen(true)}
        >
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Full Screen Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in-up">
          <div className="bg-white w-full max-w-md rounded-lg shadow-2xl relative overflow-hidden transform transition-all mt-10 md:mt-0">
            {/* Modal Header */}
            <div className="bg-primary p-6 flex items-center justify-between relative border-b-4 border-secondary">
              <div>
                <span className="text-secondary font-bold text-xs uppercase tracking-widest drop-shadow-sm mb-1 block">Request Service</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Direct Quote Request</h3>
              </div>
              <button 
                onClick={handleClose}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                  <p className="text-slate-500 text-sm font-medium">Dustin or Pete will call you shortly.</p>
                  <button onClick={handleClose} className="mt-6 text-xs font-black uppercase tracking-widest text-secondary hover:text-red-700 transition-colors">Close</button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 rounded-sm border-2 border-slate-200 focus:border-secondary focus:bg-slate-50 outline-none transition-all font-bold text-slate-800 bg-slate-50 text-sm" placeholder="John Doe" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-4 py-3 rounded-sm border-2 border-slate-200 focus:border-secondary focus:bg-slate-50 outline-none transition-all font-bold text-slate-800 bg-slate-50 text-sm" placeholder="(318) 555-5555" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest">Priority Service</label>
                    <select value={service} onChange={e => setService(e.target.value)} className="w-full px-4 py-3 rounded-sm border-2 border-slate-200 focus:border-secondary focus:bg-slate-50 outline-none transition-all font-bold text-slate-800 bg-slate-50 appearance-none text-sm cursor-pointer">
                      <option>Carpet Deep Cleaning</option>
                      <option>Air Duct Sanitization</option>
                      <option>Ceramic Tile &amp; Grout</option>
                      <option>Upholstery Refresh</option>
                      <option>Commercial Cleaning</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 pb-2">
                    <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest">Location / Details</label>
                    <textarea rows={3} value={details} onChange={e => setDetails(e.target.value)} className="w-full px-4 py-3 rounded-sm border-2 border-slate-200 focus:border-secondary focus:bg-slate-50 outline-none transition-all font-bold text-slate-800 bg-slate-50 resize-none text-sm" placeholder="Example: 3 rooms near Pineville..."></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-sm px-3 py-2 text-red-700 text-xs font-bold">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'} className="w-full bg-secondary hover:bg-red-700 disabled:opacity-70 active:scale-95 text-white font-black py-4 rounded-sm shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                    {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {status === 'loading' ? 'Sending...' : 'Request Estimate'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyCallButton;