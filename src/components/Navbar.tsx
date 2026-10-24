import React, { useState } from 'react';
import { ExternalLink, Sparkles, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 dark:bg-[#12100e]/95 backdrop-blur-md border-b border-amber-200/50 dark:border-amber-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Marca Floral Editorial */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-50 dark:bg-amber-400/10 border border-amber-300/90 dark:border-amber-400/50 p-1 flex items-center justify-center shadow-sm shadow-amber-500/15 group-hover:scale-105 group-hover:border-amber-400 transition-all overflow-hidden shrink-0">
                <img
                  src="/sticker-sunflower.png"
                  alt="Logo Regala Flores"
                  className="w-full h-full object-contain filter drop-shadow-xs"
                />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif font-bold text-base sm:text-xl text-stone-900 dark:text-amber-50 tracking-tight whitespace-nowrap group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                  Regala Flores
                </span>
              </div>
            </a>
          </div>

          {/* Navegación Desktop - Limpia, horizontal, concisa y sin wrapping */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs xl:text-sm font-sans font-medium text-stone-600 dark:text-stone-300">
            <a href="#ocasiones" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors whitespace-nowrap py-1">
              Ocasiones
            </a>
            <a href="#guia" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors whitespace-nowrap py-1">
              Guía
            </a>
            <a href="#simulador" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors whitespace-nowrap py-1">
              Simulador
            </a>
            <a href="#audio" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors whitespace-nowrap py-1">
              Audio Procedural
            </a>
          </nav>

          {/* Botones de Acción Derecha */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
            {/* Selector de Tema (Día / Oscuro / Sistema) */}
            <ThemeToggle />

            <a
              href="https://github.com/ModLovelace/flores-amarillas-primavera"
              target="_blank"
              rel="noreferrer"
              className="hidden xl:inline-flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap px-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            
            <a
              href="https://flores.modlovelace.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-stone-950 font-bold text-xs sm:text-sm font-sans transition-all shadow-md shadow-amber-400/20 hover:shadow-lg hover:shadow-amber-400/30 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-stone-950 fill-stone-950" />
              <span>Personalizar en Vivo</span>
              <span className="text-[11px] font-mono select-none">↗</span>
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeToggle />

            <a
              href="https://flores.modlovelace.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-950 font-bold text-xs shadow-xs whitespace-nowrap"
            >
              <span>Personalizar</span>
              <span className="text-[10px]">↗</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60 transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] dark:bg-[#151311] border-b border-amber-200/60 dark:border-amber-900/40 px-4 pt-3 pb-6 space-y-3 font-sans text-sm shadow-lg">
          <a
            href="#ocasiones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium border-b border-stone-200/40 dark:border-stone-800/60"
          >
            🌻 Ocasiones Temáticas
          </a>
          <a
            href="#guia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium border-b border-stone-200/40 dark:border-stone-800/60"
          >
            📖 Guía Paso a Paso
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium border-b border-stone-200/40 dark:border-stone-800/60"
          >
            ⚡ Simulador &amp; Generador
          </a>
          <a
            href="#audio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium border-b border-stone-200/40 dark:border-stone-800/60"
          >
            🎵 Web Audio API Procedural
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://flores.modlovelace.com"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-stone-950 font-bold text-sm shadow-md shadow-amber-400/20"
            >
              Personalizar en Vivo (flores.modlovelace.com) ↗
            </a>
            <a
              href="https://github.com/ModLovelace/flores-amarillas-primavera"
              target="_blank"
              rel="noreferrer"
              className="text-center text-xs text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:underline pt-1"
            >
              Ver código fuente en GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
