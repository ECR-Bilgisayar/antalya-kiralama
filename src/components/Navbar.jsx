import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import logoLight from '../assets/logo-light.png'
import logoDark from '../assets/logo-dark.png'

// Mobil logo varsa ekleyin, yoksa aynı logoyu kullanın
// import logoMobile from '../assets/logo-mobile.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sıralama: Hizmetler önce, Hakkımızda sonra (İletişim CTA olacak)
  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-background/95 backdrop-blur-lg shadow-lg dark:shadow-primary/10'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            {/* Desktop Logo */}
            <motion.div
              className="hidden sm:flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={logoLight}
                alt="Antalya Kiralama"
                className="h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-lg dark:hidden"
              />
              <img
                src={logoDark}
                alt="Antalya Kiralama"
                className="h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-lg hidden dark:block"
              />
            </motion.div>

            {/* Mobile Logo */}
            <motion.div
              className="sm:hidden flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={logoLight}
                alt="Antalya Kiralama"
                className="h-10 w-auto object-contain drop-shadow-lg dark:hidden"
              />
              <img
                src={logoDark}
                alt="Antalya Kiralama"
                className="h-10 w-auto object-contain drop-shadow-lg hidden dark:block"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Links - Kayma Efektli */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-muted/80 backdrop-blur-sm rounded-full p-1 border border-border/50">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 gradient-primary rounded-full shadow-lg shadow-primary/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-200 border border-border/50"
              aria-label="Tema değiştir"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </motion.div>
            </motion.button>

            {/* İletişim CTA Button */}
            <Link to="/iletisim">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="relative overflow-hidden gradient-primary text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-primary/30 border border-white/20">
                  <span className="relative z-10 flex items-center gap-2">
                    İletişim
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted'
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 space-y-3">
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-5 h-5 text-yellow-500" />
                      <span className="text-foreground font-medium">Açık Mod</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-foreground" />
                      <span className="text-foreground font-medium">Koyu Mod</span>
                    </>
                  )}
                </button>

                {/* Mobile İletişim CTA */}
                <Link
                  to="/iletisim"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <button className="w-full gradient-primary text-white font-semibold py-3 rounded-xl shadow-lg shadow-primary/30">
                    İletişim
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
