import { Link } from 'react-router-dom'
import { Monitor, Tablet, Tv, Speaker, Gamepad2, Wifi, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Bilgisayar & Laptop',
    description: 'MacBook, iMac, Windows laptop ve masaüstü bilgisayar kiralama.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Tablet,
    title: 'Tablet & iPad',
    description: 'iPad Pro, iPad Air ve Android tablet kiralama çözümleri.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Tv,
    title: 'LED Ekran & TV',
    description: 'LED ekran, videowall ve dijital totem kiralama.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Speaker,
    title: 'Ses Sistemleri',
    description: 'Profesyonel ses sistemleri ve hoparlör kiralama.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Gamepad2,
    title: 'VR & Oyun',
    description: 'Sanal gerçeklik ve oyun konsolu kiralama.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Wifi,
    title: 'Network & Altyapı',
    description: 'Etkinlikler için profesyonel network kurulum.',
    color: 'from-indigo-500 to-purple-600',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Hizmetlerimiz</span>
          </h2>
          <p className="text-muted-foreground">
            Etkinlikleriniz için ihtiyacınız olan tüm teknolojik ekipmanları sunuyoruz.
          </p>
        </div>

        {/* Services Grid - Kartlar düz, transform yok */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                style={{ transform: 'none' }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/hizmetler"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Tüm Hizmetleri Gör
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
