/**
 * ======================================
 * GUIA COMPLETO: ADICIONAR MAIS ANIMAÇÕES
 * ======================================
 * 
 * Este arquivo contém dicas e estratégias para
 * maximizar as animações no seu portfólio.
 */

// ===== ESTRATÉGIA 1: Animar Componentes Existentes =====
// 
// Seus components/Home.tsx já tem alguns elementos.
// Você pode envolvê-los com componentes de animação:
// 
// ANTES:
// <h1>Felton é um web designer</h1>
// 
// DEPOIS:
// import { FadeInUp } from '@/components/AnimationShowcase';
// <FadeInUp delay={0.2}>
//   <h1>Felton é um web designer</h1>
// </FadeInUp>

// ===== ESTRATÉGIA 2: Animações ao Scroll =====
//
// Você já tem scroll tracking com scrollYProgress!
// Pode adicionar mais efeitos:
// 
// import { useScroll, useTransform, motion } from 'framer-motion';
//
// const { scrollYProgress } = useScroll();
// const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
// const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
//
// <motion.div style={{ opacity, scale }}>
//   {/* Seu conteúdo desaparece enquanto faz scroll */}
// </motion.div>

// ===== ESTRATÉGIA 3: Page Transitions =====
//
// Ao mudar de página, adicione transições suaves:
//
// import { motion, AnimatePresence } from 'framer-motion';
// import { Switch, Route } from 'wouter';
//
// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };
//
// <AnimatePresence mode="wait">
//   <motion.div
//     key={location}
//     variants={pageVariants}
//     initial="initial"
//     animate="animate"
//     exit="exit"
//     transition={{ duration: 0.3 }}
//   >
//     <Switch>
//       {/* suas rotas */}
//     </Switch>
//   </motion.div>
// </AnimatePresence>

// ===== ESTRATÉGIA 4: Animações de Entrada por Seção =====
//
// No seu Home.tsx, cada seção pode ter uma animação diferente:
//
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };
//
// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 },
//   },
// };
//
// <motion.div
//   variants={containerVariants}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
// >
//   {projects.map((project) => (
//     <motion.div key={project.id} variants={itemVariants}>
//       {/* Seu card de projeto */}
//     </motion.div>
//   ))}
// </motion.div>

// ===== ESTRATÉGIA 5: Micro-interações com Gestos =====
//
// Framer Motion permite detectar gestos do usuário:
//
// import { motion } from 'framer-motion';
//
// <motion.button
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   onClick={() => {/* fazer algo */}}
// >
//   Clique em mim
// </motion.button>
//
// Você pode adicionar isso em todos os botões para feedback visual!

// ===== ESTRATÉGIA 6: Animações de Esqueleto (Skeleton) =====
//
// Para dados carregando:
//
// export function SkeletonCard() {
//   return (
//     <div className="shimmer h-40 rounded-lg">
//       {/* O brilho passa enquanto carrega */}
//     </div>
//   );
// }

// ===== ESTRATÉGIA 7: Efeitos Parallax Avançados =====
//
// Você pode criar efeitos 3D:
//
// import { useMousePosition } from '@/hooks/useMousePosition'; // você precisa criar
//
// const { x, y } = useMousePosition();
//
// <motion.div
//   style={{
//     x: useTransform(x, [-1000, 1000], [-50, 50]),
//     y: useTransform(y, [-1000, 1000], [-50, 50]),
//   }}
// >
//   Segue o mouse!
// </motion.div>

// ===== ESTRATÉGIA 8: SVG Animations =====
//
// Se tiver ícones SVG, pode animá-los:
//
// <motion.svg
//   animate={{
//     rotate: 360,
//     scale: [1, 1.2, 1],
//   }}
//   transition={{
//     rotate: { duration: 2, repeat: Infinity },
//     scale: { duration: 2, repeat: Infinity },
//   }}
// >
//   {/* seu SVG */}
// </motion.svg>

// ===== ESTRATÉGIA 9: Animações de Texto =====
//
// Animar cada letra ou palavra:
//
// import { motion } from 'framer-motion';
//
// const container = {
//   hidden: { opacity: 0 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
//   }),
// };
//
// const child = {
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { type: 'spring', damping: 12, stiffness: 100 },
//   },
//   hidden: { opacity: 0, x: 20 },
// };
//
// export function AnimatedText() {
//   const text = 'Bem vindo ao meu portfólio';
//   return (
//     <motion.div variants={container} initial="hidden" animate="visible">
//       {text.split('').map((char, i) => (
//         <motion.span key={i} variants={child}>
//           {char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// }

// ===== ESTRATÉGIA 10: Detectar Scroll Específico =====
//
// Animar elementos quando entram na tela:
//
// import { useScrollReveal } from '@/hooks/useScrollReveal';
//
// export function MyComponent() {
//   const { ref, isVisible } = useScrollReveal();
//
//   return (
//     <motion.div
//       ref={ref}
//       animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//     >
//       Apareço quando você faz scroll!
//     </motion.div>
//   );
// }

// ===== PRÓXIMOS PASSOS RECOMENDADOS =====
//
// 1. COMECE PEQUENO:
//    - Animar botões com whileHover
//    - Adicionar FadeInUp para títulos
//    - Usar StaggerContainer para listas
//
// 2. TESTE LOCALMENTE:
//    - npm run dev
//    - Veja os efeitos em tempo real
//
// 3. INCREMENTE A COMPLEXIDADE:
//    - Adicione scroll animations
//    - Crie micro-interações
//    - Combine múltiplos efeitos
//
// 4. PERFORMANCE:
//    - Use will-change no CSS
//    - Evite animar muitos elementos ao mesmo tempo
//    - Teste em dispositivos reais
//
// 5. ACESSIBILIDADE:
//    - Respeite prefers-reduced-motion
//    - Não deixe animações interferirem na usabilidade

export const animationTips = {
  performance: [
    'Use transform e opacity (mais rápido)',
    'Evite animar width/height',
    'Use will-change para elementos com muita animação',
    'Teste com Lighthouse DevTools',
  ],
  accessibility: [
    'Respeite prefers-reduced-motion',
    'Animações não devem ser essenciais para entender',
    'Nunca bloqueie interação com animação',
  ],
  bestPractices: [
    'Mantenha animações < 1 segundo em geral',
    'Use easing functions apropriadas',
    'Combine com feedback visual (hover, focus)',
    'Teste em diferentes dispositivos',
    'Não exagere - menos é mais',
  ],
};
