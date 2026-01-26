import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="iletisim" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#0f1629]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Contact Content */}
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-[#a855f7]/10 text-[#a855f7] text-sm font-semibold rounded-full mb-4">
              İLETİŞİM
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              Projeleriniz için ücretsiz keşif ve fiyat teklifi almak için bizimle iletişime geçin.
            </p>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <a
                href="tel:08502287574"
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-white/5 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#06b6d4] flex items-center justify-center text-white mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Telefon</div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-[#a855f7] transition-colors">
                    0850 228 75 74
                  </div>
                </div>
              </a>

              <a
                href="mailto:antalya@antalyakiralama.com"
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-white/5 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#06b6d4] flex items-center justify-center text-white mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">E-posta</div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-[#a855f7] transition-colors">
                    antalya@antalyakiralama.com
                  </div>
                </div>
              </a>

              <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-white/5 rounded-2xl text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#06b6d4] flex items-center justify-center text-white mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Adres</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Antalya, Türkiye
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
