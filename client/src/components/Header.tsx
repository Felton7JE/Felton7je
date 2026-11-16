import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/useMobile';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Início');

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#works' },
    { label: 'Contato', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 sm:px-10 lg:px-16 bg-black/50 backdrop-blur-md border-b border-white/5">
      {/* Brand / Logo */}
      <a
        href="#home"
        onClick={() => setActiveTab('Início')}
        className="flex items-center gap-1 font-sans text-xl sm:text-2xl font-black tracking-wider text-white uppercase group"
      >
        <span>FELTON</span>
        <span className="text-amber-500 group-hover:scale-125 transition-transform">.</span>
      </a>

      {/* Navigation - Desktop */}
      {!isMobile && (
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>
      )}

      {/* Top Right Tagline */}
      <div className="hidden lg:flex items-center gap-2 text-zinc-400 font-mono text-[11px] uppercase tracking-[0.2em]">
        <span className="w-5 h-[1.5px] bg-amber-500" />
        <span>ENGENHARIA, INFRAESTRUTURA & CIBERSEGURANÇA</span>
      </div>

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-amber-500 hover:text-amber-400 transition-colors p-2"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.nav
            className="absolute top-20 left-0 right-0 bg-black/95 border-b border-zinc-800 backdrop-blur-xl md:hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {navItems.map((item) => {
                const isActive = activeTab === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-base font-medium py-3 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'text-amber-500 bg-amber-500/10 font-bold'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-zinc-800 flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                <span className="w-4 h-[1.5px] bg-amber-500" />
                <span>ENGENHARIA, INFRAESTRUTURA & CIBERSEGURANÇA</span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
