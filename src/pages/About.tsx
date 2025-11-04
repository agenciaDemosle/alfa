import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Wrench } from 'lucide-react'
import { useState, useEffect } from 'react'
import SEO from '@/components/layout/SEO'

const stats = [
  { number: '10+', label: 'Años de experiencia' },
  { number: '500+', label: 'Proyectos completados' },
  { number: '100%', label: 'Clientes satisfechos' },
  { number: '15', label: 'Años de garantía' },
]

const values = [
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Utilizamos solo los mejores materiales como Marble Dust y Diamond Brite',
  },
  {
    icon: Users,
    title: 'Equipo Experto',
    description: 'Profesionales altamente capacitados con amplia experiencia técnica',
  },
  {
    icon: Wrench,
    title: 'Trabajo Meticuloso',
    description: 'Atención al detalle en cada etapa del proyecto',
  },
  {
    icon: CheckCircle,
    title: 'Garantía Total',
    description: 'Respaldamos cada proyecto con garantía que asegura tu inversión',
  },
]

const historyImages = [
  '/images/FB_IMG_1735595751854.jpg',
  '/images/FB_IMG_1735595769760.jpg',
  '/images/FB_IMG_1735595773226.jpg',
  '/images/FB_IMG_1735595790403.jpg',
  '/images/historia.jpeg',
  '/images/historia2.jpeg',
  '/images/historia3.jpeg',
  '/images/historia4.jpeg',
  '/images/historia5.jpeg',
  '/images/historia6.jpeg',
]

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === historyImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Cambiar imagen cada 4 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <SEO
        title="Sobre Nosotros"
        description="Piscinas Alfa y Soluciones - Especialistas en revestimiento, construcción, mantenimiento y remodelación de piscinas de hormigón con amplia experiencia técnica."
        path="/sobre-nosotros"
      />

      {/* Hero Section */}
      <section className="relative bg-premium-black text-white py-16 sm:py-20 md:py-32 overflow-hidden z-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/2.jpg"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/70 to-premium-black"></div>
        </div>
        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4 px-3 py-1 border border-premium-blue/30 rounded-full">
              <span className="text-premium-blue text-sm font-medium">Sobre Nosotros</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
              Expertos en <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">piscinas de lujo</span>
            </h1>
            <p className="text-xl text-gray-300">
              Transformando espacios acuáticos con calidad, innovación y durabilidad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-premium-darkgray py-12 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-premium-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-premium-black py-12 sm:py-16 md:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestra <span className="text-premium-blue">Historia</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Piscinas Alfa y Soluciones es una empresa especializada en el revestimiento,
                  construcción, mantenimiento y remodelación de piscinas de hormigón, con un
                  enfoque en la calidad, la innovación y la durabilidad.
                </p>
                <p>
                  Nos dedicamos a renovar y proteger superficies mediante revestimientos premium
                  como Marble Dust y Diamond Brite, productos reconocidos por su alta resistencia
                  y su elegante acabado, capaces de ofrecer entre 10 y 15 años de vida útil con una
                  apariencia brillante bajo el agua.
                </p>
                <p>
                  Nuestro equipo cuenta con amplia experiencia técnica, garantizando una ejecución
                  meticulosa en cada proyecto, desde la preparación de la piscina hasta los detalles
                  finales como instalaciones de equipos eléctricos, retornos, drenos, focos LED y
                  sistemas hidráulicos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Carrusel de imágenes de historia */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden border-2 border-premium-blue/30 shadow-2xl shadow-premium-blue/10">
                <div className="absolute inset-0">
                  {historyImages.map((image, index) => (
                    <div
                      key={image}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Nuestra historia ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  ))}
                </div>

                {/* Gradiente overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-premium-black/50 to-transparent z-20 pointer-events-none"></div>

                {/* Indicadores de puntos */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                  {historyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-premium-blue w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-premium-darkgray py-12 sm:py-16 md:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros <span className="text-premium-blue">Valores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lo que nos hace diferentes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-premium-black border border-premium-blue/30 rounded-lg p-6 hover:border-premium-blue transition-all"
              >
                <value.icon className="w-12 h-12 text-premium-blue mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-premium-black py-12 sm:py-16 md:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-premium-darkgray border-2 border-premium-blue/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-transparent"></div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Transformamos el agua en <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">experiencia</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Renovamos tus piscinas para que vuelvan a brillar con garantía de calidad premium
              </p>
              <button
                onClick={() => window.location.href = '/contacto'}
                className="inline-flex items-center gap-2 px-8 py-4 bg-premium-blue text-premium-black font-semibold rounded-lg hover:bg-premium-blue-light transition-all shadow-lg shadow-premium-blue/30 text-lg"
              >
                Contáctanos Ahora
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
