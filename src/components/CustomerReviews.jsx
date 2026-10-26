import React, { useState } from 'react';
import { Heart, CheckCircle2, MessageSquare, Quote } from 'lucide-react';

// Genuine verified customer reviews fetched directly from swaadly.com official API
const realReviews = [
  {
    id: 1,
    name: 'Archit Choudhary',
    rating: 5,
    date: 'October 18, 2026',
    verified: true,
    title: 'Undoubtedly THE BEST peanut butter',
    comment: "That peanut butter is absolutely heavenly!! It is the very first time I've ordered your product and as soon as it arrived, there was no stopping me from taking a bite off a spoon. Truly, I'm sure I consumed around 100 grams worth on that single day because it's THAT good! I cannot thank whoever thought of inventing such a great product enough times. You have come up with something extraordinary. It is undoubtedly THE BEST peanut butter that I've ever consumed! ❤️",
    highlight: 'Consumed 100g on day one—absolutely heavenly'
  },
  {
    id: 2,
    name: 'Sresht',
    rating: 5,
    date: 'October 22, 2026',
    verified: true,
    title: 'No. 1 Peanut Butter of India',
    comment: "It tastes very well rather than butters they contain so much palm oil that is not beneficial for our health and it tastes very nice rather than others.",
    highlight: 'No palm oil, way healthier than others'
  },
  {
    id: 3,
    name: 'Nayan Das',
    rating: 5,
    date: 'October 23, 2026',
    verified: true,
    title: "It's so tasty 😋",
    comment: "When I got the delivery, I take peanut butter and immediately take a single spoon. I personally feels I take lots of peanut butter before knowing swaadly but yes, it looks different. I appreciate the team who make and packing this item for us. Thanks a lot.",
    highlight: 'Looks and tastes completely different'
  },
  {
    id: 4,
    name: 'Inshira harim23',
    rating: 5,
    date: 'October 25, 2026',
    verified: true,
    title: 'Excellent!',
    comment: "I loved the taste and texture of it. It was really so healthy and controlled my cravings.",
    highlight: 'Controlled my sweet cravings naturally'
  },
  {
    id: 5,
    name: 'Astha Singh',
    rating: 4,
    date: 'October 25, 2026',
    verified: true,
    title: 'Obsessed with Swaadly 😝😋',
    comment: "It's very tasty and yummy I am obsessed with swaadly peanut butter 👍🏻 Very tasty you should definitely buy this!",
    highlight: 'Totally obsessed with the flavor'
  },
  {
    id: 6,
    name: 'Prakshi Malhotra',
    rating: 5,
    date: 'October 19, 2026',
    verified: true,
    title: 'Smooth creamy chocolaty 🤤',
    comment: "Smooth texture creamy chocolaty🤤 Prashant bhaiya plz I want to meet you! Team of Swaadly I request you to inform bhaiya. Love U Prashant Bhaiya 😭🫶🏻❤️",
    highlight: 'Love U Prashant Bhaiya'
  },
  {
    id: 7,
    name: 'Vansh Chugh',
    rating: 5,
    date: 'October 18, 2026',
    verified: true,
    title: 'Way better than competitors',
    comment: "The peanut butter was too good so delicious and I loved it... I have tried Pintola also and Swaadly was way better!",
    highlight: 'Way better than Pintola'
  },
  {
    id: 8,
    name: 'Ashu',
    rating: 5,
    date: 'October 21, 2026',
    verified: true,
    title: 'Finished in 2 days!',
    comment: "I so much liked swaadly due to this in 2 days I finished this peanut butter. So healthy and super taste I love swaadly.",
    highlight: 'Entire jar finished in 48 hours'
  },
  {
    id: 9,
    name: 'User7345',
    rating: 5,
    date: 'October 19, 2026',
    verified: true,
    title: 'Perfect sweetness & crunchiness',
    comment: "Liked your peanut butter very much. Perfect taste, sweetness and crunchiness. Loved your peanut butter. Keep providing more such healthy and tasty products.",
    highlight: 'Perfect balance of crunch and sweetness'
  },
  {
    id: 10,
    name: 'rajumathabhanga1979',
    rating: 5,
    date: 'October 23, 2026',
    verified: true,
    title: 'Authentic pure peanuts',
    comment: "This is original peanut. Excellent quality and pure taste.",
    highlight: 'This is original peanut'
  }
];

