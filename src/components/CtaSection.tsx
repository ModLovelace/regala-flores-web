import React from 'react';
import { Sparkles, ArrowRight, ExternalLink, Heart } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#faf7f2] to-amber-100/40 border-t border-stone-200/80 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        <div className="w-16 h-16 rounded-full bg-amber-500/15 border border-amber-400/40 mx-auto flex items-center justify-center text-3xl shadow-xs">
          🌻
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
          Crea un recuerdo que florezca para siempre.
        </h2>

        <p className="text-base sm:text-lg text-stone-600 font-sans max-w-2xl mx-auto leading-relaxed">
          Las flores virtuales no se marchitan. Personaliza una carta, elige la melodía perfecta y sorprende a quien más quieres en cuestión de segundos.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://flores.modlovelace.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 font-bold text-base transition-all shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 fill-stone-950" />
            <span>Personalizar y Compartir Mi Regalo ➔</span>
          </a>

          <a
            href="https://github.com/ModLovelace/flores-amarillas-primavera"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-sm transition-all shadow-xs"
          >
            <span>Repositorio GitHub</span>
            <ExternalLink className="w-4 h-4 text-stone-500" />
          </a>
        </div>

      </div>
    </section>
  );
};
