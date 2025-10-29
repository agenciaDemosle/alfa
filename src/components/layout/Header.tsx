import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { useUIStore } from '@/lib/store/uiStore'
import { trackNavClick } from '@/lib/utils/tracking'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre Nosotros', path: '/sobre-nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Contacto', path: '/contacto' },
]

export default function Header() {
  const location = useLocation()
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore()

  const handleNavClick = (label: string) => {
    trackNavClick(label, 'header')
    closeMobileMenu()
  }

  const handleContactClick = () => {
    trackNavClick('Contacto', 'header_cta')
    closeMobileMenu()
  }

  return (
    <>
    <header className="sticky top-0 z-50 bg-premium-black/95 backdrop-blur-md border-b border-premium-blue/20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick('Logo')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/images/Logo.png"
              alt="Piscinas Alfa y Soluciones"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform hover:scale-105"
              loading="eager"
              fetchPriority="high"
              style={{ filter: 'contrast(1.1) brightness(1.05)' }}
            />
            <div className="hidden lg:block">
              <div className="text-lg font-bold text-white group-hover:text-premium-blue transition-colors">
                Piscinas Alfa
              </div>
              <div className="text-xs text-premium-blue">
                y Soluciones
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.label)}
                className={cn(
                  'text-gray-300 hover:text-premium-blue transition-colors font-medium relative group',
                  location.pathname === link.path && 'text-premium-blue'
                )}
              >
                {link.label}
                <span className={cn(
                  'absolute bottom-0 left-0 w-0 h-0.5 bg-premium-blue transition-all group-hover:w-full',
                  location.pathname === link.path && 'w-full'
                )}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+56912345678"
              className="flex items-center gap-2 text-gray-300 hover:text-premium-blue transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-medium hidden lg:inline">+56 9 1234 5678</span>
            </a>
            <Link
              to="/contacto"
              onClick={handleContactClick}
              className="inline-flex px-6 py-2.5 bg-premium-blue text-premium-black rounded-lg hover:bg-premium-blue-light transition-all font-semibold shadow-lg shadow-premium-blue/20"
            >
              Cotizar Proyecto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 -mr-3 text-gray-300 hover:text-premium-blue transition-colors relative touch-manipulation active:scale-95"
            style={{ zIndex: 10000 }}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Sidebar Menu - Outside header to avoid z-index issues */}
    {isMobileMenuOpen && (
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70"
          onClick={closeMobileMenu}
          style={{
            zIndex: 9998,
            animation: 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: 'blur(8px)'
          }}
        ></div>

        {/* Sidebar Menu */}
        <div
          className="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] menu-glass border-l-2 border-premium-blue/30 overflow-y-auto shadow-2xl"
          style={{
            zIndex: 9999,
            animation: 'slideInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: '-25px 0 50px -12px rgba(11, 201, 245, 0.25)'
          }}
        >
            <div className="p-6">
              {/* Close Button & Logo */}
              <div className="flex justify-between items-center mb-8">
                <img
                  src="/images/Logo.png"
                  alt="Logo"
                  className="h-16 w-auto object-contain"
                  loading="eager"
                  style={{
                    animation: 'menuItemFadeIn 0.4s ease-out 0.1s both',
                    filter: 'contrast(1.1) brightness(1.05)'
                  }}
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-3 -mr-3 text-gray-300 hover:text-premium-blue transition-all duration-300 hover:rotate-90 touch-manipulation active:scale-95"
                  aria-label="Cerrar menú"
                  style={{ animation: 'menuItemFadeIn 0.4s ease-out 0.1s both' }}
                >
                  <X size={28} />
                </button>
              </div>

              {/* Decorative line */}
              <div className="h-1 w-16 bg-gradient-to-r from-premium-blue to-premium-blue-light rounded-full mb-8 opacity-80"
                style={{ animation: 'menuItemFadeIn 0.4s ease-out 0.15s both' }}
              ></div>

              {/* Navigation Links */}
              <nav className="space-y-2 mb-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleNavClick(link.label)}
                    className={cn(
                      'block px-5 py-4 text-gray-300 hover:bg-premium-blue/10 hover:text-premium-blue rounded-xl transition-all duration-300 font-medium touch-manipulation active:scale-[0.97] relative overflow-hidden group',
                      location.pathname === link.path && 'bg-premium-blue/20 text-premium-blue shadow-lg shadow-premium-blue/20 border-l-4 border-premium-blue'
                    )}
                    style={{
                      animation: `menuItemFadeIn 0.4s ease-out ${0.2 + index * 0.08}s both`
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {link.label}
                      <svg
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/0 via-premium-blue/10 to-premium-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </Link>
                ))}
              </nav>

              {/* Contact Info */}
              <div
                className="p-5 bg-premium-black/50 rounded-xl border border-premium-blue/30 mb-6 backdrop-blur-sm"
                style={{ animation: 'menuItemFadeIn 0.4s ease-out 0.5s both' }}
              >
                <a
                  href="tel:+56912345678"
                  className="flex items-center gap-3 text-gray-300 hover:text-premium-blue transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-full bg-premium-blue/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-premium-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Llámanos</div>
                    <div className="font-semibold">+56 9 1234 5678</div>
                  </div>
                </a>
              </div>

              {/* CTA Button */}
              <Link
                to="/contacto"
                onClick={handleContactClick}
                className="block px-6 py-4 bg-gradient-to-r from-premium-blue to-premium-blue-light text-premium-black text-center rounded-xl hover:shadow-2xl hover:shadow-premium-blue/50 transition-all duration-300 font-bold shadow-lg touch-manipulation active:scale-[0.97] hover:scale-[1.02] relative overflow-hidden group"
                style={{ animation: 'menuItemFadeIn 0.4s ease-out 0.6s both' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Cotizar Proyecto
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
