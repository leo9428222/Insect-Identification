
import React, { useState } from 'react';
import { Check, Info, ShieldCheck, Zap, HelpCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const tiers = [
    {
      name: "Free Forever",
      price: "0",
      description: "Basic features for casual explorers.",
      features: [
        "10 Identifications per day",
        "Access to 1,000 common species",
        "Community forum access",
        "Standard identification speed",
        "Ad-supported experience"
      ],
      cta: "Start for Free",
      popular: false
    },
    {
      name: "Premium",
      price: billingCycle === 'yearly' ? '3.33' : '4.99',
      description: "Complete tools for nature enthusiasts.",
      features: [
        "Unlimited Identifications",
        "Full 5,000+ species database",
        "Offline Field Mode",
        "Expert entomologist verification",
        "Ad-free experience",
        "Advanced migration maps",
        "Priority AI analysis"
      ],
      cta: "Start 7-Day Free Trial",
      popular: true
    },
    {
      name: "Educator / Pro",
      price: "Custom",
      description: "Advanced tools for schools and research.",
      features: [
        "Everything in Premium",
        "Bulk seat licensing",
        "Group challenge dashboard",
        "Detailed progress tracking",
        "API access for researchers",
        "Printable educational guides"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-warmgray mb-10">Choose the plan that fits your level of curiosity.</p>
          
          <div className="inline-flex items-center bg-cream p-1.5 rounded-full mb-8">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-2.5 rounded-full font-bold transition-all ${billingCycle === 'monthly' ? 'bg-forest text-white shadow-lg' : 'text-warmgray'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-forest text-white shadow-lg' : 'text-warmgray'}`}
            >
              Yearly <span className="bg-leaf text-white text-[10px] px-2 py-0.5 rounded-full">Save 33%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
              tier.popular ? 'border-leaf border-4 bg-cream/30 shadow-2xl scale-105 z-10' : 'border-cream bg-white shadow-sm'
            }`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-leaf text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-xl">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-charcoal mb-2">{tier.name}</h3>
                <p className="text-warmgray text-sm">{tier.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-charcoal">${tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-warmgray font-medium"> /mo</span>}
              </div>
              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 bg-leaf/10 rounded-full">
                      <Check className="w-4 h-4 text-leaf" />
                    </div>
                    <span className="text-charcoal/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg ${
                tier.popular ? 'bg-leaf text-white hover:bg-sage' : 'bg-charcoal text-white hover:bg-forest'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your Premium subscription at any time through your app store account settings." },
              { q: "Is there a free trial for Premium?", a: "Absolutely! We offer a 7-day free trial so you can test all premium features risk-free." },
              { q: "Do you offer discounts for students?", a: "Yes, we offer a 50% discount for students and accredited educators. Contact our support team to verify your status." },
              { q: "What happens if I exceed the daily limit on Free?", a: "Your identification count resets every 24 hours. You can still browse the database but won't be able to scan new insects until the reset." }
            ].map((item, i) => (
              <div key={i} className="bg-cream/40 p-6 rounded-2xl">
                <h4 className="font-bold text-charcoal mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-leaf" /> {item.q}
                </h4>
                <p className="text-warmgray text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
