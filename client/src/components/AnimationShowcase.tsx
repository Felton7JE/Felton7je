import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/** 
 * Animação: Fade + Slide Up
 * Útil para: Textos, títulos, cards
 */
export const FadeInUp = ({ 
  children, 
  delay = 0,
  duration = 0.6,
}: { 
  children: ReactNode
  delay?: number
  duration?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Fade + Slide Left
 * Útil para: Imagens, elementos da esquerda
 */
export const FadeInLeft = ({ 
  children, 
  delay = 0,
}: { 
  children: ReactNode
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Fade + Slide Right
 * Útil para: Imagens, elementos da direita
 */
export const FadeInRight = ({ 
  children, 
  delay = 0,
}: { 
  children: ReactNode
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Zoom In
 * Útil para: Imagens, cards importantes
 */
export const ZoomIn = ({ 
  children, 
  delay = 0,
}: { 
  children: ReactNode
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Stagger Children
 * Útil para: Listas, múltiplos itens
 */
export const StaggerContainer = ({ 
  children, 
  delay = 0,
  staggerDelay = 0.1,
}: { 
  children: ReactNode
  delay?: number
  staggerDelay?: number
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Stagger Item (para usar com StaggerContainer)
 */
export const StaggerItem = ({ 
  children,
}: { 
  children: ReactNode
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Floating (flutuante)
 * Útil para: Decorações, ícones
 */
export const Floating = ({ 
  children,
  duration = 3,
}: { 
  children: ReactNode
  duration?: number
}) => (
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Rotate
 * Útil para: Loading spinners, ícones
 */
export const Rotate = ({ 
  children,
  duration = 2,
}: { 
  children: ReactNode
  duration?: number
}) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Pulse (pulsação)
 * Útil para: Pontos, badges, highlights
 */
export const Pulse = ({ 
  children,
  duration = 2,
}: { 
  children: ReactNode
  duration?: number
}) => (
  <motion.div
    animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Glow effect (brilho)
 * Útil para: Destacar elementos, botões
 */
export const GlowEffect = ({ 
  children,
  duration = 2,
}: { 
  children: ReactNode
  duration?: number
}) => (
  <motion.div
    animate={{ 
      boxShadow: [
        '0 0 20px rgba(168, 85, 247, 0.3)',
        '0 0 40px rgba(168, 85, 247, 0.6)',
        '0 0 20px rgba(168, 85, 247, 0.3)',
      ]
    }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Shake (tremor)
 * Útil para: Erros, avisos
 */
export const Shake = ({ 
  children,
}: { 
  children: ReactNode
}) => (
  <motion.div
    animate={{ x: [-5, 5, -5, 5, 0] }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

/** 
 * Animação: Hover Scale
 * Útil para: Cards, botões, links
 */
export const HoverScale = ({ 
  children,
  scale = 1.05,
}: { 
  children: ReactNode
  scale?: number
}) => (
  <motion.div
    whileHover={{ scale }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.div>
);
