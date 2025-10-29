import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { Mail, Phone, User, MessageSquare } from 'lucide-react'
import toast from 'react-hot-toast'
import SEO from '@/components/layout/SEO'
import { sendContactForm } from '@/lib/api/contact'
import { trackContactSubmit } from '@/lib/utils/tracking'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const mutation = useMutation({
    mutationFn: sendContactForm,
    onSuccess: () => {
      toast.success('¡Mensaje enviado exitosamente!')
      trackContactSubmit()
      reset()
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al enviar el mensaje. Intenta nuevamente.')
    },
  })

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data)
  }

  return (
    <>
      <SEO
        title="Contacto"
        description="Contáctanos para solicitar una cotización personalizada para tu proyecto de piscina. Piscinas Alfa y Soluciones."
        path="/contacto"
      />

      {/* Hero Section */}
      <section className="relative bg-premium-black text-white py-16 sm:py-20 md:py-32 overflow-hidden z-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/3.jpg"
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
              <span className="text-premium-blue text-sm font-medium">Contacto</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
              Hablemos de tu <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">proyecto</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos listos para transformar tu piscina en una obra de arte
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-premium-black py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Cotización <span className="text-premium-blue font-script text-4xl sm:text-5xl md:text-6xl">Gratuita</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas para discutir tu proyecto.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-premium-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-premium-blue" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Respuesta Rápida</h3>
                    <p className="text-gray-300">Te respondemos en menos de 24 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-premium-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-premium-blue" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Asesoría Personalizada</h3>
                    <p className="text-gray-300">Soluciones adaptadas a tus necesidades</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-premium-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-premium-blue" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Equipo Profesional</h3>
                    <p className="text-gray-300">Expertos con más de 10 años de experiencia</p>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/images/2.jpg"
                    alt="Piscina premium"
                    className="w-full h-40 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <img
                    src="/images/hero.jpg"
                    alt="Iluminación"
                    className="w-full h-40 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-premium-darkgray border border-premium-blue/30 rounded-2xl shadow-lg shadow-premium-blue/10 p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nombre <span className="text-premium-blue">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-3 bg-premium-black border border-premium-blue/30 text-white rounded-lg focus:ring-2 focus:ring-premium-blue focus:border-premium-blue transition-colors placeholder:text-gray-500 text-sm sm:text-base"
                      placeholder="Tu nombre"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-premium-blue">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email <span className="text-premium-blue">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-3 bg-premium-black border border-premium-blue/30 text-white rounded-lg focus:ring-2 focus:ring-premium-blue focus:border-premium-blue transition-colors placeholder:text-gray-500 text-sm sm:text-base"
                      placeholder="tu@email.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-premium-blue">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Teléfono (opcional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-3 bg-premium-black border border-premium-blue/30 text-white rounded-lg focus:ring-2 focus:ring-premium-blue focus:border-premium-blue transition-colors placeholder:text-gray-500 text-sm sm:text-base"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Mensaje <span className="text-premium-blue">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-500" />
                    </div>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={6}
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-3 bg-premium-black border border-premium-blue/30 text-white rounded-lg focus:ring-2 focus:ring-premium-blue focus:border-premium-blue transition-colors resize-none placeholder:text-gray-500 text-sm sm:text-base"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                  </div>
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-premium-blue">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-premium-blue text-premium-black py-3 sm:py-3.5 px-6 rounded-lg font-semibold hover:bg-premium-blue-light focus:ring-4 focus:ring-premium-blue/30 transition-all shadow-lg shadow-premium-blue/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {mutation.isPending ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
