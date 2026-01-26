import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mehmet Yılmaz',
    role: 'Etkinlik Müdürü',
    company: 'Tech Summit Antalya',
    content: 'Antalya Kiralama ile çalışmak muhteşem bir deneyimdi. Teknoloji fuarımız için gereken tüm ekipmanları kusursuz şekilde temin ettiler.',
  },
  {
    name: 'Ayşe Demir',
    role: 'Organizasyon Sorumlusu',
    company: 'Global Events',
    content: 'Profesyonel yaklaşımları ve hızlı çözüm üretme yetenekleri ile her zaman güvenebileceğimiz bir partner bulduk.',
  },
  {
    name: 'Can Öztürk',
    role: 'IT Direktörü',
    company: 'Rixos Hotels',
    content: 'Kongre salonlarımız için düzenli olarak hizmet alıyoruz. Kaliteli ekipman ve güvenilir teknik destek her zaman yanımızda.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#0a0e27]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#a855f7]/10 text-[#a855f7] text-sm font-semibold rounded-full mb-4">
            REFERANSLAR
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a2744]/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:border-[#a855f7]/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-500 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a855f7] to-[#06b6d4]" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
