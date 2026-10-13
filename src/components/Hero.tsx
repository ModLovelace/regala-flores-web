import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Music, Heart, ShieldCheck, Share2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Luces y degradados sutiles de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-amber-200/40 via-yellow-100/30 to-rose-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Texto & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-900 text-xs font-mono font-medium shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              <span>Web Oficial &amp; Manual de Experiencia</span>
            </div>

            {/* Título Principal Editorial */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
              El arte de regalar flores y momentos inolvidables en la web.
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Una plataforma interactiva, estética y emocional diseñada para crear detalles virtuales de alto impacto. Aprende cómo configurar las <strong>4 ocasiones</strong>, redactar cartas con <strong>sello de cera</strong>, activar la <strong>música procedural</strong> y generar <strong>enlaces mágicos</strong> para sorprender por WhatsApp, TikTok e Instagram.
            </p>

            {/* Fila de Botones de Acción */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="https://flores.modlovelace.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Ir a Personalizar mi Regalo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#guia"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-medium text-sm transition-all shadow-xs hover:border-stone-400"
              >
                <BookOpen className="w-4 h-4 text-stone-500" />
                <span>Explorar Guía Paso a Paso</span>
              </a>
            </div>

            {/* Badges de Garantía Técnica y Privacidad */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-mono text-stone-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Privado (Cero bases de datos)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Music className="w-4 h-4 text-amber-600" />
                <span>Web Audio API en vivo (0 MP3s)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-blue-600" />
                <span>Formatos 9:16 y 1:1 para Redes</span>
              </div>
            </div>

          </div>

          {/* Columna Visual / Vitrina Interactiva */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-6 sm:p-7 bg-white/80 backdrop-blur-xl border border-stone-200/80 shadow-2xl shadow-stone-300/40 space-y-6">
              
              {/* Encabezado de tarjeta vitrina */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl animate-bounce">🌻</span>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-stone-900 leading-tight">
                      Regala Flores
                    </h3>
                    <p className="text-[11px] font-mono text-stone-500">
                      flores.modlovelace.com
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-500/20">
                  En Producción
                </span>
              </div>

              {/* Centro de atracción ilustrado */}
              <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-amber-50/80 via-yellow-50/40 to-stone-50 border border-amber-200/50 flex flex-col items-center justify-center p-6 overflow-hidden group">
                <img
                  src="/sticker-sunflower.png"
                  alt="Ramo de flores doradas"
                  className="w-44 h-44 object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500 animate-float-soft"
                />

                <div className="absolute bottom-3 inset-x-3 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200/80 text-[11px] font-mono font-medium text-stone-700 shadow-2xs">
                    <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>Floración interactiva al tacto</span>
                  </div>
                </div>
              </div>

              {/* Selector de Ocasión Rápido Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Temáticas disponibles:</span>
                  <span className="font-bold text-stone-800">4 Experiencias</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 font-mono text-xs">
                  {[
                    { emoji: "🌻", label: "Flores" },
                    { emoji: "🎂", label: "Cumple" },
                    { emoji: "🎓", label: "Logro" },
                    { emoji: "💖", label: "Amor" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-stone-50 border border-stone-200 text-center hover:bg-amber-50 hover:border-amber-300 transition-colors cursor-default"
                    >
                      <div className="text-base">{item.emoji}</div>
                      <div className="text-[10px] font-medium text-stone-600 mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enlace directo a la app */}
              <a
                href="https://flores.modlovelace.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs font-mono flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Abrir Aplicación Interactiva</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
