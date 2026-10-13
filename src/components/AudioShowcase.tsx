import React from 'react';
import { Music, Radio, Zap, Cpu, Volume2, Sparkles } from 'lucide-react';

export const AudioShowcase: React.FC = () => {
  return (
    <section id="audio" className="py-20 sm:py-28 border-t border-stone-200/80 dark:border-stone-800 bg-[#faf7f2] dark:bg-stone-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
            <Music className="w-3.5 h-3.5" />
            <span>04 / Síntesis Procedural de Audio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Música sintetizada en vivo, sin archivos de audio.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
            Cómo la Web Audio API genera melodías y armonías orgánicas calculadas al vuelo por el procesador del dispositivo, reduciendo el peso de la web a una fracción imperceptible.
          </p>
        </div>

        {/* Grid de 3 Pilares Técnicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800 space-y-3 shadow-xs dark:shadow-black/40">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 dark:bg-amber-500/20 border border-amber-400/30 text-amber-800 dark:text-amber-300 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              0 Bytes de Audio Pesado
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              No descargamos archivos MP3, WAV ni pistas externas. Toda la música se genera mediante código matemático de osciladores y envolventes de amplitud.
            </p>
            <div className="pt-2 text-[11px] font-mono text-amber-700 dark:text-amber-400 font-semibold">
              Bundle total: &lt; 150 KB
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800 space-y-3 shadow-xs dark:shadow-black/40">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/15 dark:bg-rose-500/20 border border-rose-400/30 text-rose-800 dark:text-rose-300 flex items-center justify-center">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Curvas Exponenciales Orgánicas
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              Los armónicos de celesta, campanillas y cuerdas utilizan <code className="bg-stone-100 dark:bg-stone-800 px-1 py-0.5 rounded text-stone-800 dark:text-stone-200">exponentialRampToValueAtTime</code> para simular el decaimiento físico de un instrumento real.
            </p>
            <div className="pt-2 text-[11px] font-mono text-rose-700 dark:text-rose-400 font-semibold">
              Audio interactivo sin desincronización
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800 space-y-3 shadow-xs dark:shadow-black/40">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 dark:bg-indigo-500/20 border border-indigo-400/30 text-indigo-800 dark:text-indigo-300 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Reproductor Vinilo Retro
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              Un disco flotante con física de giro y aguja táctil permite al usuario pausar, reanudar o cambiar de tema armónico en cualquier instante.
            </p>
            <div className="pt-2 text-[11px] font-mono text-indigo-700 dark:text-indigo-400 font-semibold">
              Rendimiento sostenido a 60 FPS
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
