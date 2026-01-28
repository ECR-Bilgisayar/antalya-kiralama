import React, { useState } from 'react'
import { Phone, Mail, Clock, Send, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
    }

    const contactInfo = [
        {
            icon: Phone,
            title: 'Telefon',
            value: '0850 228 75 74',
            subtitle: '7/24 Teknik Destek',
            href: 'tel:08502287574',
        },
        {
            icon: Mail,
            title: 'E-posta',
            value: 'antalya@antalyakiralama.com',
            subtitle: 'Hızlı Geri Dönüş',
            href: 'mailto:antalya@antalyakiralama.com',
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp',
            value: '0850 228 75 74',
            subtitle: 'Anında Mesaj',
            href: 'https://wa.me/908502287574',
            isWhatsApp: true,
        },
        {
            icon: Clock,
            title: 'Çalışma Saatleri',
            value: 'Pzt-Cum: 09:00 - 18:00',
            subtitle: 'Cmt: 09:00-13:00 | Paz: Kapalı',
            href: null,
        },
    ]

    return (
        <div className="pt-24 pb-16">
            {/* Hero */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">İletişim</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Projeleriniz ve kiralama talepleriniz için bizimle iletişime geçin.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8">

                        {/* Contact Info - Left */}
                        <div className="lg:col-span-2 space-y-4">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon
                                const Content = (
                                    <div className={`p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group ${info.isWhatsApp ? 'hover:border-green-500/50' : ''}`}>
                                        <div className="flex items-start gap-4">
                                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${info.isWhatsApp ? 'bg-green-500' : 'gradient-primary'}`}>
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-muted-foreground">{info.title}</p>
                                                <p className="font-semibold truncate">{info.value}</p>
                                                <p className="text-xs text-muted-foreground mt-0.5">{info.subtitle}</p>
                                            </div>
                                            {info.href && (
                                                <ArrowRight className={`w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-1 ${info.isWhatsApp ? 'group-hover:text-green-500' : 'group-hover:text-primary'}`} />
                                            )}
                                        </div>
                                    </div>
                                )

                                return info.href ? (
                                    <a
                                        key={index}
                                        href={info.href}
                                        className="block"
                                        target={info.isWhatsApp ? '_blank' : undefined}
                                        rel={info.isWhatsApp ? 'noopener noreferrer' : undefined}
                                    >
                                        {Content}
                                    </a>
                                ) : (
                                    <div key={index}>{Content}</div>
                                )
                            })}

                            {/* Quick CTA */}
                            <div className="p-6 rounded-2xl gradient-primary text-white">
                                <h3 className="font-bold mb-1">Hemen Arayın</h3>
                                <p className="text-sm text-white/80 mb-4">Acil talepler için direkt ulaşın.</p>
                                <a
                                    href="tel:08502287574"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    0850 228 75 74
                                </a>
                            </div>
                        </div>

                        {/* Form - Right */}
                        <div className="lg:col-span-3">
                            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
                                <h2 className="text-xl font-bold mb-6">Mesaj Gönderin</h2>

                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-16 text-center">
                                        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                                            <CheckCircle className="w-7 h-7 text-green-500" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-1">Mesajınız Gönderildi</h3>
                                        <p className="text-sm text-muted-foreground">En kısa sürede dönüş yapacağız.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5">Ad Soyad</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                                    placeholder="Adınız Soyadınız"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5">Telefon</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                                    placeholder="05XX XXX XX XX"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5">E-posta</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                                    placeholder="ornek@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5">Konu</label>
                                                <select
                                                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                >
                                                    <option value="">Konu Seçin</option>
                                                    <option value="bilgisayar">Bilgisayar Kiralama</option>
                                                    <option value="ses-goruntu">Ses ve Görüntü Sistemleri</option>
                                                    <option value="vr">VR ve Oyun Kiralama</option>
                                                    <option value="network">Network Kurulum</option>
                                                    <option value="diger">Diğer</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">Mesajınız</label>
                                            <textarea
                                                rows={4}
                                                required
                                                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-sm"
                                                placeholder="Projeniz hakkında bilgi verin..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3 rounded-lg gradient-primary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm"
                                        >
                                            <Send className="w-4 h-4" />
                                            Gönder
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
