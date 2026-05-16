import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import {
  ArrowRight,
  Award,
  Briefcase,
  CalendarDays,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react';
import { HoverScale, FadeInUp, StaggerContainer, StaggerItem, GlowEffect, Floating } from '@/components/AnimationShowcase';

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.animate(
          {
            transform: `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`,
          },
          {
            duration: 500,
            fill: 'forwards',
            easing: 'cubic-bezier(.22, 1, .36, 1)',
          },
        );
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

type CvTimelineItem = {
  year: string;
  type: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  icon: LucideIcon;
  accent: 'purple' | 'cyan' | 'green' | 'pink' | 'amber';
  summary: string;
  achievements: string[];
  tags: string[];
};

const cvSkillBlocks = [
  {
    label: 'Desenvolvimento',
    icon: Code2,
    chips: ['Flutter', 'React Native', 'Django', 'Java Spring Boot', 'JavaScript', 'WordPress'],
  },
  {
    label: 'Infraestrutura',
    icon: ShieldCheck,
    chips: ['Windows Server', 'Active Directory', 'LAN/WAN', 'Microsoft 365', 'Suporte N2/N3'],
  },
  {
    label: 'Execução',
    icon: Sparkles,
    chips: ['Scrum', 'Kanban', 'SDLC', 'UX/UI', 'Cibersegurança', 'Gestão de projectos'],
  },
] as const;

const cvEditorialStats = [
  { label: 'Base profissional', value: '3 frentes' },
  { label: 'Impacto directo', value: '70%+' },
  { label: 'Mentoria e liderança', value: '60+' },
] as const;

const accentPalette = {
  purple: {
    border: 'border-neon-purple/40',
    glow: 'shadow-[0_0_24px_rgba(168,85,247,0.18)]',
    pill: 'border-neon-purple/40 text-neon-purple',
    line: 'from-neon-purple/90 to-neon-purple/10',
    text: 'text-neon-purple',
  },
  cyan: {
    border: 'border-neon-cyan/40',
    glow: 'shadow-[0_0_24px_rgba(6,182,212,0.18)]',
    pill: 'border-neon-cyan/40 text-neon-cyan',
    line: 'from-neon-cyan/90 to-neon-cyan/10',
    text: 'text-neon-cyan',
  },
  green: {
    border: 'border-neon-green/40',
    glow: 'shadow-[0_0_24px_rgba(34,197,94,0.18)]',
    pill: 'border-neon-green/40 text-neon-green',
    line: 'from-neon-green/90 to-neon-green/10',
    text: 'text-neon-green',
  },
  pink: {
    border: 'border-neon-pink/40',
    glow: 'shadow-[0_0_24px_rgba(236,72,153,0.18)]',
    pill: 'border-neon-pink/40 text-neon-pink',
    line: 'from-neon-pink/90 to-neon-pink/10',
    text: 'text-neon-pink',
  },
  amber: {
    border: 'border-amber-400/40',
    glow: 'shadow-[0_0_24px_rgba(251,191,36,0.16)]',
    pill: 'border-amber-400/40 text-amber-300',
    line: 'from-amber-300/90 to-amber-300/10',
    text: 'text-amber-300',
  },
} as const;

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, -130]);
  const decorationY = useTransform(scrollYProgress, [0, 0.45], [0, 90]);
  const [siteTransitionPhase, setSiteTransitionPhase] = useState<'idle' | 'impact' | 'destroying' | 'destroyed'>('idle');
  const [certificationPage, setCertificationPage] = useState(0);
  const [selectedCvItem, setSelectedCvItem] = useState<CvTimelineItem | null>(null);
  const [emailFlight, setEmailFlight] = useState<{
    id: number;
    from: { x: number; y: number };
    to: { x: number; y: number };
  } | null>(null);
  const [projectFlight, setProjectFlight] = useState<{
    id: number;
    from: { x: number; y: number };
    to: { x: number; y: number };
    project: (typeof projects)[number];
  } | null>(null);
  const emailButtonRef = useRef<HTMLDivElement | null>(null);
  const emailTargetRef = useRef<HTMLAnchorElement | null>(null);

  const projects = [
    {
      id: 1,
      title: 'McLeanConnect Mobile',
      description: 'Bem-vindo ao McLeanConnect! Conectando serviços locais confiáveis em Moçambique — primeira versão disponível na Play Store.',
      tech: 'React Native, APIs REST',
      images: ['/projects/www.mcleanconnect.works.jpeg'],
      color: 'border-neon-purple',
      bgColor: 'from-purple-900 to-indigo-900',
      status: 'Live',
      link: 'https://play.google.com/store/apps/details?id=mcleanconnect.works',
    },
    {
      id: 2,
      title: 'Sistema de Gestão de Equipamentos',
      description: 'Controle eficiente de cadastro, empréstimo e devolução de equipamentos',
      tech: 'Java, MySQL, Spring Boot',
      images: ['/projects/sgde.equipamentos.jpeg'],
      color: 'border-neon-pink',
      bgColor: 'from-orange-900 to-red-900',
      status: 'Completo',
      link: 'https://github.com/Unizambeze/sgde_frontend',
    },
    {
      id: 3,
      title: 'McLeanConnect',
      description: 'Plataforma móvel com integração de serviços',
      tech: 'React Native, Flutter, APIs REST',
      images: ['/projects/www.mcleanconnect.works.jpeg'],
      color: 'border-neon-purple',
      bgColor: 'from-purple-900 to-indigo-900',
      status: 'Live',
      link: 'https://github.com/Felton7JE/MCleanConectPage',
    },
    {
      id: 4,
      title: 'Portal de Cibersegurança',
      description: 'Website & E-book educativo sobre segurança digital',
      tech: 'WordPress, PHP, HTML, CSS, JavaScript',
      images: ['/projects/cybersecurity.jpeg', '/projects/springbootguide.jpeg'],
      color: 'border-neon-green',
      bgColor: 'from-green-900 to-emerald-900',
      status: 'Completo',
      link: 'https://github.com/Felton7JE/cibersecurity',
    },
    {
      id: 5,
      title: 'Portal UZ & Sistemas',
      description: 'Gestão de portais acadêmicos e sistemas integrados',
      tech: 'Java, React, MySQL, Active Directory',
      images: ['/projects/blslda.co.mz.jpeg', '/projects/gmslda.co.mz.jpeg'],
      color: 'border-neon-cyan',
      bgColor: 'from-yellow-900 to-orange-900',
      status: 'Completo',
      link: '#',
    },
    {
      id: 6,
      title: 'Business Logistics Services Website',
      description: 'Website institucional para serviços de logística e frete internacional.',
      tech: 'WordPress, UI Design, SEO, Responsive Web',
      images: ['/projects/blslda.co.mz.jpeg'],
      color: 'border-neon-purple',
      bgColor: 'from-sky-900 to-blue-900',
      status: 'Live',
      link: 'https://blslda.co.mz',
    },
    {
      id: 7,
      title: 'Global Marine Services Website',
      description: 'Portal corporativo para empresa de transporte marítimo e freight solutions.',
      tech: 'WordPress, CSS, JavaScript, Performance',
      images: ['/projects/gmslda.co.mz.jpeg'],
      color: 'border-neon-green',
      bgColor: 'from-indigo-900 to-cyan-900',
      status: 'Live',
      link: 'https://gmslda.co.mz',
    },
    {
      id: 8,
      title: 'Guia Completo Spring Boot',
      description: 'Material técnico com introdução prática a Spring Boot para iniciantes.',
      tech: 'Java, Spring Boot, Documentação Técnica',
      images: ['/projects/springbootguide.jpeg'],
      color: 'border-neon-pink',
      bgColor: 'from-slate-900 to-zinc-900',
      status: 'Publicado',
      link: 'https://github.com/Felton7JE/crud_springboot',
    },
    {
      id: 9,
      title: 'StartSolutionsMZ',
      description: 'Site institucional focado em soluções digitais, com design moderno, serviços e apresentação de projetos.',
      tech: 'UI/UX, Web Design Responsivo, Frontend, Branding',
      images: ['/projects/imgS1.png', '/projects/imsS2.png', '/projects/imgs3.png', '/projects/imgs4.png'],
      color: 'border-neon-cyan',
      bgColor: 'from-cyan-900 to-blue-900',
      status: 'Live',
      link: 'https://github.com/StartSolutionsMZ/webPage',
    },
    {
      id: 10,
      title: 'TSolutions',
      description: 'Site corporativo para startup atuante em tecnologias e engenharia civil.',
      tech: 'React, Web Design',
      images: [],
      color: 'border-neon-purple',
      bgColor: 'from-indigo-900 to-purple-900',
      status: 'Repositório',
      link: 'https://github.com/Felton7JE/tsolutions',
    },
    {
      id: 11,
      title: 'Prémio Jovem Criativo',
      description: 'Plataforma para iniciativa do Governo de Moçambique que reconhece e premia jovens em empreendedorismo, inovação tecnológica e criação artística.',
      tech: 'React, Frontend',
      images: [],
      color: 'border-neon-green',
      bgColor: 'from-emerald-900 to-green-900',
      status: 'Repositório',
      link: 'https://github.com/Felton7JE/jovem_criativo',
    },
    {
      id: 12,
      title: 'Sistema de Gerenciamento de Farmacia',
      description: 'Sistema completo de gerenciamento de uma farmacia com funcionalidades de controle de estoque, vendas e relatórios.',
      tech: 'Java, Banco de Dados',
      images: [],
      color: 'border-neon-pink',
      bgColor: 'from-pink-900 to-red-900',
      status: 'Repositório',
      link: 'https://github.com/Felton7JE/Farmacia-Java',
    },
    {
      id: 13,
      title: 'Funza - Sistema de Gerenciamento de Livraria',
      description: 'Sistema completo de gerenciamento de uma livraria com controle de inventário, vendas e relatórios.',
      tech: 'Backend, Banco de Dados',
      images: [],
      color: 'border-neon-cyan',
      bgColor: 'from-blue-900 to-cyan-900',
      status: 'Repositório',
      link: 'https://github.com/Felton7JE/funzaBack',
    },
  ];

  const [projectPage, setProjectPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [selectedProjectImage, setSelectedProjectImage] = useState<string | null>(null);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);
  const [isScrollMode, setIsScrollMode] = useState(false);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLElement | null>(null);

  const [sectionFlight, setSectionFlight] = useState<{
    id: number;
    from: { x: number; y: number };
    to: { x: number; y: number };
    label: string;
  } | null>(null);

  const projectsPerPage = 4;
  const totalProjectPages = Math.max(1, Math.ceil(projects.length / projectsPerPage));
  const visibleProjects = projects.slice(projectPage * projectsPerPage, (projectPage + 1) * projectsPerPage);

  const certifications = [
    {
      title: 'Junior Cybersecurity Analyst Career Path',
      issuer: 'Cisco',
      year: '2025',
      category: 'Cybersecurity',
      description: 'Trilha de formação em análise de cibersegurança e defesa de sistemas.',
      link: 'https://www.credly.com/badges/85234320-bc22-469f-88e2-f4165b08a210',
    },
    {
      title: 'Cyber Threat Management',
      issuer: 'Cisco',
      year: '2025',
      category: 'Cybersecurity',
      description: 'Boas práticas para identificar, monitorar e responder a ameaças.',
      link: 'https://www.credly.com/badges/6f331980-4b00-48ff-9700-4d589ac20332',
    },
    {
      title: 'Endpoint Security',
      issuer: 'Cisco',
      year: '2025',
      category: 'Cybersecurity',
      description: 'Proteção de dispositivos finais e redução da superfície de ataque.',
      link: 'https://www.credly.com/badges/448ef28c-ed95-42f8-a05e-7b990b5b18d7',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: '2025',
      category: 'Cybersecurity',
      description: 'Fundamentos de cibersegurança, riscos e proteção de dados.',
      link: 'https://www.credly.com/badges/7362c856-e434-4bae-9d72-d3453e54766d',
    },
    {
      title: 'Network Defense',
      issuer: 'Cisco',
      year: '2025',
      category: 'Networking',
      description: 'Defesa de redes, segmentação e redução de riscos operacionais.',
      link: 'https://www.credly.com/badges/4ce33131-df30-43ec-a400-16bdb4f2d2ae',
    },
    {
      title: 'Networking Basics',
      issuer: 'Cisco',
      year: '2025',
      category: 'Networking',
      description: 'Fundamentos de redes, protocolos e topologias básicas.',
      link: 'https://www.credly.com/badges/fe0c0e61-1cc3-47b2-ac05-096233f12ac4',
    },
    {
      title: 'Networking Devices and Initial Configuration',
      issuer: 'Cisco',
      year: '2025',
      category: 'Networking',
      description: 'Configuração inicial de roteadores, switches e conectividade.',
      link: 'https://www.credly.com/badges/b8adf5de-a846-4546-adba-0d6edb971e67',
    },
    {
      title: 'AZ-400: Desenvolvimento para DevOps Empresarial',
      issuer: 'Microsoft Learn',
      year: '2026',
      category: 'DevOps',
      description: 'Roteiro concluído em Microsoft Learn com foco em DevOps empresarial.',
      link: 'https://learn.microsoft.com/en-us/users/feltondasilva-0222/achievements?tab=tab-learning-paths#trophies-section',
    },
    {
      title: 'Metodologias Ágeis',
      issuer: 'Rocketseat',
      year: '2025',
      category: 'Metodologias',
      description: 'Formação em metodologias ágeis.',
      link: 'https://www.rocketseat.com.br/referral/one?referral=felton-da-silva-joaquim-estevao-03480&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one-certificate-modal&coupon=indicamgm',
    },
    {
      title: 'NWL Trilha React Native',
      issuer: 'Rocketseat',
      year: '2025',
      category: 'Frontend',
      description: 'Trilha NWL - React Native.',
      link: 'https://www.rocketseat.com.br/referral/one?referral=felton-da-silva-joaquim-estevao-03480&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one-certificate-modal&coupon=indicamgm',
    },
    {
      title: 'NWL Trilha Java',
      issuer: 'Rocketseat',
      year: '2025',
      category: 'Backend',
      description: 'Trilha NWL - Java.',
      link: 'https://www.rocketseat.com.br/referral/one?referral=felton-da-silva-joaquim-estevao-03480&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one-certificate-modal&coupon=indicamgm',
    },
    {
      title: 'Imersão Inteligência Artificial',
      issuer: 'Alura',
      year: '2025',
      category: 'AI',
      description: 'Imersão em Inteligência Artificial.',
      link: 'https://cursos.alura.com.br/user/dasilvafelton7/immersion/certificate/102850',
    },
    {
      title: 'Imersão de Dados em Python - Data Science',
      issuer: 'Alura',
      year: '2025',
      category: 'Data Science',
      description: 'Imersão em análise de dados com Python.',
      link: 'https://cursos.alura.com.br/user/dasilvafelton7/immersion/certificate/85637',
    },
  ];

  const certificationsPerPage = 6;
  const totalCertificationPages = Math.max(1, Math.ceil(certifications.length / certificationsPerPage));
  const visibleCertifications = certifications.slice(
    certificationPage * certificationsPerPage,
    (certificationPage + 1) * certificationsPerPage,
  );

  useEffect(() => {
    setProjectPage(0);
  }, []);

  useEffect(() => {
    if (siteTransitionPhase === 'idle') {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [siteTransitionPhase]);

  const triggerDestruction = () => {
    if (siteTransitionPhase !== 'idle') {
      return;
    }

    setSiteTransitionPhase('impact');
    window.setTimeout(() => setSiteTransitionPhase('destroying'), 700);
    window.setTimeout(() => setSiteTransitionPhase('destroyed'), 3000);
  };

  const launchEmailFlight = () => {
    if (emailFlight) {
      return;
    }

    const buttonRect = emailButtonRef.current?.getBoundingClientRect();
    const targetRect = emailTargetRef.current?.getBoundingClientRect();

    if (!buttonRect || !targetRect) {
      emailTargetRef.current?.click();
      return;
    }

    const from = {
      x: buttonRect.left + buttonRect.width / 2 - 18,
      y: buttonRect.top + buttonRect.height / 2 - 18,
    };
    const to = {
      x: targetRect.left + targetRect.width / 2 - 18,
      y: targetRect.top + targetRect.height / 2 - 18,
    };

    const flightId = Date.now();
    setEmailFlight({ id: flightId, from, to });

    window.setTimeout(() => {
      emailTargetRef.current?.click();
      setEmailFlight((currentFlight) => (currentFlight?.id === flightId ? null : currentFlight));
    }, 1050);
  };

  const launchProjectFlight = (
    project: (typeof projects)[number],
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    if (projectFlight) {
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const targetRect = detailRef.current?.getBoundingClientRect();

    if (!targetRect) {
      setSelectedProject(project);
      setSelectedProjectImage(project.images?.[0] ?? null);
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }

    const from = {
      x: buttonRect.left + buttonRect.width / 2 - 18,
      y: buttonRect.top + buttonRect.height / 2 - 18,
    };
    const to = {
      x: targetRect.left + targetRect.width / 2 - 18,
      y: targetRect.top + targetRect.height / 2 - 18,
    };

    const flightId = Date.now();
    setProjectFlight({ id: flightId, from, to, project });

    window.setTimeout(() => {
      setSelectedProject(project);
      setSelectedProjectImage(project.images?.[0] ?? null);
      detailRef.current?.scrollIntoView({ behavior: 'smooth' });
      setProjectFlight((currentFlight) => (currentFlight?.id === flightId ? null : currentFlight));
    }, 1050);
  };

  const openProjectLinkWithFlight = (
    project: (typeof projects)[number],
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    if (projectFlight) {
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const targetRect = detailRef.current?.getBoundingClientRect() ?? buttonRect;

    const from = {
      x: buttonRect.left + buttonRect.width / 2 - 18,
      y: buttonRect.top + buttonRect.height / 2 - 18,
    };
    const to = {
      x: targetRect.left + targetRect.width / 2 - 18,
      y: targetRect.top + targetRect.height / 2 - 18,
    };

    const flightId = Date.now();
    setProjectFlight({
      id: flightId,
      from,
      to,
      project,
    });

    window.setTimeout(() => {
      if (project.link && project.link !== '#') {
        window.open(project.link, '_blank', 'noopener,noreferrer');
      }
      setProjectFlight((currentFlight) => (currentFlight?.id === flightId ? null : currentFlight));
    }, 1050);
  };

  const launchSectionFlight = (
    targetRef: { current: HTMLElement | null },
    label: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (sectionFlight) {
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const targetRect = targetRef.current?.getBoundingClientRect();

    if (!targetRect) {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const from = {
      x: buttonRect.left + buttonRect.width / 2 - 18,
      y: buttonRect.top + buttonRect.height / 2 - 18,
    };
    const to = {
      x: Math.min(window.innerWidth - 60, targetRect.left + targetRect.width / 2 - 18),
      y: Math.min(window.innerHeight - 90, targetRect.top + 32),
    };

    const flightId = Date.now();
    setSectionFlight({ id: flightId, from, to, label });

    window.setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSectionFlight((currentFlight) => (currentFlight?.id === flightId ? null : currentFlight));
    }, 900);
  };

  const isDestroying = siteTransitionPhase !== 'idle';

  const aboutStats = [
    { value: '20+', label: 'projetos concluídos' },
    { value: '5+', label: 'clientes satisfeitos' },
    { value: '7+', label: 'anos em TI' },
  ];

  const techStacks = [
    {
      title: 'Backend',
      items: ['Java', 'Spring Boot', 'Python', 'APIs REST'],
      accent: 'text-neon-cyan',
      border: 'border-neon-cyan/30',
    },
    {
      title: 'Frontend',
      items: ['React', 'React Native', 'Flutter', 'WordPress'],
      accent: 'text-neon-green',
      border: 'border-neon-green/30',
    },
    {
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL'],
      accent: 'text-neon-pink',
      border: 'border-neon-pink/30',
    },
    {
      title: 'DevOps & Infra',
      items: ['Active Directory', 'Windows Server', 'Linux', 'Postman'],
      accent: 'text-neon-purple',
      border: 'border-neon-purple/30',
    },
  ];

  const cvTimeline: CvTimelineItem[] = [
    {
      year: '2025',
      type: 'Experiência',
      title: 'Engenheiro de Software e Gestor de Infraestrutura de TI',
      organization: 'Business Logistics & Services, Lda',
      location: 'Beira, Sofala',
      period: 'Março 2025 – Novembro 2025',
      icon: Briefcase,
      accent: 'cyan',
      summary: 'Conduzi a transformação digital da operação e fortalecei a base tecnológica da organização.',
      achievements: [
        'Liderei o novo portal corporativo, com impacto directo de 70% na aquisição de novos clientes.',
        'Estruturei a presença web da Global Marine Services e impulsionei a carteira em 60% com SEO e UX/UI.',
        'Geri Windows Server, Active Directory e a infraestrutura de redes, mantendo uptime acima de 99%.',
        'Implementei cibersegurança e workshops para mais de 20 colaboradores, reduzindo em 80% os incidentes.',
      ],
      tags: ['Windows Server', 'Active Directory', 'SEO', 'UX/UI', 'Microsoft 365', 'Cibersegurança'],
    },
    {
      year: '2025',
      type: 'Experiência',
      title: 'Desenvolvedor de Sistemas de Informática',
      organization: 'MUCASSA, Lda',
      location: 'Beira, Sofala',
      period: 'Junho 2024 – Janeiro 2025',
      icon: Code2,
      accent: 'purple',
      summary: 'Desenvolvi soluções web e mobile alinhadas à operação, com foco em estabilidade e manutenção evolutiva.',
      achievements: [
        'Desenvolvi e mantive aplicações com Flutter, Django, JavaScript e WordPress para necessidades internas.',
        'Diagnostiquei falhas de conectividade e rede, protegendo a continuidade das operações diárias.',
        'Participei do SDLC do levantamento de requisitos ao deploy e suporte pós-implementação.',
        'Otimizei sistemas legados com melhorias de código e actualizações críticas de segurança.',
      ],
      tags: ['Flutter', 'Django', 'JavaScript', 'WordPress', 'SDLC', 'Redes'],
    },
    {
      year: '2025',
      type: 'Experiência',
      title: 'Engenheiro de Desenvolvimento de Software (Estágio)',
      organization: 'CETIC – Universidade Zambeze',
      location: 'Beira, Sofala',
      period: 'Março 2024 – Setembro 2025',
      icon: CalendarDays,
      accent: 'green',
      summary: 'Tirei ideias do papel em soluções institucionais com foco em automação, documentação e suporte técnico.',
      achievements: [
        'Projetei o SGDE, reduzindo em 40% o tempo de localização e auditoria de activos de TI.',
        'Lancei o portal oficial da conferência científica com HTML5, CSS3, Bootstrap e JavaScript.',
        'Executei manutenção preventiva e correctiva em computadores e redes locais, prolongando a vida útil do parque informático.',
        'Documentei processos e apoiei novos estagiários com boas práticas e metodologias ágeis.',
      ],
      tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Documentação', 'Mentoria'],
    },
    {
      year: '2025',
      type: 'Formação',
      title: 'Licenciatura em Engenharia Informática',
      organization: 'Universidade Zambeze',
      location: 'Beira, Sofala',
      period: 'Conclusão: Dezembro 2025',
      icon: GraduationCap,
      accent: 'amber',
      summary: 'Base académica que consolidou a minha visão de engenharia, análise e implementação de sistemas.',
      achievements: [
        'Formação orientada para desenvolvimento de software, redes, bases de dados e arquitectura de sistemas.',
        'Integração contínua entre estudo, prática em estágio e projectos aplicados no mundo real.',
      ],
      tags: ['Engenharia Informática', 'Sistemas', 'Redes', 'Bases de Dados'],
    },
    {
      year: '2025',
      type: 'Liderança',
      title: 'Vodacom Code Like a Girl',
      organization: 'Instrutor voluntário',
      location: 'Moçambique',
      period: '2025',
      icon: Users,
      accent: 'pink',
      summary: 'Actuei como formador voluntário em tecnologia web, com impacto directo na inclusão de género.',
      achievements: [
        'Capacitei mais de 60 jovens mulheres em HTML, CSS, JavaScript e UX.',
        'Ajudei a fortalecer a confiança técnica e o acesso a oportunidades no sector tecnológico.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'UX', 'Inclusão'],
    },
    {
      year: '2025',
      type: 'Liderança',
      title: 'Django Girls Moçambique',
      organization: 'Mentoria técnica',
      location: 'Moçambique',
      period: '2025',
      icon: Sparkles,
      accent: 'cyan',
      summary: 'Mentoria prática para iniciantes, ligando lógica de programação a desenvolvimento com Django.',
      achievements: [
        'Orientei participantes em lógica de programação e primeiros passos com Django.',
        'Contribuí para um ambiente de aprendizagem acessível, colaborativo e orientado a prática.',
      ],
      tags: ['Django', 'Mentoria', 'Programação', 'Workshop'],
    },
    {
      year: '2025',
      type: 'Liderança',
      title: 'Younglife',
      organization: 'Líder de jovens',
      location: 'Moçambique',
      period: 'Em curso',
      icon: Users,
      accent: 'green',
      summary: 'Liderança centrada em organização de eventos, acompanhamento e crescimento pessoal.',
      achievements: [
        'Planeei eventos e actividades com foco em mentoria e desenvolvimento humano.',
        'Apoiei jovens em trajectos de crescimento pessoal, relacional e espiritual.',
      ],
      tags: ['Liderança', 'Mentoria', 'Eventos', 'Comunidade'],
    },
    {
      year: '2025',
      type: 'Distinção',
      title: 'Prémio Jovem Criativo 2025',
      organization: 'McLeanConnect',
      location: 'Fase Provincial',
      period: '2025',
      icon: Trophy,
      accent: 'amber',
      summary: 'Reconhecimento pela criação de uma solução móvel com foco em integração de serviços e impacto social.',
      achievements: [
        'Venci a fase provincial com o aplicativo McLeanConnect, destacando excelência técnica e utilidade prática.',
        'A distinção reforça a combinação entre produto, inovação e execução orientada a impacto.',
      ],
      tags: ['Produto', 'Inovação', 'Impacto social', 'Mobile'],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Sidebar isDestroying={isDestroying} emailTargetRef={emailTargetRef} emailActive={Boolean(emailFlight)} />
      <Header
        onFeltonClick={triggerDestruction}
        onProjectsClick={(event) => launchSectionFlight(worksRef, 'Projects', event)}
        onEmailClick={() => launchEmailFlight()}
        isDestroying={isDestroying}
      />

      <AnimatePresence>
        {emailFlight && (
          <motion.div
            key={emailFlight.id}
            className="pointer-events-none fixed inset-0 z-[95]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-background/90 px-3 py-2 text-neon-cyan shadow-[0_0_28px_rgba(6,182,212,0.35)] backdrop-blur-md"
              initial={{ x: emailFlight.from.x, y: emailFlight.from.y, scale: 0.75, rotate: -14, opacity: 0 }}
              animate={{
                x: [emailFlight.from.x, emailFlight.from.x + 110, emailFlight.to.x],
                y: [emailFlight.from.y, emailFlight.from.y - 100, emailFlight.to.y],
                scale: [0.75, 1.04, 0.9],
                rotate: [-14, -4, 8],
                opacity: [0, 1, 1],
              }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Send className="h-4 w-4" />
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Enviar</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sectionFlight && (
          <motion.div
            key={sectionFlight.id}
            className="pointer-events-none fixed inset-0 z-[95]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute flex items-center gap-2 rounded-full border border-neon-purple/30 bg-background/90 px-3 py-2 text-neon-purple shadow-[0_0_28px_rgba(168,85,247,0.35)] backdrop-blur-md"
              initial={{ x: sectionFlight.from.x, y: sectionFlight.from.y, scale: 0.75, rotate: -14, opacity: 0 }}
              animate={{
                x: [sectionFlight.from.x, sectionFlight.from.x + 120, sectionFlight.to.x],
                y: [sectionFlight.from.y, sectionFlight.from.y - 100, sectionFlight.to.y],
                scale: [0.75, 1.04, 0.9],
                rotate: [-14, -4, 8],
                opacity: [0, 1, 1],
              }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Send className="h-4 w-4" />
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{sectionFlight.label}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {projectFlight && (
          <motion.div
            key={projectFlight.id}
            className="pointer-events-none fixed inset-0 z-[95]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
                              <motion.div
              className="absolute flex items-center gap-2 rounded-full border border-neon-purple/30 bg-background/90 px-3 py-2 text-neon-purple shadow-[0_0_28px_rgba(168,85,247,0.35)] backdrop-blur-md"
              initial={{ x: projectFlight.from.x, y: projectFlight.from.y, scale: 0.75, rotate: -14, opacity: 0 }}
              animate={{
                x: [projectFlight.from.x, projectFlight.from.x + 130, projectFlight.to.x],
                y: [projectFlight.from.y, projectFlight.from.y - 110, projectFlight.to.y],
                scale: [0.75, 1.04, 0.9],
                rotate: [-14, -2, 8],
                opacity: [0, 1, 1],
              }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Send className="h-4 w-4" />
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Projeto</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        className="ml-0 pt-16 md:ml-20"
        animate={
          siteTransitionPhase === 'idle'
            ? { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0, filter: 'blur(0px)' }
            : siteTransitionPhase === 'impact'
              ? { x: [0, -8, 6, -5, 4, 0], y: [0, -2, 2, -1, 1, 0] }
              : { opacity: 0, scale: 0.92, rotate: -2.8, x: -40, y: 50, filter: 'blur(10px)' }
        }
        transition={
          siteTransitionPhase === 'impact'
            ? { duration: 0.58, ease: 'linear' }
            : { duration: 1.8, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-between overflow-hidden px-6 py-20 md:px-12"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663031291793/6SsesSrThezPLaswMBnmHm/hero-background-a7wjSgQsNB7JkqVKKJJKVH.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/50" />
          <div className="absolute left-1/4 top-20 h-56 w-56 rounded-full bg-neon-purple/20 blur-3xl animate-blob" />
          <div className="absolute bottom-16 right-1/4 h-64 w-64 rounded-full bg-neon-cyan/10 blur-3xl animate-blob-delayed" />

          <motion.div style={{ y: heroY }} className="relative z-10 max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.p variants={fadeUp} transition={{ duration: 0.75, ease: 'easeOut' }} className="mb-5 inline-flex rounded-full border border-neon-purple/60 bg-background/60 px-4 py-2 font-mono text-sm text-neon-purple backdrop-blur-sm">
                Desenvolvedor de Software • Suporte TI • Full-Stack
              </motion.p>

              <motion.h1 variants={fadeUp} transition={{ duration: 0.85, ease: 'easeOut' }} className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
                <span className="text-neon-purple">Felton</span> da Silva Joaquim
                <br />
                <span className="text-neon-purple">Estevão</span>
              </motion.h1>

              <motion.p variants={fadeUp} transition={{ duration: 0.75, ease: 'easeOut' }} className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras. Especializado em Java, Python, React e infraestrutura de TI.
              </motion.p>

              <motion.div variants={fadeUp} transition={{ duration: 0.75, ease: 'easeOut' }} className="flex flex-wrap items-center gap-4">
                <GlowEffect duration={2}>
                  <HoverScale scale={1.08}>
                    <Button className="rounded-lg bg-neon-purple px-6 py-3 font-mono font-semibold text-background transition-all duration-300 hover:-translate-y-1 hover:bg-neon-purple/90 hover:shadow-lg hover:shadow-neon-purple/50">
                      Contact me!!
                    </Button>
                  </HoverScale>
                </GlowEffect>
                <HoverScale scale={1.05}>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={(event) => launchSectionFlight(worksRef, 'Projects', event)}
                    className="group inline-flex items-center gap-2 rounded-lg border border-neon-purple/60 px-6 py-3 font-mono text-sm text-neon-purple transition-all duration-300 hover:-translate-y-1 hover:bg-neon-purple/10"
                  >
                    View projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </HoverScale>
              </motion.div>

              <motion.div variants={fadeUp} transition={{ duration: 0.75, ease: 'easeOut' }} className="mt-12 inline-flex items-center gap-2 rounded-lg border border-neon-purple bg-background/50 px-4 py-2 backdrop-blur-sm">
                <Floating>
                  <div className="h-2 w-2 rounded-full bg-neon-purple" />
                </Floating>
                <span className="font-mono text-sm text-foreground">
                  Desenvolvendo <span className="text-neon-purple glow-text">Soluções Inovadoras</span>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: decorationY }} className="absolute right-6 top-1/2 hidden h-80 w-80 -translate-y-1/2 opacity-25 md:block">
            <motion.img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031291793/6SsesSrThezPLaswMBnmHm/profile-decoration-dg34Rjg3iyz6mTvvFydg4Z.webp"
              alt="Decoration"
              className="h-full w-full object-contain"
              animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <div className="absolute right-0 top-1/4 h-40 w-40 dot-pattern opacity-20" />
        </section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.75, ease: 'easeOut' }} className="relative border-y border-border px-6 py-20 md:px-12">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663031291793/6SsesSrThezPLaswMBnmHm/quote-section-bg-ZQffv3gsLUngCPEofg9y4R.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <HoverScale scale={1.02}>
              <motion.div
                className="rounded-2xl border border-neon-purple/40 bg-background/50 p-8 backdrop-blur-sm"
                whileHover={{ borderColor: 'rgba(168, 85, 247, 0.8)' }}
              >
                <p className="mb-6 font-mono text-2xl italic text-foreground glow-text">
                  "With great power comes great electricity bill"
                </p>
                <p className="text-right font-mono text-muted-foreground">- Dr. Who</p>
              </motion.div>
            </HoverScale>
          </div>
        </motion.section>

        <section id="works" ref={worksRef} className="px-6 py-20 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.75 }} className="mb-12">
            <h2 className="mb-2 text-4xl font-bold text-neon-purple glow-text">#projects</h2>
            <p className="text-muted-foreground">List of my projects</p>
          </motion.div>

          <div className="mb-8 flex items-center justify-between rounded-2xl border border-border bg-card/40 p-4 backdrop-blur-sm">
            <div>
              <h3 className="text-2xl font-bold text-foreground">#complete-apps</h3>
              <p className="font-mono text-xs text-muted-foreground">
                Página {Math.min(projectPage + 1, totalProjectPages)} de {totalProjectPages}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setProjectPage((currentPage) => Math.max(0, currentPage - 1))}
                disabled={projectPage === 0}
              >
                Prev
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={() => setProjectPage((currentPage) => Math.min(totalProjectPages - 1, currentPage + 1))}
                disabled={projectPage >= totalProjectPages - 1}
              >
                Next
              </Button>
            </div>
          </div>

          <StaggerContainer key={`projects-page-${projectPage}`} staggerDelay={0.15}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {visibleProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <HoverScale scale={1.05}>
                    <motion.article
                      onClick={() => {
                        setSelectedProject(project);
                        setSelectedProjectImage(project.images?.[0] ?? null);
                        setImageZoom(1);
                        setIsScrollMode(false);
                        setTimeout(() => {
                          detailRef.current?.scrollIntoView({ behavior: 'smooth' });
                        }, 120);
                      }}
                      whileHover={{ y: -6 }}
                      className={`group cursor-pointer overflow-hidden rounded-lg border-2 ${project.color} bg-card transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/20`}
                    >
                      <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.bgColor}`}>
                        {/* show a partial image if available */}
                        {project.images && project.images.length > 0 ? (
                          <img src={project.images[0]} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top opacity-90" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Github size={48} className="text-white/40" />
                          </div>
                        )}
                        <div className="absolute inset-0 dot-pattern opacity-25" />
                      </div>

                      <div className="p-4">
                        <h4 className="mb-2 text-lg font-bold text-foreground">{project.title}</h4>
                        <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                        <p className="mb-4 font-mono text-xs text-muted-foreground">{project.tech}</p>

                        <div className="flex items-center justify-between">
                          <span className={`rounded border px-2 py-1 font-mono text-xs text-foreground ${project.color}`}>{project.status}</span>
                          <button
                            type="button"
                            className="rounded p-2 transition-colors duration-300 hover:bg-secondary"
                            aria-label={`Open ${project.title}`}
                            onClick={(event) => launchProjectFlight(project, event)}
                          >
                            <ExternalLink size={16} className="text-muted-foreground transition-colors group-hover:text-neon-purple" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  </HoverScale>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </section>

        {/* Project detail section */}
        <section id="project-detail" ref={detailRef} className="border-t border-border px-6 py-20 md:px-12">
          <div className="mx-auto max-w-4xl">
            {selectedProject ? (
              <div className="rounded-2xl border border-neon-purple/30 bg-card/60 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{selectedProject.description}</p>
                    <p className="mt-2 font-mono text-xs text-muted-foreground">Tecnologias: {selectedProject.tech}</p>
                  </div>
                  <div className="flex gap-2">
                    {selectedProject.link && selectedProject.link !== '#' && (
                      <Button
                        size="sm"
                        onClick={(event) => openProjectLinkWithFlight(selectedProject, event)}
                        className="gap-2 bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:shadow-lg hover:shadow-neon-purple/50"
                      >
                        <ExternalLink size={16} />
                        Ver Projeto
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setSelectedProject(null);
                        setSelectedProjectImage(null);
                        setIsImageViewerOpen(false);
                        setImageZoom(1);
                        setIsScrollMode(false);
                      }}
                    >
                      Fechar
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="md:col-span-2">
                    {selectedProject.images && selectedProject.images.length > 0 ? (
                      <button
                        type="button"
                        className="w-full"
                        onClick={() => {
                          if (selectedProjectImage) {
                            setIsImageViewerOpen(true);
                          }
                        }}
                      >
                        <img
                          src={selectedProjectImage ?? selectedProject.images[0]}
                          alt={selectedProject.title}
                          loading="lazy"
                          className="h-80 w-full rounded-lg object-cover"
                        />
                      </button>
                    ) : (
                      <div className="flex h-80 w-full items-center justify-center rounded-lg bg-gradient-to-br from-slate-900 to-zinc-900">
                        <Github size={64} className="text-white/30" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Imagens</h4>
                    <div className="flex flex-col gap-2">
                      {(selectedProject.images || []).map((img) => (
                        <button
                          key={img}
                          type="button"
                          className={`overflow-hidden rounded border ${selectedProjectImage === img ? 'border-neon-purple' : 'border-transparent'}`}
                          onClick={() => {
                            setSelectedProjectImage(img);
                            setIsImageViewerOpen(true);
                            setImageZoom(1);
                            setIsScrollMode(false);
                          }}
                        >
                          <img src={img} alt={selectedProject.title} loading="lazy" className="h-20 w-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">Clique em um projeto para ver mais detalhes.</div>
            )}
          </div>
        </section>

        {isImageViewerOpen && selectedProjectImage && selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => {
              setIsImageViewerOpen(false);
              setImageZoom(1);
              setIsScrollMode(false);
            }}
          >
            <div className="w-full max-w-[95vw]" onClick={(event) => event.stopPropagation()}>
              <div className="mb-3 flex items-center justify-between rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-white">
                <span className="font-mono text-xs">Zoom: {Math.round(imageZoom * 100)}%</span>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => setImageZoom((current) => Math.max(0.5, Number((current - 0.25).toFixed(2))))}
                  >
                    -
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => setImageZoom((current) => Math.min(4, Number((current + 0.25).toFixed(2))))}
                  >
                    +
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => setImageZoom(1)}
                  >
                    Reset
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => setIsScrollMode((current) => !current)}
                  >
                    {isScrollMode ? 'Ajustar' : 'Rolagem'}
                  </Button>
                  <button
                    type="button"
                    className="rounded-full border border-white/20 bg-black/40 p-2 text-white transition-colors hover:bg-black/70"
                    onClick={() => {
                      setIsImageViewerOpen(false);
                      setImageZoom(1);
                      setIsScrollMode(false);
                    }}
                    aria-label="Fechar imagem"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className={`rounded-lg border border-white/20 bg-black/30 ${isScrollMode ? 'max-h-[85vh] overflow-auto' : 'max-h-[85vh] overflow-hidden'}`}>
                <img
                  src={selectedProjectImage}
                  alt={selectedProject.title}
                  loading="lazy"
                  className={`mx-auto w-auto rounded-lg ${isScrollMode ? 'max-h-none max-w-none object-left-top' : 'max-h-[85vh] max-w-[95vw] object-contain'}`}
                  style={{ transform: `scale(${imageZoom})`, transformOrigin: 'top center' }}
                />
              </div>
            </div>
          </div>
        )}

        <section id="about" className="border-t border-border px-6 py-20 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.75 }} className="mx-auto max-w-5xl">
            <h2 className="mb-5 text-4xl font-bold text-neon-purple glow-text">#about-me</h2>
            <p className="mb-10 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Desenvolvedor Full-Stack com experiência em soluções de software, suporte de TI e infraestrutura. Apaixonado por cibersegurança, desenvolvimento de software e inteligência artificial. Comprometido com excelência e inovação.
            </p>

              <div className="space-y-6 text-muted-foreground">
                <FadeInUp delay={0.2}>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {aboutStats.map((stat) => (
                      <motion.div
                        key={stat.label}
                        className="rounded-2xl border border-neon-purple/20 bg-card/50 p-4 text-center backdrop-blur-sm"
                        whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.7)' }}
                      >
                        <div className="text-2xl font-bold text-neon-purple">{stat.value}</div>
                        <div className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </FadeInUp>

                <FadeInUp delay={0.3}>
                  <div>
                    <p className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-neon-cyan">Tech Stack</p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {techStacks.map((group) => (
                        <motion.div
                          key={group.title}
                          className={`rounded-2xl border ${group.border} bg-card/50 p-4 backdrop-blur-sm`}
                          whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.55)' }}
                        >
                          <div className={`mb-3 flex items-center justify-between ${group.accent}`}>
                            <h4 className="font-semibold text-foreground">{group.title}</h4>
                            <span className={`h-2 w-2 rounded-full bg-current ${group.accent}`} />
                          </div>

                          <StaggerContainer staggerDelay={0.05}>
                            <div className="flex flex-wrap gap-2">
                              {group.items.map((item) => (
                                <StaggerItem key={item}>
                                  <HoverScale scale={1.08}>
                                    <motion.span
                                      className="inline-flex rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-foreground transition-colors duration-300 hover:bg-neon-purple/10"
                                    >
                                      {item}
                                    </motion.span>
                                  </HoverScale>
                                </StaggerItem>
                              ))}
                            </div>
                          </StaggerContainer>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </motion.div>
        </section>

        <section id="certifications" className="border-t border-border px-6 py-20 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.75 }} className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-3 text-4xl font-bold text-neon-purple glow-text">#certifications</h2>
                <p className="max-w-2xl text-muted-foreground">
                  Certificações e badges públicos de Cisco e Microsoft Learn que mostram minha base em redes, cibersegurança e DevOps.
                </p>
              </div>
              <span className="font-mono text-sm text-neon-cyan">{visibleCertifications.length} visíveis de {certifications.length}</span>
            </div>

            <div className="mb-8 flex items-center justify-between rounded-2xl border border-border bg-card/40 p-4 backdrop-blur-sm">
              <span className="font-mono text-xs text-muted-foreground">
                Página {Math.min(certificationPage + 1, totalCertificationPages)} de {totalCertificationPages}
              </span>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setCertificationPage((currentPage) => Math.max(0, currentPage - 1))}
                  disabled={certificationPage === 0}
                >
                  Prev
                </Button>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => setCertificationPage((currentPage) => Math.min(totalCertificationPages - 1, currentPage + 1))}
                  disabled={certificationPage >= totalCertificationPages - 1}
                >
                  Next
                </Button>
              </div>
            </div>

            <StaggerContainer key={`certifications-page-${certificationPage}`} staggerDelay={0.08}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleCertifications.map((certification) => (
                  <StaggerItem key={certification.title}>
                    <HoverScale scale={1.03}>
                      <motion.article
                        className="group h-full rounded-2xl border border-neon-purple/30 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-lg hover:shadow-neon-purple/20"
                        whileHover={{ y: -6 }}
                      >
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon-purple/40 bg-background/60 text-neon-purple">
                              <Award size={20} />
                            </div>
                            <div>
                              <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan">{certification.category}</p>
                              <h3 className="mt-1 text-lg font-bold text-foreground">{certification.title}</h3>
                            </div>
                          </div>
                          <span className="rounded-full border border-neon-purple/30 bg-background/50 px-3 py-1 font-mono text-xs text-neon-purple">
                            {certification.year}
                          </span>
                        </div>

                        <p className="mb-5 text-sm text-muted-foreground">{certification.description}</p>

                        <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                          <div>
                            <p className="font-mono text-xs text-muted-foreground">Issuer</p>
                            <p className="font-semibold text-foreground">{certification.issuer}</p>
                          </div>

                          <a href={certification.link} className="inline-flex items-center gap-2 font-mono text-sm text-neon-purple transition-colors duration-300 hover:text-neon-cyan">
                            Verify <ExternalLink size={14} />
                          </a>
                        </div>
                      </motion.article>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </motion.div>
        </section>

        <section id="contacts" className="border-t border-border px-6 py-20 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.75 }} className="max-w-3xl">
            <h2 className="mb-8 text-4xl font-bold text-neon-purple glow-text">#contacts</h2>

            <div className="space-y-6 rounded-2xl border border-neon-purple/30 bg-card/60 p-8 backdrop-blur-sm">
              <FadeInUp>
                <p className="text-muted-foreground">
                  Sempre aberto a novas oportunidades e projetos interessantes. Entre em contato para colaborar!
                </p>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <StaggerContainer staggerDelay={0.1}>
                  <div className="flex flex-col gap-4">
                    <StaggerItem>
                      <HoverScale scale={1.05}>
                        <a href="mailto:dasilvafelton7@gmail.com" className="inline-flex items-center gap-2 font-mono text-neon-purple transition-colors duration-300 hover:text-neon-cyan group">
                          <motion.div
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Mail size={18} className="group-hover:scale-110 transition-transform" />
                          </motion.div>
                          dasilvafelton7@gmail.com
                        </a>
                      </HoverScale>
                    </StaggerItem>
                    <StaggerItem>
                      <HoverScale scale={1.05}>
                        <a href="https://github.com/Felton7JE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-neon-purple transition-colors duration-300 hover:text-neon-cyan group">
                          <motion.div
                            animate={{ rotate: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                          >
                            <Github size={18} className="group-hover:scale-110 transition-transform" />
                          </motion.div>
                          github.com/Felton7JE
                        </a>
                      </HoverScale>
                    </StaggerItem>
                    <StaggerItem>
                      <HoverScale scale={1.05}>
                        <a href="https://www.linkedin.com/in/estevafelton/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-neon-purple transition-colors duration-300 hover:text-neon-cyan group">
                          <motion.div
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                          >
                            <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                          </motion.div>
                          linkedin.com/in/estevafelton
                        </a>
                      </HoverScale>
                    </StaggerItem>
                  </div>
                </StaggerContainer>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <GlowEffect duration={2}>
                  <div ref={emailButtonRef}>
                    <HoverScale scale={1.08}>
                      <Button
                        type="button"
                        onClick={launchEmailFlight}
                        className="mt-4 rounded-lg bg-neon-purple px-6 py-3 font-mono font-semibold text-background transition-all duration-300 hover:-translate-y-1 hover:bg-neon-purple/90 hover:shadow-lg hover:shadow-neon-purple/50"
                      >
                        Send me an email
                      </Button>
                    </HoverScale>
                  </div>
                </GlowEffect>
              </FadeInUp>
            </div>
          </motion.div>
        </section>

        <footer className="border-t border-neon-purple/20 bg-background/70 px-6 py-12 md:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-neon-cyan">final da página</p>
              <h3 className="mt-2 text-2xl font-bold text-neon-purple glow-text md:text-3xl">Felton da Silva</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                Transformando ideias em sistemas, interfaces e experiências que ligam pessoas, tecnologia e impacto real.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Navegação</p>
                <div className="mt-3 flex flex-col gap-2 text-sm text-foreground">
                  <a href="#about" className="transition-colors duration-300 hover:text-neon-cyan">Sobre</a>
                  <a href="#projects" className="transition-colors duration-300 hover:text-neon-cyan">Projectos</a>
                  <a href="#certifications" className="transition-colors duration-300 hover:text-neon-cyan">Certificações</a>
                  <a href="#contacts" className="transition-colors duration-300 hover:text-neon-cyan">Contactos</a>
                </div>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Contacto</p>
                <div className="mt-3 flex flex-col gap-2 text-sm text-foreground">
                  <a href="mailto:dasilvafelton7@gmail.com" className="transition-colors duration-300 hover:text-neon-cyan">Email</a>
                  <a href="https://github.com/Felton7JE" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-neon-cyan">GitHub</a>
                  <a href="https://www.linkedin.com/in/estevafelton/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-neon-cyan">LinkedIn</a>
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-2 lg:text-right">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Assinatura</p>
                <p className="mt-3 text-sm leading-7 text-foreground/85 md:text-base">
                  © 2026 Felton da Silva. Todos os direitos reservados.
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">
                  Designed & Built com <span className="text-neon-purple">atenção ao detalhe</span>.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </motion.main>

      <AnimatePresence>
        {isDestroying && (
          <>
            <motion.div
              className="pointer-events-none fixed inset-0 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: siteTransitionPhase === 'impact' ? 0.65 : 0.25 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65 }}
              style={{
                background:
                  'radial-gradient(circle at 50% 38%, rgba(236,72,153,0.38) 0%, rgba(168,85,247,0.28) 24%, rgba(2,6,23,0.9) 78%)',
              }}
            />
            <motion.div
              className="pointer-events-none fixed inset-0 z-[61]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: siteTransitionPhase === 'impact' ? 0.7 : 0,
                backgroundColor: siteTransitionPhase === 'impact' ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0)',
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="pointer-events-none fixed inset-0 z-[62]"
              initial={{ opacity: 0 }}
              animate={{ opacity: siteTransitionPhase === 'destroyed' ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,12,18,0.84) 0%, rgba(4,5,10,0.96) 45%, rgba(2,2,6,1) 100%)',
              }}
            />

            <AnimatePresence>
              {siteTransitionPhase === 'destroyed' && (
                <motion.section
                  className="fixed inset-0 z-[70] overflow-y-auto px-4 py-16 md:px-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="mx-auto max-w-7xl">
                    <motion.div
                      className="mb-10 rounded-2xl border border-neon-purple/40 bg-background/40 p-6 backdrop-blur-md md:p-8 xl:p-10"
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                        <div>
                          <p className="font-mono text-sm uppercase tracking-[0.32em] text-neon-cyan md:text-base">a minha jornada</p>
                          <h2 className="mt-2 text-4xl font-bold text-neon-purple glow-text md:text-6xl">Minha jornada</h2>
                          <p className="mt-3 max-w-3xl text-base text-foreground/85 md:text-lg xl:text-xl">
                            Aqui está a minha jornada de crescimento em tecnologia, liderança e impacto real, apresentada de forma clara e directa.
                          </p>
                        </div>

                        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 lg:justify-self-end">
                          {cvEditorialStats.map((stat) => (
                            <div
                              key={stat.label}
                              className="rounded-2xl border border-white/10 bg-card/35 px-4 py-3 text-left backdrop-blur-sm"
                            >
                              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                              <p className="mt-2 text-lg font-bold text-foreground">{stat.value}</p>
                            </div>
                          ))}

                          <Button
                            asChild
                            type="button"
                            variant="outline"
                            className="col-span-1 sm:col-span-3 border-neon-purple/60 text-neon-purple hover:bg-neon-purple/10"
                          >
                            <a href="/cv/FELTON_ESTEVAO_CV_PORTUGUES.pdf" download="FELTON_ESTEVAO_CV_PORTUGUES.pdf">
                              Baixar CV
                            </a>
                          </Button>

                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setSiteTransitionPhase('idle')}
                            className="col-span-1 sm:col-span-3 border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/10"
                          >
                            Home page do portfólio
                          </Button>
                        </div>
                      </div>
                      <motion.div
                        className="mt-6 h-[2px] origin-left rounded-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                      />
                    </motion.div>

                    <div className="relative pb-8">
                      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {cvSkillBlocks.map((block, index) => {
                          const SkillIcon = block.icon;

                          return (
                            <motion.div
                              key={block.label}
                              className="rounded-2xl border border-white/10 bg-card/35 p-4 backdrop-blur-sm"
                              initial={{ opacity: 0, y: 18 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.55, delay: 0.45 + index * 0.12 }}
                            >
                              <div className="flex items-center gap-3">
                                <div className="rounded-full border border-neon-cyan/30 bg-background/50 p-2 text-neon-cyan">
                                  <SkillIcon className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{block.label}</p>
                                  <p className="text-sm font-medium text-foreground">Pilares do perfil</p>
                                </div>
                              </div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {block.chips.map((chip) => (
                                  <span
                                    key={chip}
                                    className="rounded-full border border-white/10 bg-background/50 px-3 py-1 text-[11px] text-muted-foreground"
                                  >
                                    {chip}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      <footer className="mt-10 border-t border-neon-purple/20 pt-6 text-center font-mono text-xs text-muted-foreground md:text-sm">
                        <p>© 2026 Felton da Silva</p>
                        <p className="mt-2 text-neon-cyan">A minha jornada continua a crescer com tecnologia, liderança e impacto real.</p>
                      </footer>

                      <div className="relative mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-10">
                        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent" />
                        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent" />

                        <div className="overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:rgba(168,85,247,0.6)_transparent]">
                          <div className="relative flex w-max snap-x snap-mandatory gap-6 py-6 md:gap-12">
                            <motion.div
                              className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] rounded-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                              style={{ transformOrigin: 'left center' }}
                            />

                            {cvTimeline.map((item, index) => {
                              const isTopCard = index % 2 === 0;
                              const TimelineIcon = item.icon;
                              const palette = accentPalette[item.accent];
                              const separatorDelay = 0.72 + index * 0.2 + 0.15;

                              return (
                                <div key={`${item.title}-${item.period}`} className="relative flex items-center gap-6 md:gap-14">
                                  <motion.button
                                    type="button"
                                    onClick={() => setSelectedCvItem(item)}
                                    className="relative w-[82vw] max-w-[360px] snap-center text-left md:w-[340px] lg:w-[420px]"
                                    initial={{ opacity: 0, x: 30, y: 14, filter: 'blur(8px)' }}
                                    animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.66, delay: 0.72 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                                  >
                                  {isTopCard ? <div className="hidden md:block h-[170px]" /> : null}

                                  <motion.div
                                    className={`rounded-2xl border ${palette.border} bg-card/62 p-4 backdrop-blur-sm md:p-5 ${palette.glow}`}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                  >
                                    <div className="flex items-start justify-between gap-3">
                                      <div className="flex min-w-0 items-start gap-3">
                                        <div className={`rounded-2xl border ${palette.pill} bg-background/60 p-2.5`}>
                                          <TimelineIcon className="h-4 w-4" />
                                        </div>
                                        <div className="min-w-0">
                                          <div className="flex flex-wrap items-center gap-2">
                                            <span className="rounded-full border border-neon-cyan/40 bg-background/60 px-3 py-1 font-mono text-[11px] text-neon-cyan">
                                              {item.year}
                                            </span>
                                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.type}</span>
                                          </div>
                                          <h3 className="mt-2 text-base font-bold leading-tight text-foreground">{item.title}</h3>
                                          <p className={`mt-1 text-xs font-medium ${palette.text}`}>{item.organization}</p>
                                        </div>
                                      </div>
                                      <span className="rounded-full border border-white/10 bg-background/50 px-2.5 py-0.5 text-[10px] text-muted-foreground whitespace-nowrap">
                                        {item.period}
                                      </span>
                                    </div>

                                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                      <span className="inline-flex items-center gap-1.5">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {item.location}
                                      </span>
                                      <span className="inline-flex items-center gap-1.5">
                                        <CalendarDays className="h-3.5 w-3.5" />
                                        {item.period}
                                      </span>
                                    </div>

                                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{item.summary}</p>

                                    <ul className="mt-2 space-y-1">
                                      {item.achievements.map((achievement) => (
                                        <li key={achievement} className="flex gap-2 text-xs leading-tight text-foreground/80">
                                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${palette.line}`} />
                                          <span>{achievement}</span>
                                        </li>
                                      ))}
                                    </ul>

                                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                                      {item.tags.map((tag) => (
                                        <span
                                          key={tag}
                                          className="rounded-full border border-white/10 bg-background/45 px-2 py-0.5 text-[9px] text-muted-foreground"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  </motion.div>

                                  {!isTopCard ? <div className="hidden md:block h-[170px]" /> : null}

                                  <motion.div
                                    className={`hidden md:block absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-neon-cyan shadow-[0_0_18px_rgba(6,182,212,0.75)] ${palette.glow}`}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.35, delay: 0.75 + index * 0.18 }}
                                  />

                                  {isTopCard ? (
                                    <div className={`hidden md:block absolute left-1/2 top-1/2 h-16 w-[2px] -translate-x-1/2 -translate-y-full bg-gradient-to-t ${palette.line}`} />
                                  ) : (
                                    <div className={`hidden md:block absolute left-1/2 top-1/2 h-16 w-[2px] -translate-x-1/2 bg-gradient-to-b ${palette.line}`} />
                                  )}
                                  </motion.button>

                                  {index < cvTimeline.length - 1 && (
                                    <motion.div
                                      className="relative flex w-4 md:w-20 flex-shrink-0 items-center justify-center"
                                      initial={{ opacity: 0, scale: 0.85 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.55, delay: separatorDelay - 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                      <motion.div
                                        className="hidden md:block absolute left-1/2 top-1/2 h-28 w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent shadow-[0_0_22px_rgba(6,182,212,0.95)]"
                                        animate={{ opacity: [0.55, 1, 0.55], scaleY: [0.88, 1, 0.88] }}
                                        transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
                                      />
                                      <motion.div
                                        className="hidden md:block absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-background bg-neon-cyan shadow-[0_0_18px_rgba(6,182,212,1)]"
                                        animate={{ boxShadow: ['0 0 12px rgba(6,182,212,0.65)', '0 0 22px rgba(6,182,212,1)', '0 0 12px rgba(6,182,212,0.65)'] }}
                                        transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
                                      />
                                    </motion.div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {selectedCvItem && (
                          <motion.div
                              className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md overflow-y-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCvItem(null)}
                          >
                            <motion.div
                                className="w-full max-w-4xl overflow-hidden rounded-3xl border border-neon-purple/40 bg-background/95 shadow-2xl shadow-black/60 my-8"
                              initial={{ opacity: 0, y: 28, scale: 0.96 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 18, scale: 0.98 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              onClick={(event) => event.stopPropagation()}
                            >
                              <div className={`h-2 w-full bg-gradient-to-r ${accentPalette[selectedCvItem.accent].line}`} />
                                <div className="grid gap-5 p-4 sm:gap-6 sm:p-5 md:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
                                <div>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <span className="rounded-full border border-neon-cyan/40 bg-background/60 px-3 py-1 font-mono text-xs text-neon-cyan">
                                      {selectedCvItem.year}
                                    </span>
                                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                      {selectedCvItem.type}
                                    </span>
                                  </div>

                                  <h3 className="mt-4 text-2xl font-bold text-foreground md:text-4xl">
                                    {selectedCvItem.title}
                                  </h3>
                                  <p className={`mt-2.5 text-base font-medium ${accentPalette[selectedCvItem.accent].text}`}>
                                    {selectedCvItem.organization}
                                  </p>

                                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                                    <span className="inline-flex items-center gap-1.5">
                                      <MapPin className="h-4 w-4" />
                                      {selectedCvItem.location}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                      <CalendarDays className="h-4 w-4" />
                                      {selectedCvItem.period}
                                    </span>
                                  </div>

                                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                                    {selectedCvItem.summary}
                                  </p>

                                  <ul className="mt-5 space-y-2.5">
                                    {selectedCvItem.achievements.map((achievement) => (
                                      <li key={achievement} className="flex gap-3 text-sm leading-6 text-foreground/90">
                                        <span className={`mt-3 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${accentPalette[selectedCvItem.accent].line}`} />
                                        <span>{achievement}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="space-y-5 rounded-2xl border border-white/10 bg-card/50 p-4 backdrop-blur-sm md:p-5">
                                  <div>
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Tags</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                      {selectedCvItem.tags.map((tag) => (
                                        <span key={tag} className="rounded-full border border-white/10 bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Resumo</p>
                                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                      Clique nos outros cards para alternar rapidamente entre os marcos da tua jornada.
                                    </p>
                                  </div>

                                  <div className="flex flex-wrap gap-3">
                                    <Button
                                      asChild
                                      variant="outline"
                                      className="border-neon-purple/60 text-neon-purple hover:bg-neon-purple/10"
                                    >
                                      <a href="/cv/felton-da-silva-cv.html" download="Felton-Da-Silva-CV.html">
                                        Baixar CV
                                      </a>
                                    </Button>

                                    <Button
                                      type="button"
                                      variant="outline"
                                      className="border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/10"
                                      onClick={() => setSelectedCvItem(null)}
                                    >
                                      Fechar
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
