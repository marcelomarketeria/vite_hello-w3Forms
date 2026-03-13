import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';


const MonterreySocialMedia = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const portfolioItems = [
    {
      title: "Changan Refran",
      tag: "Manejo de redes sociales",
      desc: "Tu marca merece estrategia, no solo diseño.",
      img: "/proyectos/changan-refran-social-media.jpg"
    },
    {
      title: "Church's Texas Chicken",
      tag: "Producción",
      desc: "No publicamos más. Publicamos con intención clara.",
      img: "/proyectos/churchs-texas-chicken-social-media.jpg"
    },
    {
      title: "Helados Sultana",
      tag: "Branding",
      desc: "Resultados medibles o no vale la pena.",
      img: "/proyectos/helados-sultana-social-media.jpg"
    },
    {
      title: "Hospital Ginecquito",
      tag: "Performance",
      desc: "Entendemos tu negocio antes de crear contenido.",
      img: "/proyectos/hospital-ginequito-social-media.jpg"
    },
    {
      title: "Pollo Maton",
      tag: "Branding",
      desc: "Estrategia primero. Creatividad después. Siempre con propósito.",
      img: "/proyectos/pollo-maton-social-media.jpg"
    },
    {
      title: "Tamales Nora",
      tag: "Storytelling",
      desc: "Tu inversión debe regresar. Eso es todo.",
      img: "/proyectos/tamales-nora-social-media.jpg"
    }
  ];

  // Double the items for seamless loop
  const marqueeItems = [...portfolioItems, ...portfolioItems];



  useEffect(() => {
    window.scrollTo(0, 0);

    // SEO Settings
    document.title = "Marketing Digital y Redes Sociales en Monterrey | Marketeria";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Estrategia, contenido y campañas pagadas para empresas en Monterrey. Generamos prospectos reales con manejo de redes sociales y producción audiovisual profesional.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Estrategia, contenido y campañas pagadas para empresas en Monterrey. Generamos prospectos reales con manejo de redes sociales y producción audiovisual profesional.';
      document.head.appendChild(meta);
    }

    // Canonical
    const linkCanonical = document.createElement('link');
    linkCanonical.rel = 'canonical';
    linkCanonical.href = 'https://marketeria.mx/redes-sociales/monterrey';
    document.head.appendChild(linkCanonical);

    // JSON-LD Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'json-ld-mty-services';
    script.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Marketing Digital y Redes Sociales",
        "provider": {
          "@type": "MarketingAgency",
          "name": "Marketeria",
          "url": "https://marketeria.mx",
          "location": {
            "@type": "Place",
            "name": "Monterrey, Nuevo León, México"
          }
        },
        "areaServed": "Monterrey",
        "description": "Servicios de marketing digital, manejo de redes sociales y producción de contenido en Monterrey."
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuál es la inversión mínima para campañas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La inversión varía según los objetivos, pero diseñamos planes escalables que permiten obtener resultados desde el primer mes."
            }
          }
        ]
      }
    ]);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.remove();
    };
  }, []);

  const serviceCards = [
    {
      title: "Dominio de Redes Sociales",
      desc: "No solo publicamos, construimos autoridad. Gestionamos tu comunidad en Monterrey con un enfoque quirúrgico en engagement y crecimiento real.",
      color: "bg-lavender/30",
      textColor: "text-black",
      items: ["ESTRATEGIA DE CONTENIDO", "GESTIÓN MENSUAL", "DISEÑO + PAUTA INCLUIDA", "Facebook, Instagram, TikTok, LinkedIn"],
      img: "/agencia-de-redes-sociales-marketeria.gif",
      visualType: "phone"
    },
    {
      title: "Ads de Alto Rendimiento",
      desc: "Capturamos la intención de compra. Campañas en Meta y Google Ads diseñadas para maximizar tu retorno de inversión con segmentación hiper-local.",
      color: "bg-deep-black",
      textColor: "text-white",
      items: ["META ADS · GOOGLE ADS · TIKTOK", "MÁS VENTAS, MENOS DESPERDICIO", "MEDICIÓN Y OPTIMIZACIÓN MENSUAL"],
      img: "/marketeria-ads.jpg",
      visualType: "icons"
    },
    {
      title: "Producción Audiovisual",
      desc: "Contenido que detiene el scroll. Foto y video profesional realizado en nuestro estudio en Monterrey para que tu marca destaque por su calidad.",
      color: "bg-soft-gray",
      textColor: "text-black",
      items: ["FOTO Y VIDEO PROFESIONAL", "CONTENIDO PARA REDES Y ADS", "STORYTELLING DE MARCA", "DRONE Y EXTERIORES"],
      img: "/redes-sociales-audioviusal-marketeria_2.gif",
      visualType: "tickets"
    }
  ];


  const processSteps = [
    { title: "Diagnóstico Estratégico", desc: "Auditamos tu presencia actual y competencia en Monterrey." },
    { title: "Definición de Estrategia", desc: "Trazamos el camino táctico para alcanzar tus KPIs." },
    { title: "Producción de Contenido", desc: "Creamos los assets visuales de alto impacto." },
    { title: "Implementación de Campañas", desc: "Activamos y distribuimos el mensaje en los canales correctos." },
    { title: "Optimización Continua", desc: "Ajustamos basándonos en datos para escalar resultados." }
  ];

  const faqs = [
    { q: "Ya contraté una agencia y no vi resultados. ¿Por qué con ustedes sería diferente?", a: "La mayoría de las agencias entregan contenido. Nosotros entregamos estrategia con métricas claras desde el inicio. Antes de publicar cualquier cosa, definimos qué vamos a medir y por qué. Si no hay objetivo, no hay trabajo." },
    { q: "¿Cómo sé que mi dinero en publicidad no se está tirando a la basura?", a: "Porque cada peso tiene un destino definido. Trabajamos con reportes en tiempo real y optimizamos campañas de forma continua. Tú siempre sabes cuánto se invirtió, en qué y qué generó." },
    { q: "¿Trabajan con negocios pequeños o solo con marcas grandes?", a: "Trabajamos con negocios que quieren crecer, sin importar el tamaño. Lo que sí requerimos es que el cliente tenga claridad en su objetivo. Sin eso, ni el presupuesto más grande da resultados." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-soft-gray">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 border border-brand/20 rounded-full text-brand text-xs font-bold uppercase tracking-widest mb-8 bg-brand/5">
                Monterrey, Nuevo León
              </span>
              <h1 className="text-[40px] md:text-[90px] lg:text-[110px] font-black leading-[0.9] uppercase tracking-tighter mb-8 font-display">
                Manejo de Redes<br /> Sociales <br />
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mb-12 leading-relaxed">
                Combinamos estrategia basada en datos, producción de contenido premium y campañas de alto rendimiento para que tu empresa no solo tenga presencia, sino que genere prospectos reales.
              </p>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-6 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand transition-all shadow-xl shadow-black/10"
              >
                Contactar ahora <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none select-none">
          <span className="text-[30vw] font-black uppercase leading-none font-display">MTY</span>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding bg-deep-black text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8 font-display">
                ¿Sientes que tu inversión digital <span className="text-cta italic">se está diluyendo?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "No generas suficientes leads calificados.",
                  "Tus anuncios tienen clics pero no conversiones.",
                  "Tus redes sociales no reflejan la calidad de tu empresa.",
                  "El contenido visual se ve amateur y poco profesional."
                ].map((problem, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-cta rounded-full" />
                    </div>
                    <p className="text-xl text-gray-400 font-light">{problem}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 backdrop-blur-sm rounded-[40px] border border-white/10"
            >
              <p className="text-2xl font-light leading-relaxed text-gray-300">
                En <span className="text-white font-bold">Marketeria</span> resolvemos esto integrando la producción de contenido de alto nivel con una estrategia de pauta agresiva. No solo publicamos, <span className="text-cta italic">construimos sistemas de adquisición de clientes.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Phantom Sticky Stack */}
      <section className="bg-white">
        <div className="container-custom py-24">
          <div className="max-w-3xl mb-24">
            <h2 className="text-5xl md:text-8xl font-black uppercase mb-6 font-display leading-tight">Servicios <span className="text-brand">Integrales</span></h2>
            <p className="text-xl text-gray-500 font-light">Estrategia y ejecución premium bajo un mismo techo.</p>
          </div>

          <div className="space-y-[10vh] pb-[20vh]">
            {serviceCards.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`sticky top-[15vh] w-full min-h-[60vh] md:min-h-[70vh] ${service.color} ${service.textColor} rounded-[40px] md:rounded-[60px] p-8 md:p-20 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12 border border-black/5`}
              >
                <div className="flex-1 space-y-8 z-10">
                  <h3 className="text-4xl md:text-6xl font-black uppercase leading-tight font-display">{service.title}</h3>
                  <p className="text-xl font-light opacity-80 max-w-lg">{service.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {service.items.map((item, i) => (
                      <span key={i} className={`px-4 py-2 rounded-full border ${service.textColor === 'text-white' ? 'border-white/20 bg-white/5' : 'border-black/10 bg-black/5'} text-xs font-bold uppercase tracking-widest`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 relative w-full h-full flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative z-0"
                  >
                    <img
                      src={service.img}
                      alt={service.title}
                      className={`w-full max-w-[500px] h-auto object-contain ${service.visualType === 'phone' ? 'rotate-[-5deg]' : ''}`}
                    />
                  </motion.div>
                </div>

                {/* Decorative background text for that Phantom feel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black opacity-[0.03] select-none pointer-events-none uppercase font-display whitespace-nowrap">
                  {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section id="proceso" className="section-padding bg-soft-gray overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-px bg-gray-300" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Método</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black uppercase leading-[0.85] font-display"
            >
              Nuestro <br /><span className="text-brand italic">Proceso</span>
            </motion.h2>
            <p className="text-xl text-gray-500 max-w-xs font-light">Transparencia y resultados medibles en cada etapa.</p>
          </div>

          <div className="relative min-h-[800px] md:min-h-[500px]">
            {/* SVG Path for the curve - Visible on Desktop */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
              <svg width="100%" height="100%" viewBox="0 0 1200 500" fill="none" preserveAspectRatio="none">
                <motion.path
                  d="M50,400 C150,450 250,150 350,250 C450,350 550,50 650,150 C750,250 850,400 950,300 C1050,200 1150,100 1200,150"
                  stroke="black"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="grid md:grid-cols-5 gap-12 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`relative ${i === 0 ? 'md:pt-80' :
                    i === 1 ? 'md:pt-40' :
                      i === 2 ? 'md:pt-16' :
                        i === 3 ? 'md:pt-64' : 'md:pt-24'
                    }`}
                >
                  {/* Large background number */}
                  <div className="absolute -top-16 -left-8 text-[180px] font-black text-black/[0.03] leading-none select-none pointer-events-none font-display">
                    0{i + 1}
                  </div>

                  {/* Dot on the line */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.5, type: "spring" }}
                    className="w-12 h-12 bg-black rounded-full border-[8px] border-white shadow-2xl mb-8 relative z-20 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>

                  <div className="relative z-20">
                    <h4 className="text-lg font-bold uppercase mb-4 tracking-tight leading-tight">{step.title}</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Infinite Marquee */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-custom mb-20 pt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black uppercase font-display leading-tight"
          >
            Proyectos <br /><span className="text-brand italic">Recientes</span>
          </motion.h2>
        </div>

        <div
          className="relative flex"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity
            }}
            className="flex gap-12 pr-12"
          >
            {marqueeItems.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[80vw] md:w-[600px] group">
                <div className="aspect-[4/3] md:aspect-[1.2/1] bg-gray-100 rounded-[50px] md:rounded-[60px] overflow-hidden relative mb-8 shadow-sm border border-gray-100 transition-transform duration-700 group-hover:scale-[0.98]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ArrowRight className="w-6 h-6 text-brand" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 px-4">
                  <span className="inline-block px-4 py-1.5 border-2 border-black rounded-full text-[10px] font-bold uppercase tracking-widest">{item.tag}</span>
                  <h4 className="text-3xl md:text-4xl font-black uppercase font-display leading-[1.1]">{item.title}</h4>
                  <p className="text-lg text-gray-500 font-light max-w-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Clients Section - Professional Grid */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-[85px] font-black uppercase leading-[0.9] max-w-4xl font-display"
            >
              Tu marca crece <span className="text-brand">cuando la estrategia manda.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-[20px] text-gray-500 max-w-xs font-light leading-relaxed"
            >
              Creamos experiencias de marketing fluidas con planificación experta y tecnología inteligente.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "Pollo Matón", url: "https://drive.google.com/thumbnail?id=1XMRDOo2O7ahNKSXtUuCu-Qod2d2m12xj&sz=w2000" },
              { name: "Helados Sultana", url: "https://drive.google.com/thumbnail?id=1-vasDd_WhV1vKtqFGDQNTRzlxSWJF77x&sz=w2000" },
              { name: "BAIC", url: "https://drive.google.com/thumbnail?id=1mXH7veON3AmfcnC08j_kDD5VE9-fjgdD&sz=w2000" },
              { name: "Changan", url: "https://drive.google.com/thumbnail?id=1KAI5FDcc_iQUsZGarHlSawI92cPsGp4R&sz=w2000" },
              { name: "Tamales Nora", url: "https://drive.google.com/thumbnail?id=16WZzqd5JvB5qgQtTYAWzIIkM30Qjdwn-&sz=w2000" },
              { name: "Mexer", url: "https://drive.google.com/thumbnail?id=1uVOZsO_YL5-Fzy_KmnZL1tnLOO_3tFI0&sz=w2000" },
              { name: "Beef Ricarnes", url: "https://drive.google.com/thumbnail?id=1rCxnG881ptsnxbvKiThG3V5VQCdGy7ww&sz=w2000" },
              { name: "Churchs", url: "https://drive.google.com/thumbnail?id=1SDMqe6zfoqV6CkTcA20QwMzJE5ZnRHWm&sz=w1200" },
            ].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)" }}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex items-center justify-center aspect-[3/2] transition-all duration-300"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-brand/5 p-8 rounded-[32px] border border-brand/10 flex items-center justify-center aspect-[3/2] group cursor-pointer"
            >
              <span className="text-brand font-bold uppercase tracking-widest text-xs group-hover:scale-110 transition-transform">Tu Marca Aquí</span>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center mt-32">
            {[
              { val: "+15", label: "Años" },
              { val: "+100", label: "Marcas" },
              { val: "+500", label: "Proyectos" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="text-5xl font-medium text-brand mb-2">{stat.val}</div>
                <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase font-display mb-16 text-center">Preguntas <span className="text-brand">Frecuentes</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100">
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-xl md:text-2xl font-bold uppercase transition-colors ${activeIndex === i ? 'text-brand' : 'text-black group-hover:text-brand'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? 'bg-brand text-white rotate-45' : 'bg-soft-gray text-black'}`}>
                    <ArrowRight className="w-5 h-5 rotate-[-45deg]" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-lg text-gray-500 font-light leading-relaxed pb-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-deep-black text-white relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-7xl font-black uppercase mb-10 leading-[0.9] font-display">
              ¿Listo para dar el <br /><span className="text-brand italic">siguiente paso?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-2xl mx-auto">
              Solicita hoy un diagnóstico gratuito de tu presencia digital en Monterrey y descubre el potencial real de tu marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                className="px-12 py-6 bg-brand text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl shadow-brand/20 flex items-center justify-center gap-3"
              >
                Contactar ahora <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#top"
                whileHover={{ scale: 1.05 }}
                className="px-12 py-6 border border-white/20 hover:bg-white/10 rounded-full font-bold uppercase tracking-widest text-sm transition-all"
              >
                Volver arriba
              </motion.a>
            </div>
          </motion.div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      </section>
    </div>
  );
};

export default MonterreySocialMedia;
