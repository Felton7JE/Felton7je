import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/useMobile';
import { Menu, X, Globe, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Início');
  const [isVisible, setIsVisible] = useState(false); // Oculta por padrão
  const isHoveredRef = useRef(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '#home', key: 'Início' },
    { label: t('nav.about'), href: '#about', key: 'Sobre' },
    { label: t('nav.projects'), href: '#works', key: 'Projetos' },
    { label: t('nav.contact'), href: '#contacts', key: 'Contacto' },
  ];

  // Ocultar por padrão; exibir apenas ao deslizar (scroll / touchmove)
  useEffect(() => {
    const handleScroll = () => {
      // Ao deslizar, torna a navbar visível imediatamente
      setIsVisible(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      // Se o menu mobile estiver aberto ou o cursor estiver sobre a navbar, não oculta
      if (mobileMenuOpen || isHoveredRef.current) {
        return;
      }

      // Oculta novamente após 2.2 segundos sem deslizar
      hideTimeoutRef.current = setTimeout(() => {
        if (!isHoveredRef.current && !mobileMenuOpen) {
          setIsVisible(false);
        }
      }, 2200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      onMouseEnter={() => {
        isHoveredRef.current = true;
        setIsVisible(true);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        if (!mobileMenuOpen) {
          hideTimeoutRef.current = setTimeout(() => setIsVisible(false), 1500);
        }
      }}
      className={`fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 sm:px-10 lg:px-16 bg-black/70 backdrop-blur-md border-b border-white/5 transition-all duration-500 ease-in-out ${
        isVisible || mobileMenuOpen
          ? 'translate-y-0 opacity-100 pointer-events-auto shadow-2xl'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
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
            const isActive = activeTab === item.key;
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setActiveTab(item.key)}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
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

      {/* Ações na Direita: Seletor PT/EN + Tagline + Mobile Menu */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Toggle de Idioma PT / EN */}
        <button
          type="button"
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 text-xs font-mono transition-all cursor-pointer shadow-sm"
          title={language === 'pt' ? 'Mudar para Inglês (Switch to English)' : 'Mudar para Português'}
          aria-label="Alternar idioma"
        >
          <Globe size={13} className="text-amber-500" />
          <span className={language === 'pt' ? 'text-amber-400 font-bold' : 'text-zinc-400'}>PT</span>
          <span className="text-zinc-600">/</span>
          <span className={language === 'en' ? 'text-amber-400 font-bold' : 'text-zinc-400'}>EN</span>
        </button>

        {/* Tagline Direita (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 text-zinc-400 font-mono text-[10.5px] uppercase tracking-[0.18em] pl-3 border-l border-white/10">
          <span className="w-4 h-[1.5px] bg-amber-500" />
          <span className="truncate max-w-[290px]">{t('header.tagline')}</span>
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-amber-500 hover:text-amber-400 transition-colors p-2 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

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
                const isActive = activeTab === item.key;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.key);
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

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-zinc-400 font-mono text-[10.5px] uppercase tracking-wider">
                <span>{language === 'pt' ? 'Moçambique' : 'Mozambique'}</span>
                <span className="text-amber-400 font-semibold">{language.toUpperCase()}</span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
