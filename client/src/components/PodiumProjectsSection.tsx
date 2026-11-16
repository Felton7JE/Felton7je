import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  label: string;
  screenSubtitle: string;
  problem: string;
  solution: string;
  tags: string[];
  link: string;
  image: string;
  icon?: string;
}

export const realProjects: ProjectItem[] = [
  {
    id: 1,
    title: 'Alerta Máxima',
    category: 'INOVAÇÃO & SEGURANÇA PÚBLICA',
    label: '01  ——  2.º LUGAR HACKATHON IEUL',
    screenSubtitle: 'RESPOSTA RÁPIDA A ASSALTOS',
    problem:
      'Numa situação de assalto ou emergência criminal, o problema crítico não é apenas o crime: é o tempo vital e a dificuldade das vítimas para acionar socorro e localizar o local com exatidão.',
    solution:
      'Sistema integrado onde um único acionamento dispara o alarme, identifica o estabelecimento comercial e despacha a ocorrência à Central/Esquadra policial mais próxima de forma rápida, estruturada e geolocalizada (Premiado com o 2.º lugar no Hackathon Comunidades Resilientes da IEUL).',
    tags: ['Hackathon IEUL', 'Segurança Pública', 'Inovação', 'Beira'],
    link: 'https://lnkd.in/p/dYDv3SU5',
    image: '/projects/linkedin_post_og.jpg',
    icon: '/projects/linkedin_post_icon.png',
  },
  {
    id: 2,
    title: 'McLeanConnect Mobile',
    category: 'APLICATIVO MÓVEL / STARTUP',
    label: '02  ——  SERVIÇOS SOB DEMANDA',
    screenSubtitle: 'PRÉMIO JOVEM CRIATIVO',
    problem:
      'A contratação de serviços domésticos e técnicos em Moçambique sofria com extrema insegurança, ausência de prestadores verificados e precificação informal sem garantia.',
    solution:
      'Plataforma móvel completa (React Native e APIs REST) conectando clientes e prestadores locais confiáveis com geolocalização, agendamento de serviços, pagamentos móveis e histórico avaliado pela comunidade.',
    tags: ['React Native', 'Mobile', 'APIs REST', 'Google Play'],
    link: 'https://play.google.com/store/apps/details?id=mcleanconnect.works',
    image: '/projects/mclean_og.jpg',
    icon: '/projects/mclean_icon.ico',
  },
  {
    id: 3,
    title: 'DFM GROUP LDA',
    category: 'IMPORTAÇÃO & COMÉRCIO EXTERIOR',
    label: '03  ——  IMPORTAÇÃO DIRETA DO JAPÃO',
    screenSubtitle: 'PORTO DA BEIRA',
    problem:
      'Processos de encomenda e importação de viaturas do Japão geravam desconfiança devido à falta de transparência em cotações, taxas aduaneiras e prazos de entrega.',
    solution:
      'Plataforma web com cotações transparentes, catálogo de viaturas japonesas por encomenda, desalfandegamento especializado no Porto da Beira e entrega nacional segura.',
    tags: ['Comércio Exterior', 'Importação', 'Vercel', 'Porto da Beira'],
    link: 'https://dfm-group-lda.vercel.app/',
    image: '/projects/dfm_og.jpg',
    icon: '/projects/dfm_icon.svg',
  },
  {
    id: 4,
    title: 'SGDE — Gestão de Equipamentos',
    category: 'SISTEMA CORPORATIVO / BACKEND',
    label: '04  ——  GESTÃO PATRIMONIAL UZ',
    screenSubtitle: 'UNIVERSIDADE ZAMBEZE',
    problem:
      'Descontrole e extravios no registro manual de empréstimos, devoluções e manutenções de materiais e equipamentos em laboratórios universitários.',
    solution:
      'Sistema corporativo escalável em Java (Spring Boot) e MySQL com perfis de acesso (RBAC), auditoria de integridade e controle de empréstimos em tempo real.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'RBAC'],
    link: 'https://github.com/Unizambeze/sgde_frontend',
    image: '/projects/sgde.equipamentos.jpeg',
  },
  {
    id: 5,
    title: 'BLS — Business Logistics Services',
    category: 'PORTAL CORPORATIVO / COMÉRCIO EXTERIOR',
    label: '05  ——  LOGÍSTICA & DESPACHOS',
    screenSubtitle: 'FRETES MARÍTIMOS',
    problem:
      'Empresas de comércio exterior encontravam gargalos para obter orçamentos rápidos e rastrear procedimentos aduaneiros em portos de Moçambique.',
    solution:
      'Portal corporativo ágil e otimizado para SEO, apresentando catálogo de portos, rotas internacionais e canal direto de consultoria aduaneira e logística.',
    tags: ['WordPress', 'SEO', 'Logística', 'Comércio Exterior'],
    link: 'https://blslda.co.mz',
    image: '/projects/blslda.co.mz.jpeg',
  },
  {
    id: 6,
    title: 'Missão Bethel Internacional',
    category: 'PLATAFORMA INSTITUCIONAL & COMUNIDADE',
    label: '06  ——  BEIRA, MOÇAMBIQUE',
    screenSubtitle: 'COMUNIDADE BETHEL',
    problem:
      'Dispersão de comunicados, cronogramas de encontros e projetos sociais, dificultando o engajamento e a participação dos membros e visitantes na Cidade da Beira.',
    solution:
      'Plataforma digital acolhedora e responsiva detalhando cultos de família, células, Escola do Reino, Curso de Teologia e canais de contato e voluntariado.',
    tags: ['Web Design', 'Comunidade', 'Responsivo', 'Vercel'],
    link: 'https://bethel-internacional.vercel.app/',
    image: '/projects/bethel_og.jpg',
    icon: '/projects/bethel_icon.svg',
  },
  {
    id: 7,
    title: 'Meu Quiz +',
    category: 'MOBILE GAMING / EDUCAÇÃO',
    label: '07  ——  GAMIFICAÇÃO & APRENDIZAGEM',
    screenSubtitle: 'GOOGLE PLAY STORE',
    problem:
      'A revisão de conhecimentos gerais e conteúdos educativos costuma ser monótona, resultando em desinteresse e baixa retenção entre jovens estudantes.',
    solution:
      'App de perguntas e respostas gamificado com login Google, partidas dinâmicas, ranking competitivo, missões diárias, moedas virtuais e conquistas.',
    tags: ['Android', 'Gamificação', 'Google Auth', 'Play Store'],
    link: 'https://play.google.com/store/apps/details?id=com.minequizz.app',
    image: '/projects/imgs3.png',
  },
  {
    id: 8,
    title: 'Álbum Geográfico — CPLP',
    category: 'CULTURA & MEMÓRIA DIGITAL',
    label: '08  ——  LUSOFONIA EM CONEXÃO',
    screenSubtitle: 'PATRIMÔNIO CPLP',
    problem:
      'Falta de repositórios digitais abertos e acessíveis para celebrar a rica diversidade cultural, histórica e geográfica dos países da CPLP.',
    solution:
      'Álbum geográfico interativo com navegação fluida, trilha sonora imersiva e catalogação visual e histórica dos países membros da lusofonia.',
    tags: ['Galeria Digital', 'CPLP', 'Geografia', 'Vercel'],
    link: 'https://album-cplp.vercel.app/',
    image: '/projects/imsS2.png',
  },
  {
    id: 9,
    title: 'GMS — Global Marine Services',
    category: 'ENGENHARIA NAVAL & SUPRIMENTOS',
    label: '09  ——  MANUTENÇÃO INDUSTRIAL',
    screenSubtitle: 'PORTOS & NAVEGAÇÃO',
    problem:
      'Armadores e companhias de navegação necessitavam de atendimento técnico emergencial e homologado em operações portuárias de alta complexidade.',
    solution:
      'Website técnico com detalhamento de serviços mecânicos marítimos, padrões de caldeiraria, conformidade ambiental e solicitação de atendimento 24h.',
    tags: ['Engenharia Naval', 'Indústria', 'WordPress', 'Moçambique'],
    link: 'https://gmslda.co.mz',
    image: '/projects/gmslda.co.mz.jpeg',
  },
  {
    id: 10,
    title: 'Cybersecurity Basics eBook',
    category: 'EDUCAÇÃO & SEGURANÇA DEFENSIVA',
    label: '10  ——  CONSCIENTIZAÇÃO DIGITAL',
    screenSubtitle: 'MANUAL TÉCNICO VISME',
    problem:
      'Alta vulnerabilidade de pequenas empresas e profissionais a golpes de phishing, vazamento de credenciais e falta de higiene cibernética.',
    solution:
      'E-book interativo visual e didático explicando conceitos essenciais de segurança da informação, arquitetura de senhas e medidas de defesa cibernética.',
    tags: ['Cibersegurança', 'E-book', 'Educação', 'Visme'],
    link: 'https://my.visme.co/view/epjyeryx-cybersecurity-basics-ebook#s1',
    image: '/projects/visme_cyber_og.jpg',
    icon: '/projects/visme_cyber_icon.png',
  },
];

