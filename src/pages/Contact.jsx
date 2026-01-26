import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
    return (
        <div className="pt-24 pb-12 min-h-screen bg-background text-foreground flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                <div className="text-center mb-16">
                    <h1 className="text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                        İletişim
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Sizlere en iyi hizmeti sunmak için buradayız. Projeleriniz ve kiralama talepleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Phone Card */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="relative bg-white dark:bg-[#1a2744] p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center h-full transform group-hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Phone className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Bizi Arayın</h3>
                            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">0850 228 75 74</p>
                            <p className="text-gray-500 dark:text-gray-400">7/24 Teknik Destek</p>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="relative bg-white dark:bg-[#1a2744] p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center h-full transform group-hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Mail Gönderin</h3>
                            <p className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-2 break-all">antalya@antalyakiralama.com</p>
                            <p className="text-gray-500 dark:text-gray-400">Hızlı Geri Dönüş Garantisi</p>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="relative bg-white dark:bg-[#1a2744] p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center h-full transform group-hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <MapPin className="w-10 h-10 text-pink-600 dark:text-pink-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Bizi Ziyaret Edin</h3>
                            <p className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-2">Antalya, Türkiye</p>
                            <p className="text-gray-500 dark:text-gray-400">Ofisimize Bekleriz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
