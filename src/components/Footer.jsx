import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function Footer() {
  const { isDark } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gray-900 dark:bg-[#070a1a] text-gray-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={isDark ? "/antalya-kiralama-logo-light.png" : "/antalya-kiralama-logo.png"}
                alt="Antalya Kiralama"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Antalya'nın lider teknoloji kiralama firması. Etkinlikleriniz için profesyonel çözümler.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hizmetler</h4>
            <ul className="space-y-3">
              {['Bilgisayar Kiralama', 'Tablet Kiralama', 'LED Ekran Kiralama', 'Ses Sistemi', 'VR Kiralama'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[#a855f7] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Şirket</h4>
            <ul className="space-y-3">
              {['Hakkımızda', 'İletişim'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Hakkımızda' ? '/hakkimizda' : '/iletisim'} className="text-sm hover:text-[#a855f7] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0850 228 75 74
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                antalya@antalyakiralama.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                Antalya, Türkiye
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © {currentYear} Antalya Kiralama. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/gizlilik-politikasi" className="text-sm hover:text-[#a855f7] transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/kvkk" className="text-sm hover:text-[#a855f7] transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
