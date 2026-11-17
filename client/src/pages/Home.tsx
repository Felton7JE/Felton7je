import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import PodiumProjectsSection from '@/components/PodiumProjectsSection';
import RadialCompetenciesSection from '@/components/RadialCompetenciesSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-transparent text-[#F2F2F5] relative selection:bg-amber-500 selection:text-black">
      {/* Header com navegação dinâmica (aparece quando o mouse se move, esconde quando inativo) */}
      <Header />

      <main className="w-full">
        {/* ============================================================ */}
        {/* 1. SEÇÃO HERO: LAYOUT FIEL À FOTO DE REFERÊNCIA (KYOSUKE)    */}
        {/* ============================================================ */}
        <section
          id="home"
          className="relative min-h-screen w-full flex flex-col justify-between px-6 pt-20 sm:pt-24 lg:pt-28 pb-6 md:pb-10 md:px-14 lg:px-20 text-white overflow-hidden bg-transparent"
        >
          {/* Bloco Principal da Esquerda */}
          <div className="max-w-xl my-auto py-3 z-20">
            {/* Tag com traço âmbar */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-6 h-[2px] bg-amber-500 inline-block" />
              <span className="text-amber-500 font-mono text-xs font-semibold tracking-[0.24em] uppercase">
                {t('hero.badge')}
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4 sm:mb-5">
              {t('hero.title1')}<br />
              <span className="text-amber-500">{t('hero.title2')}</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-md font-light leading-relaxed mb-6 sm:mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#works"
                className="pointer-events-auto inline-flex items-center gap-2.5 rounded-lg bg-amber-500 px-5 sm:px-6 py-3 sm:py-3.5 font-sans font-bold text-sm text-black transition-all duration-300 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 cursor-pointer"
              >
                {t('hero.btnProjects')} <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="pointer-events-auto text-sm sm:text-base font-medium text-white underline underline-offset-8 decoration-white/40 hover:text-amber-400 hover:decoration-amber-400 transition-colors py-2 px-2"
              >
                {t('hero.btnAbout')}
              </a>
            </div>
          </div>

          {/* Rodapé da Hero (Estatísticas, Indicador de Scroll e Tagline) */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-5 pt-4 sm:pt-6 border-t border-white/10 z-20">
            {/* 1. Estatísticas à esquerda */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white font-sans">{t('hero.stats.expYears')}</span>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-light leading-tight whitespace-pre-line">
                  {t('hero.stats.exp')}
                </span>
              </div>
              <div className="h-9 w-[1px] bg-zinc-700/80" />
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white font-sans">{t('hero.stats.projectsCount')}</span>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-light leading-tight whitespace-pre-line">
                  {t('hero.stats.projects')}
                </span>
              </div>
              <div className="h-9 w-[1px] bg-zinc-700/80" />
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white font-sans">{t('hero.stats.clientsCount')}</span>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-light leading-tight whitespace-pre-line">
                  {t('hero.stats.clients')}
                </span>
              </div>
            </div>

            {/* 2. Indicador de Scroll no centro */}
            <div className="hidden md:flex flex-col items-center justify-center gap-1.5 text-center pointer-events-auto">
              <div className="w-5 h-8 rounded-full border border-zinc-500/80 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1 h-2 bg-amber-500 rounded-full"
                />
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-mono font-medium">
                {t('hero.scroll')}
              </span>
              <div className="w-[1.5px] h-3.5 bg-amber-500" />
            </div>

            {/* 3. Tagline à direita */}
            <div className="hidden md:flex flex-col items-end text-right">
              <div className="w-5 h-[1.5px] bg-amber-500 mb-1" />
              <div className="text-[9px] tracking-[0.22em] text-zinc-400 font-mono leading-relaxed uppercase font-medium">
                {t('hero.tagline1')}<br />{t('hero.tagline2')}
              </div>
            </div>
          </div>

          {/* Elemento flutuante no meio direito */}
          <div className="hidden lg:flex flex-col items-end gap-1.5 absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 text-right z-20 pointer-events-none">
            <div className="w-[1.5px] h-6 bg-amber-500 mb-2 self-end" />
            <span className="text-[10px] tracking-[0.25em] text-zinc-400 font-mono font-medium">{t('hero.pillar1')}</span>
            <span className="text-[10px] tracking-[0.25em] text-zinc-400 font-mono font-medium">{t('hero.pillar2')}</span>
            <span className="text-[10px] tracking-[0.25em] text-zinc-400 font-mono font-medium">{t('hero.pillar3')}</span>
            <span className="text-[10px] tracking-[0.25em] text-zinc-400 font-mono font-medium">{t('hero.pillar4')}</span>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. SEÇÃO PROJETOS EM TRÊS PÓDIOS 3D                          */}
        {/* ============================================================ */}
        <PodiumProjectsSection />

        {/* ============================================================ */}
        {/* 3. SEÇÃO SOBRE MIM: ÁREA DE COMPETÊNCIAS & MENU RADIAL       */}
        {/* ============================================================ */}
        <RadialCompetenciesSection />

        {/* ============================================================ */}
        {/* 4. SEÇÃO CONTACTO: MINIMALISTA & DIRETA                      */}
        {/* ============================================================ */}
        <section id="contacts" className="relative py-24 sm:py-32 px-6 md:px-12 lg:px-20 bg-black/55 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Esquerda: Chamada de Contacto */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-[2px] bg-amber-500 inline-block" />
                  <span className="text-amber-500 font-mono text-xs font-semibold tracking-[0.24em] uppercase">
                    {t('contact.badge')}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                  {t('contact.title')}
                </h2>
                <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                  {t('contact.subtitle')}
                </p>
                <div className="pt-4">
                  <a
                    href="mailto:dasilvafelton7@gmail.com"
                    className="inline-flex items-center justify-between gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 text-black font-sans font-extrabold text-xs tracking-[0.2em] uppercase shadow-[0_6px_25px_rgba(249,115,22,0.4)] hover:scale-105 transition-all duration-300"
                  >
                    <span>{t('contact.btn')}</span>
                    <span className="w-7 h-7 rounded-full bg-black/90 text-orange-400 flex items-center justify-center">
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </div>
              </div>

              {/* Direita: Canais Diretos de Contacto */}
              <div className="lg:col-span-5 space-y-4">
                <a
                  href="mailto:dasilvafelton7@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#121217] border border-white/10 hover:border-amber-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-zinc-500 uppercase">E-mail</span>
                    <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      dasilvafelton7@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/estevafelton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#121217] border border-white/10 hover:border-amber-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-zinc-500 uppercase">LinkedIn</span>
                    <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      linkedin.com/in/estevafelton
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/Felton7JE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#121217] border border-white/10 hover:border-amber-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    <Github size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-zinc-500 uppercase">GitHub</span>
                    <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      github.com/Felton7JE
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#121217] border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-lime-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-zinc-500 uppercase">{t('contact.badge')}</span>
                    <span className="text-sm font-semibold text-white">
                      {t('contact.location')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================ */}
      {/* 5. FOOTER MINIMALISTA                                        */}
      {/* ============================================================ */}
      <footer className="w-full py-10 px-6 md:px-14 lg:px-20 bg-black/75 backdrop-blur-sm border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="font-sans font-bold text-sm text-white">FELTON<span className="text-amber-500">.</span></span>
          <span>© 2026 Felton Estevão. {t('footer.rights')}</span>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <a
            href="/privacy"
            className="text-zinc-400 hover:text-amber-400 underline underline-offset-4 decoration-zinc-700 hover:decoration-amber-400 transition-colors"
          >
            {t('footer.privacy')}
          </a>
        </div>
        <div className="flex items-center gap-2 uppercase tracking-widest text-zinc-400">
          <span className="w-4 h-[1.5px] bg-amber-500" />
          <span>{t('header.tagline')}</span>
        </div>
      </footer>
    </div>
  );
}
