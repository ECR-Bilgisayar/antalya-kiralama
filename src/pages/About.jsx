import React from 'react'

export default function About() {
    return (
        <div className="pt-24 pb-12 min-h-screen bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                        Hakkımızda
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
                        Teknoloji Partneriniz
                    </h2>
                </div>

                {/* Introduction */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                        <p className="leading-relaxed">
                            Antalya Kiralama olarak, etkinliklerinizde ihtiyacınız olan tüm teknolojik altyapıyı size en profesyonel şekilde sunuyoruz.
                            Amacımız, etkinlik süreçlerinizi pürüzsüz ve etkileyici kılmak için "Teknoloji Partneriniz" olmaktır.
                        </p>
                        <p className="leading-relaxed">
                            <strong>Etkinlik Öncesi:</strong> 'INSPECTION' kavramı bizim için olmazsa olmazdır.
                            İhtiyaçlarınızı belirler, mekanı inceler ve en doğru çözümleri planlarız.
                        </p>
                        <p className="leading-relaxed">
                            <strong>Etkinlik Sırasında:</strong> İşin sağlıklı bir şekilde başlayabilmesi için gerekli olan tüm tecrübe ve profesyonellikle yanınızdayız.
                        </p>
                        <p className="leading-relaxed">
                            <strong>Etkinlik Sonrası:</strong> Doğru yerdesiniz. Bizce mutlu müşteri, mutlu yüz başarının temel anahtarıdır.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <h3 className="text-3xl font-display font-bold mb-6 text-center">Diyoruz ki?</h3>
                            <blockquote className="text-xl italic text-center leading-loose">
                                "Doğru Müşteri - Doğru Partner"
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* What We Do */}
                <div className="py-12">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">Neler Yaparız?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Bilgisayar ve Çevre Birimleri", desc: "Laptop, Tablet, Kiosk ve daha fazlası." },
                            { title: "Ses ve Görüntü Sistemleri", desc: "LED Ekranlar, Projeksiyon, Videowall." },
                            { title: "Teknolojik Oyun ve Çözümler", desc: "VR Gözlükler, Simülasyonlar, Oyun Konsolları." },
                            { title: "Network Kiralama", desc: "Etkinlikleriniz için güvenilir ağ altyapısı." },
                            { title: "Yaka Kartı Sistemleri", desc: "Profesyonel kayıt ve karşılama çözümleri." },
                            { title: "Barkovizyon Kiralama", desc: "Yüksek çözünürlüklü görüntü aktarım sistemleri." },
                        ].map((item, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-gray-800 hover:border-purple-500/50 transition-colors duration-300">
                                <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
