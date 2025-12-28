
import React from 'react';
import { Users, Trophy, MessageSquare, Heart, MapPin, Share2 } from 'lucide-react';

const Community: React.FC = () => {
  const contributors = [
    { name: 'Dr. Emily Watson', points: '12,450', discoveries: 450, avatar: 'https://i.pravatar.cc/150?u=emily' },
    { name: 'Jake Miller', points: '10,200', discoveries: 312, avatar: 'https://i.pravatar.cc/150?u=jake' },
    { name: 'Sofia Garcia', points: '9,850', discoveries: 289, avatar: 'https://i.pravatar.cc/150?u=sofia' },
    { name: 'Tom Harrison', points: '8,400', discoveries: 245, avatar: 'https://i.pravatar.cc/150?u=tom' }
  ];

  const activities = [
    { user: 'Sarah J.', species: 'Monarch Butterfly', location: 'Santa Fe, NM', time: '2 mins ago', image: 'https://picsum.photos/seed/monarch/400/300' },
    { user: 'Mark T.', species: 'Stag Beetle', location: 'Berlin, DE', time: '15 mins ago', image: 'https://picsum.photos/seed/beetle2/400/300' },
    { user: 'Aisha R.', species: 'Honey Bee', location: 'Nairobi, KE', time: '1 hour ago', image: 'https://picsum.photos/seed/bee2/400/300' }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content: Feed */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-charcoal">Live Activity</h1>
              <button className="text-leaf font-bold hover:underline flex items-center gap-2">
                Join the Discussion <Share2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-12">
              {activities.map((act, i) => (
                <div key={i} className="bg-white rounded-3xl border border-cream overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-cream overflow-hidden border border-cream">
                        <img src={`https://i.pravatar.cc/100?u=${act.user}`} alt={act.user} />
                      </div>
                      <div>
                        <div className="font-bold text-charcoal">{act.user}</div>
                        <div className="text-xs text-warmgray flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {act.location} • {act.time}
                        </div>
                      </div>
                    </div>
                    <button className="text-warmgray hover:text-sunset"><Heart className="w-6 h-6" /></button>
                  </div>
                  <div className="aspect-video overflow-hidden">
                    <img src={act.image} alt={act.species} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-charcoal">{act.species}</h3>
                      <span className="bg-leaf/10 text-leaf text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Discovery</span>
                    </div>
                    <p className="text-warmgray mb-6">"Finally spotted this beauty in my backyard today. The AI identified it instantly! #BugScope #Biodiversity"</p>
                    <div className="flex items-center gap-4 text-warmgray text-sm">
                      <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> 24 Likes</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> 8 Comments</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Leaderboard & Stats */}
          <div className="lg:w-96 space-y-12">
            <div className="bg-forest rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
              <Trophy className="absolute top-4 right-4 w-12 h-12 text-amber opacity-20" />
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                Top Contributors
              </h2>
              <div className="space-y-6">
                {contributors.map((c, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-leaf transition-all">
                        <img src={c.avatar} alt={c.name} />
                      </div>
                      <div>
                        <div className="font-bold text-sm group-hover:text-leaf transition-colors">{c.name}</div>
                        <div className="text-xs text-white/50">{c.discoveries} Discoveries</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-amber font-bold">{c.points}</div>
                      <div className="text-[10px] uppercase text-white/30 tracking-widest">Points</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all">
                View Full Leaderboard
              </button>
            </div>

            <div className="bg-cream rounded-[2.5rem] p-8">
              <h2 className="text-xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-leaf" /> Community Stats
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-forest/5">
                  <span className="text-warmgray">Active Discussions</span>
                  <span className="font-bold text-forest">1,240</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-forest/5">
                  <span className="text-warmgray">Open Challenges</span>
                  <span className="font-bold text-forest">12</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-forest/5">
                  <span className="text-warmgray">Expert Mentors</span>
                  <span className="font-bold text-forest">150+</span>
                </div>
              </div>
              <p className="mt-6 text-xs text-warmgray italic">Our community helps verify over 500 sightings every single day!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
