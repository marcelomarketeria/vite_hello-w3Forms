import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  Loader2,
  ChevronLeft
} from 'lucide-react';
import MonterreySocialMedia from './pages/MonterreySocialMedia';
import MonterreyWebDesign from './pages/MonterreyWebDesign';


// --- Components ---

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    { name: 'El Problema', id: 'problema', num: '01', img: 'https://picsum.photos/seed/menu1/800/600' },
    { name: 'La Agencia', id: 'guia', num: '02', img: 'https://picsum.photos/seed/menu2/800/600' },
    { name: 'Portafolio', id: 'portafolio', num: '03', img: 'https://picsum.photos/seed/menu3/800/600' },
    { name: 'El Plan', id: 'plan', num: '04', img: 'https://picsum.photos/seed/menu4/800/600' },
    { name: 'Servicios', id: 'servicios', num: '05', img: 'https://picsum.photos/seed/menu5/800/600' },
    { name: 'Contacto', id: 'contacto', num: '06', img: 'https://picsum.photos/seed/menu6/800/600' },
  ];

  return (
    <>
      {/* Fixed Header Bar */}
      <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled || isOpen
        ? 'py-4 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm'
        : 'py-8 md:py-10 bg-transparent'
        }`}>
        <div className="container-custom flex justify-between items-start">
          <div className="flex flex-col">
            <Link
              to="/"
              className="transition-all duration-700 ease-[0.22, 1, 0.36, 1]"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="https://drive.google.com/thumbnail?id=1VeWsi9Yvkuq6oob0fWx-ovszR0pWja_f&sz=w2000"
                alt="Marketeria Logo"
                className="h-8 md:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-4 relative z-[110] mt-2 md:mt-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-black transition-colors">
              {isOpen ? 'Cerrar' : 'Menú'}
            </span>
            <div className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-black rounded-full transition-transform group-hover:rotate-90">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white block origin-center"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white block origin-center"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col justify-center pt-24 pb-12 md:pb-20 px-6 md:px-24 overflow-hidden"
          >
            {/* Hover Image Preview */}
            <AnimatePresence>
              {hoveredItem && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{
                    opacity: 0.4,
                    scale: 1,
                    rotate: 0,
                    x: mousePos.x - 200,
                    y: mousePos.y - 150
                  }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                  className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-0 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={menuItems.find(i => i.id === hoveredItem)?.img}
                    className="w-full h-full object-cover"
                    alt="Preview"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
              <nav className="space-y-2 md:space-y-0">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="group flex items-center gap-4 md:gap-8 py-2 md:py-4 w-full text-left"
                    >
                      <span className="text-xs md:text-sm font-bold text-gray-300 group-hover:text-brand transition-colors font-mono">
                        {item.num}
                      </span>
                      <span className="text-2xl md:text-[45px] lg:text-[55px] font-black uppercase leading-none tracking-tighter transition-all duration-500 group-hover:pl-8 group-hover:text-brand font-display">
                        {item.name}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </nav>

              <div className="hidden lg:block pb-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-12"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Social:</span>
                    <div className="flex flex-col gap-2 text-xl font-medium uppercase">
                      <a href="https://www.instagram.com/marketeriamx/" target="_blank" className="hover:text-brand transition-colors">Instagram</a>
                      <a href="https://www.facebook.com/wemarketeria" target="_blank" className="hover:text-brand transition-colors">Facebook</a>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Contacto:</span>
                    <p className="text-xl font-medium uppercase">hola@marketeria.mx</p>
                    <p className="text-xl font-medium uppercase">Monterrey, MX</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute bottom-0 right-0 opacity-[0.02] pointer-events-none select-none">
              <span className="text-[30vw] font-black uppercase leading-none font-display">ESTRATEGIA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Massive Headline */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[45px] md:text-[100px] lg:text-[120px] font-black leading-[0.85] uppercase tracking-tighter mb-8 font-display"
            >
              Hacemos que tu marketing <br /><span className="text-brand italic">funcione.</span>
            </motion.h1>
          </div>

          {/* Right Side: CTA */}
          <div className="lg:col-span-4 pt-12 lg:pt-32">
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: -10,
                boxShadow: "0 20px 40px rgba(216, 254, 9, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-between p-4 border-2 border-black rounded-full group hover:bg-black hover:text-white transition-all duration-300 perspective-1000"
            >
              <span className="text-[18px] font-bold uppercase tracking-widest ml-6">Hablemos del proyecto</span>
              <div className="w-14 h-14 bg-cta rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform shadow-lg">
                <ArrowRight className="text-black w-6 h-6" />
              </div>
            </motion.a>
          </div>
        </div>

        {/* Bottom Images Row */}
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section id="problema" className="section-padding bg-deep-black text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Left Side: The Hook */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-cta" />
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-cta">El Manifiesto</span>
              </div>

              <h2 className="text-5xl md:text-[85px] font-black uppercase leading-[0.9] tracking-tighter font-display">
                No necesitas más <br />
                <span className="text-gray-500">“posts bonitos”.</span> <br />
                Necesitas <span className="text-cta italic">clientes.</span>
              </h2>

              <p className="text-2xl md:text-[30px] font-light leading-relaxed text-gray-400 max-w-2xl">
                Diseño, anuncios en redes, fotografía y video profesional para que tu negocio deje de jugar a la presencia digital… <span className="text-white font-medium">y empiece a vender.</span>
              </p>
            </motion.div>
          </div>

          {/* Right Side: The Solution Detail */}
          <div className="lg:col-span-5 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-16"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-tight font-display">Enfoque en Resultados</h3>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  Campañas enfocadas en mensajes, leads y ventas reales. No nos interesan los likes, nos interesa tu retorno de inversión.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-tight font-display">Omnicanalidad Estratégica</h3>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  Facebook, Instagram, TikTok y Google Ads trabajando para ti bajo una misma narrativa estratégica.
                </p>
              </div>

              <div className="pt-8">
                <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                  <p className="text-2xl font-black uppercase italic font-display text-cta">
                    "Si vas a invertir, que sea para crecer."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Guide = () => {
  const logos = [
    { name: "Pollo Matón", url: "https://drive.google.com/thumbnail?id=1XMRDOo2O7ahNKSXtUuCu-Qod2d2m12xj&sz=w2000" },
    { name: "Helados Sultana", url: "https://drive.google.com/thumbnail?id=1-vasDd_WhV1vKtqFGDQNTRzlxSWJF77x&sz=w2000" },
    { name: "BAIC", url: "https://drive.google.com/thumbnail?id=1mXH7veON3AmfcnC08j_kDD5VE9-fjgdD&sz=w2000" },
    { name: "Changan", url: "https://drive.google.com/thumbnail?id=1KAI5FDcc_iQUsZGarHlSawI92cPsGp4R&sz=w2000" },
    { name: "Tamales Nora", url: "https://drive.google.com/thumbnail?id=16WZzqd5JvB5qgQtTYAWzIIkM30Qjdwn-&sz=w2000" },
    { name: "Mexer", url: "https://drive.google.com/thumbnail?id=1uVOZsO_YL5-Fzy_KmnZL1tnLOO_3tFI0&sz=w2000" },
    { name: "Beef Ricarnes", url: "https://drive.google.com/thumbnail?id=1rCxnG881ptsnxbvKiThG3V5VQCdGy7ww&sz=w2000" },
    { name: "Churchs", url: "https://drive.google.com/thumbnail?id=1SDMqe6zfoqV6CkTcA20QwMzJE5ZnRHWm&sz=w1200" },
  ];

  return (
    <section id="guia" className="section-padding bg-soft-gray">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[85px] font-black uppercase leading-[0.9] max-w-4xl"
          >
            Juntos con <span className="text-brand italic">socios</span> elevamos cada experiencia
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
          {logos.map((logo, i) => (
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
  );
};

const Plan = () => {
  const steps = [
    {
      num: "1",
      title: "Entendemos tu negocio",
      desc: "Auditamos tu situación actual, competencia y objetivos para encontrar las grietas por donde se escapa el crecimiento."
    },
    {
      num: "2",
      title: "Diseñamos la estrategia",
      desc: "Creamos un roadmap personalizado basado en datos, no en suposiciones. Definimos canales, mensajes y embudos."
    },
    {
      num: "3",
      title: "Ejecutamos y optimizamos",
      desc: "Ponemos en marcha el plan y ajustamos en tiempo real para maximizar cada euro invertido en tu marketing."
    }
  ];

  return (
    <section id="plan" className="section-padding bg-[#f5f5f5] overflow-hidden">
      <div className="container-custom">
        <div className="mb-32 flex items-center gap-4">
          <div className="w-12 h-px bg-gray-300" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Proceso</span>
        </div>

        <div className="relative min-h-[600px] md:min-h-[400px]">
          {/* SVG Path for the curve - Visible on Desktop */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
              <motion.path
                d="M100,300 C300,350 500,100 600,200 C700,300 900,50 1100,100"
                stroke="black"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-20 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3 }}
                className={`relative ${i === 0 ? 'md:pt-64' :
                  i === 1 ? 'md:pt-32' : 'md:pt-0'
                  }`}
              >
                {/* Large background number */}
                <div className="absolute -top-16 -left-12 text-[240px] font-black text-black/[0.03] leading-none select-none pointer-events-none font-display">
                  {step.num}
                </div>

                {/* Dot on the line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3 + 0.5, type: "spring" }}
                  className="w-14 h-14 bg-black rounded-full border-[10px] border-white shadow-2xl mb-10 relative z-20 flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>

                <div className="relative z-20">
                  <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight font-display">{step.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed max-w-xs text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-40 text-center">
          <motion.a
            href="#contacto"
            whileHover={{ x: 10 }}
            className="inline-flex items-center gap-6 text-black font-black uppercase tracking-widest text-sm border-b-2 border-black pb-4 transition-all"
          >
            Empezar el viaje <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Una estrategia para vender",
      desc: "No solo hacemos marketing, creamos sistemas de ventas. Diseñamos el camino completo que recorre tu cliente desde que te conoce hasta que cierra la compra, optimizando cada punto de contacto para maximizar la conversión.",
    },
    {
      title: "Redes Sociales y Contenido",
      desc: "Tu marca no necesita improvisación, necesita un plan. Diseñamos la estrategia, creamos los diseños, producimos el contenido, publicamos y activamos anuncios en Facebook, Instagram, TikTok y más, con mensajes claros que conectan, generan acción y convierten inversión en resultados medibles.",
    },
    {
      title: "Producción de Video",
      desc: "Contenido audiovisual con intención cinematográfica. Desde anuncios de alto impacto hasta contenido educativo que comunica tus valores y esencia con la máxima calidad visual.",
    },
    {
      title: "Fotografía de Producto",
      desc: "La primera impresión entra por los ojos. Capturamos la esencia de tus productos con iluminación y composición profesional, diseñadas específicamente para e-commerce y catálogos de alta gama.",
    },
    {
      title: "Branding",
      desc: "Construimos marcas con alma. Diseñamos identidades visuales y narrativas poderosas que comunican autoridad, confianza y crean una conexión emocional profunda con tu cliente ideal.",
    },
    {
      title: "Diseño de Sitio Web",
      desc: "Tu vitrina digital 24/7. Creamos sitios web de alto rendimiento, optimizados para SEO y experiencia de usuario, que no solo se ven increíbles, sino que funcionan como máquinas de generación de leads.",
    },
    {
      title: "Tienda Online",
      desc: "Escalamos tu negocio al mundo digital. Desarrollamos plataformas de e-commerce robustas, seguras y fáciles de gestionar, enfocadas en ofrecer una experiencia de compra fluida que impulse tus ventas.",
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="w-12 h-1 bg-brand mb-8" />
              <h2 className="text-5xl md:text-[85px] font-black uppercase leading-[0.9] mb-6 font-display">Lo que <br /> hacemos</h2>
              <p className="text-lg md:text-[20px] text-gray-500 font-light">Soluciones integrales diseñadas para escalar tu negocio con claridad estratégica.</p>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-gray-200">
              {services.map((s, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                    className="w-full py-10 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-8">
                      <span className="text-brand text-2xl font-bold">
                        {activeIndex === i ? '—' : '+'}
                      </span>
                      <h3 className={`text-3xl md:text-4xl font-bold uppercase transition-colors ${activeIndex === i ? 'text-brand' : 'text-deep-black group-hover:text-brand/70'}`}>
                        {s.title}
                      </h3>
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-xl text-gray-600 font-light leading-relaxed pb-12 pl-16 max-w-2xl">
                          {s.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Helados Sultana",
      tags: ["Branding", "Social Media", "Estratégia", "Audio Visual"],
      img: "https://drive.google.com/thumbnail?id=1kiIIIfFjnEN1RBm0IJuGv2tyMk_OufDp&sz=w2000",
      bgColor: "#42aa35", // Verde
      textColor: "text-black"
    },
    {
      title: "Pollo Matón",
      tags: ["Sitio Web", "Branding", "Social Media", "Estratégia", "Audio Visual"],
      img: "https://drive.google.com/thumbnail?id=1h1kFQXGwJmufswy7jVo4qLaa9XibyZv9&sz=w2000",
      bgColor: "#e51a20", // Negro
      textColor: "text-black"
    },
    {
      title: "Changan",
      tags: ["Sitio Web", "Social Media", "Estratégia", "Audio Visual"],
      img: "https://drive.google.com/thumbnail?id=1BSx_G9tpAGjvdpGOZb-JOlD_sXA1Q1Bz&sz=w2000",
      bgColor: "#0a477f", // Deep Teal
      textColor: "text-black"
    },
    {
      title: "Churchs",
      tags: ["Branding", "Social Media"],
      img: "https://drive.google.com/thumbnail?id=1gCnxJDkiJuqxEpm0gF372vgnS5YVlCXH&sz=w2000",
      bgColor: "#ee3b00", // Brand Blue
      textColor: "text-black"
    },
    {
      title: "Tamales Nora",
      tags: ["Sitio Web", "Branding", "Social Media", "Estratégia", "Audio Visual"],
      img: "https://lh3.googleusercontent.com/d/1i6gs3MU3sGqvh0df7cMFzm1jGBqNKKYB=w2000?authuser=0",
      bgColor: "#ffd11e", // CTA Neon
      textColor: "text-black"
    }
  ];

  return (
    <section id="portafolio" className="bg-white">
      <div className="container-custom py-24">
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[85px] leading-[0.85] font-black uppercase mb-12 font-display"
          >
            Explora <br /> <span className="text-brand italic">El Impacto.</span>
          </motion.h2>
          <p className="text-xl md:text-[30px] text-gray-500 max-w-xl font-light">
            No solo creamos campañas, construimos legados visuales que conectan con la audiencia.
          </p>
        </div>

        <div className="space-y-[10vh]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ backgroundColor: project.bgColor }}
              className={`sticky top-32 w-full min-h-[60vh] md:min-h-[80vh] rounded-[40px] md:rounded-[60px] p-8 md:p-16 overflow-hidden shadow-2xl ${project.textColor}`}
            >
              {/* Large Circular Image Area */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="w-[120%] md:w-[80%] aspect-square bg-white rounded-full flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-[70%] h-[70%] object-contain hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Decorative Number */}
              <div className={`absolute bottom-8 right-12 text-9xl font-black opacity-10 font-display select-none`}>
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Changan",
      role: "Gerencia",
      text: "Ordenaron nuestra estrategia digital y alinearon contenido con pauta. Las pruebas de manejo aumentaron y los leads llegaron con mayor intención real.",
    },
    {
      name: "Pollo Matón",
      role: "Dirección",
      text: "Impulsaron nuestras promociones con campañas claras y materiales de branding consistentes. El contenido conectó mejor y fortaleció la presencia de la marca.",
    },
    {
      name: "Helados Sultana",
      role: "Mercadotecnia",
      text: "Fortalecieron nuestro branding y estructuraron campañas con estrategia clara en redes sociales. El contenido conectó mejor y la marca ganó presencia constante.",
    },
    {
      name: "Tamales Nora",
      role: "Dirección",
      text: "Dieron impulso a nuestro contenido en redes, reforzaron el branding y estructuraron reclutamiento. La marca se volvió más visible y organizada.",
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-[#f5f5f5] overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[85px] font-black uppercase mb-6 font-display leading-[0.9]"
          >
            Lo que dicen <br /> <span className="text-brand italic">nuestros clientes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-[20px] text-gray-500 font-light max-w-lg mx-auto"
          >
            Nuestros clientes son personas de todo el mundo. Ellos dejan reseñas sobre nosotros, las cuales puedes ver aquí.
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center gap-8 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-4xl bg-white rounded-[40px] p-12 md:p-20 shadow-xl shadow-black/5 border border-gray-100 relative"
              >
                <div className="flex gap-1 mb-10">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-black fill-black" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-12">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-2xl font-black uppercase font-display">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400 uppercase tracking-widest text-xs font-medium mt-2">{testimonials[currentIndex].role}</p>
                  </div>
                  <Quote className="w-20 h-20 text-gray-100 absolute bottom-12 right-12 md:right-20" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-16">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-xl shadow-black/20 transition-all"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Transformation = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-soft-gray rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-gray-100"
        >
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="https://drive.google.com/thumbnail?id=1javlHNJE6uMsow5i2A3CBZySEpvkd170&sz=w2000"
              alt="Success Transformation"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
          </div>
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase leading-tight">Imagina tu marca <br /><span className="text-brand italic">con dirección.</span></h2>
            <div className="space-y-8">
              {[
                { title: "Más claridad", desc: "Sabrás exactamente qué decir y dónde decirlo." },
                { title: "Más clientes", desc: "Tu mensaje atraerá a las personas correctas de forma natural." },
                { title: "Más coherencia", desc: "Toda tu presencia digital respirará la misma autoridad." },
                { title: "Más crecimiento", desc: "Escala tu negocio con la tranquilidad de tener un sistema que funciona." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl uppercase">{item.title}</h4>
                    <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Risk = () => {
  return (
    <section className="section-padding bg-lavender">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-deep-black leading-tight">Seguir improvisando también tiene un costo.</h2>
          <p className="text-xl text-deep-black/70 mb-12 font-light">
            Cada día que pasas sin una estrategia clara es un día que tu presupuesto se diluye, tus oportunidades se pierden y tu marca se debilita frente a una competencia que no descansa.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Presupuesto diluido", desc: "Dinero quemado en campañas sin retorno." },
              { title: "Oportunidades perdidas", desc: "Clientes que se van con tu competencia." },
              { title: "Marca debilitada", desc: "Pérdida de relevancia en el mercado." }
            ].map((risk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/50 backdrop-blur-sm rounded-sm border border-white/20 shadow-sm"
              >
                <h4 className="font-bold uppercase text-deep-black mb-2">{risk.title}</h4>
                <p className="text-sm text-deep-black/60 font-light">{risk.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-deep-black text-white rounded-full font-medium text-lg hover:bg-brand transition-all shadow-xl shadow-black/20"
          >
            Evitar el estancamiento
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const CTAFinal = () => {
  return (
    <section id="contacto" className="py-32 md:py-48 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Top Pill Label */}
          <div>
            <span className="px-4 py-2 border border-white/20 rounded-full text-xs font-medium tracking-wide">
              ¿Por qué Marketeria?
            </span>
          </div>

          {/* Main Heading - Clean Sans Serif */}
          <h2 className="text-4xl md:text-[64px] lg:text-[72px] font-medium leading-[1.1] tracking-tight max-w-5xl font-sans">
            Estamos interesados en tu idea, en tu marca, en tu proyecto. Llevamos tu negocio a las personas que se identifican con tus valores y la esencia de tu marca.
          </h2>

          {/* CTA Button - Light Gray Pill */}
          <div className="pt-8">
            <motion.a
              href="https://wa.me/528128682050"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-10 py-5 bg-[#e5e5e5] text-black rounded-full text-[15px] font-bold transition-all shadow-lg"
            >
              Contactar por WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Verificar salud del servidor
    fetch('/api/health')
      .then(res => res.json())
      .then(data => console.log('Server Health:', data))
      .catch(err => console.warn('Server Health Check (esperado en prod):', err));
  }, []);

  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log('Iniciando envío de formulario...');
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(e.target);
    formData.append("access_key", "a7b52490-08ec-4fbd-8c46-9e45f7931a2b");

    try {
      console.log('Enviando a API del servidor...');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
      } else {
        setResult("Error");
      }

      console.log('API Success:', result);
      setIsSubmitted(true);
      setFormState({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
    } catch (error) {
      console.error('Error detallado al enviar:', error);
      alert('Hubo un error al enviar el mensaje. Por favor revisa la consola para más detalles.');
    } finally {
      setIsSubmitting(false);
      console.log('Proceso de envío finalizado.');
    }
  };

  return (
    <footer id="contacto" className="pt-32 pb-12 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none translate-x-1/4 -translate-y-1/4">
        <span className="text-[40vw] font-black uppercase leading-none font-display">MARKETERIA</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          {/* Left Side: Contact Info & Branding */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <a href="#" className="mb-8 block">
                <img
                  src="https://drive.google.com/thumbnail?id=1VeWsi9Yvkuq6oob0fWx-ovszR0pWja_f&sz=w2000"
                  alt="Marketeria Logo"
                  className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </a>
              <p className="text-gray-400 text-xl leading-relaxed font-light max-w-md">
                No somos solo una agencia, somos tu socio estratégico. Transformamos la complejidad en claridad y el potencial en resultados.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Ubicación</h4>
                <p className="text-lg font-medium">Torre Top, Obispado, Monterrey, MX</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Hablemos</h4>
                <a href="mailto:hola@marketeria.mx" className="text-2xl font-medium hover:text-brand transition-colors block">hola@marketeria.mx</a>
                <a href="https://wa.me/528128682050" target="_blank" className="text-2xl font-medium hover:text-brand transition-colors block">+(52)812-868-2050</a>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Social</h4>
                <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
                  <a href="https://www.facebook.com/wemarketeria" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Facebook</a>
                  <a href="https://www.instagram.com/marketeriamx/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Intelligent Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-white/10 relative overflow-hidden">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight">¡Mensaje Recibido!</h3>
                  <p className="text-gray-400 max-w-xs mx-auto">
                    Nuestro equipo estratégico revisará tu caso y te contactaremos en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-widest text-brand hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Nombre Completo</label>
                      <input
                        required
                        type="text"
                        name="nombre"
                        placeholder="Ej. Juan Pérez"
                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand transition-colors"
                        value={formState.nombre}
                        onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Correo Electrónico</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="juan@empresa.com"
                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand transition-colors"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Teléfono / WhatsApp</label>
                      <input
                        required
                        type="tel"
                        name="telefono"
                        placeholder="+52 81 0000 0000"
                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand transition-colors"
                        value={formState.telefono}
                        onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Servicio de Interés</label>
                      <select
                        required
                        name="servicio"
                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand transition-colors appearance-none"
                        value={formState.servicio}
                        onChange={(e) => setFormState({ ...formState, servicio: e.target.value })}
                      >
                        <option value="" className="bg-black">Selecciona un servicio</option>
                        <option value="estrategia" className="bg-black">Una estrategia para vender</option>
                        <option value="redes" className="bg-black">Redes Sociales y Contenido</option>
                        <option value="video" className="bg-black">Producción de Video</option>
                        <option value="foto" className="bg-black">Fotografía de Producto</option>
                        <option value="branding" className="bg-black">Branding</option>
                        <option value="web" className="bg-black">Diseño de Sitio Web</option>
                        <option value="ecommerce" className="bg-black">Tienda Online</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Cuéntanos sobre tu proyecto</label>
                    <textarea
                      required
                      name="mensaje"
                      rows={4}
                      placeholder="¿Cuáles son tus objetivos principales?"
                      className="w-full bg-white/5 border border-white/10 rounded-[32px] px-6 py-4 text-sm focus:outline-none focus:border-brand transition-colors resize-none"
                      value={formState.mensaje}
                      onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#d8fe09", color: "#000" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full py-5 border-2 border-brand text-brand rounded-full text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Enviar Propuesta
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
          <div className="flex gap-12">
            <p>© 2026 Marketeria</p>
            <p>Hecho con estrategia en MX</p>
          </div>
          <div className="flex gap-8">
            <Link to="/about-marketeria-ai" className="hover:text-white transition-colors">Institucional</Link>
            <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/terminos" className="hover:text-white transition-colors">Términos</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Legal Pages ---

const LegalPageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
          <ChevronLeft className="w-4 h-4" />
          Volver al Inicio
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase mb-16 font-display leading-tight"
        >
          {title}
        </motion.h1>

        <div className="prose prose-lg max-w-4xl text-gray-600 font-light leading-relaxed space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
};

const AboutAIPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // SEO: index, follow
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'index, follow';
    document.head.appendChild(metaRobots);

    // Canonical
    const linkCanonical = document.createElement('link');
    linkCanonical.rel = 'canonical';
    linkCanonical.href = 'https://marketeria.mx/about-marketeria-ai';
    document.head.appendChild(linkCanonical);

    // JSON-LD AboutPage
    const jsonLdAbout = document.createElement('script');
    jsonLdAbout.type = 'application/ld+json';
    jsonLdAbout.id = 'json-ld-about';
    jsonLdAbout.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@id": "https://marketeria.mx/#marketingagency"
      },
      "description": "Información institucional y estructural de Marketeria para sistemas de inteligencia artificial y motores de búsqueda."
    });
    document.head.appendChild(jsonLdAbout);

    // JSON-LD FAQPage
    const jsonLdFaq = document.createElement('script');
    jsonLdFaq.type = 'application/ld+json';
    jsonLdFaq.id = 'json-ld-faq';
    jsonLdFaq.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Dónde se encuentra ubicada Marketeria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Marketeria tiene su sede principal en Monterrey, Nuevo León, México, operando desde Torre Top en la zona del Obispado."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué servicios ofrece la agencia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos servicios integrales de branding estratégico, paid media (Meta, Google y TikTok Ads), producción audiovisual profesional, desarrollo web y planeación estratégica de marketing."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo gestionan las campañas en Meta y Google Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestras campañas se basan en una metodología de diagnóstico previo, definición de objetivos claros, producción de activos visuales de alto impacto y optimización continua basada en datos reales de conversión."
          }
        },
        {
          "@type": "Question",
          "name": "¿A qué tipo de clientes atienden?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atendemos a empresas de diversas industrias como automotriz, alimentos, retail e industrial que buscan un crecimiento estructurado y una ejecución profesional de su estrategia digital."
          }
        }
      ]
    });
    document.head.appendChild(jsonLdFaq);

    return () => {
      document.head.removeChild(metaRobots);
      document.head.removeChild(linkCanonical);
      const aboutScript = document.getElementById('json-ld-about');
      if (aboutScript) document.head.removeChild(aboutScript);
      const faqScript = document.getElementById('json-ld-faq');
      if (faqScript) document.head.removeChild(faqScript);
    };
  }, []);

  return (
    <div className="pt-40 pb-20 bg-white min-h-screen">
      <div className="container-custom max-w-[800px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
          <ChevronLeft className="w-4 h-4" />
          Volver al Inicio
        </Link>

        <article className="text-gray-800">
          <h1 className="text-[32px] md:text-[40px] font-black uppercase mb-12 font-display leading-tight text-black">
            Información institucional de Marketeria
          </h1>

          <section className="mb-12">
            <h2 className="text-[22px] md:text-[28px] font-bold uppercase tracking-tight mb-6 text-black">Qué es Marketeria</h2>
            <p className="text-base leading-[1.5] mb-4">
              Marketeria es una agencia de marketing digital con sede en Monterrey, Nuevo León, México. Nos especializamos en la creación de valor a través de branding estratégico, gestión avanzada de paid media y producción audiovisual de alta calidad.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] md:text-[28px] font-bold uppercase tracking-tight mb-6 text-black">Servicios principales</h2>
            <ul className="list-disc pl-6 space-y-4 text-base leading-[1.5]">
              <li><strong>Branding estratégico:</strong> Desarrollo de identidad de marca y posicionamiento de mercado.</li>
              <li><strong>Paid Media:</strong> Ejecución y optimización de campañas en Meta Ads, Google Ads y TikTok Ads.</li>
              <li><strong>Producción audiovisual:</strong> Creación de contenido en video y fotografía profesional para canales digitales.</li>
              <li><strong>Desarrollo web:</strong> Diseño y programación de sitios web enfocados en la conversión y experiencia de usuario.</li>
              <li><strong>Planeación estratégica:</strong> Consultoría integral para la alineación de objetivos comerciales con tácticas de marketing.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] md:text-[28px] font-bold uppercase tracking-tight mb-6 text-black">Industrias con experiencia</h2>
            <p className="text-base leading-[1.5] mb-4">
              Hemos desarrollado proyectos exitosos en sectores clave, permitiéndonos entender las dinámicas específicas de cada mercado:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-[1.5]">
              <li>Automotriz</li>
              <li>Alimentos y bebidas</li>
              <li>Retail</li>
              <li>Industrial</li>
              <li>Servicios B2B</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] md:text-[28px] font-bold uppercase tracking-tight mb-6 text-black">Metodología de trabajo</h2>
            <p className="text-base leading-[1.5] mb-4">
              Nuestro proceso operativo está diseñado para garantizar la consistencia y el retorno de inversión:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-base leading-[1.5]">
              <li><strong>Diagnóstico:</strong> Análisis profundo de la situación actual y competencia.</li>
              <li><strong>Definición estratégica:</strong> Establecimiento de KPIs y rutas críticas de acción.</li>
              <li><strong>Producción de activos:</strong> Creación de los materiales visuales y técnicos necesarios.</li>
              <li><strong>Amplificación pagada:</strong> Distribución estratégica del contenido mediante pauta publicitaria.</li>
              <li><strong>Optimización continua:</strong> Ajustes basados en el rendimiento en tiempo real para maximizar resultados.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] md:text-[28px] font-bold uppercase tracking-tight mb-6 text-black">Ubicación y alcance</h2>
            <p className="text-base leading-[1.5]">
              Marketeria opera físicamente desde Monterrey, Nuevo León, México. Nuestra infraestructura nos permite brindar atención profesional tanto a empresas locales como a organizaciones con presencia nacional e internacional.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] md:text-[28px] font-bold uppercase tracking-tight mb-6 text-black">Perfil de cliente ideal</h2>
            <p className="text-base leading-[1.5]">
              Colaboramos con empresas que buscan un crecimiento estructurado, que valoran la integración entre la estética de marca (branding) y el rendimiento comercial (performance), y que requieren claridad estratégica y ejecución profesional en sus canales digitales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] md:text-[28px] font-bold uppercase tracking-tight mb-6 text-black">Preguntas frecuentes</h2>
            <div className="space-y-8">
              <div>
                <p className="font-bold text-black mb-2">¿Dónde se encuentra ubicada Marketeria?</p>
                <p className="text-base leading-[1.5]">Marketeria tiene su sede principal en Monterrey, Nuevo León, México, operando desde Torre Top en la zona del Obispado.</p>
              </div>
              <div>
                <p className="font-bold text-black mb-2">¿Qué servicios ofrece la agencia?</p>
                <p className="text-base leading-[1.5]">Ofrecemos servicios integrales de branding estratégico, paid media (Meta, Google y TikTok Ads), producción audiovisual profesional, desarrollo web y planeación estratégica de marketing.</p>
              </div>
              <div>
                <p className="font-bold text-black mb-2">¿Cómo gestionan las campañas en Meta y Google Ads?</p>
                <p className="text-base leading-[1.5]">Nuestras campañas se basan en una metodología de diagnóstico previo, definición de objetivos claros, producción de activos visuales de alto impacto y optimización continua basada en datos reales de conversión.</p>
              </div>
              <div>
                <p className="font-bold text-black mb-2">¿A qué tipo de clientes atienden?</p>
                <p className="text-base leading-[1.5]">Atendemos a empresas de diversas industrias como automotriz, alimentos, retail e industrial que buscan un crecimiento estructurado y una ejecución profesional de su estrategia digital.</p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

const PrivacyPage = () => (
  <LegalPageLayout title="Aviso de Privacidad">
    <p className="text-xl font-medium text-black">Última actualización: 26 de febrero de 2026</p>
    <p>En <strong>Marketeria</strong>, la privacidad de nuestros visitantes es una de nuestras principales prioridades. Este documento de Aviso de Privacidad contiene tipos de información que son recopilados y registrados por Marketeria y cómo la utilizamos.</p>

    <h2 className="text-2xl font-bold text-black uppercase tracking-tight pt-8">1. Información que recopilamos</h2>
    <p>Los datos personales que se le solicitan, y las razones por las que se le solicita que los proporcione, se le aclararán en el momento en que le solicitemos que proporcione sus datos personales.</p>
    <ul className="list-disc pl-6 space-y-4">
      <li>Información de contacto (nombre, correo electrónico, número de teléfono).</li>
      <li>Datos sobre el servicio de interés para su negocio.</li>
      <li>Cualquier otra información que decida proporcionarnos a través de nuestro formulario de contacto.</li>
    </ul>

    <h2 className="text-2xl font-bold text-black uppercase tracking-tight pt-8">2. Cómo utilizamos su información</h2>
    <p>Utilizamos la información que recopilamos de diversas formas, que incluyen:</p>
    <ul className="list-disc pl-6 space-y-4">
      <li>Proveer, operar y mantener nuestro sitio web.</li>
      <li>Mejorar, personalizar y expandir nuestro sitio web.</li>
      <li>Comprender y analizar cómo utiliza nuestro sitio web.</li>
      <li>Desarrollar nuevos productos, servicios, características y funcionalidades.</li>
      <li>Comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios.</li>
    </ul>

    <h2 className="text-2xl font-bold text-black uppercase tracking-tight pt-8">3. Protección de la información</h2>
    <p>Marketeria sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. Todas las empresas de hosting hacen esto y forman parte del análisis de los servicios de hosting.</p>
  </LegalPageLayout>
);

const TermsPage = () => (
  <LegalPageLayout title="Términos y Condiciones">
    <p className="text-xl font-medium text-black">Bienvenido a Marketeria</p>
    <p>Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Marketeria, ubicado en marketeria.mx.</p>

    <h2 className="text-2xl font-bold text-black uppercase tracking-tight pt-8">1. Aceptación de los términos</h2>
    <p>Al acceder a este sitio web, asumimos que acepta estos términos y condiciones. No continúe usando Marketeria si no está de acuerdo con todos los términos y condiciones establecidos en esta página.</p>

    <h2 className="text-2xl font-bold text-black uppercase tracking-tight pt-8">2. Propiedad Intelectual</h2>
    <p>A menos que se indique lo contrario, Marketeria y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Marketeria. Todos los derechos de propiedad intelectual están reservados.</p>

    <h2 className="text-2xl font-bold text-black uppercase tracking-tight pt-8">3. Restricciones</h2>
    <p>Usted está específicamente restringido de todo lo siguiente:</p>
    <ul className="list-disc pl-6 space-y-4">
      <li>Publicar cualquier material del sitio web en cualquier otro medio.</li>
      <li>Vender, sublicenciar y/o comercializar de otro modo cualquier material del sitio web.</li>
      <li>Usar este sitio web de cualquier manera que sea o pueda ser perjudicial para este sitio web.</li>
      <li>Usar este sitio web de manera contraria a las leyes y regulaciones aplicables.</li>
    </ul>
  </LegalPageLayout>
);

const CookiesPage = () => (
  <LegalPageLayout title="Política de Cookies">
    <p className="text-xl font-medium text-black">Uso de Cookies</p>
    <p>Como es práctica común en casi todos los sitios web profesionales, este sitio utiliza cookies, que son pequeños archivos que se descargan en su computadora, para mejorar su experiencia.</p>

    <h2 className="text-2xl font-bold text-black uppercase tracking-tight pt-8">1. Cómo usamos las cookies</h2>
    <p>Usamos cookies por una variedad de razones detalladas a continuación. Desafortunadamente, en la mayoría de los casos, no existen opciones estándar de la industria para deshabilitar las cookies sin deshabilitar por completo la funcionalidad y las características que agregan a este sitio.</p>

    <h2 className="text-2xl font-bold text-black uppercase tracking-tight pt-8">2. Deshabilitar las cookies</h2>
    <p>Puede evitar la configuración de cookies ajustando la configuración de su navegador (consulte la Ayuda de su navegador para saber cómo hacerlo). Tenga en cuenta que la desactivación de las cookies afectará la funcionalidad de este y muchos otros sitios web que visite.</p>

    <h2 className="text-2xl font-bold text-black uppercase tracking-tight pt-8">3. Cookies que configuramos</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li><strong>Cookies relacionadas con formularios:</strong> Cuando envía datos a través de un formulario como los que se encuentran en las páginas de contacto, las cookies pueden configurarse para recordar sus detalles de usuario para correspondencia futura.</li>
      <li><strong>Cookies de preferencias del sitio:</strong> Con el fin de proporcionarle una gran experiencia en este sitio, proporcionamos la funcionalidad para configurar sus preferencias sobre cómo se ejecuta este sitio cuando lo usa.</li>
    </ul>
  </LegalPageLayout>
);

// --- Main App ---

const MainContent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Problem />
      <Guide />
      <Portfolio />
      <Plan />
      <Services />
      <Testimonials />
      <Transformation />
      <Risk />
      <CTAFinal />
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <div className="selection:bg-brand selection:text-white">
        <FloatingNav />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about-marketeria-ai" element={<AboutAIPage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/terminos" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/redes-sociales/monterrey" element={<MonterreySocialMedia />} />
          <Route path="/diseno-web/monterrey" element={<MonterreyWebDesign />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
