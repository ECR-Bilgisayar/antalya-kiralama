import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-primary opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />

          <div className="relative text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Projeniz İçin Teklif Alın
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Etkinliğiniz için en uygun teknoloji çözümlerini birlikte belirleyelim.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/iletisim"
                className="px-6 py-3 rounded-xl bg-white text-primary font-semibold inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                İletişime Geçin
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:08502287574"
                className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                0850 228 75 74
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
