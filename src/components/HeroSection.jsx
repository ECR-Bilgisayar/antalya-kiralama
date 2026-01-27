import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, Volume2, Wifi } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Teknoloji Kiralama</span>
              <br />
              <span className="text-foreground">Çözümleri</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              2014'den bu yana etkinlikleriniz için profesyonel teknoloji ve
              ses görüntü sistemleri kiralama hizmeti sunuyoruz.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/hizmetler"
                className="group px-6 py-3.5 rounded-xl gradient-primary text-white font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                Hizmetlerimiz
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/iletisim"
                className="px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-muted transition-colors font-semibold inline-flex items-center justify-center"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Bilgisayar Kiralama</h3>
                <p className="text-sm text-muted-foreground">MacBook, iMac, PC ve laptop</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Ses Sistemleri</h3>
                <p className="text-sm text-muted-foreground">Profesyonel ses ekipmanları</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">LED Ekran</h3>
                <p className="text-sm text-muted-foreground">Videowall ve dijital totem</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Network Kurulum</h3>
                <p className="text-sm text-muted-foreground">WiFi ve altyapı hizmetleri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
