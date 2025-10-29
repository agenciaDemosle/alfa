import { motion } from 'framer-motion'
import { CheckCircle, Droplets, Wrench, Shield } from 'lucide-react'
import SEO from '@/components/layout/SEO'
import Button from '@/components/ui/Button'

const services = [
  {
    title: 'Revestimiento Premium',
    description: 'Marble Dust y Diamond Brite con 10-15 años de vida útil',
    icon: Droplets,
  },
  {
    title: 'Remodelación',
    description: 'Recuperación estructural y renovación completa',
    icon: Wrench,
  },
  {
    title: 'Mantenimiento',
    description: 'Instalaciones hidráulicas, eléctricas y detección de fugas',
    icon: Shield,
  },
]

const benefits = [
  'Materiales premium de alta durabilidad',
  'Garantía que respalda nuestra calidad',
  'Equipo técnico con amplia experiencia',
  'Ejecución meticulosa en cada proyecto',
]

export default function Home() {
  return (
    <>
      <SEO
        title="Inicio"
        description="Piscinas Alfa y Soluciones - Especialistas en revestimiento, construcción, mantenimiento y remodelación de piscinas de hormigón. Marble Dust y Diamond Brite."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative bg-premium-black text-white min-h-screen flex items-center overflow-hidden z-0">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-premium-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-premium-blue/10 border border-premium-blue/30 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-premium-blue rounded-full animate-pulse"></div>
              <span className="text-premium-blue font-medium text-sm">Piscinas Premium desde 2014</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Transformamos el agua en{' '}
              <span className="text-premium-blue relative font-script text-5xl sm:text-6xl md:text-8xl lg:text-9xl inline-block -mt-2">
                experiencia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed px-4"
            >
              Especialistas en revestimiento, construcción y remodelación de piscinas de hormigón con acabados de lujo y garantía de 15 años
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            >
              <Button
                to="/contacto"
                variant="primary"
                trackLabel="Contacto"
                trackLocation="hero"
                className="bg-premium-blue text-white hover:bg-premium-blue-light font-bold text-lg px-8 py-4 shadow-2xl shadow-premium-blue/30 hover:scale-105 transition-all"
              >
                Cotizar Proyecto
              </Button>
              <Button
                to="/servicios"
                variant="secondary"
                trackLabel="Servicios"
                trackLocation="hero"
                className="border-2 border-premium-blue text-premium-blue hover:bg-premium-blue hover:text-white font-bold text-lg px-8 py-4 transition-all"
              >
                Ver Servicios
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
            >
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-premium-blue mb-1">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Años Experiencia</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-premium-blue mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-400">Proyectos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-premium-blue mb-1">15</div>
                <div className="text-xs sm:text-sm text-gray-400">Años Garantía</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs uppercase tracking-wider">Descubre más</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-premium-darkgray">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-3 py-1 border border-premium-blue/30 rounded-full">
                <span className="text-premium-blue text-sm font-medium">Sobre Nosotros</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Expertos en <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">piscinas de lujo</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Piscinas Alfa y Soluciones es una empresa especializada en el revestimiento,
                construcción, mantenimiento y remodelación de piscinas de hormigón, con un
                enfoque en la calidad, la innovación y la durabilidad.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nos dedicamos a renovar y proteger superficies mediante revestimientos premium
                como Marble Dust y Diamond Brite, productos reconocidos por su alta resistencia
                y su elegante acabado.
              </p>
              <Button
                to="/sobre-nosotros"
                variant="primary"
                trackLabel="Sobre Nosotros"
                trackLocation="home_about"
                className="bg-premium-blue text-premium-black hover:bg-premium-blue-light font-semibold"
              >
                Leer más
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden border-2 border-premium-blue/30 shadow-2xl shadow-premium-blue/10"
            >
              <img
                src="/images/2.jpg"
                alt="Piscina renovada"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-premium-black">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 px-3 py-1 border border-premium-blue/30 rounded-full">
              <span className="text-premium-blue text-sm font-medium">Servicios</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Soluciones <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">Premium</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Servicios completos de alta gama para tu piscina
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-premium-darkgray border border-premium-blue/30 rounded-lg p-8 hover:border-premium-blue transition-all hover:shadow-xl hover:shadow-premium-blue/20"
              >
                <service.icon className="w-12 h-12 text-premium-blue mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              to="/servicios"
              variant="primary"
              trackLabel="Servicios"
              trackLocation="home_services"
              className="bg-premium-blue text-premium-black hover:bg-premium-blue-light font-semibold"
            >
              Ver Todos los Servicios
            </Button>
          </div>
        </div>
      </section>

      {/* Revestimientos Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-premium-darkgray">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 px-3 py-1 border border-premium-blue/30 rounded-full">
              <span className="text-premium-blue text-sm font-medium">Revestimientos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Elige el <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">revestimiento</span> perfecto
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos una amplia variedad de revestimientos premium de alta durabilidad y elegancia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="bg-premium-black border-2 border-premium-blue/30 rounded-xl p-6 hover:border-premium-blue transition-all">
                  <h3 className="text-2xl font-bold text-white mb-3">Marble Dust</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Acabado suave y elegante con partículas de mármol. Ideal para piscinas residenciales con un toque de sofisticación.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-premium-blue" />
                    <span className="text-gray-300">Vida útil: 10-12 años</span>
                  </div>
                </div>

                <div className="bg-premium-black border-2 border-premium-blue/30 rounded-xl p-6 hover:border-premium-blue transition-all">
                  <h3 className="text-2xl font-bold text-white mb-3">Diamond Brite</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Revestimiento premium con cristales de cuarzo que brindan un acabado brillante y ultra resistente.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-premium-blue" />
                    <span className="text-gray-300">Vida útil: 15+ años</span>
                  </div>
                </div>

                <div className="bg-premium-black border-2 border-premium-blue/30 rounded-xl p-6 hover:border-premium-blue transition-all">
                  <h3 className="text-2xl font-bold text-white mb-3">Revestimientos Personalizados</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Colores y texturas personalizadas para crear el diseño único que siempre soñaste.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  to="/contacto"
                  variant="primary"
                  trackLabel="Contacto Revestimientos"
                  trackLocation="home_revestimientos"
                  className="bg-premium-blue text-premium-black hover:bg-premium-blue-light font-semibold w-full md:w-auto"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/revestimientos.png"
                alt="Tipos de revestimientos para piscinas"
                className="w-full h-auto object-contain"
                loading="eager"
                fetchPriority="high"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
              <div className="mt-4 text-center">
                <p className="text-premium-blue font-semibold text-base sm:text-lg">
                  Más de 20 colores y texturas disponibles
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-12 sm:py-16 md:py-24 text-white overflow-hidden z-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-premium-black/80"></div>
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 px-3 py-1 border border-premium-blue/30 rounded-full">
              <span className="text-premium-blue text-sm font-medium">Beneficios</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">elegirnos</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Calidad, experiencia y garantía en cada proyecto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-premium-black border border-premium-blue/20 rounded-lg p-4"
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0 text-premium-blue mt-1" />
                <p className="text-lg text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-premium-black">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-premium-darkgray border-2 border-premium-blue/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-transparent"></div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para renovar tu <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">piscina</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy y recibe una cotización personalizada para tu proyecto de lujo
              </p>
              <Button
                to="/contacto"
                variant="primary"
                trackLabel="Contacto"
                trackLocation="home_cta"
                className="bg-premium-blue text-premium-black hover:bg-premium-blue-light font-semibold shadow-lg shadow-premium-blue/30"
              >
                Contactar Ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
