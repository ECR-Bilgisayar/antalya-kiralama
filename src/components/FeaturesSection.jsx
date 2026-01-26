import { Check, Star } from 'lucide-react'

const features = [
  {
    title: 'Hızlı Teslimat',
    description: 'Antalya ve çevresine aynı gün teslimat imkanı.',
  },
  {
    title: 'Teknik Destek',
    description: 'Etkinlik süresince 7/24 teknik destek hizmeti.',
  },
  {
    title: 'Profesyonel Kurulum',
    description: 'Uzman ekibimiz ile yerinde kurulum ve test.',
  },
  {
    title: 'Esnek Kiralama',
    description: 'Günlük, haftalık, aylık esnek kiralama seçenekleri.',
  },
  {
    title: 'Sigortalı Ürünler',
    description: 'Tüm ürünlerimiz sigorta kapsamındadır.',
  },
  {
    title: 'Uygun Fiyat',
    description: 'Rekabetçi fiyatlar ve özel kurumsal anlaşmalar.',
  },
]

const stats = [
  { number: '10+', label: 'Yıllık Tecrübe' },
  { number: '500+', label: 'Tamamlanan Proje' },
  { number: '50+', label: 'Ürün Çeşidi' },
  { number: '100%', label: 'Memnuniyet' },
]

export default function FeaturesSection() {
  return (
    <section id="hakkimizda" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#0f1629]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50 dark:from-purple-900/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#06b6d4]/10 text-[#06b6d4] text-sm font-semibold rounded-full mb-4">
              NEDEN BİZ?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Profesyonel Hizmet,
              <span className="block text-[#a855f7]">Güvenilir Partner</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Yılların tecrübesi ve müşteri odaklı yaklaşımımızla Antalya'nın en güvenilir teknoloji kiralama firması olarak hizmet veriyoruz. Her ölçekte etkinliğiniz için yanınızdayız.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#a855f7] to-[#06b6d4] flex items-center justify-center text-white">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#a855f7] to-[#06b6d4] rounded-3xl p-1">
              <div className="bg-white dark:bg-[#0f1629] rounded-[22px] p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1a2744] rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 p-4 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 border-2 border-white dark:border-[#1a2744]" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    500+ Mutlu Müşteri
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
