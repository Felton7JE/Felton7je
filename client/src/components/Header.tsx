import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/useMobile';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

type HeaderProps = {
  onFeltonClick?: () => void;
  isDestroying?: boolean;
};

export default function Header({ onFeltonClick, isDestroying = false }: HeaderProps) {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '#home', href: '/' },
    { label: '#works', href: '/#works' },
    { label: '#about-me', href: '/#about' },
    { label: '#certifications', href: '/#certifications' },
    { label: '#contacts', href: '/#contacts' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 md:px-8 md:left-20 backdrop-blur-sm ${isDestroying ? 'pointer-events-none' : ''}`}
      animate={
        isDestroying
          ? { y: -70, opacity: 0, rotate: -3, scale: 0.98, filter: 'blur(6px)' }
          : { y: 0, opacity: 1, rotate: 0, scale: 1, filter: 'blur(0px)' }
      }
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Logo */}
      <motion.button
        type="button"
        onClick={onFeltonClick}
        disabled={isDestroying}
        className="flex items-center gap-1 md:gap-2 font-mono text-sm md:text-lg font-bold text-neon-purple disabled:cursor-not-allowed whitespace-nowrap"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <span className="text-white hidden sm:inline"># </span>
        <motion.span
          animate={{ textShadow: ['0 0 5px rgba(168, 85, 247, 0.3)', '0 0 20px rgba(168, 85, 247, 0.8)', '0 0 5px rgba(168, 85, 247, 0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="sm:hidden"
        >
          CV
        </motion.span>
        <motion.span
          animate={{ textShadow: ['0 0 5px rgba(168, 85, 247, 0.3)', '0 0 20px rgba(168, 85, 247, 0.8)', '0 0 5px rgba(168, 85, 247, 0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden sm:inline"
        >
          Meu CV
        </motion.span>
      </motion.button>

      {/* Navigation - Desktop */}
      {!isMobile && (
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-xs lg:text-sm text-muted-foreground hover:text-neon-purple transition-colors duration-300 font-mono relative"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={isDestroying ? { opacity: 0, y: -18 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-neon-purple"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neon-purple hover:text-neon-cyan transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      )}

      {/* Language selector */}
      <motion.div
        className="flex items-center gap-1 md:gap-2"
        animate={isDestroying ? { opacity: 0, x: 16 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          className="px-2 md:px-3 py-1 text-xs font-mono text-muted-foreground hover:text-neon-purple transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
        <span className="text-muted-foreground text-xs md:text-sm">|</span>
        <motion.button
          className="px-2 md:px-3 py-1 text-xs font-mono text-muted-foreground hover:text-neon-purple transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          PT
        </motion.button>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.nav
            className="absolute top-16 left-0 right-0 bg-background/95 border-b border-border backdrop-blur-sm md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-neon-purple transition-colors duration-300 font-mono py-2 px-2 rounded hover:bg-neon-purple/10"
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
