import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-stone-200 bg-white text-stone-600 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <img src="/sticker-sunflower.png" alt="Regala Flores" className="w-6 h-6 object-contain" />
            <div>
              <span className="font-serif font-bold text-stone-900 text-sm block">
                Regala Flores · Web Oficial
              </span>
              <span className="text-[11px] text-stone-500">
                Creado por{" "}
                <a
                  href="https://modlovelace.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-800 hover:underline font-semibold"
                >
                  Enrique Becerra (ModLovelace)
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-500">
            <a href="https://flores.modlovelace.com" target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors">
              App en Vivo ↗
            </a>
            <a href="https://modlovelace.com" target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors">
              modlovelace.com ↗
            </a>
            <a href="https://catjang.modlovelace.com" target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors">
              Catjang-Sue ↗
            </a>
            <a href="https://github.com/ModLovelace/flores-amarillas-primavera" target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors flex items-center gap-1">
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="text-[11px] text-stone-400">
            Licencia MIT · Open Source
          </div>

        </div>
      </div>
    </footer>
  );
};
