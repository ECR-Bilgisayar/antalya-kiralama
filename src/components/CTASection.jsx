import { Phone, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7] via-[#d946ef] to-[#06b6d4]" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Projeniz İçin Hazır mısınız?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Etkinliğiniz için ihtiyacınız olan tüm teknolojik çözümler bir telefon kadar yakın. 
          Hemen bizimle iletişime geçin, ücretsiz teklif alın.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:08502287574"
            className="flex items-center gap-3 px-8 py-4 bg-white text-[#a855f7] font-semibold rounded-2xl hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            0850 228 75 74
          </a>
          <a
            href="mailto:antalya@antalyakiralama.com"
            className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            E-posta Gönder
          </a>
        </div>
      </div>
    </section>
  )
}
