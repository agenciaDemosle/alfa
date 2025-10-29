import { motion } from 'framer-motion'
import SEO from '@/components/layout/SEO'
import { cn } from '@/lib/utils/cn'

const services = [
  {
    id: 'revestimiento',
    title: 'Revestimiento Premium',
    subtitle: 'Marble Dust y Diamond Brite',
    image: '/images/FB_IMG_1724246137065.jpg',
    description: 'Somos especialistas en renovar y proteger piscinas de hormigón mediante revestimientos de alta calidad que garantizan una superficie suave, duradera y con un color que permanece vibrante bajo el agua.',
    features: [
      'Retiro profesional de revestimiento antiguo',
      'Reparación de fisuras y nivelación',
      'Aplicación de puente de enlace',
      'Terminación uniforme premium',
      'Lavado químico y pulido final'
    ],
  },
  {
    id: 'remodelacion',
    title: 'Remodelación Estructural',
    subtitle: 'Renovación completa',
    image: '/images/FB_IMG_1724246150262.jpg',
    description: 'Renovamos piscinas dañadas o desgastadas por el tiempo. Reparamos grietas, refuerzos en muros, nivelaciones, ampliaciones y rediseños.',
    features: [
      'Reparación de grietas estructurales',
      'Refuerzo de muros',
      'Nivelaciones profesionales',
      'Ampliaciones y rediseños',
      'Recuperación total'
    ],
  },
  {
    id: 'mosaicos',
    title: 'Mosaicos Decorativos',
    subtitle: 'Elegancia y diseño',
    image: '/images/FB_IMG_1738549552585.jpg',
    description: 'Damos personalidad al borde de agua, escaleras y zonas destacadas. Los mosaicos aportan elegancia, resistencia y un plus visual que convierte cualquier piscina en una obra de diseño.',
    features: [
      'Mosaicos en borde de agua',
      'Diseños personalizados',
      'Escaleras decorativas',
      'Detalles únicos',
      'Alta resistencia'
    ],
  },
  {
    id: 'hidraulicos',
    title: 'Sistemas Hidráulicos',
    subtitle: 'Circulación perfecta',
    image: '/images/FB_IMG_1738549570361.jpg',
    description: 'Instalamos y mejoramos sistemas hidráulicos completos. Garantizamos una correcta circulación del agua para mayor eficiencia y mantenimiento sencillo.',
    features: [
      'Retornos optimizados',
      'Drenos de fondo',
      'Skimmer profesional',
      'Tuberías nuevas',
      'Conexiones certificadas'
    ],
  },
  {
    id: 'iluminacion',
    title: 'Iluminación LED',
    subtitle: 'Ambientes únicos',
    image: '/images/2.jpg',
    description: 'Instalación de focos LED de alta eficiencia, con control remoto y efectos de color para crear ambientes únicos, seguros y llenos de vida durante la noche.',
    features: [
      'LED de alta eficiencia',
      'Control remoto RGB',
      'Efectos de color',
      'Bajo consumo',
      'Instalación segura'
    ],
  },
  {
    id: 'fugas',
    title: 'Detección de Fugas',
    subtitle: 'Tecnología avanzada',
    image: '/images/3.jpg',
    description: 'Localizamos fugas con tecnología y experiencia. Reparamos al instante para asegurar que el revestimiento permanezca en óptimas condiciones.',
    features: [
      'Detección precisa',
      'Tecnología especializada',
      'Reparación inmediata',
      'Garantía de trabajo',
      'Sin daños adicionales'
    ],
  },
  {
    id: 'electricas',
    title: 'Instalaciones Eléctricas',
    subtitle: 'Certificadas y seguras',
    image: '/images/hero.jpg',
    description: 'Colocación de tableros eléctricos, protecciones y automatizaciones que cumplen con normas de seguridad para garantizar funcionamiento estable.',
    features: [
      'Tableros certificados',
      'Protecciones eléctricas',
      'Automatizaciones',
      'Normas de seguridad',
      'Tranquilidad garantizada'
    ],
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Servicios"
        description="Servicios de Piscinas Alfa y Soluciones: Revestimiento premium, remodelación, instalación de mosaicos, sistemas hidráulicos, iluminación LED, detección de fugas e instalaciones eléctricas."
        path="/servicios"
      />

      {/* Hero Section */}
      <section className="relative bg-premium-black text-white py-16 sm:py-20 md:py-32 overflow-hidden z-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/80 to-premium-black"></div>
        </div>
        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-3 py-1 border border-premium-blue/30 rounded-full">
              <span className="text-premium-blue text-sm font-medium">Servicios Premium</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
              Transformamos tu <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">piscina</span><br className="hidden sm:block" />
              <span className="sm:inline"> </span>en una obra de arte
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Servicios especializados con los más altos estándares de calidad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="bg-premium-black py-12 sm:py-16 md:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {services.map((service, index) => (
              <motion.section
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="scroll-mt-24"
              >
                <div className={cn(
                  "grid md:grid-cols-2 gap-8 items-center",
                  index % 2 === 1 && "md:grid-flow-dense"
                )}>
                  {/* Image */}
                  <div className={cn(
                    "relative h-[280px] sm:h-[350px] md:h-[500px] rounded-2xl overflow-hidden group",
                    index % 2 === 1 && "md:col-start-2"
                  )}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/40 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-premium-blue text-premium-black px-4 py-2 rounded-full font-bold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={cn(
                    "space-y-6",
                    index % 2 === 1 && "md:col-start-1 md:row-start-1"
                  )}>
                    <div>
                      <span className="text-premium-blue text-sm font-semibold uppercase tracking-wider">
                        {service.subtitle}
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-premium-blue rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => window.location.href = '/contacto'}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-premium-blue text-premium-black font-semibold rounded-lg hover:bg-premium-blue-light transition-all shadow-lg shadow-premium-blue/20"
                      >
                        Solicitar Cotización
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
