import { HoverScale, FadeInUp, StaggerContainer, StaggerItem, Floating, GlowEffect } from './AnimationShowcase';
import { Button } from '@/components/ui/button';

/**
 * ====================================
 * EXEMPLOS DE COMO USAR AS ANIMAÇÕES
 * ====================================
 */

// ❌ SEM ANIMAÇÃO
export function ProjectCardPlain() {
  return (
    <div className="border border-neon-purple rounded-lg p-4 bg-card">
      <h3 className="text-lg font-bold mb-2">Meu Projeto</h3>
      <p className="text-muted-foreground">Descrição do projeto</p>
    </div>
  );
}

// ✅ COM ANIMAÇÃO: HoverScale + FadeInUp
export function ProjectCardAnimated() {
  return (
    <HoverScale>
      <FadeInUp>
        <div className="border border-neon-purple rounded-lg p-4 bg-card hover:shadow-lg hover:shadow-neon-purple/50 transition-shadow">
          <h3 className="text-lg font-bold mb-2 glow-text">Meu Projeto</h3>
          <p className="text-muted-foreground">Descrição do projeto</p>
        </div>
      </FadeInUp>
    </HoverScale>
  );
}

// ✅ COM ANIMAÇÃO: Stagger para lista de projetos
export function ProjectsListAnimated({ projects }) {
  return (
    <StaggerContainer staggerDelay={0.15}>
      {projects.map((project) => (
        <StaggerItem key={project.id}>
          <HoverScale>
            <div className="border border-neon-purple rounded-lg p-4 bg-card">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          </HoverScale>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

// ✅ Botão com efeito glow
export function ButtonWithGlow() {
  return (
    <GlowEffect>
      <Button className="bg-neon-purple hover:bg-neon-purple/90 button-glow">
        Clique em mim!
      </Button>
    </GlowEffect>
  );
}

// ✅ Ícone flutuante
export function FloatingIcon() {
  return (
    <Floating duration={4}>
      <div className="text-4xl">✨</div>
    </Floating>
  );
}

// ✅ USO DAS CLASSES CSS DIRETAS

// Texto com brilho
export function GlowingText() {
  return <h1 className="text-4xl font-bold glow-text">Título com brilho!</h1>;
}

// Efeito de entrada
export function SlideInAnimation() {
  return (
    <div className="slide-in-left">
      <p>Esse elemento desliza da esquerda!</p>
    </div>
  );
}

// Shimmer (carregamento estilo)
export function ShimmerEffect() {
  return (
    <div className="shimmer h-12 rounded-lg" />
  );
}

// ✅ COMBINAÇÕES AVANÇADAS

// Hero section totalmente animada
export function AnimatedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo com gradient animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-background to-neon-cyan/20 gradient-animated" />
      
      <FadeInUp duration={0.8}>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="glow-text">Bem-vindo</span> ao meu portfólio
          </h1>
          <p className="text-xl text-muted-foreground mb-8 slide-in-top">
            Animações que impressionam
          </p>
          <GlowEffect duration={1.5}>
            <Button className="bg-neon-purple px-8 py-3 text-lg button-glow">
              Explorar
            </Button>
          </GlowEffect>
        </div>
      </FadeInUp>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-particle absolute w-2 h-2 bg-neon-cyan rounded-full opacity-60" style={{ left: '10%', top: '20%' }} />
        <div className="float-particle absolute w-2 h-2 bg-neon-purple rounded-full opacity-60" style={{ left: '80%', top: '30%', animationDelay: '0.5s' }} />
        <div className="float-particle absolute w-2 h-2 bg-neon-green rounded-full opacity-60" style={{ left: '50%', top: '50%', animationDelay: '1s' }} />
      </div>
    </section>
  );
}

// ✅ GRID DE SKILLS COM ANIMAÇÕES
export function SkillsGridAnimated({ skills }) {
  return (
    <StaggerContainer staggerDelay={0.1}>
      {skills.map((skill, index) => (
        <StaggerItem key={index}>
          <HoverScale scale={1.1}>
            <div className="px-4 py-3 bg-card border border-border rounded-lg cursor-pointer hover:border-neon-purple transition-colors">
              <p className="font-mono font-semibold">{skill}</p>
            </div>
          </HoverScale>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

/**
 * ====================================
 * COMO APLICAR NO SEU PROJETO
 * ====================================
 * 
 * 1. USE AS COMPONENTES FRAMER MOTION (melhor para interatividade):
 *    - FadeInUp: Para títulos e textos principais
 *    - HoverScale: Para cards e elementos clicáveis
 *    - StaggerContainer + StaggerItem: Para listas
 *    - Floating/Rotate: Para ícones e decorações
 *    - GlowEffect: Para elementos especiais
 * 
 * 2. USE AS CLASSES CSS (mais simples, sem JavaScript):
 *    - glow-text: Adicione à classe de títulos
 *    - slide-in-left/right/top: Para efeito de entrada
 *    - shimmer: Para skeleton loaders
 *    - gradient-animated: Para backgrounds
 *    - bounce-custom: Para chamar atenção
 *    - pulse-breathing: Para destacar elementos
 * 
 * 3. COMBINE PARA EFEITOS ÚNICOS:
 *    - Use delay para staggered animations
 *    - Combine multiple classes: className="glow-text animate-blob"
 *    - Customize durations e delays conforme necessário
 */
