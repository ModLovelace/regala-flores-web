import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const Watermark: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside
      aria-label="Créditos del desarrollador"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 pointer-events-none select-none"
    >
      <div className="pointer-events-auto backdrop-blur-md bg-white/95 dark:bg-[#141210]/95 hover:bg-amber-50/50 dark:hover:bg-[#1a1715] text-stone-700 dark:text-neutral-300 border border-stone-300/80 dark:border-stone-800 hover:border-amber-400/60 dark:hover:border-amber-400/50 shadow-xl rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-2 text-[11px] font-mono transition-all duration-200 opacity-90 hover:opacity-100 group">
        {/* Enlace y Monograma */}
        <a
          href="https://modlovelace.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 transition-colors"
          title="Visitar modlovelace.com - Portafolio y proyectos de ModLovelace"
        >
          <div className="w-4 h-4 rounded-full bg-amber-500/15 dark:bg-amber-400/10 border border-amber-400/50 dark:border-amber-400/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
            <Sparkles className="w-2.5 h-2.5" />
          </div>
          
          {!isMinimized ? (
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-stone-500 dark:text-neutral-400">Hecho por</span>
              <span className="font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                ModLovelace
              </span>
              <span className="text-stone-400 dark:text-neutral-600">•</span>
              <span className="text-stone-800 dark:text-white/90 font-medium flex items-center group-hover:text-amber-700 dark:group-hover:text-amber-400">
                modlovelace.com
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-stone-400 dark:text-neutral-400 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
              </span>
            </div>
          ) : (
            <span className="font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors text-[10px]">
              modlovelace.com ↗
            </span>
          )}
        </a>

        {/* Botón para minimizar/expandir */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="p-0.5 rounded-full text-stone-400 hover:text-stone-700 dark:text-neutral-500 dark:hover:text-neutral-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          title={isMinimized ? "Expandir sello" : "Minimizar sello"}
          aria-label={isMinimized ? "Expandir sello de autor" : "Minimizar sello de autor"}
        >
          {isMinimized ? (
            <ChevronUp className="w-3 h-3" />
          ) : (
            <ChevronDown className="w-3 h-3" />
          )}
        </button>
      </div>
    </aside>
  );
};
