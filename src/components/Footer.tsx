import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-amber-200/50 dark:border-stone-800 bg-[#faf8f5] dark:bg-[#0c0a09] text-stone-600 dark:text-stone-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-amber-100/80 dark:bg-amber-400/10 border border-amber-300/80 dark:border-amber-400/30 p-1 flex items-center justify-center">
              <img src="/sticker-sunflower.png" alt="Regala Flores" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm block">
                Regala Flores · Web Oficial
              </span>
              <span className="text-[11px] text-stone-500 dark:text-stone-400">
                Creado por{" "}
                <a
                  href="https://modlovelace.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-700 dark:text-amber-400 hover:underline font-semibold"
                >
                  Enrique Becerra (ModLovelace)
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-500 dark:text-stone-400">
            <a href="https://flores.modlovelace.com" target="_blank" rel="noreferrer" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              App en Vivo ↗
            </a>
            <a href="https://modlovelace.com" target="_blank" rel="noreferrer" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              modlovelace.com ↗
            </a>
            <a href="https://catjang.modlovelace.com" target="_blank" rel="noreferrer" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Catjang-Sue ↗
            </a>
            <a href="https://github.com/ModLovelace/flores-amarillas-primavera" target="_blank" rel="noreferrer" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-1">
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="text-[11px] text-stone-400 dark:text-stone-500">
            Licencia MIT · Open Source
          </div>

        </div>
      </div>
    </footer>
  );
};
