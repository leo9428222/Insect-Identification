
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Instagram, Facebook, Youtube, Send } from 'lucide-react';
import { Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="text-warmgray max-w-sm leading-relaxed">
              BugScope is the world's leading AI-powered insect identification platform. We combine cutting-edge computer vision with expert entomological knowledge to help you discover the hidden world around you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-leaf rounded-full transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-leaf rounded-full transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-leaf rounded-full transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-leaf rounded-full transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-warmgray">
              <li><Link to="/#features" className="hover:text-leaf transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-leaf transition-colors">Pricing</Link></li>
              <li><Link to="/download" className="hover:text-leaf transition-colors">Download</Link></li>
              <li><Link to="/pricing" className="hover:text-leaf transition-colors">Premium</Link></li>
              <li><Link to="/api" className="hover:text-leaf transition-colors">API Docs</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-warmgray">
              <li><Link to="/blog" className="hover:text-leaf transition-colors">Bug Insights Blog</Link></li>
              <li><Link to="/support" className="hover:text-leaf transition-colors">Help Center</Link></li>
              <li><Link to="/database" className="hover:text-leaf transition-colors">Species Database</Link></li>
              <li><Link to="/educators" className="hover:text-leaf transition-colors">For Educators</Link></li>
              <li><Link to="/conservation" className="hover:text-leaf transition-colors">Conservation</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-6">Stay Inspired</h4>
            <p className="text-sm text-warmgray mb-4">Get weekly insect insights and app updates delivered to your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-leaf focus:ring-1 focus:ring-leaf transition-all"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-leaf rounded-md hover:bg-sage transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-warmgray">
            © {new Date().getFullYear()} BugScope. Made with 🌿 by the BugScope Team.
          </p>
          <div className="flex gap-8 text-sm text-warmgray">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
