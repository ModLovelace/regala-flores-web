import React, { useState } from 'react';
import { OCCASIONS } from '../data/guideData';
import { Wand2, Copy, Check, ExternalLink, Sparkles, Send, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveSimulator: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState('flores-amarillas');
  const [toName, setToName] = useState('Mi Persona Favorita');
  const [fromName, setFromName] = useState('Con todo mi cariño');
  const [customMsg, setCustomMsg] = useState(
    'Que tu vida siempre florezca con la misma calidez y alegría que estos girasoles dorados. ¡Te quiero mucho!'
  );
  const [copied, setCopied] = useState(false);

  const activeOccasion = OCCASIONS.find((o) => o.id === selectedTheme) || OCCASIONS[0];

  // Generar URL completa con parámetros
  const generateTargetUrl = () => {
    const params = new URLSearchParams();
    params.set('theme', selectedTheme);
    if (toName.trim()) params.set('to', toName.trim());
    if (fromName.trim()) params.set('from', fromName.trim());
    if (customMsg.trim()) params.set('msg', customMsg.trim());
    return `https://flores.modlovelace.com/?${params.toString()}`;
  };

  const handleCopy = () => {
    const url = generateTargetUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#fbbf24', '#f43f5e', '#60a5fa'],
    });
  };

  const handleOpenLive = () => {
    const url = generateTargetUrl();
    window.open(url, '_blank');
  };

  return (
    <section id="simulador" className="py-20 sm:py-28 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-700 uppercase tracking-wider">
            <Wand2 className="w-3.5 h-3.5" />
            <span>03 / Simulador Previo &amp; Generador Mágico</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Configura tu detalle aquí y salta a la web final.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Completa los datos en este configurador para previsualizar el enlace mágico. Al pulsar &ldquo;Abrir en Vivo&rdquo;, viajarás a <strong>flores.modlovelace.com</strong> con tu regalo ya listo para florecer y compartir.
          </p>
        </div>

        {/* Panel Interactivo 2 Columnas: Formulario + Previsualización */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-stone-200/90 bg-stone-50/50 p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Configuración */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Paso A: Seleccionar ocasión */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
                1. Selecciona la Ocasión:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-sans">
                {OCCASIONS.map((occ) => {
                  const isActive = occ.id === selectedTheme;
                  return (
                    <button
                      key={occ.id}
                      type="button"
                      onClick={() => {
                        setSelectedTheme(occ.id);
                        setCustomMsg(occ.defaultMessage);
                      }}
                      className={`p-2.5 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer border ${
                        isActive
                          ? "bg-amber-500/15 border-amber-500 text-amber-950 font-bold shadow-xs scale-102"
                          : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      <span className="text-xl">{occ.emoji}</span>
                      <span className="text-[11px] leading-tight text-center">{occ.name.split("&")[0].trim()}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso B: Nombres */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
                  Para (Destinatario):
                </label>
                <input
                  type="text"
                  value={toName}
                  onChange={(e) => setToName(e.target.value)}
                  placeholder="Ej: Sofía, Mamá, Mi Amor..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-stone-900 outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
                  De (Tu nombre o firma):
                </label>
                <input
                  type="text"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  placeholder="Ej: Enrique, Tu admirador..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-stone-900 outline-none transition-all"
                />
              </div>
            </div>

            {/* Paso C: Dedicatoria */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
                Mensaje de la Carta Secreta:
              </label>
              <textarea
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                rows={3}
                placeholder="Escribe tu dedicatoria especial..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-stone-900 outline-none transition-all resize-none leading-relaxed"
              />
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Previa & Enlace Generado */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200/90 p-6 space-y-5 shadow-xs">
            
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                Vista previa del regalo:
              </span>
              <span className="text-base">{activeOccasion.emoji}</span>
            </div>

            {/* Carta simulada */}
            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 space-y-2.5 font-serif">
              <div className="text-xs font-mono text-stone-500">
                Para: <strong className="text-stone-900 font-serif">{toName || "Destinatario"}</strong>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 italic leading-relaxed line-clamp-3">
                &ldquo;{customMsg || "Tu dedicatoria especial..."}&rdquo;
              </p>
              <div className="text-right text-xs font-mono text-stone-600">
                — {fromName || "Remitente"}
              </div>
            </div>

            {/* Enlace mágico generado */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>Enlace persistente generado:</span>
                <span className="text-emerald-700 font-semibold">Listo</span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-100 border border-stone-200 text-[11px] font-mono text-stone-700 truncate select-all">
                {generateTargetUrl()}
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={handleOpenLive}
                className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20 cursor-pointer hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Abrir &amp; Enviar Mi Regalo en Vivo ➔</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-600" />}
                <span>{copied ? "¡Enlace copiado al portapapeles!" : "Copiar Enlace Mágico Directo"}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
