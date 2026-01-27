import React from 'react'
import { CheckCircle2, Award, Users, Clock } from 'lucide-react'

export default function About() {
    const stats = [
        { icon: Clock, value: '2014', label: 'Kuruluş Yılı' },
        { icon: Users, value: '1000+', label: 'Mutlu Müşteri' },
        { icon: Award, value: '10+', label: 'Yıllık Tecrübe' },
    ]

    const values = [
        {
            title: 'Etkinlik Öncesi',
            desc: "'INSPECTION' kavramı bizim için olmazsa olmazdır. İhtiyaçlarınızı belirler, mekanı inceler ve en doğru çözümleri planlarız.",
        },
        {
            title: 'Etkinlik Sırasında',
            desc: 'İşin sağlıklı bir şekilde başlayabilmesi için gerekli olan tüm tecrübe ve profesyonellikle yanınızdayız.',
        },
        {
            title: 'Etkinlik Sonrası',
            desc: 'Bizce mutlu müşteri, mutlu yüz başarının temel anahtarıdır. Sürekli destek sağlıyoruz.',
        },
    ]

    return (
        <div className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            HAKKIMIZDA
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">Teknoloji Partneriniz</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Antalya Kiralama olarak 2014 yılından bu yana etkinliklerinizde ihtiyacınız olan
                            tüm teknolojik altyapıyı ve ses görüntü sistemlerini profesyonel şekilde sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>



            {/* Values */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Çalışma <span className="gradient-text">Yaklaşımımız</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <blockquote className="text-2xl md:text-3xl font-display font-medium italic text-foreground/90">
                        "Doğru Müşteri - Doğru Partner"
                    </blockquote>
                    <p className="mt-6 text-muted-foreground">
                        Amacımız, etkinlik süreçlerinizi pürüzsüz ve etkileyici kılmak için
                        teknoloji partneriniz olmaktır.
                    </p>
                </div>
            </section>
        </div>
    )
}
