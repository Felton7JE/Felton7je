import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Code2,
  Award,
  ShieldCheck,
  Database,
  Layers,
  Cpu,
  Terminal,
  Zap,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  GitBranch,
  Server,
  Lock,
  Globe,
  Smartphone,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Network,
} from 'lucide-react';

export interface CompetencyItem {
  id: string;
  name: string;
  shortLabel: string;
  category: 'skills' | 'languages' | 'certifications';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  highlight?: string;
  issuer?: string;
  year?: string;
  verifyLink?: string;
}

export const competenciesData: Record<'skills' | 'languages' | 'certifications', CompetencyItem[]> = {
  skills: [
    {
      id: 'skill-1',
      name: 'Arquitetura & Engenharia de Software',
      shortLabel: 'Arquitetura',
      category: 'skills',
      icon: Layers,
      description: 'Modelagem de microsserviços escaláveis em Spring Boot, APIs RESTful seguras em Django e condução de todo o ciclo de vida SDLC.',
      highlight: 'Spring Boot • Django • SDLC',
    },
    {
      id: 'skill-2',
      name: 'Cibersegurança & Gestão de Ameaças',
      shortLabel: 'Segurança',
      category: 'skills',
      icon: ShieldCheck,
      description: 'Práticas avançadas de segurança na BLS Lda com redução de 80% nos incidentes de segurança interna, proteção de endpoints e threat management.',
      highlight: '-80% Incidentes • Threat Mgmt',
    },
    {
      id: 'skill-3',
      name: 'Infraestrutura de TI & Redes Corporativas',
      shortLabel: 'Infraestrutura',
      category: 'skills',
      icon: Server,
      description: 'Administração de Windows Server e Active Directory com 99% de uptime corporativo, gestão de ecossistema Microsoft 365 e ativos de rede Cisco.',
      highlight: 'Active Directory • 99% Uptime • M365',
    },
    {
      id: 'skill-4',
      name: 'Desenvolvimento de Sistemas & Otimização',
      shortLabel: 'Sistemas',
      category: 'skills',
      icon: Cpu,
      description: 'Desenvolvimento do sistema SGDE na MUCASSA (reduzindo tempo de auditoria de inventário em 40%), portal de conferências científicas e modernização de legados no CETIC.',
      highlight: 'SGDE (-40% Tempo) • MUCASSA • CETIC',
    },
    {
      id: 'skill-5',
      name: 'Liderança & Mentoria de Jovens em TI',
      shortLabel: 'Mentoria',
      category: 'skills',
      icon: User,
      description: 'Youth Mentor voluntário na WOMEN IN TECH ® Global e instrutor voluntário em iniciativas de inclusão digital de Moçambique (Vodacom Code Like a Girl, Django Girls).',
      highlight: 'WOMEN IN TECH ® • Mentoria',
    },
    {
      id: 'skill-6',
      name: 'Modelagem de Dados & SQL',
      shortLabel: 'Bancos de Dados',
      category: 'skills',
      icon: Database,
      description: 'Estruturação de bancos relacionais em MySQL e PostgreSQL, desenho relacional, integridade referencial e consultas de alta performance.',
      highlight: 'MySQL • PostgreSQL • Modelagem',
    },
    {
      id: 'skill-7',
      name: 'Metodologias Ágeis & DevOps',
      shortLabel: 'Agile & DevOps',
      category: 'skills',
      icon: Zap,
      description: 'Gestão de sprints com Scrum e Kanban, controle de versão colaborativo via Git/GitHub e práticas empresariais de DevOps certificadas pela Microsoft.',
      highlight: 'Scrum • Kanban • GitHub Enterprise',
    },
    {
      id: 'skill-8',
      name: 'Engenharia Mobile & Web Scalable',
      shortLabel: 'Mobile & Web',
      category: 'skills',
      icon: Smartphone,
      description: 'Construção de aplicações móveis e plataformas web com Flutter, React Native, WordPress e TypeScript, incluindo apps oficiais na Google Play Store.',
      highlight: 'Flutter • React Native • Play Store',
    },
  ],
  languages: [
    {
      id: 'lang-1',
      name: 'Java (Spring Boot)',
      shortLabel: 'Java',
      category: 'languages',
      icon: Cpu,
      description: 'Desenvolvimento backend empresarial de missão crítica, POO avançada, Spring Security, JPA/Hibernate e micro-serviços.',
      highlight: 'Backend Core • Spring Boot 3',
    },
    {
      id: 'lang-2',
      name: 'Python (Django & Data)',
      shortLabel: 'Python',
      category: 'languages',
      icon: Terminal,
      description: 'Desenvolvimento web robusto com Django no CETIC (Univ. Zambeze), automações, análise exploratória de dados e scripts.',
      highlight: 'Django • Data Science • CETIC',
    },
    {
      id: 'lang-3',
      name: 'TypeScript & JavaScript',
      shortLabel: 'TypeScript',
      category: 'languages',
      icon: Code2,
      description: 'Desenvolvimento full-stack corporativo, APIs assíncronas, componentização reativa e código robusto com tipagem estrita.',
      highlight: 'Node.js • React • Tipagem Estrita',
    },
    {
      id: 'lang-4',
      name: 'Flutter & Dart',
      shortLabel: 'Flutter',
      category: 'languages',
      icon: Smartphone,
      description: 'Criação de aplicativos móveis multiplataforma no CETIC – Universidade Zambeze com performance nativa e arquitetura escalável.',
      highlight: 'Mobile Multiplataforma • CETIC',
    },
    {
      id: 'lang-5',
      name: 'React Native',
      shortLabel: 'React Native',
      category: 'languages',
      icon: Globe,
      description: 'Desenvolvimento de apps mobile modernos como McLeanConnect (publicado na Google Play Store), navegação fluida e consumo de APIs.',
      highlight: 'Google Play Store • Mobile Apps',
    },
    {
      id: 'lang-6',
      name: 'PHP & WordPress',
      shortLabel: 'PHP / CMS',
      category: 'languages',
      icon: BookOpen,
      description: 'Desenvolvimento de soluções corporativas, portais de comércio exterior (BLS e GMS) e conferências científicas com SEO avançado.',
      highlight: 'Portais Corporativos • BLS & GMS',
    },
    {
      id: 'lang-7',
      name: 'SQL (MySQL & PostgreSQL)',
      shortLabel: 'SQL',
      category: 'languages',
      icon: Database,
      description: 'Modelagem de dados relacionais, índices otimizados, consistência transacional e suporte a sistemas corporativos de alta demanda.',
      highlight: 'MySQL • PostgreSQL • DDL/DML',
    },
    {
      id: 'lang-8',
      name: 'Windows Server, AD & DevOps',
      shortLabel: 'Infra & DevOps',
      category: 'languages',
      icon: GitBranch,
      description: 'Administração de infraestrutura corporativa, diretórios ativos (AD), políticas GPO, pipelines CI/CD e ativos de rede Cisco.',
      highlight: 'Windows Server • Active Directory • Git',
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'CCNA: Enterprise Networking, Security, and Automation',
      shortLabel: 'Cisco CCNA',
      category: 'certifications',
      icon: Network,
      description: 'Certificação profissional Cisco cobrindo redes corporativas, roteamento e switching avançado, automação e segurança perimetral.',
      issuer: 'Cisco',
      year: 'Jun. de 2026',
      highlight: 'CCNA • Redes de Computadores',
      verifyLink: 'https://www.credly.com/badges/805a145b-c20e-4847-807f-339720f8797b/linked_in_profile',
    },
    {
      id: 'cert-2',
      name: 'Imersão Arquitetura Web com IA',
      shortLabel: 'Arq. Web & IA',
      category: 'certifications',
      icon: Sparkles,
      description: 'Arquiteturas modernas de sistemas web potencializadas por Inteligência Artificial generativa, microsserviços e computação distribuída.',
      issuer: 'Alura',
      year: 'Jul. de 2026',
      highlight: 'Credencial: 925c2eda-d0e6-411c',
      verifyLink: 'https://cursos.alura.com.br/immersion/certificate/925c2eda-d0e6-411c-8c16-2a136f3a91cb?lang',
    },
    {
      id: 'cert-3',
      name: 'AZ-400: Development for Enterprise DevOps',
      shortLabel: 'Microsoft AZ-400',
      category: 'certifications',
      icon: GitBranch,
      description: 'Formação oficial Microsoft cobrindo estratégias de CI/CD, governança ágil, controle de qualidade contínuo e GitHub Enterprise.',
      issuer: 'Microsoft',
      year: 'Abr. de 2026',
      highlight: 'DevOps & GitHub • Microsoft',
      verifyLink: 'https://www.linkedin.com/in/estevafelton/overlay/Certifications/2093125345/treasury/?profileId=ACoAAGgK7VMBJJb_3S6Gq4axbaCgoFdZB6YSVmI',
    },
    {
      id: 'cert-4',
      name: 'Junior Cybersecurity Analyst Career Path',
      shortLabel: 'Cyber Analyst',
      category: 'certifications',
      icon: ShieldCheck,
      description: 'Trilha de formação profissional Cisco em operações de segurança (SOC), monitoramento de tráfego, análise de vetores e resposta a incidentes.',
      issuer: 'Cisco',
      year: 'Nov. de 2025',
      highlight: 'Credly Badge • Cisco SOC',
      verifyLink: 'https://www.credly.com/badges/85234320-bc22-469f-88e2-f4165b08a210/linked_in_profile',
    },
    {
      id: 'cert-5',
      name: 'Endpoint Security',
      shortLabel: 'Endpoint Sec',
      category: 'certifications',
      icon: CheckCircle2,
      description: 'Proteção de endpoints, implementação de políticas antimalware, controle de acesso a hosts e endurecimento de sistemas corporativos.',
      issuer: 'Cisco',
      year: 'Out. de 2025',
      highlight: 'Credly Badge • Cisco',
      verifyLink: 'https://www.credly.com/badges/448ef28c-ed95-42f8-a05e-7b990b5b18d7/linked_in_profile',
    },
    {
      id: 'cert-6',
      name: 'Cyber Threat Management',
      shortLabel: 'Threat Mgmt',
      category: 'certifications',
      icon: Lock,
      description: 'Gerenciamento avançado de ameaças cibernéticas, análise de vulnerabilidades, inteligência de ameaças e mitigação perimetral.',
      issuer: 'Cisco',
      year: 'Nov. de 2025',
      highlight: 'Credly Badge • Cisco',
      verifyLink: 'https://www.credly.com/badges/6f331980-4b00-48ff-9700-4d589ac20332/linked_in_profile',
    },
    {
      id: 'cert-7',
      name: 'Network Defense & Endpoint Security',
      shortLabel: 'Network Defense',
      category: 'certifications',
      icon: Server,
      description: 'Defesa de infraestruturas de rede, configuração de firewalls, zonas desmilitarizadas (DMZ) e prevenção ativa contra invasões corporativas.',
      issuer: 'Cisco Networking Academy',
      year: 'Mai. de 2025',
      highlight: 'Cibersegurança • Cisco NetAcad',
      verifyLink: 'https://www.linkedin.com/in/estevafelton/overlay/2143623185/skill-associations-details/?associationType=certifications',
    },
    {
      id: 'cert-8',
      name: 'NLW Expert: Trilha de Java',
      shortLabel: 'Java Spring',
      category: 'certifications',
      icon: Code2,
      description: 'Construção intensiva de backend com Java e Spring Boot, arquitetura modular, persistência relacional e criação de APIs RESTful.',
      issuer: 'Rocketseat',
      year: 'Fev. de 2024',
      highlight: 'Java • Backend Developer',
      verifyLink: 'https://www.linkedin.com/in/estevafelton/overlay/Certifications/2092497448/treasury/?profileId=ACoAAGgK7VMBJJb_3S6Gq4axbaCgoFdZB6YSVmI',
    },
    {
      id: 'cert-9',
      name: 'NLW Pocket: Mobile com React Native',
      shortLabel: 'React Native',
      category: 'certifications',
      icon: Smartphone,
      description: 'Desenvolvimento mobile moderno com React Native e TypeScript, ciclo de vida de componentes, interfaces ergonômicas e APIs.',
      issuer: 'Rocketseat',
      year: 'Dez. de 2024',
      highlight: 'React Native • Mobile Apps',
      verifyLink: 'https://www.linkedin.com/in/estevafelton/overlay/Certifications/2092772546/treasury/?profileId=ACoAAGgK7VMBJJb_3S6Gq4axbaCgoFdZB6YSVmI',
    },
    {
      id: 'cert-10',
      name: 'Metodologias Ágeis (Scrum & Kanban)',
      shortLabel: 'Scrum / Kanban',
      category: 'certifications',
      icon: Zap,
      description: 'Práticas ágeis de engenharia de software, papéis do Scrum, planejamento de sprints, cerimônias ágeis e fluxos Kanban contínuos.',
      issuer: 'Faculdade Rocketseat',
      year: 'Out. de 2025',
      highlight: 'Scrum • Kanban • Gestão Ágil',
      verifyLink: 'https://www.linkedin.com/in/estevafelton/overlay/Certifications/2091621325/treasury/?profileId=ACoAAGgK7VMBJJb_3S6Gq4axbaCgoFdZB6YSVmI',
    },
    {
      id: 'cert-11',
      name: 'Imersão Dados com Python',
      shortLabel: 'Python & Dados',
      category: 'certifications',
      icon: Database,
      description: 'Processamento e análise exploratória de dados com bibliotecas Python (Pandas, NumPy), tratamento de informações e modelagem analítica.',
      issuer: 'Alura',
      year: 'Ago. de 2025',
      highlight: 'Python • Data Science',
      verifyLink: 'https://www.linkedin.com/in/estevafelton/overlay/Certifications/2091297385/treasury/?profileId=ACoAAGgK7VMBJJb_3S6Gq4axbaCgoFdZB6YSVmI',
    },
    {
      id: 'cert-12',
      name: 'Networking Devices & Initial Configuration',
      shortLabel: 'Ativos de Rede',
      category: 'certifications',
      icon: Terminal,
      description: 'Configuração prática de switches e roteadores Cisco via CLI, comandos de diagnóstico, protocolos de comunicação e topologias de rede.',
      issuer: 'Cisco Networking Academy',
      year: 'Mai. de 2025',
      highlight: 'Redes de Computadores • Cisco',
      verifyLink: 'https://www.linkedin.com/in/estevafelton/overlay/Certifications/2091879639/treasury/?profileId=ACoAAGgK7VMBJJb_3S6Gq4axbaCgoFdZB6YSVmI',
    },
    {
      id: 'cert-13',
      name: 'Introdução à Cibersegurança',
      shortLabel: 'Fundamentos Cyber',
      category: 'certifications',
      icon: Award,
      description: 'Princípios fundamentais de confidencialidade, integridade e disponibilidade (CIA Triad), leis de cibersegurança e mitigação de riscos digitais.',
      issuer: 'Cisco Networking Academy',
      year: 'Abr. de 2025',
      highlight: 'Cibersegurança • Cisco NetAcad',
      verifyLink: 'https://www.linkedin.com/in/estevafelton/overlay/2090917833/skill-associations-details/?associationType=certifications',
    },
  ],
};

