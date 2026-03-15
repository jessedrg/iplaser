export interface Product {
  slug: string
  name: { es: string; en: string }
  tagline: { es: string; en: string }
  description: { es: string; en: string }
  longDescription: { es: string; en: string }
  price: number
  originalPrice: number
  images: string[]
  video?: string
  badge: { es: string; en: string } | null
  flashes: string
  levels: number
  cooling: boolean
  features: { es: string[]; en: string[] }
  includes: { es: string[]; en: string[] }
  specs: { label: { es: string; en: string }; value: string }[]
}

export const PRODUCTS: Product[] = [
  {
    slug: "ipl-sapphire-ice-pro",
    name: { es: "IPL Sapphire Ice Pro", en: "IPL Sapphire Ice Pro" },
    tagline: { es: "Depilación profesional en casa", en: "Professional hair removal at home" },
    description: {
      es: "Depiladora IPL de alta energía con cristal de zafiro y enfriamiento por hielo. 20J de potencia, 5 niveles, pantalla táctil y 300.000 flashes. Resultados visibles desde la 3ª sesión. Todo incluido: gafas + maquinilla + caja premium.",
      en: "High-energy IPL hair removal device with sapphire crystal and ice cooling. 20J power, 5 levels, touch screen and 300,000 flashes. Visible results from session 3. Everything included: goggles + razor + premium box.",
    },
    longDescription: {
      es: "El IPL Sapphire Ice Pro utiliza tecnología de luz pulsada intensa (IPL) de grado profesional con una energía máxima de 20 julios por flash — el doble que la mayoría de dispositivos domésticos del mercado. El cristal de zafiro en la ventana de emisión enfría la piel a contacto, haciendo cada pulso prácticamente indoloro incluso en las zonas más sensibles como bikini, axilas y labio superior.\n\nEl dispositivo cuenta con 3 modos de tratamiento específicos (cuerpo, cara y bikini) que ajustan automáticamente la intensidad y la frecuencia de los flashes para cada zona. El modo automático permite deslizar el dispositivo sin parar para tratar piernas y brazos en minutos, mientras que el modo manual ofrece precisión flash a flash para zonas pequeñas.\n\nLa pantalla táctil muestra en tiempo real el contador de flashes restantes, el nivel de energía seleccionado y el modo activo. Con 300.000 flashes disponibles, el dispositivo ofrece años de tratamiento completo para todo el cuerpo sin necesidad de recambios.\n\nResistente al agua (IPX6), se limpia fácilmente bajo el grifo después de cada sesión. Compatible con tonos de piel I a V en la escala Fitzpatrick. Incluye gafas de protección UV, maquinilla de preparación y adaptador universal (100-240V).",
      en: "The IPL Sapphire Ice Pro uses professional-grade Intense Pulsed Light (IPL) technology with a maximum energy of 20 joules per flash — double that of most home devices on the market. The sapphire crystal on the emission window cools the skin on contact, making each pulse virtually painless even on the most sensitive areas like bikini, underarms and upper lip.\n\nThe device features 3 specific treatment modes (body, face and bikini) that automatically adjust intensity and flash frequency for each zone. Auto mode lets you glide the device continuously to treat legs and arms in minutes, while manual mode offers precision flash-by-flash for smaller areas.\n\nThe touch screen displays the remaining flash count, selected energy level and active mode in real time. With 300,000 flashes available, the device offers years of full-body treatment without replacement cartridges.\n\nWaterproof (IPX6), it cleans easily under the tap after each session. Compatible with skin tones I to V on the Fitzpatrick scale. Includes UV protection goggles, prep razor and universal adapter (100-240V).",
    },
    price: 89,
    originalPrice: 199,
    images: ["/product1.jpg", "/product1_2.jpg"],
    badge: { es: "Más vendido", en: "Best seller" },
    flashes: "300,000",
    levels: 5,
    cooling: true,
    features: {
      es: [
        "20J de energía máxima — el doble que la competencia",
        "Cristal de zafiro con enfriamiento por hielo — sin dolor",
        "5 niveles de intensidad ajustables",
        "3 modos: cuerpo, cara y bikini",
        "Modo manual + automático (flash continuo)",
        "Pantalla táctil con contador de flashes en tiempo real",
        "300.000 flashes — años de uso para todo el cuerpo",
        "Resistente al agua IPX6 — fácil de limpiar",
        "Compatible con tonos de piel I a V (Fitzpatrick)",
        "Resultados visibles desde la 3ª sesión",
      ],
      en: [
        "20J maximum energy — double the competition",
        "Sapphire crystal with ice cooling — painless",
        "5 adjustable intensity levels",
        "3 modes: body, face and bikini",
        "Manual + automatic mode (continuous flash)",
        "Touch screen with real-time flash counter",
        "300,000 flashes — years of full-body use",
        "IPX6 waterproof — easy to clean",
        "Compatible with skin tones I to V (Fitzpatrick)",
        "Visible results from session 3",
      ],
    },
    includes: {
      es: [
        "1x Dispositivo IPL Sapphire Ice Pro",
        "1x Gafas de protección UV",
        "1x Maquinilla de preparación",
        "1x Adaptador de corriente universal (100-240V)",
        "1x Manual de usuario (español e inglés)",
        "1x Caja premium de presentación",
      ],
      en: [
        "1x IPL Sapphire Ice Pro device",
        "1x UV protection goggles",
        "1x Prep razor",
        "1x Universal power adapter (100-240V)",
        "1x User manual (English & Spanish)",
        "1x Premium presentation box",
      ],
    },
    specs: [
      { label: { es: "Energía máxima", en: "Max energy" }, value: "20J" },
      { label: { es: "Flashes", en: "Flashes" }, value: "300,000" },
      { label: { es: "Niveles de intensidad", en: "Intensity levels" }, value: "5" },
      { label: { es: "Longitud de onda", en: "Wavelength" }, value: "550–1200nm" },
      { label: { es: "Enfriamiento", en: "Cooling" }, value: "Sapphire Ice" },
      { label: { es: "Modos de tratamiento", en: "Treatment modes" }, value: "3 (Body / Face / Bikini)" },
      { label: { es: "Pantalla", en: "Display" }, value: "Touch screen LCD" },
      { label: { es: "Resistencia al agua", en: "Waterproof" }, value: "IPX6" },
      { label: { es: "Potencia", en: "Power" }, value: "60W (24V / 2.5A)" },
      { label: { es: "Material", en: "Material" }, value: "ABS + PC" },
      { label: { es: "Voltaje", en: "Voltage" }, value: "100–240V (universal)" },
      { label: { es: "Tonos de piel", en: "Skin tones" }, value: "Fitzpatrick I–V" },
    ],
  },
  {
    slug: "ipl-pro-max",
    name: { es: "IPL Pro Max", en: "IPL Pro Max" },
    tagline: { es: "Lo último en depilación IPL", en: "The ultimate IPL device" },
    description: {
      es: "El dispositivo IPL más avanzado del mercado. Lámparas frías intercambiables, función de rejuvenecimiento de piel y flashes ilimitados. Certificado CE. De la marca MLAY, líder mundial con 11 años de experiencia y más de 1.800 unidades vendidas. Resultados visibles en 4 semanas.",
      en: "The most advanced IPL device on the market. Replaceable ice lamps, skin rejuvenation function and unlimited flashes. CE certified. From MLAY, a global leader with 11 years of experience and 1,800+ units sold. Visible results in 4 weeks.",
    },
    longDescription: {
      es: "El IPL Pro Max es nuestro dispositivo de gama alta, fabricado por MLAY (Shenzhen Mareal Technology), uno de los fabricantes líderes mundiales en tecnología IPL con 11 años de trayectoria, 28.000m² de fábrica, 46 ingenieros de I+D y 15 patentes registradas. Es el modelo T16, el más vendido de su catálogo con certificación CE para la Unión Europea.\n\nLo que hace único al Pro Max es su sistema de lámparas frías intercambiables. A diferencia de otros dispositivos donde la lámpara está integrada y el dispositivo se desecha al agotarse, el Pro Max permite reemplazar las lámparas, ofreciendo flashes prácticamente ilimitados y un uso de por vida. Cada lámpara incluye tecnología de enfriamiento por hielo integrada para un tratamiento 100% indoloro.\n\nAdemás de la depilación, el Pro Max incluye una función de rejuvenecimiento de la piel (skin rejuvenation) que estimula la producción de colágeno, reduce poros abiertos y mejora la textura general de la piel. Dos dispositivos en uno.\n\nEl diseño premium en aluminio anodizado con acabado mate le da un aspecto y tacto de dispositivo médico profesional. La potencia de entrada de 36W con voltaje universal (100-240V) garantiza un rendimiento óptimo en cualquier país. Los resultados son visibles desde la semana 4, con piel completamente suave a las 8 semanas de uso regular.",
      en: "The IPL Pro Max is our premium device, manufactured by MLAY (Shenzhen Mareal Technology), one of the world's leading IPL technology manufacturers with 11 years of experience, a 28,000m² factory, 46 R&D engineers and 15 registered patents. It's the T16 model, their best-selling device with CE certification for the European Union.\n\nWhat makes the Pro Max unique is its replaceable ice lamp system. Unlike other devices where the lamp is built-in and the device is discarded when depleted, the Pro Max allows lamp replacement, offering virtually unlimited flashes and lifetime use. Each lamp includes built-in ice cooling technology for 100% painless treatment.\n\nBeyond hair removal, the Pro Max includes a skin rejuvenation function that stimulates collagen production, reduces open pores and improves overall skin texture. Two devices in one.\n\nThe premium anodized aluminum design with matte finish gives it a professional medical device look and feel. The 36W input power with universal voltage (100-240V) ensures optimal performance in any country. Results are visible from week 4, with completely smooth skin at 8 weeks of regular use.",
    },
    price: 149,
    originalPrice: 299,
    images: ["/pro_1.jpg", "/pro_2.jpg"],
    video: "https://gv.videocdn.alibaba.com/avpl/icbu_video/copy/018d-c0196830-a1d0a5cd-8d55264f-4e1e/20230801_38a6248fe5dc47b3_421596578085_mp4_264_hd_unlimit_taobao.mp4?bizCode=icbu_vod_video",
    badge: { es: "Premium", en: "Premium" },
    flashes: "Unlimited",
    levels: 5,
    cooling: true,
    features: {
      es: [
        "Lámparas frías intercambiables — flashes ilimitados de por vida",
        "Enfriamiento por hielo integrado en cada lámpara — 100% indoloro",
        "Función 2 en 1: depilación + rejuvenecimiento de piel",
        "Certificado CE — cumple normativa de la Unión Europea",
        "Diseño premium en aluminio anodizado acabado mate",
        "Voltaje universal 100-240V — funciona en todo el mundo",
        "Fabricado por MLAY — 11 años, 15 patentes, proveedor Fortune 500",
        "Resultados visibles en 4 semanas, piel suave en 8 semanas",
        "Compatible con tonos de piel I a V (Fitzpatrick)",
        "Personalización de marca disponible (etiqueta privada)",
      ],
      en: [
        "Replaceable ice lamps — unlimited lifetime flashes",
        "Built-in ice cooling in each lamp — 100% painless",
        "2-in-1 function: hair removal + skin rejuvenation",
        "CE certified — EU compliant",
        "Premium anodized aluminum design with matte finish",
        "Universal voltage 100-240V — works worldwide",
        "Made by MLAY — 11 years, 15 patents, Fortune 500 supplier",
        "Visible results in 4 weeks, smooth skin in 8 weeks",
        "Compatible with skin tones I to V (Fitzpatrick)",
        "Private label customization available",
      ],
    },
    includes: {
      es: [
        "1x Dispositivo IPL Pro Max",
        "1x Lámpara fría de depilación (intercambiable)",
        "1x Lámpara de rejuvenecimiento de piel (intercambiable)",
        "1x Gafas de protección UV",
        "1x Adaptador de corriente universal (100-240V)",
        "1x Manual de usuario (español e inglés)",
        "1x Caja premium de presentación",
      ],
      en: [
        "1x IPL Pro Max device",
        "1x Ice hair removal lamp (replaceable)",
        "1x Skin rejuvenation lamp (replaceable)",
        "1x UV protection goggles",
        "1x Universal power adapter (100-240V)",
        "1x User manual (English & Spanish)",
        "1x Premium presentation box",
      ],
    },
    specs: [
      { label: { es: "Flashes", en: "Flashes" }, value: "Unlimited (replaceable lamps)" },
      { label: { es: "Niveles de intensidad", en: "Intensity levels" }, value: "5" },
      { label: { es: "Funciones", en: "Functions" }, value: "Hair removal + Skin rejuvenation" },
      { label: { es: "Enfriamiento", en: "Cooling" }, value: "Ice cooling (per lamp)" },
      { label: { es: "Certificación", en: "Certification" }, value: "CE / PSE / ROHS" },
      { label: { es: "Potencia", en: "Power" }, value: "36W" },
      { label: { es: "Voltaje", en: "Voltage" }, value: "100–240V (universal)" },
      { label: { es: "Material", en: "Material" }, value: "ABS + Anodized aluminum" },
      { label: { es: "Resistencia al agua", en: "Waterproof" }, value: "IPX1" },
      { label: { es: "Peso del paquete", en: "Package weight" }, value: "1.64 kg" },
      { label: { es: "Fabricante", en: "Manufacturer" }, value: "MLAY (11 years, 15 patents)" },
      { label: { es: "Tonos de piel", en: "Skin tones" }, value: "Fitzpatrick I–V" },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug)
}
