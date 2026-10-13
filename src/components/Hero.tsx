import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Music, ShieldCheck, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  SunflowerBouquetSVG,
  BirthdayCakeSVG,
  TrophyLaurelSVG,
  RosesBouquetSVG,
} from './Centerpieces';

interface PreviewTheme {
  id: string;
  emoji: string;
  label: string;
  title: string;
  sub: string;
  badge: string;
  bgGradient: string;
  borderColor: string;
  activeTabColor: string;
  Component: React.ComponentType<{ bloomStage?: number }>;
  confettiColors: string[];
}

const PREVIEW_THEMES: PreviewTheme[] = [
  {
    id: "flores-amarillas",
    emoji: "🌻",
    label: "Flores",
    title: "Flores Amarillas",
    sub: "Primavera & Luz",
    badge: "🌻 Floración interactiva al tacto",
    bgGradient: "from-amber-100/90 via-yellow-50/60 to-stone-50 dark:from-amber-950/40 dark:via-stone-900/90 dark:to-stone-950",
    borderColor: "border-amber-300/70 dark:border-amber-500/30",
    activeTabColor: "bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-xs",
    Component: SunflowerBouquetSVG,
    confettiColors: ["#FDE047", "#FACC15", "#EAB308", "#CA8A04"],
  },
  {
    id: "cumpleanos",
    emoji: "🎂",
    label: "Cumple",
    title: "Feliz Cumpleaños",
    sub: "Pastel & Velas Festivas",
    badge: "🎂 Torta festiva con velas encendidas",
    bgGradient: "from-pink-100/90 via-rose-50/60 to-stone-50 dark:from-pink-950/40 dark:via-stone-900/90 dark:to-stone-950",
    borderColor: "border-pink-300/70 dark:border-pink-500/30",
    activeTabColor: "bg-pink-500 text-white border-pink-400 font-bold shadow-xs",
    Component: BirthdayCakeSVG,
    confettiColors: ["#F472B6", "#FB7185", "#EC4899", "#FDE047"],
  },
  {
    id: "logro-profesional",
    emoji: "🎓",
    label: "Logro",
    title: "Logro Profesional",
    sub: "Copa de Victoria & Laureles",
    badge: "🎓 Copa triunfal & laureles dorados",
    bgGradient: "from-blue-100/90 via-indigo-50/60 to-stone-50 dark:from-blue-950/40 dark:via-stone-900/90 dark:to-stone-950",
    borderColor: "border-blue-300/70 dark:border-blue-500/30",
    activeTabColor: "bg-blue-600 text-white border-blue-500 font-bold shadow-xs",
    Component: TrophyLaurelSVG,
    confettiColors: ["#60A5FA", "#38BDF8", "#FBBF24", "#10B981"],
  },
  {
    id: "aniversario",
    emoji: "💖",
    label: "Amor",
    title: "Aniversario & Amor",
    sub: "Rosas Rojas & Corazones",
    badge: "💖 Rosas aterciopeladas & corazones",
    bgGradient: "from-rose-100/90 via-red-50/60 to-stone-50 dark:from-rose-950/40 dark:via-stone-900/90 dark:to-stone-950",
    borderColor: "border-rose-300/70 dark:border-rose-500/30",
    activeTabColor: "bg-rose-500 text-white border-rose-400 font-bold shadow-xs",
    Component: RosesBouquetSVG,
    confettiColors: ["#F43F5E", "#E11D48", "#FB7185", "#FDA4AF"],
  },
];