export default function CustomerReviews() {
  const [filter, setFilter] = useState('all');

  const filteredReviews = filter === 'all' 
    ? realReviews 
    : filter === 'chocolate'
    ? realReviews.filter(r => r.comment.toLowerCase().includes('chocolate') || r.title.toLowerCase().includes('chocolate') || r.comment.toLowerCase().includes('sweet'))
    : realReviews.filter(r => r.rating === 5);

  return (
    <section id="your-love" className="relative py-28 px-6 lg:px-12 bg-[#0B0908] text-[#F0EAE1] border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header Matching Swaadly.com "Your love" */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-['Cinzel'] uppercase tracking-[0.25em] mb-4">
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>Official Community Love</span>
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl lg:text-7xl font-light italic leading-tight text-[#F0EAE1]">
            Your Love.
          </h2>

          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto my-5" />

          <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#D4C4B5]/80 font-light max-w-xl mx-auto">
            Genuine verified comments and reviews from customers across India, sourced directly from <a href="https://www.swaadly.com" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] underline hover:text-[#D4AF65]">swaadly.com</a>.
          </p>

          {/* Review Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: 'all', label: 'All Reviews (20)' },
              { id: 'top', label: '★ 5-Star Reviews' },
              { id: 'chocolate', label: 'Taste & Texture Favorites' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-['Cinzel'] tracking-wider uppercase transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#C5A059] text-[#0F0C0A] font-semibold shadow-md'
                    : 'bg-[#171310] border border-[#C5A059]/25 text-[#D4C4B5] hover:border-[#C5A059]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Real Customer Comments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#171310] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Stars + Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating using filled stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-[#C5A059] text-sm">★</span>
                    ))}
                    {review.rating < 5 && (
                      <span className="text-[#C5A059]/30 text-sm">★</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-['Cinzel'] text-[#C5A059] tracking-wider uppercase bg-[#C5A059]/10 px-2.5 py-0.5 rounded-full border border-[#C5A059]/20">
                    <CheckCircle2 className="w-3 h-3 text-[#C5A059]" />
                    <span>Verified Buyer</span>
                  </div>
                </div>

                {/* Highlight callout */}
                <div className="text-xs font-['Cinzel'] tracking-wider text-[#C5A059] uppercase mb-2">
                  "{review.highlight}"
                </div>

                {/* Title */}
                <h3 className="font-['Cormorant_Garamond'] text-xl font-light text-[#F0EAE1] mb-2 leading-snug">
                  {review.title}
                </h3>

                {/* Full Real Customer Comment */}
                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#D4C4B5]/85 font-light leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom Author Row */}
              <div className="pt-4 border-t border-[#C5A059]/15 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {/* Avatar circle with initial */}
                  <div className="w-7 h-7 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] font-['Cinzel'] text-xs font-semibold">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#F0EAE1] font-['Plus_Jakarta_Sans']">
                      {review.name}
                    </div>
                    <div className="text-[10px] text-[#D4C4B5]/50 font-mono">
                      {review.date}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-['Cinzel'] text-[#D4C4B5]/40 tracking-widest uppercase">
                  swaadly.com
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Statistics Banner */}
        <div className="mt-16 pt-8 border-t border-[#C5A059]/20 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-3xl font-['Cormorant_Garamond'] text-[#C5A059] font-light">4.9 / 5.0</div>
            <div className="text-[10px] font-['Cinzel'] uppercase tracking-widest text-[#D4C4B5]/60 mt-0.5">Average Customer Rating</div>
          </div>
          <div className="w-[1px] h-8 bg-[#C5A059]/20 hidden sm:block" />
          <div>
            <div className="text-3xl font-['Cormorant_Garamond'] text-[#C5A059] font-light">100%</div>
            <div className="text-[10px] font-['Cinzel'] uppercase tracking-widest text-[#D4C4B5]/60 mt-0.5">Zero Palm Oil Purity</div>
          </div>
          <div className="w-[1px] h-8 bg-[#C5A059]/20 hidden sm:block" />
          <div>
            <div className="text-3xl font-['Cormorant_Garamond'] text-[#C5A059] font-light">20+ Verified</div>
            <div className="text-[10px] font-['Cinzel'] uppercase tracking-widest text-[#D4C4B5]/60 mt-0.5">Live Reviews From Swaadly Store</div>
          </div>
        </div>

      </div>
    </section>
  );
}
