
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION, Logo } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header background logic: 
  // Solid Forest if we are on a subpage or if we have scrolled on the homepage.
  const headerBgClass = (!isHomePage || scrolled) ? 'bg-forest shadow-xl py-3' : 'bg-transparent py-6';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <div key={item.label} className="relative group">
              <Link 
                to={item.path.startsWith('/#') ? '/' + item.path.substring(1) : item.path}
                className="text-white hover:text-leaf font-medium flex items-center gap-1 transition-colors py-2"
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>
              
              {item.children && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pt-2">
                  <div className="py-2 bg-white rounded-xl overflow-hidden border border-cream">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2 text-charcoal hover:bg-cream hover:text-leaf transition-colors font-medium"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link 
            to="/download" 
            className="bg-leaf hover:bg-sage text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-leaf/20 active:scale-95"
          >
            Download App
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-forest transition-transform duration-500 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-24 px-8 pb-8 overflow-y-auto">
          {NAVIGATION.map((item) => (
            <div key={item.label} className="py-4 border-b border-white/10">
              {item.children ? (
                <>
                  <span className="text-2xl font-bold text-white block mb-4">{item.label}</span>
                  <div className="ml-4 flex flex-col gap-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="text-warmgray text-lg hover:text-leaf transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  to={item.path}
                  className="text-2xl font-bold text-white block hover:text-leaf transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-8 pb-12">
            <Link 
              to="/download"
              className="w-full bg-leaf text-white py-4 rounded-xl font-bold text-center block shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Download App Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
