import React from 'react';
import { GUIDE_STEPS } from '../data/guideData';
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, Heart, Shield, Music, Share2, Layers } from 'lucide-react';

export const HowToGuide: React.FC = () => {
  return (
    <section id="guia" className="py-20 sm:py-28 border-t border-stone-200/80 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Guía */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-700 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>02 / Guía Paso a Paso</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Cómo usar, configurar y personalizar tu regalo.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Una experiencia artesanal en 5 pasos sencillos. Sin descargas pesadas, sin necesidad de registros y con enlace permanente.
          </p>
        </div>

        {/* Lista de Pasos Guía */}
        <div className="space-y-8 sm:space-y-12">
          {GUIDE_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              
              {/* Columna Número & Título */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-600/80">
                    {step.stepNumber}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 text-[11px] font-mono font-semibold border border-amber-400/25">
                    {step.highlight}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {step.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  {step.summary}
                </p>
              </div>

              {/* Columna Puntos Clave & Consejos */}
              <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-6 border border-stone-200/70 space-y-4">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                  Detalles de configuración:
                </div>

                <ul className="space-y-2.5">
                  {step.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tip Pro de cada paso */}
                <div className="pt-3 border-t border-stone-200/80 text-[11px] font-mono text-stone-500 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>
                    {idx === 0 && "Consejo: Cambia entre ocasiones en cualquier momento sin perder la dedicatoria escrita."}
                    {idx === 1 && "Consejo: El sobre emite un sonido sutil de apertura y despliega la dedicatoria en papel envejecido."}
                    {idx === 2 && "Consejo: Toca el ramo 4 veces consecutivas para llegar a la floración máxima con destellos dorados."}
                    {idx === 3 && "Consejo: Puedes acortar el enlace o pegarlo directamente en WhatsApp; incluye vista previa enriquecida."}
                    {idx === 4 && "Consejo: Elige entre modo Historia (9:16) y Feed (1:1) para encuadre perfecto en Instagram y TikTok."}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Intermedio */}
        <div className="mt-16 text-center">
          <a
            href="https://flores.modlovelace.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-all shadow-md hover:-translate-y-0.5"
          >
            <span>Poner en práctica y abrir flores.modlovelace.com</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
