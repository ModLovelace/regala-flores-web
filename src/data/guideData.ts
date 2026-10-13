export interface Occasion {
  id: string;
  emoji: string;
  name: string;
  tagline: string;
  centralPiece: string;
  particles: string;
  audioTrack: string;
  paletteName: string;
  accentColor: string;
  bgGradient: string;
  viralTags: string[];
  defaultMessage: string;
}

export const OCCASIONS: Occasion[] = [
  {
    id: "flores-amarillas",
    emoji: "🌻",
    name: "Flores Amarillas & Primavera",
    tagline: "El clásico eterno del 21 de septiembre, promesas de luz y gestos de cariño sincero.",
    centralPiece: "Ramo de girasoles dorados, margaritas silvestres y flores de campo floreciendo brote a brote.",
    particles: "Pétalos dorados flotantes que responden al movimiento del cursor o pantalla táctil.",
    audioTrack: "Vals de primavera en celesta, arpegios acústicos y campanillas procedurales.",
    paletteName: "Ámbar & Miel Silvestre",
    accentColor: "from-amber-500 to-yellow-600",
    bgGradient: "bg-gradient-to-br from-amber-50 via-yellow-50/40 to-stone-100",
    viralTags: ["#FloresAmarillas", "#21DeSeptiembre", "#Primavera", "#RegalaFlores"],
    defaultMessage: "Que tu vida siempre florezca con la misma calidez y alegría que estos girasoles dorados. ¡Te quiero mucho!",
  },
  {
    id: "cumpleanos",
    emoji: "🎂",
    name: "Feliz Cumpleaños",
    tagline: "Pastel gourmet, bengalas encendidas, lluvia de confeti y deseos que se cumplen.",
    centralPiece: "Torta de celebración con glaseado artesanal, velas humeantes y destellos de bengalas.",
    particles: "Confeti festivo multicolor que estalla con cada toque y floración.",
    audioTrack: "Melodía dulce de cumpleaños, notas de campana y chispas sonoras sintetizadas.",
    paletteName: "Frambuesa & Crema Vainilla",
    accentColor: "from-pink-500 to-rose-600",
    bgGradient: "bg-gradient-to-br from-pink-50 via-rose-50/40 to-stone-100",
    viralTags: ["#FelizCumpleaños", "#HappyBirthday", "#Celebración", "#DeseoCumplido"],
    defaultMessage: "¡Muy feliz cumpleaños! Que este nuevo año de vida venga cargado de metas cumplidas, risas y momentos inolvidables.",
  },
  {
    id: "logro-profesional",
    emoji: "🎓",
    name: "Logro Profesional & Graduación",
    tagline: "Corona de laureles, copa de la victoria y fanfarria triunfal para celebrar el éxito.",
    centralPiece: "Trofeo triunfal en oro pulido y corona de laureles dorados resplandeciendo paso a paso.",
    particles: "Destellos dorados y chispas de champaña flotantes con física de gravedad cero.",
    audioTrack: "Fanfarria solemne, acordes mayores y campanadas de victoria en tiempo real.",
    paletteName: "Oro Ceremonial & Azul Imperial",
    accentColor: "from-indigo-600 to-blue-700",
    bgGradient: "bg-gradient-to-br from-blue-50 via-indigo-50/40 to-stone-100",
    viralTags: ["#LogroProfesional", "#Graduación", "#Orgullo", "#MetaCumplida"],
    defaultMessage: "¡Felicitaciones por este enorme logro! Tu dedicación, talento y perseverancia rinden sus mejores frutos. ¡A seguir brillando!",
  },
  {
    id: "aniversario",
    emoji: "💖",
    name: "Aniversario & Amor Eterno",
    tagline: "Rosas rojas aterciopeladas, peonías en flor y lluvia de corazones que laten al unísono.",
    centralPiece: "Ramo de rosas rojas profundas y peonías brotando con destellos de amor eterno.",
    particles: "Lluvia de corazones flotantes y brillos rubí que reaccionan a tus caricias en pantalla.",
    audioTrack: "Arpegios de arpa, cuerdas suaves y melodía romántica acústica.",
    paletteName: "Rubí Pasión & Rosa Empolvado",
    accentColor: "from-rose-600 to-red-700",
    bgGradient: "bg-gradient-to-br from-rose-50 via-red-50/30 to-stone-100",
    viralTags: ["#FelizAniversario", "#AmorEterno", "#JuntosPorSiempre", "#MiPersonaFavorita"],
    defaultMessage: "Gracias por cada día compartido, por cada risa y por hacer mi mundo mucho más hermoso. Feliz aniversario, mi amor.",
  },
];

