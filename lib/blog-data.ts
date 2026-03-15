import { BLOG_POSTS_EXTRA } from "./blog-data-extra"

export interface BlogPost {
  slug: string
  title: { es: string; en: string }
  description: { es: string; en: string }
  date: string
  readTime: string
  category: { es: string; en: string }
  keywords: { es: string; en: string }
  sections: {
    heading: { es: string; en: string }
    content: { es: string; en: string }
  }[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "mejor-depiladora-ipl-2026",
    title: {
      es: "Mejor Depiladora IPL 2026: Guía Completa de Compra",
      en: "Best IPL Hair Removal Device 2026: Complete Buying Guide",
    },
    description: {
      es: "Analizamos las mejores depiladoras IPL de 2026. Comparativa, precios, opiniones y cuál elegir según tu tipo de piel y presupuesto.",
      en: "We analyze the best IPL hair removal devices of 2026. Comparison, prices, reviews and which to choose based on your skin type and budget.",
    },
    date: "2026-03-10",
    readTime: "8 min",
    category: { es: "Guías", en: "Guides" },
    keywords: {
      es: "mejor depiladora IPL, depiladora laser casa, IPL 2026, comparativa IPL",
      en: "best IPL device, laser hair removal at home, IPL 2026, IPL comparison",
    },
    sections: [
      {
        heading: { es: "¿Qué es la depilación IPL y cómo funciona?", en: "What is IPL hair removal and how does it work?" },
        content: {
          es: "La depilación IPL (Intense Pulsed Light o Luz Pulsada Intensa) es una tecnología que emite pulsos de luz que son absorbidos por la melanina del vello. Esta energía se convierte en calor y destruye el folículo piloso, impidiendo que el vello vuelva a crecer. A diferencia del láser, que usa una única longitud de onda, el IPL emite un espectro amplio de luz (510-1200nm), lo que lo hace más versátil y seguro para uso doméstico. Los dispositivos IPL modernos incluyen sensores de tono de piel, múltiples niveles de intensidad y tecnología de enfriamiento para maximizar la eficacia y minimizar las molestias.",
          en: "IPL (Intense Pulsed Light) hair removal is a technology that emits light pulses absorbed by the melanin in hair. This energy converts to heat and destroys the hair follicle, preventing regrowth. Unlike laser, which uses a single wavelength, IPL emits a broad spectrum of light (510-1200nm), making it more versatile and safe for home use. Modern IPL devices include skin tone sensors, multiple intensity levels and cooling technology to maximize effectiveness and minimize discomfort.",
        },
      },
      {
        heading: { es: "¿Cuántas sesiones necesito para ver resultados?", en: "How many sessions do I need to see results?" },
        content: {
          es: "La mayoría de usuarios experimentan una reducción notable del vello tras 3-4 sesiones (6-8 semanas). Para obtener una reducción máxima del 93%, se recomiendan 8 sesiones completas espaciadas cada 2 semanas. Después, basta con sesiones de mantenimiento cada 2-3 meses. Los resultados varían según el color del vello, el tono de piel y la zona tratada. Las zonas con vello más oscuro y grueso (como las axilas y la línea del bikini) suelen responder más rápido que las zonas con vello fino.",
          en: "Most users experience noticeable hair reduction after 3-4 sessions (6-8 weeks). For maximum 93% reduction, 8 complete sessions spaced every 2 weeks are recommended. Afterwards, maintenance sessions every 2-3 months are sufficient. Results vary based on hair color, skin tone and treated area. Areas with darker, coarser hair (like underarms and bikini line) typically respond faster than areas with fine hair.",
        },
      },
      {
        heading: { es: "¿La depilación IPL en casa es segura?", en: "Is at-home IPL hair removal safe?" },
        content: {
          es: "Sí, los dispositivos IPL para uso doméstico están diseñados con múltiples sistemas de seguridad. Incluyen sensores de contacto que evitan flashes accidentales, sensores de tono de piel que ajustan automáticamente la intensidad, y la potencia está limitada a niveles seguros para uso no profesional. Los efectos secundarios más comunes son un leve enrojecimiento temporal y una sensación de calor, ambos normales y que desaparecen en minutos. Los dispositivos con tecnología Ice Cool reducen aún más estas molestias enfriando la piel a 5°C durante el tratamiento.",
          en: "Yes, home-use IPL devices are designed with multiple safety systems. They include contact sensors that prevent accidental flashes, skin tone sensors that automatically adjust intensity, and power is limited to safe levels for non-professional use. The most common side effects are mild temporary redness and a warm sensation, both normal and disappearing within minutes. Devices with Ice Cool technology further reduce discomfort by cooling the skin to 5°C during treatment.",
        },
      },
      {
        heading: { es: "¿Cuánto cuesta la depilación IPL vs una clínica?", en: "How much does IPL cost vs a clinic?" },
        content: {
          es: "Una sesión de depilación láser profesional cuesta entre 80€ y 150€ por zona. Un tratamiento completo de piernas, axilas y bikini puede superar los 2.000€, y necesitarás sesiones de mantenimiento periódicas. En comparación, un dispositivo IPL de calidad cuesta desde 89€ hasta 149€ y ofrece sesiones ilimitadas para todo el cuerpo, de por vida. El ahorro total puede superar los 2.000€ solo en el primer año. Además, te ahorras el tiempo y la incomodidad de desplazarte a la clínica y adaptarte a sus horarios.",
          en: "A professional laser hair removal session costs between €80 and €150 per area. A full treatment for legs, underarms and bikini can exceed €2,000, and you'll need periodic maintenance sessions. In comparison, a quality IPL device costs from €89 to €149 and offers unlimited sessions for the whole body, for life. Total savings can exceed €2,000 in the first year alone. Plus, you save the time and hassle of traveling to the clinic and working around their schedule.",
        },
      },
      {
        heading: { es: "¿En qué zonas del cuerpo puedo usar IPL?", en: "Which body areas can I use IPL on?" },
        content: {
          es: "Los dispositivos IPL se pueden usar en prácticamente todo el cuerpo: piernas, brazos, axilas, línea del bikini, cara (labio superior, barbilla, patillas), espalda, pecho y abdomen. La única zona no recomendada es alrededor de los ojos. Para la cara, se recomienda usar niveles de intensidad más bajos y evitar las cejas. Cada zona requiere un número diferente de flashes por sesión: las piernas completas necesitan unos 300-400 flashes, mientras que el labio superior solo necesita 5-10.",
          en: "IPL devices can be used on virtually the entire body: legs, arms, underarms, bikini line, face (upper lip, chin, sideburns), back, chest and abdomen. The only area not recommended is around the eyes. For the face, lower intensity levels are recommended and eyebrows should be avoided. Each area requires a different number of flashes per session: full legs need about 300-400 flashes, while the upper lip only needs 5-10.",
        },
      },
    ],
  },
  {
    slug: "ipl-vs-laser-diferencias",
    title: {
      es: "IPL vs Láser: Diferencias, Ventajas y Cuál Elegir",
      en: "IPL vs Laser: Differences, Advantages and Which to Choose",
    },
    description: {
      es: "Descubre las diferencias entre depilación IPL y láser. Cuál es más efectiva, más segura y cuál es mejor para usar en casa.",
      en: "Discover the differences between IPL and laser hair removal. Which is more effective, safer and better for home use.",
    },
    date: "2026-03-05",
    readTime: "7 min",
    category: { es: "Comparativas", en: "Comparisons" },
    keywords: {
      es: "IPL vs laser, diferencias IPL laser, depilacion laser casa, luz pulsada vs laser",
      en: "IPL vs laser, IPL laser differences, laser hair removal home, pulsed light vs laser",
    },
    sections: [
      {
        heading: { es: "¿Cuál es la diferencia entre IPL y láser?", en: "What is the difference between IPL and laser?" },
        content: {
          es: "La principal diferencia radica en la luz que utilizan. El láser emite una única longitud de onda concentrada y coherente, mientras que el IPL emite un espectro amplio de luz pulsada. Esto significa que el láser es más preciso pero también más potente, lo que lo hace menos seguro para uso doméstico sin supervisión profesional. El IPL, al dispersar la energía en un espectro más amplio, es más seguro y versátil, aunque puede requerir algunas sesiones más para alcanzar los mismos resultados.",
          en: "The main difference lies in the light they use. Laser emits a single concentrated, coherent wavelength, while IPL emits a broad spectrum of pulsed light. This means laser is more precise but also more powerful, making it less safe for unsupervised home use. IPL, by dispersing energy across a wider spectrum, is safer and more versatile, though it may require a few more sessions to achieve the same results.",
        },
      },
      {
        heading: { es: "¿Qué es más efectivo, IPL o láser?", en: "Which is more effective, IPL or laser?" },
        content: {
          es: "En términos de resultados finales, ambas tecnologías consiguen una reducción permanente del vello similar (90-95%). La diferencia está en la velocidad: el láser profesional puede conseguir resultados en 4-6 sesiones, mientras que el IPL doméstico necesita 6-8 sesiones. Sin embargo, el IPL doméstico ofrece una ventaja clave: puedes hacer sesiones cuando quieras, sin citas ni desplazamientos. Además, el coste total del IPL es una fracción del láser profesional.",
          en: "In terms of final results, both technologies achieve similar permanent hair reduction (90-95%). The difference is speed: professional laser can achieve results in 4-6 sessions, while home IPL needs 6-8 sessions. However, home IPL offers a key advantage: you can do sessions whenever you want, without appointments or travel. Plus, the total cost of IPL is a fraction of professional laser.",
        },
      },
      {
        heading: { es: "¿Es seguro usar IPL en casa sin supervisión?", en: "Is it safe to use IPL at home without supervision?" },
        content: {
          es: "Los dispositivos IPL para uso doméstico están certificados por la FDA y la CE, y están diseñados con múltiples sistemas de seguridad que los hacen completamente seguros para uso sin supervisión profesional. Los sensores de tono de piel evitan que el dispositivo funcione en tonos de piel incompatibles, los sensores de contacto requieren contacto pleno con la piel para emitir el flash, y los niveles de potencia están limitados a rangos seguros. Millones de personas en todo el mundo usan dispositivos IPL en casa de forma segura.",
          en: "Home-use IPL devices are FDA and CE certified, and are designed with multiple safety systems that make them completely safe for unsupervised use. Skin tone sensors prevent the device from working on incompatible skin tones, contact sensors require full skin contact to emit a flash, and power levels are limited to safe ranges. Millions of people worldwide use IPL devices at home safely.",
        },
      },
    ],
  },
  {
    slug: "depilacion-ipl-pieles-oscuras",
    title: {
      es: "Depilación IPL para Pieles Oscuras: ¿Funciona?",
      en: "IPL Hair Removal for Dark Skin: Does It Work?",
    },
    description: {
      es: "Todo sobre IPL y pieles oscuras: para qué tonos funciona, precauciones y las mejores opciones del mercado.",
      en: "Everything about IPL and dark skin: which tones it works for, precautions and the best options on the market.",
    },
    date: "2026-02-28",
    readTime: "6 min",
    category: { es: "Guías", en: "Guides" },
    keywords: {
      es: "IPL pieles oscuras, depilacion laser piel morena, IPL fitzpatrick, luz pulsada piel oscura",
      en: "IPL dark skin, laser hair removal dark skin, IPL fitzpatrick, pulsed light dark skin",
    },
    sections: [
      {
        heading: { es: "¿Puede la depilación IPL funcionar en pieles oscuras?", en: "Can IPL hair removal work on dark skin?" },
        content: {
          es: "La depilación IPL funciona detectando el contraste entre la melanina del vello y la melanina de la piel. En pieles muy oscuras (tipo VI de la escala Fitzpatrick), la alta concentración de melanina en la piel puede absorber demasiada energía, lo que reduce la eficacia y aumenta el riesgo de irritación. Sin embargo, los dispositivos IPL modernos funcionan perfectamente en tonos de piel de I a V (piel clara a morena), que abarca a la gran mayoría de la población. Los sensores de tono de piel integrados ajustan automáticamente la intensidad para cada persona.",
          en: "IPL hair removal works by detecting the contrast between hair melanin and skin melanin. On very dark skin (Fitzpatrick type VI), the high melanin concentration in the skin can absorb too much energy, reducing effectiveness and increasing irritation risk. However, modern IPL devices work perfectly on skin tones I to V (fair to olive), which covers the vast majority of the population. Built-in skin tone sensors automatically adjust intensity for each person.",
        },
      },
      {
        heading: { es: "¿Qué escala Fitzpatrick necesito para usar IPL?", en: "What Fitzpatrick scale do I need for IPL?" },
        content: {
          es: "La escala Fitzpatrick clasifica los tonos de piel del I al VI. Los dispositivos IPL son compatibles con los tipos I a V: Tipo I (piel muy clara, siempre se quema), Tipo II (piel clara, se quema fácilmente), Tipo III (piel media, a veces se quema), Tipo IV (piel oliva, rara vez se quema) y Tipo V (piel morena, muy rara vez se quema). El tipo VI (piel muy oscura) no es compatible con la mayoría de dispositivos IPL. Si no estás segura de tu tipo, los dispositivos con sensor automático lo detectan por ti.",
          en: "The Fitzpatrick scale classifies skin tones from I to VI. IPL devices are compatible with types I to V: Type I (very fair, always burns), Type II (fair, burns easily), Type III (medium, sometimes burns), Type IV (olive, rarely burns) and Type V (brown, very rarely burns). Type VI (very dark) is not compatible with most IPL devices. If you're unsure of your type, devices with automatic sensors detect it for you.",
        },
      },
    ],
  },
  {
    slug: "ipl-vs-cera-vs-cuchilla",
    title: {
      es: "IPL vs Cera vs Cuchilla: Comparativa Completa de Depilación",
      en: "IPL vs Waxing vs Shaving: Complete Hair Removal Comparison",
    },
    description: {
      es: "Comparamos los 3 métodos de depilación más populares: IPL, cera y cuchilla. Coste, dolor, resultados y cuál es el mejor.",
      en: "We compare the 3 most popular hair removal methods: IPL, waxing and shaving. Cost, pain, results and which is best.",
    },
    date: "2026-02-20",
    readTime: "6 min",
    category: { es: "Comparativas", en: "Comparisons" },
    keywords: {
      es: "IPL vs cera, depilacion cuchilla vs IPL, metodos depilacion comparativa, mejor metodo depilacion",
      en: "IPL vs waxing, shaving vs IPL, hair removal methods comparison, best hair removal method",
    },
    sections: [
      {
        heading: { es: "¿Cuánto cuesta cada método de depilación a largo plazo?", en: "How much does each hair removal method cost long-term?" },
        content: {
          es: "La cuchilla es la opción más barata a corto plazo (5-10€ al mes en recambios), pero al cabo de 10 años habrás gastado 600-1.200€. La cera profesional cuesta 30-60€ por sesión mensual, lo que supone 3.600-7.200€ en 10 años. Un dispositivo IPL cuesta entre 89€ y 149€ una sola vez, con sesiones ilimitadas de por vida. En 10 años, el IPL es con diferencia la opción más económica, además de ofrecer resultados permanentes que los otros métodos no pueden igualar.",
          en: "Shaving is the cheapest short-term option (€5-10/month on replacements), but over 10 years you'll have spent €600-1,200. Professional waxing costs €30-60 per monthly session, totaling €3,600-7,200 over 10 years. An IPL device costs €89-149 once, with unlimited lifetime sessions. Over 10 years, IPL is by far the most economical option, plus it offers permanent results that other methods can't match.",
        },
      },
      {
        heading: { es: "¿Qué método de depilación duele menos?", en: "Which hair removal method hurts the least?" },
        content: {
          es: "La cera es el método más doloroso, especialmente en zonas sensibles como las axilas y el bikini. La cuchilla no duele pero puede causar irritación, cortes e ingrowth (vellos enquistados). El IPL con tecnología Ice Cool es prácticamente indoloro: la mayoría de usuarios describen una ligera sensación de calor, mucho menos molesta que la cera. Además, como el IPL reduce permanentemente el vello, con el tiempo necesitarás menos sesiones y las molestias desaparecen por completo.",
          en: "Waxing is the most painful method, especially in sensitive areas like underarms and bikini. Shaving doesn't hurt but can cause irritation, cuts and ingrown hairs. IPL with Ice Cool technology is virtually painless: most users describe a slight warm sensation, much less uncomfortable than waxing. Plus, as IPL permanently reduces hair, over time you'll need fewer sessions and discomfort disappears completely.",
        },
      },
    ],
  },
  {
    slug: "como-usar-depiladora-ipl-primera-vez",
    title: {
      es: "Cómo Usar una Depiladora IPL por Primera Vez: Guía Paso a Paso",
      en: "How to Use an IPL Device for the First Time: Step-by-Step Guide",
    },
    description: {
      es: "Guía completa para tu primera sesión de depilación IPL en casa. Preparación, uso correcto y cuidados post-tratamiento.",
      en: "Complete guide for your first at-home IPL session. Preparation, correct use and post-treatment care.",
    },
    date: "2026-02-15",
    readTime: "7 min",
    category: { es: "Guías", en: "Guides" },
    keywords: {
      es: "como usar IPL, primera sesion IPL, tutorial depiladora laser, guia IPL principiantes",
      en: "how to use IPL, first IPL session, laser hair removal tutorial, IPL beginners guide",
    },
    sections: [
      {
        heading: { es: "¿Cómo preparar la piel antes de usar IPL?", en: "How to prepare skin before using IPL?" },
        content: {
          es: "24-48 horas antes de tu primera sesión IPL, afeita la zona a tratar con una cuchilla. El vello debe estar por debajo de la superficie de la piel para que la luz llegue directamente al folículo. NO uses cera ni depiladora eléctrica, ya que arrancan el vello de raíz y el IPL no tendría folículo que destruir. Asegúrate de que la piel esté limpia, seca y sin cremas, maquillaje ni desodorante. Evita la exposición solar intensa o el bronceado artificial en las 2 semanas previas.",
          en: "24-48 hours before your first IPL session, shave the treatment area with a razor. Hair should be below the skin surface so light reaches the follicle directly. Do NOT use wax or electric epilator, as they remove hair from the root and IPL would have no follicle to destroy. Make sure skin is clean, dry and free of creams, makeup or deodorant. Avoid intense sun exposure or artificial tanning in the 2 weeks before.",
        },
      },
      {
        heading: { es: "¿Cómo hacer tu primera sesión paso a paso?", en: "How to do your first session step by step?" },
        content: {
          es: "Paso 1: Conecta el dispositivo y espera a que se encienda. Paso 2: Selecciona el nivel de intensidad más bajo para empezar. Paso 3: Coloca la ventana del dispositivo perpendicular a la piel, asegurándote de que hace contacto pleno. Paso 4: Pulsa el botón de flash. Sentirás un ligero destello de calor. Paso 5: Mueve el dispositivo a la siguiente zona sin solapar. Paso 6: Después de tratar toda la zona, aplica una crema hidratante suave. Si no has sentido molestias, puedes subir un nivel en la siguiente sesión. Repite cada 2 semanas durante las primeras 8 sesiones.",
          en: "Step 1: Plug in the device and wait for it to turn on. Step 2: Select the lowest intensity level to start. Step 3: Place the device window perpendicular to the skin, ensuring full contact. Step 4: Press the flash button. You'll feel a slight flash of warmth. Step 5: Move the device to the next area without overlapping. Step 6: After treating the whole area, apply a gentle moisturizer. If you felt no discomfort, you can go up one level next session. Repeat every 2 weeks for the first 8 sessions.",
        },
      },
      {
        heading: { es: "¿Qué cuidados necesito después del tratamiento?", en: "What aftercare do I need?" },
        content: {
          es: "Después de cada sesión IPL: Aplica una crema hidratante sin perfume. Evita la exposición solar directa durante 24-48 horas. No uses productos con retinol o ácidos durante 24 horas. No te depiles con cera entre sesiones (solo cuchilla si es necesario). Es normal ver un ligero enrojecimiento que desaparece en 1-2 horas. El vello tratado irá cayendo gradualmente durante las 1-2 semanas siguientes. ¡No lo arranques, déjalo caer solo!",
          en: "After each IPL session: Apply fragrance-free moisturizer. Avoid direct sun exposure for 24-48 hours. Don't use retinol or acid products for 24 hours. Don't wax between sessions (only razor if needed). Mild redness that disappears in 1-2 hours is normal. Treated hair will gradually fall out over the next 1-2 weeks. Don't pluck it, let it fall out naturally!",
        },
      },
    ],
  },
  {
    slug: "depilacion-ipl-hombres",
    title: {
      es: "Depilación IPL para Hombres: Todo lo que Debes Saber",
      en: "IPL Hair Removal for Men: Everything You Need to Know",
    },
    description: {
      es: "Los hombres también usan IPL. Guía completa de depilación IPL masculina: zonas, resultados y mejores dispositivos.",
      en: "Men use IPL too. Complete guide to male IPL hair removal: areas, results and best devices.",
    },
    date: "2026-02-10",
    readTime: "6 min",
    category: { es: "Guías", en: "Guides" },
    keywords: {
      es: "depilacion IPL hombres, depiladora laser masculina, IPL hombre, depilacion masculina permanente",
      en: "IPL hair removal men, male laser hair removal, IPL for men, permanent male hair removal",
    },
    sections: [
      {
        heading: { es: "¿Funciona la depilación IPL en hombres?", en: "Does IPL hair removal work on men?" },
        content: {
          es: "Sí, el IPL funciona perfectamente en hombres. De hecho, el vello masculino suele ser más oscuro y grueso, lo que significa que absorbe más energía lumínica y responde mejor al tratamiento. Las zonas más populares entre los hombres son la espalda, el pecho, los hombros, el abdomen y la línea de la barba (cuello y mejillas). Cada vez más hombres optan por el IPL para reducir el vello corporal, ya sea por motivos estéticos, deportivos (ciclistas, nadadores) o simplemente por comodidad.",
          en: "Yes, IPL works perfectly on men. In fact, male hair tends to be darker and coarser, which means it absorbs more light energy and responds better to treatment. The most popular areas among men are back, chest, shoulders, abdomen and beard line (neck and cheeks). More and more men are choosing IPL to reduce body hair, whether for aesthetic reasons, sports (cyclists, swimmers) or simply comfort.",
        },
      },
      {
        heading: { es: "¿Cuántas sesiones necesita un hombre?", en: "How many sessions does a man need?" },
        content: {
          es: "Los hombres suelen necesitar 1-2 sesiones más que las mujeres debido a que el vello masculino tiene folículos más profundos y un ciclo de crecimiento más activo. En general, 8-10 sesiones espaciadas cada 2 semanas proporcionan una reducción del 85-93%. Las sesiones de mantenimiento cada 4-6 semanas pueden ser necesarias en zonas como la espalda y el pecho, donde el vello tiende a ser más persistente. El nivel de intensidad recomendado suele ser más alto que para las mujeres.",
          en: "Men typically need 1-2 more sessions than women because male hair has deeper follicles and a more active growth cycle. Generally, 8-10 sessions spaced every 2 weeks provide 85-93% reduction. Maintenance sessions every 4-6 weeks may be needed in areas like back and chest, where hair tends to be more persistent. Recommended intensity level is usually higher than for women.",
        },
      },
    ],
  },
]

export const ALL_BLOG_POSTS: BlogPost[] = [...BLOG_POSTS, ...BLOG_POSTS_EXTRA]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return ALL_BLOG_POSTS.map((p) => p.slug)
}
