import React, { useState } from 'react';
import { ExternalLink, Sparkles, BookOpen, Menu, X, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Marca Editorial */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-100/80 border border-amber-300/60 p-1 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/sticker-sunflower.png"
                alt="Logo Regala Flores"
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-stone-900 tracking-tight flex items-center gap-1.5">
                Regala Flores
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 border border-amber-400/30">
                  Web Oficial
                </span>
              </span>
              <span className="text-[11px] font-mono text-stone-500 -mt-0.5 hidden sm:block">
                Guía de Personalización &amp; Momentos Virtuales
              </span>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono font-semibold text-stone-600">
            <a href="#ocasiones" className="hover:text-amber-700 transition-colors">
              01 / Ocasiones
            </a>
            <a href="#guia" className="hover:text-amber-700 transition-colors">
              02 / Guía Paso a Paso
            </a>
            <a href="#simulador" className="hover:text-amber-700 transition-colors">
              03 / Simulador Mágico
            </a>
            <a href="#audio" className="hover:text-amber-700 transition-colors">
              04 / Web Audio API
            </a>
            <a
              href="https://github.com/ModLovelace/flores-amarillas-primavera"
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>

          {/* Botón CTA Principal */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://flores.modlovelace.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 font-bold text-xs sm:text-sm font-sans transition-all shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-stone-950 fill-stone-950" />
              <span>Personalizar en Vivo ➔</span>
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://flores.modlovelace.com"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-amber-500 text-stone-950 font-bold text-xs shadow-xs"
            >
              App en Vivo ➔
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-600 hover:bg-stone-100"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf7f2] border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 font-mono text-sm">
          <a
            href="#ocasiones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 hover:text-amber-600 font-medium border-b border-stone-100"
          >
            01 / Ocasiones Temáticas
          </a>
          <a
            href="#guia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 hover:text-amber-600 font-medium border-b border-stone-100"
          >
            02 / Guía Paso a Paso
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 hover:text-amber-600 font-medium border-b border-stone-100"
          >
            03 / Simulador Mágico
          </a>
          <a
            href="#audio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 hover:text-amber-600 font-medium border-b border-stone-100"
          >
            04 / Web Audio API
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://flores.modlovelace.com"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-stone-950 font-bold text-xs"
            >
              Abrir Aplicación en Vivo (flores.modlovelace.com)
            </a>
            <a
              href="https://github.com/ModLovelace/flores-amarillas-primavera"
              target="_blank"
              rel="noreferrer"
              className="text-center text-xs text-stone-500 hover:underline pt-1"
            >
              Ver código en GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
