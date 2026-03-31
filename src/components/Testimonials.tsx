import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: "Sarah J.",
    location: "Alexandria, LA",
    text: "My son's asthma improved dramatically after they cleaned our ducts. I was shocked at what came out of the vents. Pete and Dustin are the best!",
    rating: 5
  },
  {
    name: "Mike T.",
    location: "Pineville, LA",
    text: "The carpets look brand new. I thought I'd have to replace them, but their industrial steam cleaning saved me thousands.",
    rating: 5
  },
  {
    name: "Emily D.",
    location: "Ball, LA",
    text: "Professional, on time, and the price was exactly what they quoted. The 200 degree steam really makes a difference in pet odors. Highly recommend.",
    rating: 5
  },
  {
    name: "David L.",
    location: "Woodworth, LA",
    text: "Highly recommend Pro Carpet & Duct. They came out same-day for a water emergency and had our living room extracted and drying in hours. Incredible service.",
    rating: 5
  },
  {
    name: "Jennifer R.",
    location: "Alexandria, LA",
    text: "We just bought an older home and had them clean the ceramic tile and grout in the kitchen. It literally looks like a brand new floor. Night and day difference.",
    rating: 5
  },
  {
    name: "Mark T.",
    location: "Pineville, LA",
    text: "These guys are the real deal. Had them clean all the air ducts in my house and two large sectionals. They were very respectful of my property.",
    rating: 5
  },
  {
    name: "Amanda C.",
    location: "Boyce, LA",
    text: "I’ve used three different carpet cleaners in Rapides Parish over the years and Pro Carpet is by far the best. The carpets dried so fast and zero sticky residue.",
    rating: 5
  },
  {
    name: "Robert W.",
    location: "Lecompte, LA",
    text: "Very professional crew. They called 30 minutes before arriving, explained the entire process, and were able to get out a massive stain I thought was permanent.",
    rating: 5
  },
  {
    name: "Lisa M.",
    location: "Tioga, LA",
    text: "Fantastic family-owned business. I had them out to clean my elderly mother's carpets and they were so patient and kind to her. Will absolutely be using them again.",
    rating: 5
  }
];

interface TestimonialsProps {
  limit?: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({ limit }) => {
  const displayReviews = limit ? reviews.slice(0, limit) : reviews;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Neighbor Approved</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">Verified Results.</h2>
          <p className="text-slate-600 text-lg font-medium">Over 30 years of excellence in Central Louisiana.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayReviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-secondary relative group hover:border-primary transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 group-hover:text-secondary/10 transition-colors" />
              <div className="flex gap-1 mb-6 text-secondary">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-primary font-bold leading-relaxed mb-8 italic text-lg">"{review.text}"</p>
              <div className="mt-auto border-t border-slate-100 pt-6">
                <p className="font-black text-primary uppercase tracking-widest text-sm">{review.name}</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          {limit ? (
            <Link to="/reviews" className="inline-flex items-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-sm hover:bg-slate-900 transition-all shadow-2xl uppercase tracking-[0.2em] text-sm group">
              View All Google Reviews
              <Star className="w-5 h-5 text-secondary group-hover:rotate-12 transition-transform" />
            </Link>
          ) : (
            <a href="https://www.google.com/maps/place/Pro+Carpet+%26+Duct+Cleaning/@31.3036439,-92.4837381,17z/data=!3m1!4b1!4m6!3m5!1s0x863ab5867bacf2ff:0x5d8b7e10ef83c54f!8m2!3d31.3036439!4d-92.4837381!16s%2Fg%2F11jd_bktsx?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-sm hover:bg-slate-900 transition-all shadow-2xl uppercase tracking-[0.2em] text-sm group">
              Leave a Review
              <Star className="w-5 h-5 text-secondary group-hover:rotate-12 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;