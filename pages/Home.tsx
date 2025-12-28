
import React, { useEffect, useState } from 'react';
import { 
  PlayCircle, Apple, Smartphone, Check, ArrowRight, Camera, 
  Search as SearchIcon, Globe, Map, ShieldCheck, Zap,
  GraduationCap, WifiOff, Star
} from 'lucide-react';
import { FEATURES, STATS, CATEGORIES, COLORS } from '../constants';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts(STATS.map(stat => parseInt(stat.value.replace(/\D/g, ''))));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/macro-bug/1920/1080" 
            alt="Macro insect" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 glass-effect"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight animate-fade-in">
            Discover the Hidden World <span className="text-leaf italic font-serif">Around You</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90 font-light">
            <a href="https://buganalyzr.com/" className="underline decoration-leaf hover:text-leaf transition-colors" target="_blank" rel="noopener noreferrer">AI-Powered Insect Identification</a> at Your Fingertips. Turn any nature walk into a scientific discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-leaf hover:bg-sage text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all hover-lift w-full sm:w-auto shadow-2xl">
              <Apple className="w-6 h-6" /> Download for iOS
            </button>
            <button className="bg-leaf hover:bg-sage text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all hover-lift w-full sm:w-auto shadow-2xl">
              <Smartphone className="w-6 h-6" /> Download for Android
            </button>
            <button className="flex items-center gap-2 px-8 py-4 text-white hover:text-leaf transition-all group font-semibold">
              <PlayCircle className="w-8 h-8 group-hover:scale-110 transition-transform" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-white py-12 border-b border-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-cream rounded-xl group-hover:bg-leaf/10 transition-colors">
                    {/* Fixed type error by casting to React.ReactElement<any> */}
                    {React.cloneElement(stat.icon as React.ReactElement<any>, { className: 'w-8 h-8 text-leaf' })}
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-charcoal">{stat.value}</div>
                <div className="text-warmgray font-medium uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features at a Glance */}
      <section id="features" className="py-24 space-y-24">
        {FEATURES.map((feature, idx) => (
          <div key={feature.id} className={`container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 ${
            idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          }`}>
            <div className="flex-1 space-y-6">
              <div className="inline-block p-4 bg-cream rounded-2xl">
                {feature.icon}
              </div>
              <h2 className="text-4xl font-bold text-charcoal leading-tight">
                {feature.title}
              </h2>
              <p className="text-lg text-warmgray leading-relaxed max-w-lg">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-leaf font-bold hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex-1 w-full relative">
               <div className="absolute -inset-4 bg-leaf/5 rounded-3xl -rotate-2"></div>
               <img 
                 src={feature.imageUrl} 
                 alt={feature.title} 
                 className="w-full h-auto rounded-3xl shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
               />
            </div>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="py-24 bg-cream/50 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Identification in 3 Simple Steps</h2>
            <p className="text-warmgray text-lg">Harnessing the power of advanced computer vision to demystify nature.</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 border-t-2 border-dotted border-leaf/30 z-0"></div>

            <div className="relative z-10 group">
              <div className="w-24 h-24 premium-gradient rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-2xl font-bold mb-3">Capture or Upload</h3>
              <p className="text-warmgray">Snap a crisp photo of the insect using the app camera or upload one from your gallery.</p>
            </div>

            <div className="relative z-10 group">
              <div className="w-24 h-24 premium-gradient rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-2xl font-bold mb-3">AI Analysis</h3>
              <p className="text-warmgray">Our neural network scans morphological features and cross-references 5k+ species in real-time.</p>
            </div>

            <div className="relative z-10 group">
              <div className="w-24 h-24 premium-gradient rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-2xl font-bold mb-3">Instant Results</h3>
              <p className="text-warmgray">Receive full taxonomy, common name, and a detailed field guide profile instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Database Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Explore our Species Library</h2>
              <p className="text-warmgray text-lg">Dive into the most comprehensive digital entomology collection ever assembled.</p>
            </div>
            <div className="flex gap-2 bg-cream p-1.5 rounded-full">
              {['All', 'Flying', 'Crawling', 'Rare'].map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeFilter === filter ? 'bg-forest text-white shadow-lg' : 'text-warmgray hover:bg-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {CATEGORIES.filter(c => activeFilter === 'All' || c.type === activeFilter || (activeFilter === 'Rare' && c.count < 1000)).map((cat) => (
              <div key={cat.id} className="group cursor-pointer">
                <div className="relative aspect-square rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-leaf transition-all p-1 shadow-lg">
                  <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-charcoal group-hover:text-leaf transition-colors">{cat.name}</h4>
                  <p className="text-warmgray text-sm">{cat.count.toLocaleString()} Species</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
             <div className="relative w-full max-w-lg">
               <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray w-5 h-5" />
               <input 
                 type="text" 
                 placeholder="Search 5,000+ species..." 
                 className="w-full pl-12 pr-6 py-4 rounded-xl border border-cream focus:outline-none focus:ring-2 focus:ring-leaf/50 transition-all shadow-sm"
               />
             </div>
             <button className="bg-forest text-white px-10 py-4 rounded-xl font-bold hover:bg-charcoal transition-all shadow-lg">
               Browse Full Database
             </button>
          </div>
        </div>
      </section>

      {/* Why BugScope Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Why Enthusiasts Choose BugScope</h2>
            <p className="text-warmgray text-lg">The intersection of citizen science and cutting-edge technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-cream group">
              <div className="w-16 h-16 bg-sky/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-sky" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Scientific Accuracy</h3>
              <p className="text-warmgray leading-relaxed mb-6">Backed by top-tier entomologists and millions of verified training samples, our model ensures you get the facts straight.</p>
              <div className="flex items-center gap-2 text-leaf font-bold">
                <Check className="w-5 h-5" /> Verified by 12 Universities
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-cream group">
              <div className="w-16 h-16 bg-amber/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-amber" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Learn & Grow</h3>
              <p className="text-warmgray leading-relaxed mb-6">Gamified badges and collection challenges make learning about ecosystems addictive and rewarding for all ages.</p>
              <div className="flex items-center gap-2 text-leaf font-bold">
                <Check className="w-5 h-5" /> 200+ Lesson Modules
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-cream group">
              <div className="w-16 h-16 bg-sunset/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-sunset" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Join the Community</h3>
              <p className="text-warmgray leading-relaxed mb-6">Connect with a global network of naturalists. Share your findings, ask questions, and contribute to biodiversity maps.</p>
              <div className="flex items-center gap-2 text-leaf font-bold">
                <Check className="w-5 h-5" /> 500k Active Members
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-cream group">
              <div className="w-16 h-16 bg-leaf/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-leaf" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Always Improving</h3>
              <p className="text-warmgray leading-relaxed mb-6">We update our AI models monthly with thousands of new images, constantly expanding our recognition capabilities.</p>
              <div className="flex items-center gap-2 text-leaf font-bold">
                <Check className="w-5 h-5" /> 15% Accuracy Increase YoY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-24 premium-gradient text-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-amber rounded-full text-xs font-bold uppercase tracking-widest mb-6">Premium Experience</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Take Your Discovery <br/>To the Next Level</h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl">Get unlimited identifications, offline regional packs, and priority expert verification for less than a coffee a month.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-forest px-10 py-4 rounded-xl font-bold hover:bg-cream transition-all shadow-2xl hover-lift">
                Start Free 7-Day Trial
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                View Pricing Plans
              </button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                 <Check className="w-8 h-8 text-amber mb-3" />
                 <h4 className="font-bold mb-1">Unlimited IDs</h4>
                 <p className="text-sm text-white/60">No daily caps on discovery.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                 <WifiOff className="w-8 h-8 text-amber mb-3" />
                 <h4 className="font-bold mb-1">Offline Mode</h4>
                 <p className="text-sm text-white/60">Identify in deep wilderness.</p>
               </div>
             </div>
             <div className="space-y-4">
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                 <ShieldCheck className="w-8 h-8 text-amber mb-3" />
                 <h4 className="font-bold mb-1">Priority Support</h4>
                 <p className="text-sm text-white/60">Ask an expert entomologist.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                 <SearchIcon className="w-8 h-8 text-amber mb-3" />
                 <h4 className="font-bold mb-1">Deep Research</h4>
                 <p className="text-sm text-white/60">Advanced taxonomy data.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Loved by Nature Explorers</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-amber fill-amber" />)}
            </div>
            <p className="text-warmgray">4.8/5 average rating based on 50k+ reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Elementary Teacher', text: 'BugScope transformed our school nature walks! The kids are more engaged than ever, and they love collecting digital badges for their finds.', img: 'https://i.pravatar.cc/150?u=sarah' },
              { name: 'Dr. Marcus Chen', role: 'Research Entomologist', text: 'The accuracy of the identification engine is genuinely impressive. It is a fantastic tool for preliminary field surveys and citizen science data collection.', img: 'https://i.pravatar.cc/150?u=marcus' },
              { name: 'Elena Rodriguez', role: 'Hiker & Photographer', text: 'As a photographer, I use BugScope to name my subjects. The detailed species information helps me understand their behaviors better.', img: 'https://i.pravatar.cc/150?u=elena' }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-cream shadow-sm relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-6 left-8">
                  <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
                </div>
                <div className="pt-8 italic text-charcoal/80 mb-6 leading-relaxed">"{t.text}"</div>
                <div>
                  <div className="font-bold text-charcoal">{t.name}</div>
                  <div className="text-warmgray text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
