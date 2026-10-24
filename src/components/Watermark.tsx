import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const Watermark: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Sello de Autor / Marca de agua flotante discreta (No interfiere con el uso) */}
      <aside
        aria-label="Créditos del desarrollador"
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 pointer-events-none select-none"
      >
        <div className="pointer-events-auto backdrop-blur-md bg-stone-100/90 dark:bg-stone-950/90 hover:bg-white dark:hover:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-300/80 dark:border-stone-800/80 hover:border-amber-500/50 shadow-xl rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-2 text-[11px] font-sans transition-all duration-200 opacity-85 hover:opacity-100 group">
          {/* Logo / Monograma */}
          <a
            href="https://modlovelace.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
            title="Visitar modlovelace.com - Portafolio y proyectos de ModLovelace"
          >
            <div className="w-4 h-4 rounded-full bg-amber-500/20 dark:bg-amber-500/30 border border-amber-400/40 dark:border-amber-500/40 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Sparkles className="w-2.5 h-2.5" />
            </div>
            
            {!isMinimized ? (
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-stone-500 dark:text-stone-400">Hecho por</span>
                <span className="font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  ModLovelace
                </span>
                <span className="text-stone-400 dark:text-stone-600">•</span>
                <span className="text-amber-700 dark:text-amber-400 font-medium flex items-center">
                  modlovelace.com
                  <ArrowUpRight className="w-3 h-3 ml-0.5 text-stone-400 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
                </span>
              </div>
            ) : (
              <span className="font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-[10px]">
                modlovelace.com ↗
              </span>
            )}
          </a>

          {/* Botón para minimizar/expandir y que nunca tape nada */}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-0.5 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-pointer"
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
    </>
  );
};
