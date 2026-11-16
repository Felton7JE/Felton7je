import React, { useEffect, useRef, useState } from 'react';

// Carrega automaticamente todos os frames da pasta em ordem
const imageModules = import.meta.glob('./ezgif-4a8f1b5e7416cf06-jpg/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// Ordena os frames de forma numérica (frame-001 até frame-118)
const frameUrls: string[] = Object.keys(imageModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => imageModules[key]);

export interface ScrollAnimationProps {
  /** Se verdadeiro, fixa o canvas como fundo de todo o projeto (-z-10 fixed) */
  global?: boolean;
  /** Classes CSS adicionais para o container externo */
  className?: string;
  /** Altura da rolagem para controlar a velocidade da animação em modo local (padrão: '250vh') */
  scrollAreaHeight?: string;
  /** Se o conteúdo sobreposto deve desaparecer suavemente ao rolar (padrão: true) */
  fadeContentOnScroll?: boolean;
  /** Conteúdo sobreposto à animação (para modo local) */
  children?: React.ReactNode;
}

export function ScrollAnimation({
  global = false,
  className = '',
  scrollAreaHeight = '250vh',
  fadeContentOnScroll = true,
  children,
}: ScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const scrollProgressRef = useRef<number>(0);
  const isFirstFrameDrawnRef = useRef<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // 1. Pré-carregamento dos frames em segundo plano
  useEffect(() => {
    let loadedCount = 0;
    const total = frameUrls.length;
    const imgArray: HTMLImageElement[] = new Array(total);

    frameUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        imgArray[i] = img;
        loadedCount++;

        // Renderiza o primeiro frame imediatamente assim que estiver pronto
        if (i === 0 && !isFirstFrameDrawnRef.current) {
          isFirstFrameDrawnRef.current = true;
          drawFrame(0);
        }

        if (loadedCount === total) {
          setIsLoaded(true);
        }
      };
    });

    imagesRef.current = imgArray;

    return () => {
      imagesRef.current = [];
    };
  }, []);

  // Função para desenhar o frame com ajuste responsivo (object-fit: cover)
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const idx = Math.min(Math.max(Math.floor(frameIndex), 0), frameUrls.length - 1);
    const img = imagesRef.current[idx] || imagesRef.current[0];
    if (!img || !img.complete) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || img.width;
    const imgHeight = img.naturalHeight || img.height;

    if (!imgWidth || !imgHeight) return;

    // Cálculo para preencher a tela mantendo a proporção (cover)
    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const drawX = (canvasWidth - drawWidth) / 2;
    const drawY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  // 2. Ajuste de resolução do Canvas (HiDPI / Retina)
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      drawFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. Scroll tracking com interpolação suave (lerp) para fluidez absoluta
  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      let progress = 0;

      if (global) {
        const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY || window.pageYOffset || 0;
        progress = totalScrollable > 0 ? Math.min(Math.max(scrolled / totalScrollable, 0), 1) : 0;
      } else {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const totalScrollable = containerRef.current.clientHeight - window.innerHeight;
        if (totalScrollable <= 0) return;
        const scrolled = -rect.top;
        progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      }

      scrollProgressRef.current = progress;
      targetFrameRef.current = progress * (frameUrls.length - 1);
    };

    // Loop de animação contínua (60fps / 120fps)
    const tick = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      // Fator 0.12 de lerp garante suavização contra saltos abruptos de scroll
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.12;
        drawFrame(currentFrameRef.current);
      } else if (Math.abs(diff) > 0.001) {
        currentFrameRef.current = targetFrameRef.current;
        drawFrame(currentFrameRef.current);
      }

      // Desvanece suavemente o texto com base no progresso da rolagem (em modo local)
      if (!global && overlayRef.current && fadeContentOnScroll) {
        const opacity = Math.max(0, 1 - scrollProgressRef.current * 2.8);
        overlayRef.current.style.opacity = String(opacity);
        overlayRef.current.style.transform = `translateY(${-scrollProgressRef.current * 40}px)`;
        overlayRef.current.style.pointerEvents = opacity < 0.08 ? 'none' : 'auto';
      }

      animId = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, [global, fadeContentOnScroll]);

  if (global) {
    return (
      <div
        className={`fixed inset-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden bg-[#09090C] ${className}`}
      >
        {/* Foto de fundo base instantânea (nunca fica tela preta e permanece em todas as seções) */}
        <img
          src={frameUrls[0]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Canvas animado que reage à rolagem de toda a página */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: isLoaded || isFirstFrameDrawnRef.current ? 1 : 0 }}
        />

        {/* Vinhetas cinematográficas equilibradas: garantem leitura do texto sem esconder a foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ height: scrollAreaHeight }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#09090C]">
        {/* Foto de fundo base instantânea */}
        <img
          src={frameUrls[0]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: isLoaded || isFirstFrameDrawnRef.current ? 1 : 0 }}
        />

        {/* Vinhetas escuras suaves para contraste perfeito do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        {children && (
          <div
            ref={overlayRef}
            className="absolute inset-0 z-10 transition-opacity duration-150"
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default ScrollAnimation;

