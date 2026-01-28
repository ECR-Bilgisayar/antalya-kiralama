import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import logoLight from '../assets/logo-light.png'
import logoDark from '../assets/logo-dark.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  const services = [
    { name: 'Bilgisayar Kiralama', path: '/hizmetler' },
    { name: 'Ses ve Görüntü Sistemleri', path: '/hizmetler' },
    { name: 'VR ve Oyun Kiralama', path: '/hizmetler' },
    { name: 'Network Kurulum', path: '/hizmetler' },
  ]

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={theme === 'dark' ? logoDark : logoLight}
                alt="Antalya Kiralama"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              2014'den bu yana teknoloji ve ses görüntü kiralama sistemleri alanında
              profesyonel çözümler sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-muted-foreground hover:text-primary transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Linkli */}
          <div>
            <h4 className="font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:08502287574" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  0850 228 75 74
                </a>
              </li>
              <li>
                <a href="mailto:antalya@antalyakiralama.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  antalya@antalyakiralama.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span>
                  Pzt-Cum: 09:00-18:00<br />
                  Cmt: 09:00-13:00 | Paz: Kapalı
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Antalya Kiralama. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