export default function RadialCompetenciesSection() {
  const [activeCategory, setActiveCategory] = useState<'skills' | 'languages' | 'certifications'>('skills');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const filterId = useId();

  const currentItems = competenciesData[activeCategory] || [];
  const selectedItem = currentItems[selectedItemIndex] || currentItems[0];

  // Alterna a categoria e reseta o item selecionado para o primeiro
  const handleSelectCategory = (cat: 'skills' | 'languages' | 'certifications') => {
    setActiveCategory(cat);
    setSelectedItemIndex(0);
  };

  // Parâmetros geométricos do Menu Radial SVG
  const size = 520;
  const center = size / 2;
  const outerR = 230;
  const innerR = 125;
  const centerR = 110;
  const numSegments = currentItems.length || 8;
  const anglePerSegment = (2 * Math.PI) / numSegments;
  const gapAngle = numSegments > 10 ? 0.016 : 0.035; // Espaçamento calibrado para caber até 13+ segmentos
  const iconSize = numSegments > 10 ? 15 : 18;
  const iconOffset = numSegments > 10 ? 12 : 14;
  const iconBoxDim = numSegments > 10 ? 24 : 28;

  const handlePrevItem = () => {
    setSelectedItemIndex((prev) => (prev - 1 + numSegments) % numSegments);
  };

  const handleNextItem = () => {
    setSelectedItemIndex((prev) => (prev + 1) % numSegments);
  };

  // Calcula o path SVG de um setor anular (segmento do anel)
  const getSlicePath = (index: number) => {
    const startAngle = index * anglePerSegment - Math.PI / 2 + gapAngle / 2;
    const endAngle = (index + 1) * anglePerSegment - Math.PI / 2 - gapAngle / 2;

    const x1 = center + innerR * Math.cos(startAngle);
    const y1 = center + innerR * Math.sin(startAngle);
    const x2 = center + outerR * Math.cos(startAngle);
    const y2 = center + outerR * Math.sin(startAngle);

    const x3 = center + outerR * Math.cos(endAngle);
    const y3 = center + outerR * Math.sin(endAngle);
    const x4 = center + innerR * Math.cos(endAngle);
    const y4 = center + innerR * Math.sin(endAngle);

    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerR} ${outerR} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 0 0 ${x1} ${y1} Z`;
  };

  // Posição central do ícone dentro de cada segmento
  const getIconPosition = (index: number) => {
    const midAngle = (index + 0.5) * anglePerSegment - Math.PI / 2;
    const midR = (innerR + outerR) / 2;
    return {
      x: center + midR * Math.cos(midAngle),
      y: center + midR * Math.sin(midAngle),
    };
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-transparent text-white overflow-hidden select-none border-t border-white/5"
    >
      <div id="competencias" className="absolute -top-20" />
      {/* Luz ambiente de fundo sutil em tom dourado/âmbar */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* ============================================================ */}
        {/* COLUNA ESQUERDA: TÍTULO + 3 BOTÕES CIRCULARES DE CATEGORIA   */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
          <div>
            {/* Traço e Título */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-[2px] bg-amber-500 inline-block" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-amber-500 uppercase font-semibold">
                ÁREA DE COMPETÊNCIAS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.08]">
              Área de<br />
              <span className="text-amber-500">Competências</span>
            </h2>

            <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-md">
              Conhecimento, prática e evolução contínua para transformar ideias em resultados de alto impacto.
            </p>
          </div>

          {/* Os 3 Botões Circulares Selecionáveis */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 pt-2">
            {/* Botão 1: Habilidades */}
            <button
              onClick={() => handleSelectCategory('skills')}
              className={`group relative flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full transition-all duration-300 focus:outline-none ${
                activeCategory === 'skills'
                  ? 'bg-zinc-900/90 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] scale-105'
                  : 'bg-zinc-950/60 border border-white/10 hover:border-white/30 hover:bg-zinc-900/40 text-zinc-400 hover:text-white'
              }`}
              title="Ver Habilidades"
            >
              <User
                size={28}
                className={`transition-colors duration-300 mb-2 ${
                  activeCategory === 'skills' ? 'text-amber-400' : 'text-zinc-400 group-hover:text-white'
                }`}
              />
              <span
                className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-center px-2 font-medium ${
                  activeCategory === 'skills' ? 'text-white font-bold' : 'text-zinc-400 group-hover:text-zinc-200'
                }`}
              >
                Habilidades
              </span>
              {activeCategory === 'skills' && (
                <span className="w-6 h-[2px] bg-amber-400 rounded-full mt-1.5 shadow-[0_0_8px_#f59e0b]" />
              )}
            </button>

            {/* Botão 2: Linguagens de Programação */}
            <button
              onClick={() => handleSelectCategory('languages')}
              className={`group relative flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full transition-all duration-300 focus:outline-none ${
                activeCategory === 'languages'
                  ? 'bg-zinc-900/90 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] scale-105'
                  : 'bg-zinc-950/60 border border-white/10 hover:border-white/30 hover:bg-zinc-900/40 text-zinc-400 hover:text-white'
              }`}
              title="Ver Linguagens de Programação"
            >
              <Code2
                size={28}
                className={`transition-colors duration-300 mb-2 ${
                  activeCategory === 'languages' ? 'text-amber-400' : 'text-zinc-400 group-hover:text-white'
                }`}
              />
              <span
                className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-center px-1 font-medium leading-tight ${
                  activeCategory === 'languages' ? 'text-white font-bold' : 'text-zinc-400 group-hover:text-zinc-200'
                }`}
              >
                Linguagens &<br />Ferramentas
              </span>
              {activeCategory === 'languages' && (
                <span className="w-6 h-[2px] bg-amber-400 rounded-full mt-1 shadow-[0_0_8px_#f59e0b]" />
              )}
            </button>

            {/* Botão 3: Certificações */}
            <button
              onClick={() => handleSelectCategory('certifications')}
              className={`group relative flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full transition-all duration-300 focus:outline-none ${
                activeCategory === 'certifications'
                  ? 'bg-zinc-900/90 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] scale-105'
                  : 'bg-zinc-950/60 border border-white/10 hover:border-white/30 hover:bg-zinc-900/40 text-zinc-400 hover:text-white'
              }`}
              title="Ver Certificações"
            >
              <Award
                size={28}
                className={`transition-colors duration-300 mb-2 ${
                  activeCategory === 'certifications' ? 'text-amber-400' : 'text-zinc-400 group-hover:text-white'
                }`}
              />
              <span
                className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-center px-2 font-medium ${
                  activeCategory === 'certifications' ? 'text-white font-bold' : 'text-zinc-400 group-hover:text-zinc-200'
                }`}
              >
                Certificações
              </span>
              {activeCategory === 'certifications' && (
                <span className="w-6 h-[2px] bg-amber-400 rounded-full mt-1.5 shadow-[0_0_8px_#f59e0b]" />
              )}
            </button>
          </div>

          {/* Rodapé esquerdo sutil */}
          <div className="pt-6 border-t border-white/10 flex items-center gap-3">
            <span className="w-1 h-8 bg-amber-500/80 rounded-full" />
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400 leading-tight">
              <span>DISCIPLINA HOJE,</span><br />
              <span className="text-zinc-300">RESULTADOS SEMPRE.</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* COLUNA DIREITA: MENU CIRCULAR RADIAL TECNOLÓGICO             */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          
          {/* Rótulo superior da área do menu radial */}
          <div className="self-end mb-2 hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
            <span>SELECIONE UM SEGMENTO</span>
            <span className="w-4 h-[1px] bg-amber-500 rotate-45" />
          </div>

          {/* Container do SVG Radial */}
          <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center">
            
            <svg
              viewBox={`0 0 ${size} ${size}`}
              className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <defs>
                {/* Gradiente Dourado Ativo */}
                <linearGradient id={`goldGrad-${filterId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.95" />
                </linearGradient>

                {/* Filtro de Brilho Suave */}
                <filter id={`glowFilter-${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Anel Externo Fino Decorativo com Ticks */}
              <circle
                cx={center}
                cy={center}
                r={outerR + 12}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />

              {/* Segmentos Radiais Clicáveis */}
              {currentItems.map((item, idx) => {
                const isSelected = idx === selectedItemIndex;
                const path = getSlicePath(idx);
                const iconPos = getIconPosition(idx);
                const ItemIcon = item.icon;

                return (
                  <g
                    key={item.id}
                    onClick={() => setSelectedItemIndex(idx)}
                    className="cursor-pointer transition-all duration-300 group"
                  >
                    {/* O Segmento em Forma de Arco */}
                    <path
                      d={path}
                      fill={
                        isSelected
                          ? `url(#goldGrad-${filterId})`
                          : 'rgba(18, 22, 28, 0.65)'
                      }
                      stroke={
                        isSelected
                          ? '#F59E0B'
                          : 'rgba(255, 255, 255, 0.12)'
                      }
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                      className={`transition-all duration-300 ${
                        isSelected
                          ? 'filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                          : 'hover:fill-zinc-800/80 hover:stroke-amber-400/50'
                      }`}
                    />

                    {/* Ícone posicionado no centro do segmento */}
                    <foreignObject
                      x={iconPos.x - iconOffset}
                      y={iconPos.y - iconOffset}
                      width={iconBoxDim}
                      height={iconBoxDim}
                      className="pointer-events-none"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <ItemIcon
                          size={iconSize}
                          className={`transition-colors duration-300 ${
                            isSelected
                              ? 'text-black drop-shadow font-bold'
                              : 'text-zinc-400 group-hover:text-amber-300'
                          }`}
                        />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}

              {/* Anel Interno Fino Delimitando o Hub Central */}
              <circle
                cx={center}
                cy={center}
                r={innerR - 6}
                fill="none"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1"
                strokeDasharray="2 4"
              />

              {/* Centro do Menu (Hub Circular Central) */}
              <circle
                cx={center}
                cy={center}
                r={centerR}
                fill="#0B0F15"
                stroke="rgba(245, 158, 11, 0.4)"
                strokeWidth="2"
                className="shadow-2xl"
              />
            </svg>

            {/* Conteúdo Rico no Centro do Menu Radial */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center justify-center max-w-[190px]"
                >
                  {/* Marcadores HUD em canto: ┌ ┐ */}
                  <div className="flex items-center justify-between w-14 mb-2 text-amber-400/70 font-mono text-xs">
                    <span>┌</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shadow-[0_0_6px_#f59e0b]" />
                    <span>┐</span>
                  </div>

                  {/* Ícone do Item Selecionado */}
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-2 shadow-inner">
                    {React.createElement(selectedItem.icon, { size: 20 })}
                  </div>

                  {/* Nome do Item */}
                  <h4 className="text-xs sm:text-sm font-bold font-sans text-white uppercase tracking-wider leading-snug line-clamp-2">
                    {selectedItem.name}
                  </h4>

                  {/* Detalhe / Emissor / Ano se for certificação */}
                  {selectedItem.issuer ? (
                    <span className="font-mono text-[9px] text-amber-300 font-semibold mt-1">
                      {selectedItem.issuer} • {selectedItem.year}
                    </span>
                  ) : selectedItem.highlight ? (
                    <span className="font-mono text-[9px] text-amber-300 font-semibold mt-1">
                      {selectedItem.highlight}
                    </span>
                  ) : null}

                  {/* Descrição Curta */}
                  <p className="text-[10px] text-zinc-300 font-light mt-1.5 line-clamp-3 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  {/* Link para Verificar se existir */}
                  {selectedItem.verifyLink && (
                    <a
                      href={selectedItem.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 font-mono text-[9px] text-amber-400 hover:text-amber-300 underline underline-offset-2 pointer-events-auto transition-colors"
                    >
                      <span>Ver credencial</span>
                      <ExternalLink size={10} />
                    </a>
                  )}

                  {/* Marcadores HUD inferiores: └ ┘ */}
                  <div className="flex items-center justify-between w-14 mt-2 text-amber-400/70 font-mono text-xs">
                    <span>└</span>
                    <span className="w-1 h-[1px] bg-amber-400/40 inline-block" />
                    <span>┘</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Navegação Rápida entre Itens com Setas & Contador */}
          <div className="mt-5 flex items-center justify-between w-full max-w-[520px] px-2 text-zinc-400 font-mono text-xs">
            <button
              onClick={handlePrevItem}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-amber-500/50 hover:text-amber-400 bg-black/40 backdrop-blur-sm transition-all text-[11px] uppercase tracking-wider"
              title="Segmento anterior"
            >
              <ChevronLeft size={14} />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-widest uppercase text-amber-400 font-bold">
                {String(selectedItemIndex + 1).padStart(2, '0')} / {String(numSegments).padStart(2, '0')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
              <span className="text-zinc-200 font-bold truncate max-w-[170px] sm:max-w-[220px] text-[11px]">
                {selectedItem.shortLabel}
              </span>
            </div>

            <button
              onClick={handleNextItem}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-amber-500/50 hover:text-amber-400 bg-black/40 backdrop-blur-sm transition-all text-[11px] uppercase tracking-wider"
              title="Próximo segmento"
            >
              <span className="hidden sm:inline">Próximo</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Indicador inferior direito */}
          <div className="self-end mt-4 flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
            <span>EVOLUÇÃO CONTÍNUA</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
