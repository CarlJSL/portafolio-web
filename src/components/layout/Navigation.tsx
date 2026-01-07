import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';

interface NavigationProps {
  items: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl text-blue-400 tracking-tighter">
            CS<span className="text-slate-100">.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={
                    index === items.length - 1
                      ? "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
                      : "hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                className={
                  index === items.length - 1
                    ? "block text-blue-400 font-bold px-3 py-2 rounded-md text-base"
                    : "block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
