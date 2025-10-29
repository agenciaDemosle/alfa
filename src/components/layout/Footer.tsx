import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'
import { trackNavClick } from '@/lib/utils/tracking'

const footerLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre Nosotros', path: '/sobre-nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Contacto', path: '/contacto' },
]

const services = [
  'Revestimiento Premium',
  'Remodelación Estructural',
  'Mosaicos Decorativos',
  'Sistemas Hidráulicos',
  'Iluminación LED',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (label: string) => {
    trackNavClick(label, 'footer')
  }

  return (
    <footer className="bg-premium-black border-t border-premium-blue/20 text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <img
              src="/images/Logo.png"
              alt="Piscinas Alfa"
              className="h-20 sm:h-24 lg:h-28 w-auto mb-4 object-contain transition-transform hover:scale-105"
              loading="lazy"
              style={{ filter: 'contrast(1.1) brightness(1.05)' }}
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Especialistas en revestimiento, construcción y mantenimiento de piscinas de hormigón premium.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/piscinasalfays?igsh=MTR2YXI2aWdxbmt1ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-premium-darkgray border border-premium-blue/30 rounded-lg flex items-center justify-center hover:bg-premium-blue hover:text-premium-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@piscinas.a.s?_t=ZM-90xJGgVXyCC&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-premium-darkgray border border-premium-blue/30 rounded-lg flex items-center justify-center hover:bg-premium-blue hover:text-premium-black transition-all"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/17h1As2VH8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-premium-darkgray border border-premium-blue/30 rounded-lg flex items-center justify-center hover:bg-premium-blue hover:text-premium-black transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/56939274117"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-premium-darkgray border border-premium-blue/30 rounded-lg flex items-center justify-center hover:bg-premium-blue hover:text-premium-black transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-premium-blue">Enlaces</h4>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick(link.label)}
                  className="block text-gray-400 hover:text-premium-blue transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  → {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-premium-blue">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  • {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-premium-blue">Contacto</h4>
            <div className="space-y-4">
              <a
                href="tel:+56939274117"
                className="flex items-start gap-3 text-gray-400 hover:text-premium-blue transition-colors text-sm group"
              >
                <Phone size={18} className="text-premium-blue mt-0.5 group-hover:scale-110 transition-transform" />
                <span>+56 9 3927 4117</span>
              </a>
              <a
                href="mailto:piscinasalfaysoluciones.48i@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-premium-blue transition-colors text-sm group"
              >
                <Mail size={18} className="text-premium-blue mt-0.5 group-hover:scale-110 transition-transform" />
                <span>piscinasalfaysoluciones.48i@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-premium-blue mt-0.5 flex-shrink-0" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-premium-blue/20 pt-6 sm:pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              &copy; {currentYear} Piscinas Alfa y Soluciones. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
