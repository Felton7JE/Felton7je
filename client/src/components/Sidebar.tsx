import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import type { RefObject } from 'react';

type SidebarProps = {
  isDestroying?: boolean;
  emailTargetRef?: RefObject<HTMLAnchorElement | null>;
  emailActive?: boolean;
};

export default function Sidebar({ isDestroying = false, emailTargetRef, emailActive = false }: SidebarProps) {
  const socialIcons = [
    { icon: Github, href: 'https://github.com/Felton7JE', color: 'neon-purple', title: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/estevafelton/', color: 'neon-cyan', title: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dasilvafelton7@gmail.com', color: 'neon-pink', title: 'Email' },
    { icon: Globe, href: 'https://felton.dev', color: 'neon-green', title: 'Portfolio' },
  ];

  return (
    <motion.aside
      className={`fixed left-0 top-0 h-screen w-20 border-r border-border bg-background py-8 ${isDestroying ? 'pointer-events-none' : ''} flex flex-col items-center justify-center gap-8`}
      animate={
        isDestroying
          ? { x: -110, opacity: 0, rotate: -7, scale: 0.94, filter: 'blur(5px)' }
          : { x: 0, opacity: 1, rotate: 0, scale: 1, filter: 'blur(0px)' }
      }
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Logo/Brand */}
      <motion.div
        className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center font-mono font-bold text-foreground"
        animate={{
          rotateY: [0, 360],
          boxShadow: [
            '0 0 10px rgba(168, 85, 247, 0.3)',
            '0 0 30px rgba(168, 85, 247, 0.8)',
            '0 0 10px rgba(168, 85, 247, 0.3)',
          ],
        }}
        transition={{ rotateY: { duration: 8, repeat: Infinity }, boxShadow: { duration: 2, repeat: Infinity } }}
        style={{ perspective: '1000px' }}
      >
        F
      </motion.div>

      {/* Social Icons */}
      <nav className="flex flex-col gap-6">
        {socialIcons.map((social, index) => {
          const Icon = social.icon;
          const borderClass = `border-${social.color}`;
          const textClass = `text-${social.color}`;
          const hoverClass = `hover:text-${social.color}`;

          return (
            <motion.a
              key={social.title}
              ref={social.title === 'Email' ? emailTargetRef : undefined}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className={`p-3 rounded-lg hover:bg-secondary hover:border hover:${borderClass} transition-all duration-300 text-muted-foreground ${hoverClass}`}
              title={social.title}
              whileHover={{ scale: 1.15, rotate: 10 }}
              animate={
                social.title === 'Email' && emailActive
                  ? {
                      scale: [1, 1.18, 1],
                      rotate: [0, -8, 0],
                      filter: ['drop-shadow(0 0 0 rgba(236,72,153,0))', 'drop-shadow(0 0 14px rgba(236,72,153,0.95))', 'drop-shadow(0 0 0 rgba(236,72,153,0))'],
                    }
                  : { opacity: 1, x: 0 }
              }
              transition={social.title === 'Email' && emailActive ? { duration: 1, ease: [0.22, 1, 0.36, 1] } : { duration: 0.4, delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
            >
              <Icon size={24} />
            </motion.a>
          );
        })}
      </nav>

      {/* Decorative dots */}
      <div className="mt-auto flex flex-col gap-2">
        {[0, 1, 2].map((i) => {
          const colors = ['bg-neon-purple', 'bg-neon-cyan', 'bg-neon-green'];
          return (
            <motion.div
              key={i}
              className={`w-1 h-1 rounded-full ${colors[i]}`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          );
        })}
      </div>
    </motion.aside>
  );
}
