import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap, CheckCircle2, Globe, ShoppingBag, Layers, Target, X, Layout, Code } from 'lucide-react';

const MonterreyWebDesign = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        // SEO Settings
        document.title = "Diseño Web en Monterrey | Marketeria - Sitios Web de Alto Rendimiento";

        const metaDescription = document.querySelector('meta[name="description"]');
        const desc = 'Diseño y desarrollo web en Monterrey. Creamos sitios web rápidos, modernos y optimizados para convertir visitantes en clientes usando React y WordPress.';
        if (metaDescription) {
            metaDescription.setAttribute('content', desc);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = desc;
            document.head.appendChild(meta);
        }

        // Canonical
        const linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        linkCanonical.href = 'https://marketeria.mx/diseno-web/monterrey';
        document.head.appendChild(linkCanonical);

        // JSON-LD Schema
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'json-ld-web-design-mty';
        script.text = JSON.stringify([
            {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Diseño y Desarrollo Web",
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
                "description": "Servicios profesionales de diseño web, desarrollo en React y WordPress para empresas en Monterrey."
            },
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "¿Cuánto tarda desarrollar mi sitio?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Depende del proyecto, pero la mayoría de los sitios los entregamos en 3 a 5 semanas. Antes de arrancar, definimos contigo alcance, estructura y fechas. Sin sorpresas."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "¿Qué incluye el servicio?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Diseño, desarrollo, dominio y hosting del primer año. Entregamos un sitio listo para operar, conectado a tus canales de marketing."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "¿El dominio y hosting están incluidos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sí. El primer año corre por nuestra cuenta. A partir del segundo año te damos las opciones de renovación según tu plan."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "¿Qué pasa si necesito cambios después de la entrega?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Todos nuestros proyectos incluyen un periodo de ajustes post-entrega. Si necesitas cambios mayores después, los gestionamos como parte del servicio continuo."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "¿Ustedes se encargan del mantenimiento?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sí. Nosotros operamos y mantenemos el sitio. Tú te enfocas en tu negocio."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "¿El sitio funciona bien en celular?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Todos nuestros sitios están diseñados primero para móvil. Más del 70% del tráfico web hoy es desde teléfono."
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

    const services = [
        {
            title: "Landing Pages",
            desc: "Páginas de aterrizaje diseñadas con un solo objetivo: convertir visitantes en leads o ventas. Estructura optimizada y CTAs claros.",
            icon: <Target className="w-6 h-6" />
        },
        {
            title: "Páginas Corporativas",
            desc: "La cara digital de tu empresa. Diseño profesional que comunica autoridad, confianza y los valores de tu marca.",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "Sitios Multisección",
            desc: "Arquitecturas complejas para empresas con múltiples servicios o información detallada, manteniendo una navegación fluida.",
            icon: <Layers className="w-6 h-6" />
        },
        {
            title: "Tiendas en Línea",
            desc: "E-commerce robustos sobre Shopify para que vendas 24/7 con una experiencia de compra impecable y segura.",
            icon: <ShoppingBag className="w-6 h-6" />
        }
    ];

    const faqs = [
        { q: "¿Cuánto tarda desarrollar mi sitio?", a: "Depende del proyecto, pero la mayoría de los sitios los entregamos en 3 a 5 semanas. Antes de arrancar, definimos contigo alcance, estructura y fechas. Sin sorpresas." },
        { q: "¿Qué incluye el servicio?", a: "Diseño, desarrollo, dominio y hosting del primer año. Entregamos un sitio listo para operar, conectado a tus canales de marketing." },
        { q: "¿El dominio y hosting están incluidos?", a: "Sí. El primer año corre por nuestra cuenta. A partir del segundo año te damos las opciones de renovación según tu plan." },
        { q: "¿Qué pasa si necesito cambios después de la entrega?", a: "Todos nuestros proyectos incluyen un periodo de ajustes post-entrega. Si necesitas cambios mayores después, los gestionamos como parte del servicio continuo." },
        { q: "¿Ustedes se encargan del mantenimiento?", a: "Sí. Nosotros operamos y mantenemos el sitio. Tú te enfocas en tu negocio." },
        { q: "¿El sitio funciona bien en celular?", a: "Todos nuestros sitios están diseñados primero para móvil. Más del 70% del tráfico web hoy es desde teléfono." }
    ];

    return (
        <div className="bg-white" ref={containerRef}>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
                <div className="container-custom relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-block px-4 py-2 border border-brand/20 rounded-full text-brand text-xs font-bold uppercase tracking-widest mb-8 bg-brand/5">
                                Monterrey · Nuevo León
                            </span>
                            <h1 className="text-[45px] md:text-[90px] lg:text-[110px] font-black leading-[0.85] uppercase tracking-tighter mb-8 font-display">
                                Diseño Web <br />
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-xl mb-12 leading-relaxed">
                                Diseñamos y desarrollamos sitios web rápidos, modernos y optimizados para convertir visitantes en clientes reales.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <motion.a
                                    href="#contacto"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-black/10"
                                >
                                    Contactar ahora <ArrowRight className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    href="#portfolio"
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center justify-center gap-4 px-10 py-5 border border-black/10 hover:bg-soft-gray rounded-full font-bold uppercase tracking-widest text-sm transition-all"
                                >
                                    Ver ejemplos
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative aspect-square bg-brand/5 rounded-[60px] flex items-center justify-center overflow-hidden">
                                <img
                                    src="/agencia-de-diseno-web-marketeria.jpg"
                                    alt="Diseño Web Monterrey"
                                    className="w-[85%] h-[85%] object-cover rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
                                />
                                <div className="absolute top-10 right-10 p-6 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce">
                                    <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center">
                                        <Zap className="text-black w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Rendimiento</p>
                                        <p className="text-xl font-black font-display tracking-tight">100% FAST</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[35vw] font-black uppercase leading-none font-display">WEB</span>
                </div>
            </section>

            {/* Problems Section */}
            <section className="section-padding bg-deep-black text-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-cta" />
                                <span className="text-sm font-bold uppercase tracking-[0.3em] text-cta">El Problema</span>
                            </div>
                            <h2 className="text-4xl md:text-[70px] font-black uppercase leading-[0.9] tracking-tighter font-display">
                                ¿Tu sitio web <br />
                                <span className="text-gray-500 italic">trabaja para ti?</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                                Tener una página web no es suficiente. Si no está optimizada, es invisible.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 border border-white/10 rounded-[32px] bg-white/5 backdrop-blur-sm"
                            >
                                <h3 className="text-xl font-bold uppercase mb-6 text-white font-display">No tienes sitio</h3>
                                <ul className="space-y-4 text-gray-400 font-light">
                                    <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /> No apareces en Google</li>
                                    <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /> Dependes de recomendaciones</li>
                                    <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /> Pierdes credibilidad</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cta shrink-0" /> <span className="text-white font-medium">Marketeria te pone en el mapa.</span></li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-8 border border-white/10 rounded-[32px] bg-white/5 backdrop-blur-sm"
                            >
                                <h3 className="text-xl font-bold uppercase mb-6 text-white font-display">Tienes uno malo</h3>
                                <ul className="space-y-4 text-gray-400 font-light">
                                    <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /> Diseño obsoleto</li>
                                    <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /> Carga muy lenta</li>
                                    <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /> No genera leads</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cta shrink-0" /> <span className="text-white font-medium">Marketeria lo optimiza al 100%.</span></li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black uppercase mb-6 font-display">Servicios <br /> <span className="text-brand">Digitales</span></h2>
                        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">Soluciones web diseñadas para cada etapa de tu negocio en Monterrey.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="w-14 h-14 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mb-10">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold uppercase mb-4 font-display">{service.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Choice Section */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-12 mb-20">
                            <h2 className="text-5xl md:text-8xl font-black uppercase leading-none font-display text-center mb-6">
                                Toda la <span className="text-brand">Tecnología</span> para tu visión
                            </h2>
                            <p className="text-xl text-gray-500 font-light text-center max-w-3xl mx-auto">
                                Desarrollamos bajo los estándares más altos de la industria. Tú eliges la plataforma según tus necesidades y presupuesto.
                            </p>
                        </div>

                        {/* WordPress */}
                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-12 rounded-[50px] bg-soft-gray border border-gray-100 h-full flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-[#21759b] rounded-full flex items-center justify-center text-white">
                                        <Layout className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-3xl font-black font-display uppercase">WordPress</h3>
                                </div>
                                <p className="text-xl text-gray-600 font-light mb-10 leading-relaxed">
                                    La plataforma más flexible del mundo. Construimos sitios con estructura profesional y diseño que convierte.
                                </p>
                                <ul className="space-y-4 mb-12 flex-grow">
                                    {["Diseño que refleja tu identidad con precisión", "Integración con tus herramientas de marketing", "Sitio que escala con tu negocio", "Construido para generar resultados"].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-500 font-medium tracking-tight">
                                            <CheckCircle2 className="w-5 h-5 text-brand" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* React */}
                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-12 rounded-[50px] bg-deep-black text-white h-full flex flex-col relative overflow-hidden"
                            >
                                <div className="absolute top-8 right-8 px-4 py-1 bg-cta text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                    Premium
                                </div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-[#61dafb] rounded-full flex items-center justify-center text-black">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-3xl font-black font-display uppercase">React</h3>
                                </div>
                                <p className="text-xl text-gray-400 font-light mb-10 leading-relaxed">
                                    Desarrollo completamente a medida. Rendimiento extremo, escalabilidad ilimitada y la tecnología utilizada por los gigantes tecnológicos.
                                </p>
                                <ul className="space-y-4 mb-12 flex-grow">
                                    {["Velocidad de carga instantánea", "Sitios totalmente personalizados", "Escalabilidad empresarial", "Mejor experiencia técnica"].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300 font-medium tracking-tight">
                                            <CheckCircle2 className="w-5 h-5 text-cta" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-8 border-t border-white/10">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Usado por:</p>
                                    <div className="flex flex-wrap gap-6 opacity-40 grayscale brightness-200">
                                        {["Facebook", "Instagram", "Spotify", "Airbnb", "Uber"].map(brand => (
                                            <span key={brand} className="text-sm font-black italic">{brand}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Storytelling Visual Section - Apple Style */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Left: Text - Sticky on scroll */}
                        <div className="space-y-[30vh] pb-[10vh]">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                <h3 className="text-[50px] md:text-[80px] font-black leading-none uppercase font-display">Foco en la<br /><span className="text-cta bg-black px-4 py-2 inline-block">Conversión.</span></h3>
                                <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-md">
                                    Desde el primer banner hasta el pie de página, cada píxel está orientado a capturar la atención de tu cliente.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                <h3 className="text-[50px] md:text-[80px] font-black leading-none uppercase font-display">Pura <br /> <span className="italic font-light">Versatilidad.</span></h3>
                                <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-md">
                                    Ya sea un sitio corporativo, un landing page o una tienda, el resultado es siempre premium.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right: Mockups - Revealed with scroll */}
                        <div className="relative sticky top-32 h-[80vh] flex items-center justify-center">
                            <motion.div
                                style={{
                                    scale: useTransform(scrollYProgress, [0.4, 0.6, 1], [0.8, 1, 0.9]),
                                    opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.9], [0, 1, 0.8]),
                                    y: useTransform(scrollYProgress, [0.4, 0.7, 1], [100, 0, -50])
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-full h-full bg-soft-gray rounded-[60px] shadow-2xl overflow-hidden border border-gray-100 p-8 flex flex-col gap-6">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-grow-400" />
                                    </div>
                                    <img
                                        src="/pagina-web-tablet-marketeria.jpg"
                                        alt="Sitio Corporativo"
                                        className="w-full h-full object-cover rounded-2xl shadow-inner shadow-black/5"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                style={{
                                    scale: useTransform(scrollYProgress, [0.6, 0.8, 1], [0.8, 1, 1]),
                                    opacity: useTransform(scrollYProgress, [0.6, 0.75, 1], [0, 1, 1]),
                                    x: useTransform(scrollYProgress, [0.6, 0.8, 1], [200, 0, 0]),
                                    rotate: useTransform(scrollYProgress, [0.6, 0.8, 1], [10, 0, 0])
                                }}
                                className="absolute w-[80%] h-[70%] bg-white rounded-[50px] shadow-2xl overflow-hidden border border-gray-100 p-6 flex flex-col gap-4 translate-x-20 z-20"
                            >
                                <img
                                    src="https://picsum.photos/seed/mockup2/800/1200"
                                    alt="Landing Page"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </motion.div>

                            <motion.div
                                style={{
                                    scale: useTransform(scrollYProgress, [0.8, 0.95, 1], [0.8, 1, 1]),
                                    opacity: useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]),
                                    x: useTransform(scrollYProgress, [0.8, 0.95, 1], [-200, 0, 0]),
                                    rotate: useTransform(scrollYProgress, [0.8, 0.95, 1], [-5, 0, 0])
                                }}
                                className="absolute w-[40%] h-[60%] bg-deep-black rounded-[40px] shadow-2xl overflow-hidden border border-white/10 p-4 -translate-x-40 z-30"
                            >
                                <img
                                    src="https://picsum.photos/seed/mockup3/800/1200"
                                    alt="Mobile View"
                                    className="w-full h-full object-cover rounded-[30px]"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="section-padding bg-soft-gray overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <h2 className="text-5xl md:text-8xl font-black uppercase font-display leading-[0.85]">
                            Algunos <br /> <span className="text-brand">Proyectos.</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-light max-w-xs">Proyectos donde la tecnología y el diseño se encuentran.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: "E-COMMERCE", tag: "Shopify", img: "/tienda-en-linea-mexer.jpg", color: "bg-blue-50" },
                            { title: "Landing Page Inmobiliaria", tag: "WordPress", img: "/diseno-web-landing-inmobiliario.jpg", color: "bg-orange-50" },
                            { title: "Sitio Web Industrial", tag: "Wordpress", img: "/diseno-web-industrial.jpg", color: "bg-gray-100" },
                            { title: "Restaurant", tag: "Wordpress", img: "/diseno-web-alimentos.jpg", color: "bg-red-50" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group cursor-pointer"
                            >
                                <div className={`aspect-[16/10] ${item.color} rounded-[50px] overflow-hidden mb-8 relative border border-gray-100`}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="px-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">{item.tag}</span>
                                    <h3 className="text-3xl font-black uppercase font-display">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                            Algunos de nuestros <span className="text-brand">clientes</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-[20px] text-gray-500 max-w-xs font-light leading-relaxed"
                        >
                            Creamos experiencias digitales fluidas con planificación experta y tecnología inteligente.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Pollo Matón", url: "https://drive.google.com/thumbnail?id=1XMRDOo2O7ahNKSXtUuCu-Qod2d2m12xj&sz=w2000" },
                            { name: "Helados Sultana", url: "https://drive.google.com/thumbnail?id=1-vasDd_WhV1vKtqFGDQNTRzlxSWJF77x&sz=w2000" },
                            { name: "BAIC", url: "https://drive.google.com/thumbnail?id=1mXH7veON3AmfcnC08j_kDD5VE9-fjgdD&sz=w2000" },
                            { name: "Changan Refran", url: "https://drive.google.com/thumbnail?id=1KAI5FDcc_iQUsZGarHlSawI92cPsGp4R&sz=w2000" },
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
                                    className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
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
            <section className="section-padding bg-soft-gray">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-black uppercase font-display mb-16 text-center">Preguntas <span className="text-brand">Frecuentes</span></h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-gray-200">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full py-8 flex items-center justify-between text-left group"
                                >
                                    <span className={`text-xl md:text-2xl font-bold uppercase transition-colors ${activeIndex === i ? 'text-brand' : 'text-black group-hover:text-brand'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? 'bg-brand text-white rotate-45' : 'bg-white text-black border border-gray-100'}`}>
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
                        <h2 className="text-4xl md:text-[100px] font-black uppercase mb-10 leading-[0.85] font-display">
                            ¿Hacemos algo <br /> <span className="text-brand"><br />increíble?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-2xl mx-auto">
                            Solicita hoy un diagnóstico gratuito de tu sitio web o proyecto digital en Monterrey.
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
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cta/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            </section>

            {/* Footer Disclaimer/Info for AI Compatibility */}
            <section className="py-12 bg-white border-t border-gray-100 hidden">
                <div className="container-custom text-[10px] text-gray-300">
                    Marketeria es un estudio especializado en diseño y desarrollo web en Monterrey, Nuevo León, México. Ayudamos a empresas a resolver problemas de visibilidad digital y conversión mediante tecnología React y WordPress. Operamos como agencia de marketing digital integral.
                </div>
            </section>
        </div>
    );
};

export default MonterreyWebDesign;
