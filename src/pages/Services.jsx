import React from 'react'
import { Monitor, Tablet, Projector, Mic2, Gamepad2, Wifi, Printer, Layers } from 'lucide-react'

export default function Services() {
    const categories = [
        {
            id: 'bilgisayar',
            icon: <Monitor className="w-8 h-8" />,
            title: 'Bilgisayar Kiralama Kiralama',
            items: ['Laptop Kiralama', 'Masaüstü PC', 'Macbook & Macbook Pro', 'iMac Kiralama']
        },
        {
            id: 'tablet',
            icon: <Tablet className="w-8 h-8" />,
            title: 'Tablet & Kiosk',
            items: ['iPad Kiralama', 'iPad Pro', 'Tablet Standları', 'Dokunmatik Kiosk']
        },
        {
            id: 'led',
            icon: <Projector className="w-8 h-8" />,
            title: 'Görüntü Sistemleri',
            items: ['LED Ekran Kiralama', 'Videowall', 'Televizyon', 'Projeksiyon & Perde']
        },
        {
            id: 'ses',
            icon: <Mic2 className="w-8 h-8" />,
            title: 'Ses Sistemleri',
            items: ['Mikrofon Sistemleri', 'Hoparlör Sistemleri', 'Konferans Altyapısı', 'Simultane Sistemler']
        },
        {
            id: 'vr',
            icon: <Gamepad2 className="w-8 h-8" />,
            title: 'VR & Oyun',
            items: ['HTC Vive', 'Oculus Quest', 'PlayStation 5', 'Yarış Simülatörleri']
        },
        {
            id: 'diger',
            icon: <Layers className="w-8 h-8" />,
            title: 'Diğer Hizmetler',
            items: ['Yazıcı Kiralama', 'Network Kurulumu', 'Yaka Kartı Basım', 'İnstaPrint Çözümleri']
        }
    ]

    return (
        <div className="pt-24 pb-12 min-h-screen bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-display font-bold mb-4">Hizmetlerimiz</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Etkinlikleriniz için geniş ürün yelpazemiz ve profesyonel teknik destek.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} id={cat.id} className="bg-white dark:bg-[#1a2744] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                                {cat.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
                            <ul className="space-y-3">
                                {cat.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
