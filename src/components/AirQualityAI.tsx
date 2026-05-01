import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, User, Bot } from 'lucide-react';
import { getAirQualityConsultation } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AirQualityAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm Pete & Dustin's Virtual Assistant. Tell me about your home (allergies, pets, type of floors) and I'll recommend the best cleaning strategy for your family." }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleConsultation = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const result = await getAirQualityConsultation(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: result }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting. Please call us directly at (318) 445-4818 for expert advice." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultant" className="py-24 px-4 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6 bg-secondary px-4 py-2 rounded-sm shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="font-bold tracking-[0.2em] uppercase text-xs">AI Cleaning Consultant</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">Expert Advice, <br /> Built on 30 Years.</h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
            Not sure if you need deep steam cleaning or a full duct restoration? Our advisor is trained on Pete & Dustin's decades of hands-on experience in Alexandria.
          </p>

          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-5 p-6 bg-white/5 rounded-sm border border-white/10 backdrop-blur-sm group hover:border-secondary transition-all">
              <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center text-white shadow-lg group-hover:-rotate-6 transition-transform">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none mb-1">Customer</p>
                <p className="text-sm font-bold text-white">"My kids are sneezing more than usual..."</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 bg-white/5 rounded-sm border border-white/10 backdrop-blur-sm group hover:border-secondary transition-all">
              <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center text-white shadow-lg group-hover:-rotate-6 transition-transform">
                <Bot className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none mb-1">Our AI Advisor</p>
                <p className="text-sm font-bold text-white leading-tight">Recommends full duct sanitization.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-[#0a1425] border-2 border-white/10 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[600px] transform lg:rotate-1 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>

          {/* Header */}
          <div className="bg-primary/40 p-5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
              <span className="font-black text-xs uppercase tracking-[0.2em]">Live Connection</span>
            </div>
            <p className="text-[10px] text-slate-500 font-bold uppercase">Family Owned Since 1985</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-sm p-5 text-sm font-medium leading-relaxed shadow-lg ${msg.role === 'user'
                  ? 'bg-secondary text-white border-b-4 border-red-800'
                  : 'bg-primary border border-white/10 text-slate-100 border-b-4 border-slate-900'
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-primary border border-white/10 rounded-sm p-5 flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-primary/40 border-t border-white/5">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleConsultation()}
                placeholder="Ask about your home's air quality..."
                className="flex-1 bg-primary border-2 border-white/5 rounded-sm px-5 py-4 text-white placeholder-slate-500 focus:border-secondary transition-all outline-none font-bold"
              />
              <button
                onClick={handleConsultation}
                disabled={loading || !input.trim()}
                className="bg-secondary hover:bg-red-700 disabled:opacity-50 text-white px-6 rounded-sm shadow-xl transition-all flex items-center justify-center group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirQualityAI;