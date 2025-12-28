
import React from 'react';
import { Apple, Smartphone, Star, Shield, Smartphone as PhoneIcon } from 'lucide-react';

const Download: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-leaf/10 text-leaf rounded-full text-xs font-bold uppercase tracking-widest">Available Now</div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
              Nature is Calling.<br/><span className="text-leaf italic font-serif">Carry the Lab</span> in Your Pocket.
            </h1>
            <p className="text-xl text-warmgray leading-relaxed max-w-xl">
              Download BugScope today and join 500,000+ naturalists identifying and mapping life around the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-4 bg-charcoal text-white px-8 py-4 rounded-2xl hover:bg-forest transition-all shadow-xl hover-lift">
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-4 bg-forest text-white px-8 py-4 rounded-2xl hover:bg-charcoal transition-all shadow-xl hover-lift">
                <Smartphone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60">Get it on</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-12 pt-4">
              <div className="text-center">
                <div className="flex items-center gap-1 text-amber mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber" />)}
                </div>
                <div className="text-xs font-bold text-charcoal">4.8 / 5 Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-forest mb-1">2.5M+</div>
                <div className="text-xs text-warmgray">Downloads</div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-leaf/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="relative z-10 p-4 bg-white rounded-[3rem] border-8 border-forest/5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <img src="https://picsum.photos/seed/phone-mock/400/800" alt="App Preview" className="rounded-[2.5rem] w-full h-auto" />
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shadow-leaf/20 border border-cream">
              <div className="w-10 h-10 bg-leaf rounded-full flex items-center justify-center text-white"><Shield className="w-6 h-6" /></div>
              <div>
                <div className="text-xs font-bold">Accuracy Guaranteed</div>
                <div className="text-[10px] text-warmgray">Expert Verification Included</div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-cream/40 p-12 rounded-[3rem]">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <PhoneIcon className="w-6 h-6 text-leaf" />
            </div>
            <h3 className="text-xl font-bold">Compatibility</h3>
            <p className="text-sm text-warmgray">Requires iOS 14.0 or later on iPhone. For Android users, version 8.0 (Oreo) or higher is recommended for best performance.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Smartphone className="w-6 h-6 text-leaf" />
            </div>
            <h3 className="text-xl font-bold">Storage</h3>
            <p className="text-sm text-warmgray">The base app is only 85MB. Offline regional packs vary between 200MB - 1.5GB depending on the diversity of the area.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Shield className="w-6 h-6 text-leaf" />
            </div>
            <h3 className="text-xl font-bold">Privacy First</h3>
            <p className="text-sm text-warmgray">Your location is only used to improve identification accuracy and community mapping. We never sell your personal data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
