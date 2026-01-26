import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const navItems = [
  { label: 'Hizmetlerimiz', to: '/hizmetler' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'İletişim', to: '/iletisim' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-white/80 dark:bg-[#0f1629]/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={isDark ? "/antalya-kiralama-logo-light.png" : "/antalya-kiralama-logo.png"}
              alt="Antalya Kiralama"
              className="h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a855f7] dark:hover:text-[#a855f7] transition-colors"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a855f7] dark:hover:text-[#a855f7] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-300 ${activeDropdown === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white dark:bg-[#1a2744] rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-800 p-2 min-w-[220px]">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-[#a855f7] dark:hover:text-[#a855f7] hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              aria-label="Tema değiştir"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-white/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="bg-white dark:bg-[#0f1629] border-t border-gray-100 dark:border-gray-800 px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <>
                  <div className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white">
                    {item.label}
                  </div>
                  <div className="pl-4 space-y-1">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#a855f7]"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  className="block px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-[#a855f7]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