export interface PodiumProjectsSectionProps {
  projects?: ProjectItem[];
  className?: string;
}

export const PodiumProjectsSection = forwardRef<HTMLElement, PodiumProjectsSectionProps>(
  ({ projects = realProjects, className = '' }, ref) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const total = projects.length;

    const handleNext = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, [total]);

    const handlePrev = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    const handleSelectIndex = useCallback((index: number) => {
      setCurrentIndex(index);
    }, []);

    // Navegação por teclado
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev]);

    // Navegação por swipe
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
      if (touchStart === null) return;
      const distance = touchStart - e.changedTouches[0].clientX;
      if (distance > 50) handleNext();
      if (distance < -50) handlePrev();
      setTouchStart(null);
    };

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    const currentProject = projects[currentIndex];
    const prevProject = projects[prevIndex];
    const nextProject = projects[nextIndex];

    const formattedIndex = (currentIndex + 1).toString().padStart(2, '0');
    const formattedTotal = total.toString().padStart(2, '0');

    return (
      <section
        id="works"
        ref={ref}
        className={`relative w-full overflow-hidden bg-transparent select-none border-t border-white/5 py-12 lg:py-20 flex justify-center ${className}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projetos — Life in Frame"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <style>{`
          .proj-scene {
            width: 100%;
            max-width: 1600px;
            height: 940px;
            position: relative;
            overflow: hidden;
            background: transparent;
          }
          .proj-title {
            position: absolute;
            left: 54px;
            top: 36px;
            margin: 0;
            font-size: 60px;
            line-height: .96;
            letter-spacing: -.06em;
            font-weight: 800;
            color: #FFFFFF;
          }
          .proj-intro {
            position: absolute;
            top: 38px;
            left: 410px;
            letter-spacing: .25em;
            text-transform: uppercase;
            font-size: 11px;
            line-height: 1.7;
            color: #A1A1AA;
          }
          .proj-intro:after {
            content: "";
            display: block;
            width: 32px;
            height: 1px;
            background: #71717A;
            margin-top: 14px;
          }

          /* Régua Vertical Interativa */
          .proj-progress {
            position: absolute;
            left: 54px;
            top: 170px;
            height: 480px;
            width: 44px;
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 10px;
            overflow-y: auto;
            scrollbar-width: none;
          }
          .proj-progress::-webkit-scrollbar {
            display: none;
          }
          .proj-progress-item {
            display: flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            border: 0;
            cursor: pointer;
            padding: 4px 0;
            transition: all 0.2s;
            text-align: left;
          }
          .proj-progress-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #52525B;
            transition: all 0.25s;
            flex-shrink: 0;
          }
          .proj-progress-num {
            font-family: monospace;
            font-size: 11px;
            color: #71717A;
            transition: all 0.25s;
          }
          .proj-progress-item:hover .proj-progress-num {
            color: #FFFFFF;
          }
          .proj-progress-item.active .proj-progress-dot {
            background: #F59E0B;
            transform: scale(1.4);
            box-shadow: 0 0 10px rgba(245, 158, 11, 0.8);
          }
          .proj-progress-item.active .proj-progress-num {
            color: #FFFFFF;
            font-weight: 700;
          }

          /* Palco 3D e Pódios */
          .proj-stage {
            position: absolute;
            left: 120px;
            right: 430px;
            top: 140px;
            height: 600px;
            perspective: 1100px;
          }
          .proj-stage-hint {
            position: absolute;
            left: 50%;
            bottom: -6px;
            transform: translateX(-50%);
            font-size: 10px;
            letter-spacing: .16em;
            text-transform: uppercase;
            color: #71717A;
            white-space: nowrap;
          }
          .proj-glow {
            position: absolute;
            left: 50%;
            bottom: 102px;
            transform: translateX(-50%);
            width: 420px;
            height: 40px;
            border-radius: 50%;
            background: rgba(245, 158, 11, 0.24);
            filter: blur(22px);
            z-index: 1;
          }
          .proj-podium {
            position: absolute;
            bottom: 18px;
            left: 50%;
            transform: translateX(-50%);
            width: 470px;
            height: 104px;
            border-radius: 12px;
            background: linear-gradient(135deg, #FFFFFF, #D6DCDE);
            box-shadow: 0 28px 45px rgba(0, 0, 0, 0.45), inset 0 1px #FFFFFF;
            z-index: 2;
          }
          .proj-podium:before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 12px;
            box-shadow: inset 0 -11px 25px rgba(76, 86, 90, 0.2);
          }
          .proj-podium-text {
            position: absolute;
            bottom: 19px;
            left: 24px;
            right: 24px;
            color: #1E293B;
            font-size: 11px;
            letter-spacing: .14em;
            font-weight: 700;
            font-family: monospace;
            text-transform: uppercase;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            z-index: 3;
          }
          .proj-device {
            position: absolute;
            overflow: hidden;
            background: #0B0E14;
            box-shadow: 0 30px 45px rgba(0, 0, 0, 0.55), inset 0 0 0 2px #d9dfe0;
            border: 7px solid #F8FAFA;
            transition: transform .35s ease, box-shadow .35s ease;
            cursor: pointer;
          }
          .proj-device:hover {
            box-shadow: 0 40px 60px rgba(0, 0, 0, 0.7), inset 0 0 0 2px #F59E0B;
          }
          .proj-device:before {
            content: "";
            position: absolute;
            left: 50%;
            top: 9px;
            transform: translateX(-50%);
            width: 82px;
            height: 16px;
            background: #0B1015;
            border-radius: 14px;
            z-index: 20;
          }

          /* TELA COM ZOOM REDUZIDO (OBJECT-FIT CONTAIN) PARA CABER PERFEITAMENTE */
          .proj-screen {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            background: #0D1117;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .proj-screen-ambient-bg {
            position: absolute;
            inset: -10px;
            background-size: cover;
            background-position: center;
            filter: blur(16px) brightness(0.35);
            pointer-events: none;
            z-index: 1;
          }
          .proj-screen-content-img {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 8px;
            transition: transform 0.4s ease;
          }
          .proj-device:hover .proj-screen-content-img {
            transform: scale(1.03);
          }

          .proj-phone-main {
            width: 250px;
            height: 485px;
            left: 50%;
            bottom: 118px;
            transform: translateX(-50%) rotate(5deg);
            border-radius: 31px;
            z-index: 4;
          }
          .proj-phone-main:hover {
            transform: translateX(-50%) translateY(-8px) rotate(5deg);
          }
          .proj-phone-main:after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 24px;
            box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.17), inset -7px 0 15px rgba(0, 0, 0, 0.28);
            pointer-events: none;
            z-index: 10;
          }
          .proj-tablet {
            width: 260px;
            height: 330px;
            left: 100px;
            bottom: 112px;
            transform: rotate(-7deg);
            border-radius: 20px;
            z-index: 3;
          }
          .proj-tablet:hover {
            transform: translateY(-8px) rotate(-7deg);
          }
          .proj-tablet .proj-screen {
            border-top: 2px solid #F59E0B;
          }
          .proj-phone-side {
            width: 160px;
            height: 315px;
            right: 70px;
            bottom: 125px;
            transform: rotate(5deg);
            border-radius: 24px;
            z-index: 3;
          }
          .proj-phone-side:hover {
            transform: translateY(-8px) rotate(5deg);
          }
          .proj-mini-label {
            position: absolute;
            text-transform: uppercase;
            letter-spacing: .14em;
            font-size: 10px;
            color: #D4D4D8;
            z-index: 6;
            white-space: nowrap;
            font-family: monospace;
          }
          .proj-label-left {
            left: 110px;
            bottom: 66px;
          }
          .proj-label-right {
            right: 80px;
            bottom: 66px;
          }
          .proj-label-main {
            left: 50%;
            bottom: 77px;
            transform: translateX(-50%);
            color: #FFFFFF;
            font-weight: 700;
            z-index: 6;
          }

          /* Painel Lateral com Detalhes: Problema & Solução */
          .proj-panel {
            position: absolute;
            right: 54px;
            top: 65px;
            width: 390px;
            border-left: 1px solid rgba(255, 255, 255, 0.18);
            padding: 4px 0 18px 32px;
            z-index: 8;
          }
          .proj-panel .count {
            font-size: 11px;
            letter-spacing: .2em;
            color: #A1A1AA;
            font-family: monospace;
            text-transform: uppercase;
          }
          .proj-panel h2 {
            font-size: 30px;
            line-height: 1.08;
            letter-spacing: -.04em;
            margin: 14px 0 10px;
            color: #FFFFFF;
            font-weight: 800;
            text-transform: uppercase;
          }
          .proj-category-pill {
            display: inline-block;
            font-size: 10px;
            font-family: monospace;
            letter-spacing: .14em;
            text-transform: uppercase;
            color: #FBBF24;
            background: rgba(245, 158, 11, 0.1);
            border: 1px solid rgba(245, 158, 11, 0.3);
            padding: 3px 10px;
            border-radius: 12px;
            margin-bottom: 14px;
          }
          .proj-box-prob-sol {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 18px;
          }
          .proj-prob-title {
            font-family: monospace;
            font-size: 11px;
            font-weight: 700;
            color: #F59E0B;
            letter-spacing: .12em;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .proj-sol-title {
            font-family: monospace;
            font-size: 11px;
            font-weight: 700;
            color: #FBBF24;
            letter-spacing: .12em;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .proj-desc-text {
            font-size: 12.5px;
            line-height: 1.55;
            color: #D4D4D8;
            font-weight: 300;
            margin: 4px 0 0;
          }
          .proj-tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            margin-bottom: 18px;
          }
          .proj-tag {
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 4px 10px;
            font-size: 9px;
            letter-spacing: .08em;
            text-transform: uppercase;
            color: #E4E4E7;
            font-family: monospace;
          }

          /* Botões de Ação e Jumper Rápido */
          .proj-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .proj-cta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #F59E0B;
            color: #000000;
            padding: 13px 20px;
            border-radius: 28px;
            font-size: 11px;
            letter-spacing: .15em;
            text-transform: uppercase;
            box-shadow: 0 9px 22px rgba(245, 158, 11, 0.35);
            cursor: pointer;
            font-weight: 800;
            text-decoration: none;
            transition: all 0.25s;
          }
          .proj-cta:hover {
            background: #FBBF24;
            transform: translateY(-2px);
            box-shadow: 0 12px 28px rgba(245, 158, 11, 0.5);
          }

          /* Botões Rápidos para PULAR de Projeto */
          .proj-jumper-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
          }
          .proj-jump-btn {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 9px 12px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            background: rgba(255, 255, 255, 0.06);
            color: #FFFFFF;
            font-family: monospace;
            font-size: 10.5px;
            letter-spacing: .08em;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.2s;
          }
          .proj-jump-btn:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: #F59E0B;
            color: #F59E0B;
          }

          /* Rodapé da Seção */
          .proj-bottom {
            position: absolute;
            left: 54px;
            right: 54px;
            bottom: 25px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            z-index: 9;
          }
          .proj-bottom small {
            font-size: 10px;
            line-height: 1.7;
            letter-spacing: .18em;
            text-transform: uppercase;
            color: #71717A;
            font-family: monospace;
          }
          .proj-arrows {
            display: flex;
            gap: 10px;
          }
          .proj-arrows button {
            width: 42px;
            height: 42px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            background: rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(8px);
            border-radius: 50%;
            font-size: 18px;
            color: #FFFFFF;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
          }
          .proj-arrows button:hover {
            background: #F59E0B;
            border-color: #F59E0B;
            color: #000000;
            transform: scale(1.08);
          }

          @media (max-width: 1200px) {
            .proj-scene {
              height: auto;
              min-height: 1100px;
              padding-bottom: 50px;
            }
            .proj-progress {
              display: none;
            }
            .proj-stage {
              position: relative;
              left: 0;
              right: 0;
              top: 140px;
              margin: 0 auto;
              transform: scale(0.8);
              transform-origin: top center;
            }
            .proj-panel {
              position: relative;
              right: auto;
              top: auto;
              width: 100%;
              max-width: 580px;
              margin: 220px auto 0;
              padding: 24px;
              border-left: none;
              border-top: 1px solid rgba(255, 255, 255, 0.15);
            }
            .proj-bottom {
              position: relative;
              left: auto;
              right: auto;
              bottom: auto;
              padding: 20px 24px;
              margin: 0 auto;
              max-width: 580px;
            }
          }

          @media (max-width: 680px) {
            .proj-title {
              left: 20px;
              font-size: 40px;
            }
            .proj-intro {
              left: 20px;
              top: 85px;
            }
            .proj-stage {
              transform: scale(0.62);
            }
            .proj-tablet {
              left: -10px;
            }
            .proj-phone-side {
              right: -10px;
            }
          }
        `}</style>

        <div className="proj-scene">
          {/* Título Principal & Descrição Intro */}
          <h2 className="proj-title" id="projetos">
            PROJETOS
          </h2>
          <div className="proj-intro">
            Software
            <br />
            Infraestrutura
            <br />
            Cibersegurança
          </div>

          {/* Navegação Vertical com os 10 Projetos Reais para pular instantaneamente */}
          <nav className="proj-progress" aria-label="Pular para projeto">
            {projects.map((proj, idx) => {
              const num = (idx + 1).toString().padStart(2, '0');
              const isActive = idx === currentIndex;
              return (
                <button
                  key={proj.id}
                  className={`proj-progress-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelectIndex(idx)}
                  title={`Pular para ${proj.title}`}
                  aria-label={`Projeto ${idx + 1}: ${proj.title}`}
                >
                  <span className="proj-progress-dot" />
                  <span className="proj-progress-num">{num}</span>
                </button>
              );
            })}
          </nav>

          {/* Palco 3D dos Pódios e Dispositivos */}
          <section className="proj-stage" aria-label="Projetos em destaque">
            {/* Brilho suave sob o pódio */}
            <div className="proj-glow" />

            {/* Pódio de pedra física */}
            <div className="proj-podium">
              <span className="proj-podium-text">{currentProject.label}</span>
            </div>

            {/* Dispositivo 1: Tablet à Esquerda (Projeto Anterior com Zoom Reduzido) */}
            <div
              className="proj-device proj-tablet"
              tabIndex={0}
              onClick={handlePrev}
              aria-label={`Projeto anterior: ${prevProject.title}`}
              title={`Clique para ir para ${prevProject.title}`}
            >
              <div className="proj-screen">
                {/* Fundo ambiente desfocado */}
                <div
                  className="proj-screen-ambient-bg"
                  style={{ backgroundImage: `url(${prevProject.image})` }}
                />
                {/* Imagem com zoom reduzido (object-fit: contain) cabendo inteira */}
                <img
                  src={prevProject.image}
                  alt={prevProject.title}
                  className="proj-screen-content-img"
                />
                <div className="absolute top-2.5 left-3 text-[10px] font-mono tracking-wider text-amber-400 font-bold z-10 drop-shadow">
                  {prevProject.screenSubtitle || 'PREVIEW'}
                </div>
                <div className="absolute bottom-2 inset-x-2 text-center z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-[9.5px] font-sans font-bold text-white uppercase truncate max-w-[90%] border border-white/10">
                    {prevProject.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Dispositivo 2: Smartphone Principal no Centro (Projeto Selecionado com Zoom Reduzido) */}
            <div
              className="proj-device proj-phone-main"
              tabIndex={0}
              aria-label={`Projeto selecionado: ${currentProject.title}`}
            >
              <div className="proj-screen">
                {/* Fundo ambiente desfocado da imagem */}
                <div
                  className="proj-screen-ambient-bg"
                  style={{ backgroundImage: `url(${currentProject.image})` }}
                />
                {/* Imagem do projeto com zoom reduzido cabendo inteira na tela */}
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="proj-screen-content-img"
                />
                {/* Tag de categoria no rodapé da tela */}
                <div className="absolute bottom-4 inset-x-3 text-center z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-[9px] font-mono tracking-widest text-amber-400 uppercase shadow-lg">
                    {currentProject.icon && (
                      <img src={currentProject.icon} alt="" className="w-3 h-3 object-contain inline-block" />
                    )}
                    <span>{currentProject.screenSubtitle}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Dispositivo 3: Smartphone Lateral à Direita (Próximo Projeto com Zoom Reduzido) */}
            <div
              className="proj-device proj-phone-side"
              tabIndex={0}
              onClick={handleNext}
              aria-label={`Próximo projeto: ${nextProject.title}`}
              title={`Clique para ir para ${nextProject.title}`}
            >
              <div className="proj-screen">
                {/* Fundo ambiente desfocado */}
                <div
                  className="proj-screen-ambient-bg"
                  style={{ backgroundImage: `url(${nextProject.image})` }}
                />
                {/* Imagem com zoom reduzido (object-fit: contain) cabendo inteira */}
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="proj-screen-content-img"
                />
                <div className="absolute top-2.5 right-3 text-amber-400 font-mono text-base z-10 drop-shadow">
                  ⌁
                </div>
                <div className="absolute bottom-2 inset-x-2 text-center z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-[9px] font-sans font-bold text-white uppercase truncate max-w-[90%] border border-white/10">
                    {nextProject.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Legendas de apoio sob os dispositivos */}
            <div className="proj-mini-label proj-label-left truncate max-w-[180px]">
              {prevProject.title}
            </div>
            <div className="proj-mini-label proj-label-main">
              {formattedIndex} — Selecionado
            </div>
            <div className="proj-mini-label proj-label-right truncate max-w-[180px]">
              {nextProject.title}
            </div>

            <div className="proj-stage-hint">
              Clique nos dispositivos, use as setas ou pule pelos botões
            </div>
          </section>

          {/* Painel Lateral com Detalhes do Projeto Selecionado: Problema & Solução */}
          <aside className="proj-panel">
            <div className="count">
              {formattedIndex} / {formattedTotal} · PROJETO SELECIONADO
            </div>

            <div className="flex items-center gap-2 mt-2">
              {currentProject.icon && (
                <img src={currentProject.icon} alt="" className="w-5 h-5 object-contain rounded" />
              )}
              <h2>{currentProject.title}</h2>
            </div>

            <div className="proj-category-pill">{currentProject.category}</div>

            {/* Estrutura: Problema & Solução */}
            <div className="proj-box-prob-sol">
              <div>
                <span className="proj-prob-title">
                  <span>●</span> O Problema
                </span>
                <p className="proj-desc-text">{currentProject.problem}</p>
              </div>

              <div>
                <span className="proj-sol-title">
                  <span>●</span> A Solução
                </span>
                <p className="proj-desc-text">{currentProject.solution}</p>
              </div>
            </div>

            {/* Tags do Projeto */}
            <div className="proj-tags">
              {currentProject.tags.map((tag, i) => (
                <span key={i} className="proj-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Ações: Ver Projeto & Botões de Pular */}
            <div className="proj-actions">
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-cta"
                role="button"
                tabIndex={0}
              >
                <span>Acessar Projeto</span>
                <ExternalLink size={16} />
              </a>

              {/* Botões para o usuário PULAR de um projeto para o outro */}
              <div className="proj-jumper-row">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="proj-jump-btn"
                  title={`Pular para: ${prevProject.title}`}
                >
                  <ArrowLeft size={14} />
                  <span>Anterior</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="proj-jump-btn"
                  title={`Pular para: ${nextProject.title}`}
                >
                  <span>Próximo</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </aside>

          {/* Rodapé da Seção com Categorias e Setas Circulares */}
          <div className="proj-bottom">
            <small>
              Engenharia Web
              <br />
              Mobile & Cloud
              <br />
              Redes & Cibersegurança
            </small>

            <div className="proj-arrows">
              <button onClick={handlePrev} aria-label="Projeto anterior" title="Projeto anterior">
                <ChevronLeft size={20} />
              </button>
              <button onClick={handleNext} aria-label="Próximo projeto" title="Próximo projeto">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

PodiumProjectsSection.displayName = 'PodiumProjectsSection';
export default PodiumProjectsSection;
