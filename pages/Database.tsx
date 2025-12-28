
import React, { useState } from 'react';
import { Search, Filter, Info, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Database: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredCategories = CATEGORIES.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || cat.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Species Database</h1>
          <p className="text-xl text-warmgray">
            Explore over 5,000+ documented species across the globe. Our database is curated by entomologists and updated daily by our global community.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-cream p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center mb-12 shadow-sm">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name (e.g. Monarch Butterfly)..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-leaf transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {['All', 'Flying', 'Crawling'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  filter === f ? 'bg-forest text-white shadow-md' : 'bg-white text-warmgray hover:bg-white/80'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="group bg-white rounded-3xl border border-cream overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-forest shadow-sm">
                  {cat.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-leaf transition-colors">{cat.name}</h3>
                <p className="text-warmgray text-sm mb-4">{cat.count.toLocaleString()} Species documented</p>
                <button className="w-full flex items-center justify-between text-leaf font-bold group/btn">
                  Explore Category <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-20 bg-cream rounded-3xl border-2 border-dashed border-warmgray/20">
            <Info className="w-12 h-12 text-warmgray mx-auto mb-4" />
            <h3 className="text-xl font-bold text-charcoal">No species found</h3>
            <p className="text-warmgray">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        <div className="mt-20 p-12 bg-forest rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-leaf opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-white/70 text-lg">Our community adds hundreds of new sightings every day. Help us map global biodiversity by contributing your own discoveries.</p>
          </div>
          <button className="relative z-10 bg-leaf hover:bg-sage text-white px-10 py-4 rounded-2xl font-bold transition-all whitespace-nowrap">
            Identify Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Database;
