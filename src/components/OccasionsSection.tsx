import React, { useState } from 'react';
import { OCCASIONS, Occasion } from '../data/guideData';
import { Sparkles, Music, Wind, Palette, ExternalLink, ArrowRight } from 'lucide-react';

export const OccasionsSection: React.FC = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<Occasion>(OCCASIONS[0]);

  return (
    <section id="ocasiones" className="py-20 sm:py-28 border-t border-stone-200/80 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-700 uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5" />
            <span>01 / Catálogo de Ocasiones</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            4 Atmósferas diseñadas para cada momento especial.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Cada temática adapta la pieza central ilustrada, los efectos de partículas reactivas, la paleta cromática y la banda sonora en tiempo real.
          </p>
        </div>

        {/* Pestañas de Ocasión */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {OCCASIONS.map((occ) => {
            const isSelected = selectedOccasion.id === occ.id;
            return (
              <button
                key={occ.id}
                onClick={() => setSelectedOccasion(occ)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-stone-900 text-white shadow-md scale-105"
                    : "bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 hover:text-stone-900"
                }`}
              >
                <span className="text-base">{occ.emoji}</span>
                <span>{occ.name.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Tarjeta Detalle de la Ocasión Seleccionada */}
        <div className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-stone-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Vitrina Visual */}
            <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
              <div className={`w-full aspect-square rounded-2xl ${selectedOccasion.bgGradient} border border-stone-200/60 p-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-inner`}>
                <span className="text-8xl select-none filter drop-shadow-md group-hover:scale-110 transition-transform duration-500 animate-float-soft">
                  {selectedOccasion.emoji}
                </span>

                <div className="absolute bottom-4 inset-x-4 text-center">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200 text-xs font-mono font-medium text-stone-700 shadow-2xs">
                    {selectedOccasion.paletteName}
                  </span>
                </div>
              </div>

              {/* Tags Virales */}
              <div className="flex flex-wrap justify-center gap-1.5 font-mono text-[11px] text-stone-500">
                {selectedOccasion.viralTags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-200/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Especificación & Contenido */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-mono font-bold text-amber-700 tracking-wider uppercase mb-1">
                  Temática Oficial
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {selectedOccasion.name}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
                  {selectedOccasion.tagline}
                </p>
              </div>

              {/* Cuadrícula de Atributos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-800">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Pieza Central Ilustrada</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {selectedOccasion.centralPiece}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-800">
                    <Wind className="w-3.5 h-3.5 text-blue-600" />
                    <span>Partículas Reactivas</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {selectedOccasion.particles}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1 sm:col-span-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-800">
                    <Music className="w-3.5 h-3.5 text-rose-600" />
                    <span>Banda Sonora Web Audio API (En Tiempo Real)</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {selectedOccasion.audioTrack}
                  </p>
                </div>

              </div>

              {/* Mensaje por defecto de inspiración */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5 font-serif italic text-stone-800 text-xs sm:text-sm">
                <span className="font-mono not-italic text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                  Mensaje sugerido para esta ocasión:
                </span>
                &ldquo;{selectedOccasion.defaultMessage}&rdquo;
              </div>

              {/* Botón directo a probar esta temática en vivo */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://flores.modlovelace.com/?theme=${selectedOccasion.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:-translate-y-0.5"
                >
                  <span>Abrir {selectedOccasion.emoji} en la Web Interactiva</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-xs font-mono text-stone-500">
                  Abre directamente en <strong>flores.modlovelace.com</strong>
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
