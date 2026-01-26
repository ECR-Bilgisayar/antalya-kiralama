import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div className="pt-24 pb-12 min-h-screen bg-background text-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-display font-bold mb-8">Gizlilik Politikası</h1>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
                    <p>
                        Antalya Kiralama olarak, müşterilerimizin gizliliğine ve kişisel verilerinin korunmasına büyük önem vermekteyiz.
                        Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda toplanan verilerin nasıl işlendiğini açıklar.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Toplanan Bilgiler</h3>
                    <p>
                        Sizlerden topladığımız bilgiler şunları içerebilir:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Kimlik Bilgileri (Ad, Soyad)</li>
                            <li>İletişim Bilgileri (Telefon, E-posta, Adres)</li>
                            <li>Talep ve sipariş detayları</li>
                            <li>IP adresi ve cihaz bilgileri</li>
                        </ul>
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Bilgilerin Kullanımı</h3>
                    <p>
                        Topladığımız bilgiler şu amaçlarla kullanılmaktadır:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Kiralama hizmetlerinin sunulması ve yönetilmesi</li>
                            <li>Müşteri taleplerine yanıt verilmesi</li>
                            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                            <li>Hizmet kalitemizin artırılması</li>
                        </ul>
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Bilgi Güvenliği</h3>
                    <p>
                        Kişisel verileriniz, yetkisiz erişime, kullanıma veya ifşaya karşı korumak için uygun teknik ve idari tedbirlerle saklanmaktadır.
                        Verileriniz, yasal zorunluluklar haricinde üçüncü şahıslarla paylaşılmamaktadır.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Çerezler (Cookies)</h3>
                    <p>
                        Web sitemizde kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanılmaktadır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. İletişim</h3>
                    <p>
                        Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                        <br />
                        <strong>E-posta:</strong> antalya@antalyakiralama.com
                        <br />
                        <strong>Telefon:</strong> 0850 228 75 74
                    </p>
                </div>
            </div>
        </div>
    )
}
