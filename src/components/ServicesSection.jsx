import { Monitor, Tablet, Tv, Speaker, Gamepad2, Wifi, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Bilgisayar & Laptop',
    description: 'MacBook, iMac, Windows laptop ve masaüstü bilgisayar kiralama hizmetleri.',
    features: ['MacBook Pro/Air', 'iMac', 'Gaming PC', 'Workstation'],
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Tablet,
    title: 'Tablet & iPad',
    description: 'iPad Pro, iPad Air ve Android tablet kiralama çözümleri.',
    features: ['iPad Pro', 'iPad Air', 'iPad Kiosk', 'Android Tablet'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Tv,
    title: 'LED Ekran & TV',
    description: 'Her boyutta LED ekran, videowall ve dijital totem kiralama.',
    features: ['LED Ekran', 'Videowall', 'Totem Ekran', 'Dokunmatik Ekran'],
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Speaker,
    title: 'Ses Sistemleri',
    description: 'Profesyonel ses sistemleri ve hoparlör kiralama hizmetleri.',
    features: ['Line Array', 'Mikser', 'Mikrofon', 'Hoparlör'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Gamepad2,
    title: 'VR & Oyun',
    description: 'Sanal gerçeklik ve oyun konsolu kiralama deneyimleri.',
    features: ['HTC Vive', 'Oculus', 'PlayStation', 'Xbox'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Wifi,
    title: 'Network & Altyapı',
    description: 'Etkinlik alanları için profesyonel network kurulum hizmetleri.',
    features: ['WiFi Sistemi', 'Switch', 'Router', 'Kablolama'],
    color: 'from-indigo-500 to-purple-600',
  },
]

export default function ServicesSection() {
  return (
    <section id="urunler" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#0a0e27]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#a855f7]/10 text-[#a855f7] text-sm font-semibold rounded-full mb-4">
            HİZMETLERİMİZ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Teknoloji Kiralama Çözümleri
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Etkinlikleriniz için ihtiyacınız olan tüm teknolojik ekipmanları profesyonel hizmet anlayışıyla sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-[#1a2744]/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:border-[#a855f7]/50 dark:hover:border-[#a855f7]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className="p-2 bg-[#a855f7] rounded-full text-white">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