export const Hero: React.FC = () => {
  const [activeThemeIdx, setActiveThemeIdx] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const requested = params.get('theme') || params.get('preview');
      if (requested) {
        const found = PREVIEW_THEMES.findIndex(
          (t) => t.id === requested || t.label.toLowerCase() === requested.toLowerCase()
        );
        if (found !== -1) return found;
      }
    }
    return 0;
  });
  const activeTheme = PREVIEW_THEMES[activeThemeIdx];
  const ActiveComponent = activeTheme.Component;

  const handleSelectTheme = (index: number) => {
    setActiveThemeIdx(index);
    try {
      confetti({
        particleCount: 26,
        spread: 55,
        origin: { y: 0.6 },
        colors: PREVIEW_THEMES[index].confettiColors,
      });
    } catch {
      // safe fallback
    }
  };

  const handleCycleNext = () => {
    const nextIdx = (activeThemeIdx + 1) % PREVIEW_THEMES.length;
    handleSelectTheme(nextIdx);
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Luces y degradados sutiles de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-amber-200/40 via-yellow-100/30 to-rose-100/20 dark:from-amber-600/10 dark:via-yellow-600/5 dark:to-rose-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Texto & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 dark:border-amber-400/20 text-amber-900 dark:text-amber-300 text-xs font-mono font-medium shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 fill-amber-600 dark:fill-amber-400" />
              <span>Web Oficial &amp; Manual de Experiencia</span>
            </div>

            {/* Título Principal Editorial */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.12]">
              El arte de regalar flores y momentos inolvidables en la web.
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Una plataforma interactiva, estética y emocional diseñada para crear detalles virtuales de alto impacto. Aprende cómo configurar las <strong>4 ocasiones</strong>, redactar cartas con <strong>sello de cera</strong>, activar la <strong>música procedural</strong> y generar <strong>enlaces mágicos</strong> para sorprender por WhatsApp, TikTok e Instagram.
            </p>

            {/* Fila de Botones de Acción */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="https://flores.modlovelace.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Ir a Personalizar mi Regalo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#guia"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-medium text-sm transition-all shadow-xs hover:border-stone-400 dark:hover:border-stone-600"
              >
                <BookOpen className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                <span>Explorar Guía Paso a Paso</span>
              </a>
            </div>

            {/* Badges de Garantía Técnica y Privacidad */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-mono text-stone-500 dark:text-stone-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>100% Privado (Cero bases de datos)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Music className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Web Audio API en vivo (0 MP3s)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Formatos 9:16 y 1:1 para Redes</span>
              </div>
            </div>

          </div>

          {/* Columna Visual / Vitrina Interactiva */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-6 sm:p-7 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border border-stone-200/90 dark:border-stone-800 shadow-2xl shadow-stone-300/40 dark:shadow-black/50 space-y-5">
              
              {/* Encabezado de tarjeta vitrina dinámico */}
              <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 dark:border-stone-800">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl transition-transform duration-300 hover:scale-125 select-none">
                    {activeTheme.emoji}
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 leading-tight transition-colors">
                      Regala Flores · {activeTheme.label}
                    </h3>
                    <p className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
                      flores.modlovelace.com
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/20 dark:border-emerald-500/30">
                  En Producción
                </span>
              </div>

              {/* Centro de atracción ilustrado e interactivo con cambio al clic */}
              <div
                onClick={handleCycleNext}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleCycleNext();
                }}
                title="Haz clic para cambiar temática (Flores ➔ Torta ➔ Logro ➔ Amor)"
                className={`relative aspect-square rounded-2xl bg-gradient-to-b ${activeTheme.bgGradient} border ${activeTheme.borderColor} flex flex-col items-center justify-center p-4 overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-lg active:scale-[0.98] select-none`}
              >
                {/* SVG Ilustrado de la Pieza Central */}
                <div className="w-full h-full max-h-[230px] flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-105">
                  <ActiveComponent bloomStage={3} />
                </div>

                {/* Badge flotante inferior descriptivo */}
                <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-xs border border-stone-200/80 dark:border-stone-700/80 text-[11px] font-mono font-medium text-stone-700 dark:text-stone-300 shadow-2xs group-hover:border-stone-300 dark:group-hover:border-stone-600 transition-colors">
                    <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>{activeTheme.badge}</span>
                  </div>
                </div>

                {/* Indicador táctil flotante superior */}
                <div className="absolute top-2.5 right-2.5 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="px-2 py-0.5 rounded-md bg-white/80 dark:bg-stone-800/80 border border-stone-200/60 dark:border-stone-700/60 text-[10px] font-mono text-stone-600 dark:text-stone-300 shadow-2xs">
                    Toca para cambiar ↻
                  </span>
                </div>
              </div>

              {/* Selector de Ocasión Rápido Preview - 4 Botones Interactivos */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400">
                  <span>Temáticas disponibles:</span>
                  <span className="font-bold text-stone-800 dark:text-stone-200">4 Experiencias</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 font-mono text-xs">
                  {PREVIEW_THEMES.map((theme, idx) => {
                    const isSelected = idx === activeThemeIdx;
                    return (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() => handleSelectTheme(idx)}
                        className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                          isSelected
                            ? theme.activeTabColor + " scale-105"
                            : "bg-stone-50 dark:bg-stone-800/60 hover:bg-stone-100/90 dark:hover:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                        }`}
                        title={`Cambiar a ${theme.title}`}
                      >
                        <div className="text-base select-none">{theme.emoji}</div>
                        <div className="text-[10px] font-medium mt-0.5 truncate">{theme.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Enlace directo a la app con la temática seleccionada */}
              <a
                href={`https://flores.modlovelace.com?theme=${activeTheme.id}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-stone-950 text-white font-semibold text-xs font-mono flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md"
              >
                <span>Abrir {activeTheme.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