export interface GuideStep {
  stepNumber: string;
  title: string;
  summary: string;
  bullets: string[];
  icon: string;
  highlight: string;
}

export const GUIDE_STEPS: GuideStep[] = [
  {
    stepNumber: "01",
    title: "Elige la Ocasión & Atmósfera",
    summary: "Personaliza el sentimiento con una paleta cromática, partículas y música adecuada a la fecha especial.",
    bullets: [
      "Selector temático horizontal y modal visual 2x2 para cambiar entre las 4 ocasiones.",
      "Cada temática adapta el ramo ilustrado, el color del papel y la atmósfera visual en vivo.",
      "Las partículas de fondo (pétalos, confeti, destellos o corazones) reaccionan al toque del cursor o del dedo.",
    ],
    icon: "Palette",
    highlight: "4 experiencias en una sola plataforma",
  },
  {
    stepNumber: "02",
    title: "Redacta la Carta Secreta con Sello de Cera",
    summary: "Un sobre artesanal vintage con sello de cera temático guarda tus palabras más sinceras bajo llave.",
    bullets: [
      "Escribe el nombre del destinatario, el tuyo y una dedicatoria íntima.",
      "Sello de cera en relieve 3D interactivo: tu destinatario debe hacer clic sobre él para romperlo suavemente.",
      "Tipografía manuscrita cálida con firma personalizada y fecha de la dedicatoria.",
    ],
    icon: "Mail",
    highlight: "Emoción y sorpresa interactiva",
  },
  {
    stepNumber: "03",
    title: "Floración en 4 Fases & Audio en Tiempo Real",
    summary: "El regalo florece al tacto mientras suena una banda sonora procedural sintetizada por el navegador.",
    bullets: [
      "4 etapas de floración interactiva: toca el ramo para que se abra brote a brote hasta su máximo resplandor.",
      "Cero archivos de audio MP3 pesados: música procedural generada en vivo con Web Audio API.",
      "Reproductor estilo disco de vinilo retro con control de volumen y cambio de melodías.",
    ],
    icon: "Music",
    highlight: "Cero descargas pesadas (< 150KB)",
  },
  {
    stepNumber: "04",
    title: "Genera el Enlace Mágico sin Registros",
    summary: "Todo el mensaje y la personalización viajan cifrados en el propio enlace. Cero bases de datos y privacidad total.",
    bullets: [
      "La URL contiene los parámetros: ?theme=...&to=...&from=...&msg=...&date=...",
      "Sin necesidad de crear cuentas, contraseñas ni dejar datos privados en la nube.",
      "El enlace no caduca nunca y puede abrirse desde cualquier teléfono, tableta o computadora.",
    ],
    icon: "Link2",
    highlight: "100% Privado y Permanente",
  },
  {
    stepNumber: "05",
    title: "Presume en TikTok/Instagram o Comparte por WhatsApp",
    summary: "Exporta capturas en alta definición para historias y posts, o envía el detalle directamente por chat.",
    bullets: [
      "Modo Historia / TikTok (9:16 Pantalla Completa): Diseñado con zonas seguras y sticker de sonido de tendencia.",
      "Modo Feed (1:1 Cuadrado Clásico): Perfecto para carruseles de Instagram y estados de WhatsApp.",
      "Botón de compartir por WhatsApp con mensaje optimizado y copiado en un clic.",
    ],
    icon: "Share2",
    highlight: "Diseñado para volverse viral",
  },
];
