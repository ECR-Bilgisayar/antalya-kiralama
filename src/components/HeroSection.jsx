import { Phone, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const stats = [
    { value: '500+', label: 'Başarılı Etkinlik' },
    { value: '50+', label: 'Ürün Çeşidi' },
    { value: '7/24', label: 'Teknik Destek' },
    { value: '%100', label: 'Müşteri Memnuniyeti' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-[#0a0e27] dark:via-[#0f1629] dark:to-[#1a1040]" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#a855f7] rounded-full blur-[128px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#06b6d4] rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Antalya'nın Lider Teknoloji Kiralama Firması
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Etkinlikleriniz İçin
            <span className="block mt-2 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#06b6d4] bg-clip-text text-transparent">
              Premium Teknoloji
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bilgisayar, tablet, LED ekran, ses sistemi ve daha fazlası.
            Profesyonel ekipman, uzman destek ile etkinliklerinizi bir üst seviyeye taşıyın.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#urunler"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300"
            >
              Ürünleri Keşfet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#iletisim"
              className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-white/10 text-gray-900 dark:text-white font-semibold rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#a855f7] dark:hover:border-[#a855f7] hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Hemen Ara
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

    </section>
  )
}
