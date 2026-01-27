import React, { useState } from 'react'
import {
    Monitor, Tablet, Projector, Mic2, Gamepad2, Wifi,
    CreditCard, Video, Printer, Smartphone, Tv, Camera,
    X, ChevronRight, Headphones, Cpu, Server, Speaker
} from 'lucide-react'

export default function Services() {
    const [activeCategory, setActiveCategory] = useState(null)
    const [activeSubService, setActiveSubService] = useState(null)

    const categories = [
        // ========== PROJE HİZMETLERİ KİRALAMA ==========
        {
            id: 'proje-hizmetleri',
            icon: Cpu,
            title: 'Proje Hizmetleri Kiralama',
            shortDesc: 'Kayıt sistemi, VR, PhotoBooth ve özel çözümler',
            color: 'from-purple-500 to-violet-600',
            description: 'Etkinlikleriniz için özel proje bazlı kiralama hizmetleri. Kayıt sistemleri, sanal gerçeklik deneyimleri ve fotoğraf çözümleri.',
            subServices: [
                {
                    title: 'Kayıt Sistemi Kiralama',
                    description: `Etkinlik kayıt ve katılımcı yönetim sistemleri, modern organizasyonların vazgeçilmez bir parçası haline gelmiştir. Profesyonel kayıt sistemi kiralama hizmetimiz ile etkinliklerinizde hızlı ve sorunsuz bir giriş deneyimi sunabilirsiniz.

Kayıt sistemlerimiz, katılımcıların QR kod veya barkod ile anında check-in yapmasını sağlar. Sistem, katılımcı bilgilerini gerçek zamanlı olarak kaydeder ve anlık raporlama imkanı sunar.

Sistemimiz, yaka kartı basımı ile entegre çalışarak katılımcılara anında kişiselleştirilmiş yaka kartları sunabilir.`,
                    features: ['Kayıt Terminali', 'QR Kod Okuyucu', 'Barkod Yazıcı', 'Yaka Kartı Basımı', 'Katılımcı Takibi', 'Anlık Raporlama', 'VIP Giriş Kontrolü', 'Çoklu Giriş Noktası'],
                },
                {
                    title: 'İnstaPrint Kiralama',
                    description: `İnstaPrint sistemimiz, %100 başarı ve işleyiş prensibi üzerine kurulmuştur. Sunum sahibine ve katılımcılara benzersiz bir deneyim sunar. Sosyal medya entegrasyonu sayesinde etkinliğinizin hashtag'i ile paylaşılan fotoğraflar anında basılabilir.

Sistem, Instagram ve Twitter platformlarındaki belirli hashtag'leri takip eder ve bu hashtag ile paylaşılan fotoğrafları otomatik olarak yazdırır.

Markalı çerçeve tasarımı ile baskılar, etkinliğinizin logosunu ve özel mesajlarını taşıyabilir.`,
                    features: ['Hashtag Printer', 'Instagram Entegrasyonu', 'Twitter Entegrasyonu', 'Anında Baskı', 'Markalı Çerçeve', 'GIF Oluşturma', 'Video Booth', 'Sosyal Medya Paylaşım'],
                },
                {
                    title: 'HTC Vive Kiralama',
                    description: `HTC Vive, profesyonel sanal gerçeklik deneyimleri için en gelişmiş sistemlerden biridir. Room-scale VR özelliği sayesinde kullanıcılar, fiziksel alanda hareket ederek tamamen sürükleyici bir deneyim yaşayabilirler.

Etkinliklerinizde HTC Vive ile katılımcılarınıza unutulmaz VR deneyimleri sunabilirsiniz. Sistem, yüksek çözünürlüklü görüntü ve hassas hareket takibi ile gerçekçi bir sanal ortam sağlar.

Kiralama hizmetimiz, HTC Vive Pro 2, Pro Eye ve Focus 3 modellerini içerir.`,
                    features: ['HTC Vive Pro 2', 'HTC Vive Pro Eye', 'HTC Vive Focus 3', 'Base Station 2.0', 'VR Controller', 'VR Ready PC', 'Room-Scale Kurulum', 'Teknik Destek'],
                },
                {
                    title: 'PhotoBooth Kiralama',
                    description: `PhotoBooth sistemlerimiz, etkinliklerinize eğlence ve hatıra katmanın en etkili yollarından biridir. Profesyonel DSLR kameralar ve stüdyo kalitesinde aydınlatma ile yüksek kaliteli fotoğraflar çekilir.

Sistemimiz, çeşitli props ve aksesuarlar ile birlikte gelir. Yeşil perde (green screen) özelliği sayesinde farklı arka planlar kullanılabilir.

GIF ve Boomerang oluşturma özellikleri ile sosyal medyada paylaşılabilir içerikler üretilebilir.`,
                    features: ['DSLR Kamera', 'Stüdyo Aydınlatma', 'Props & Aksesuar', 'Yeşil Perde', 'Anında Baskı', 'GIF Oluşturma', 'Boomerang', 'Dijital Paylaşım'],
                },
                {
                    title: 'Oculus Kiralama',
                    description: `Meta (Oculus) VR sistemleri, kullanım kolaylığı ve kablosuz deneyim sunan popüler sanal gerçeklik çözümleridir. Standalone yapısı sayesinde bilgisayar gerektirmeden VR deneyimi yaşanabilir.

Etkinliklerinizde Oculus Quest ile katılımcılarınıza kolay erişilebilir VR deneyimleri sunabilirsiniz. Geniş oyun ve uygulama kütüphanesi mevcuttur.

Kiralama hizmetimiz, Meta Quest 3, Quest Pro ve Oculus Rift S modellerini içerir.`,
                    features: ['Meta Quest 3', 'Meta Quest Pro', 'Oculus Rift S', 'Touch Controller', 'VR Oyunlar', 'Kurulum Desteği', 'Hijyen Kiti', 'Çoklu Cihaz'],
                },
            ],
        },

        // ========== SES VE GÖRÜNTÜ TEKNOLOJİLERİ ==========
        {
            id: 'ses-goruntu',
            icon: Video,
            title: 'Ses ve Görüntü Teknolojileri Kiralama',
            shortDesc: 'Profesyonel ses ve görüntü sistemleri',
            color: 'from-cyan-500 to-blue-600',
            description: 'Etkinliklerinize özel anahtar teslim ses ve görüntü sistemlerini tüm bileşenleri ile sunuyoruz. Konserler, sunumlar, düğünler, toplantılar ve fuarlar için profesyonel çözümler.',
            subServices: [
                {
                    title: 'Ses Sistemi Kiralama',
                    description: `Mükemmel ses kalitesi, etkinliklerin başarısı açısından kritik öneme sahiptir. Bu nedenle doğru ses sistemi seçimi organizasyonun amacına uygun olmalı ve kaliteli malzemelerden oluşmalıdır.

Etkinlikler için ses sistemi kiralamanın bir başka avantajı, etkinlik sonrasında cihazları depolama, bakım, onarım ve güncelleme gibi masraflardan kaçınma imkanı sunmasıdır.

Konserler, sunumlar, düğünler, toplantılar, fuarlar ve benzeri birçok etkinlikte, doğru ses kalitesini elde etmek için profesyonel ses ekipmanları gereklidir.`,
                    features: ['Line Array Sistem', 'Aktif Hoparlör', 'Pasif Hoparlör', 'Subwoofer', 'Dijital Mikser', 'Analog Mikser', 'Kablosuz Mikrofon', 'Yaka Mikrofonu', 'El Mikrofonu', 'Stage Box', 'Monitör Hoparlör', 'DI Box'],
                },
                {
                    title: 'LED Kiralama',
                    description: `LED teknolojisi, etkinliklerde görsel iletişimin en etkili yollarından biridir. Yüksek parlaklık, geniş görüş açısı ve enerji verimliliği ile LED sistemler, her türlü ortamda mükemmel görüntü kalitesi sunar.

Indoor ve outdoor kullanıma uygun LED panellerimiz, farklı piksel aralıklarında (P2.5, P3.9, P4.8 vb.) mevcuttur.

LED sistemlerimiz, modüler yapıları sayesinde istenen boyut ve şekilde kurulabilir.`,
                    features: ['P2.5 LED Panel', 'P3.9 LED Panel', 'P4.8 LED Panel', 'Indoor LED', 'Outdoor LED', 'Curved LED', 'Floor LED', 'Transparent LED', 'Video İşlemci', 'LED Controller'],
                },
                {
                    title: 'LED Ekran Kiralama',
                    description: `Büyük etkinliklerde LED ekranlar, içeriğinizi geniş kitlelere ulaştırmanın en etkili yoludur. Sahne arkası backdrop, yan ekranlar ve delay ekranları ile tüm katılımcıların görsel içeriği net bir şekilde görmesi sağlanır.

LED ekranlarımız, yüksek yenileme hızı ve kontrast oranı ile profesyonel video prodüksiyonları için idealdir.

Kiralama hizmetimiz, ekran kurulumu, kablolama, video işlemci ayarları ve etkinlik süresince teknik destek içerir.`,
                    features: ['Sahne LED Ekran', 'Backdrop LED', 'Side Screen', 'Delay Screen', 'IMAG Ekran', 'Truss Sistemi', 'Rigging', 'Video İşlemci', 'Scaler', 'Switcher'],
                },
                {
                    title: 'Projeksiyon Kiralama',
                    description: `En küçük etkinlikten en büyük etkinliğe kadar gerekli olan projeksiyon sistemlerini profesyonel bir firmadan alarak bütçenizi minimize edebilirsiniz.

Projeksiyon kiralama hizmetimiz, farklı lümen kapasitelerinde projektörler sunar. Küçük toplantılar için 3000-5000 lümen, orta ölçekli etkinlikler için 7000-10000 lümen, büyük organizasyonlar için 15000+ lümen projektörler mevcuttur.

Lazer projektörler, uzun ömürlü ve bakım gerektirmeyen ışık kaynakları ile 24/7 kullanıma uygundur.`,
                    features: ['3000 Lumen', '5000 Lumen', '7000 Lumen', '10000 Lumen', '15000 Lumen', '20000+ Lumen', 'Full HD', '4K Projektör', 'Lazer Projektör', 'Kısa Mesafe', 'Ultra Kısa Mesafe', 'Mapping Projektör'],
                },
                {
                    title: 'Barkovizyon Kiralama',
                    description: `Barkovizyon sistemleri, projeksiyon ile birlikte kullanılan profesyonel perde çözümleridir. Doğru perde seçimi, projeksiyon görüntüsünün kalitesini doğrudan etkiler.

Fast-fold perdeler, hızlı kurulum ve söküm gerektiren etkinlikler için idealdir. Motorlu perdeler ise sabit mekanlar için tercih edilir.

Arka projeksiyon perdeleri, projektörün perde arkasına yerleştirildiği uygulamalar için kullanılır.`,
                    features: ['Fast-Fold Perde', 'Tripod Perde', 'Motorlu Perde', 'Çerçeveli Perde', 'Arka Projeksiyon Perde', 'Ön Projeksiyon Perde', 'Geniş Format', '16:9 Format', '4:3 Format'],
                },
                {
                    title: 'Televizyon Kiralama',
                    description: `Etkinlikler için televizyon kiralama, sunum, bilgilendirme ve görsel içerik gösterimi için pratik bir çözümdür. Televizyonlar, LED ekranlara göre daha düşük maliyetli ve kurulumu kolay alternatiflerdir.

Kiralama hizmetimiz, 43" ile 98" arasında farklı boyutlarda televizyonlar sunar. 4K ve 8K çözünürlüklü modeller mevcuttur.

Stand ve duvar montaj seçenekleri ile televizyonlar istenen konuma yerleştirilebilir.`,
                    features: ['43" TV', '50" TV', '55" TV', '65" TV', '75" TV', '85" TV', '98" TV', '4K UHD', '8K UHD', 'OLED TV', 'QLED TV', 'TV Stand', 'Duvar Montaj', 'HDMI Dağıtıcı'],
                },
                {
                    title: 'Totem Ekran Kiralama',
                    description: `Dijital totemler, fuar, AVM, otel lobi ve etkinlik alanlarında bilgilendirme ve yönlendirme amacıyla kullanılan şık ve dikkat çekici ekranlardır.

Dokunmatik totemler, interaktif içerik sunumu için idealdir. Katılımcılar, dokunmatik ekran üzerinden bilgi alabilir, form doldurabilir veya ürün kataloglarını inceleyebilir.

Outdoor totemler, yüksek parlaklık ve hava koşullarına dayanıklı yapıları ile dış mekan kullanımına uygundur.`,
                    features: ['32" Totem', '43" Totem', '55" Totem', '65" Totem', 'Dokunmatik Totem', 'Non-Touch Totem', 'Çift Taraflı', 'Outdoor Totem', 'Android Totem', 'Windows Totem'],
                },
                {
                    title: 'Videowall Kiralama',
                    description: `Videowall sistemleri, birden fazla ekranın bir araya getirilerek büyük bir görüntü yüzeyi oluşturmasıyla meydana gelir. Etkileyici görsel sunumlar için ideal bir çözümdür.

LCD videowall panelleri, ultra ince çerçeve yapıları ile kesintisiz bir görüntü deneyimi sunar. 46" ve 55" paneller, farklı konfigürasyonlarda kurulabilir.

Videowall controller ile farklı kaynaklar tek ekranda veya ayrı ayrı gösterilebilir.`,
                    features: ['46" LCD Panel', '55" LCD Panel', '0.88mm Bezel', '1.8mm Bezel', '3.5mm Bezel', 'Videowall Controller', '2x2 Kurulum', '3x3 Kurulum', '4x4 Kurulum', 'Özel Layout', 'Montaj Braketi'],
                },
                {
                    title: 'LED Televizyon Kiralama',
                    description: `LED televizyonlar, enerji verimliliği ve ince tasarımları ile modern etkinlik mekanlarının vazgeçilmez görüntüleme çözümleridir.

Samsung, LG ve Sony gibi lider markaların en güncel modellerini kiralama hizmetimizde bulabilirsiniz. Smart TV özellikleri sayesinde kablosuz içerik aktarımı mümkündür.

HDR desteği ile canlı renkler ve derin siyahlar elde edilir.`,
                    features: ['Samsung LED TV', 'LG LED TV', 'Sony LED TV', '4K UHD', 'Full HD', 'HDR', 'Smart TV', 'WiFi', 'Bluetooth', 'USB Media Player'],
                },
            ],
        },

        // ========== TEKNOLOJİ KİRALAMA HİZMETLERİ ==========
        {
            id: 'teknoloji-kiralama',
            icon: Monitor,
            title: 'Teknoloji Kiralama Hizmetleri',
            shortDesc: 'Bilgisayar, tablet ve tüm teknolojik ekipmanlar',
            color: 'from-emerald-500 to-teal-600',
            description: 'Bilgisayar, tablet, telefon ve tüm teknolojik ekipman kiralama hizmetleri. Geniş ürün yelpazesi ve profesyonel destek.',
            subServices: [
                {
                    title: 'Bilgisayar Kiralama',
                    description: `Bilgisayar kiralama hizmetleri, işletmelerin ve bireylerin teknolojik taleplerini karşılamada son derece kritik bir role sahiptir. Bir etkinlik düzenliyorsanız veya işletmeniz için ek bilgisayarlar gerekiyorsa, doğru kiralama hizmeti ile iş süreçlerinizi daha etkin bir şekilde yönetebilirsiniz.

Kaliteli bir hizmet, ihtiyaçlarınıza uygun bilgisayarları en uygun fiyatlarla temin etmenize yardımcı olacaktır. Kullanımı kolay bir kiralama sistemi ve güncel ekipmanlar sunan güvenilir bir kiralama hizmeti, iş sürekliliğinizi destekler.

Doğru bilgisayar kiralama hizmeti ile işletmenizin veya organizasyonunuzun teknolojik ihtiyaçlarını karşılayabilirsiniz.`,
                    features: ['Masaüstü PC', 'All-in-One PC', 'Workstation', 'Gaming PC', 'Mini PC', 'Monitör', 'Klavye & Mouse', 'Webcam', 'Kulaklık', 'USB Hub'],
                },
                {
                    title: 'Laptop Kiralama',
                    description: `Günümüz iş dünyasında, mobil çalışma hayatı giderek daha yaygın hale gelmektedir. Bu nedenle, işletmeler ve bireyler, seyahat etme, uzaktan çalışma ve farklı yerlerde iş yapma ihtiyaçları için taşınabilir bilgisayarları tercih etmektedir.

Kiralamayı düşündüğünüz laptopun özellikleri önemlidir. Yüksek performans, hızlı işlemci, yeterli bellek ve depolama kapasitesi gibi özellikler, kiralanan laptopun kalitesini belirler.

Kiraladığınız laptopun teslimatı ve kurulumu, hizmet tarafından güvenilir bir şekilde ve belirlenen zaman çerçevesinde gerçekleştirilmelidir.`,
                    features: ['İş Laptopu', 'Gaming Laptop', 'Ultrabook', 'Workstation Laptop', '14" Laptop', '15.6" Laptop', '17" Laptop', 'Laptop Çantası', 'Mouse', 'Laptop Stand'],
                },
                {
                    title: 'MacBook Kiralama',
                    description: `MacBook'lar, üstün tasarımları, güçlü performansları ve uzun pil ömürleri ile profesyonellerin tercih ettiği dizüstü bilgisayarlardır. Yaratıcı sektörler, yazılım geliştirme ve iş uygulamaları için ideal bir platformdur.

Yüksek kaliteli hizmet ile ihtiyaçlarınıza uygun MacBook modellerini en uygun fiyatlarla temin ediyoruz. MacBook Air, hafifliği ve taşınabilirliği ile günlük kullanım için idealdir.

Apple Silicon (M1, M2, M3) işlemcili yeni nesil MacBook'lar, olağanüstü performans ve enerji verimliliği sunar.`,
                    features: ['MacBook Air M1', 'MacBook Air M2', 'MacBook Air M3', 'MacBook Pro 13"', 'MacBook Pro 14"', 'MacBook Pro 16"', 'USB-C Adaptör', 'HDMI Adaptör', 'Magic Mouse', 'Koruyucu Kılıf'],
                },
                {
                    title: 'MacBook Pro Kiralama',
                    description: `MacBook Pro, Apple'ın en güçlü dizüstü bilgisayar serisidir. Video düzenleme, 3D modelleme, müzik prodüksiyon ve yazılım geliştirme gibi yoğun kaynak gerektiren işler için tasarlanmıştır.

M1 Pro, M1 Max, M2 Pro ve M2 Max çipli modeller, masaüstü bilgisayar performansını taşınabilir formda sunar. Liquid Retina XDR ekran, profesyonel renk doğruluğu sağlar.

Kiralama hizmetimiz, 14" ve 16" MacBook Pro modellerini içerir.`,
                    features: ['MacBook Pro 14" M1 Pro', 'MacBook Pro 14" M2 Pro', 'MacBook Pro 16" M1 Max', 'MacBook Pro 16" M2 Max', 'Thunderbolt Hub', 'Harici SSD', 'Studio Display', 'Magic Keyboard', 'Magic Trackpad'],
                },
                {
                    title: 'iMac Kiralama',
                    description: `Başarılı bir etkinlik için pek çok unsur gereklidir ve güçlü bir teknolojik altyapı, etkinliği unutulmaz kılmanın kilit bir unsuru olarak öne çıkar. Bu nedenle, etkinlikleriniz için en son teknoloji iMac'leri kiralamak, iyi bir strateji olabilir.

iMac'ler, yüksek performansları ve şık tasarımlarıyla tanınır. Etkinliğinizde sunumlar, gösteriler veya diğer görsel materyaller için güçlü bir bilgisayara ihtiyaç duyuyorsanız, iMac kiralama seçeneği sizin için uygun olabilir.

iMac'ler, yüksek çözünürlüklü Retina ekranları ve hızlı işlemcileri sayesinde etkileyici bir görüntüleme deneyimi sunarlar.`,
                    features: ['iMac 24" M1', 'iMac 24" M3', 'iMac 27" 5K', '4.5K Retina Ekran', '5K Retina Ekran', 'Magic Keyboard', 'Magic Mouse', 'Magic Trackpad', 'Touch ID', 'macOS Sonoma'],
                },
                {
                    title: 'iPad Kiralama',
                    description: `iPad'ler, etkinliklerde çok yönlü kullanım imkanı sunan popüler tabletlerdir. Fuar standlarında ürün tanıtımı, anket uygulamaları, dijital broşürler ve interaktif sunumlar için idealdir.

Kiralama hizmetimiz, iPad 10. nesil, iPad Air ve iPad Mini modellerini içerir. Tüm iPad'ler güncel iPadOS sürümü ile teslim edilir.

MDM yönetimi ile iPad'ler uzaktan kontrol edilebilir, uygulamalar yüklenebilir ve güvenlik politikaları uygulanabilir.`,
                    features: ['iPad 10. Nesil', 'iPad Air M1', 'iPad Air M2', 'iPad Mini', 'Masa Üstü Stand', 'Zemin Standı', 'Kiosk Muhafaza', 'Apple Pencil', 'Smart Keyboard', 'MDM Yönetimi'],
                },
                {
                    title: 'iPad Pro Kiralama',
                    description: `iPad Pro, Apple'ın en güçlü ve en gelişmiş tablet serisidir. M1 ve M2 çip ile donatılmış iPad Pro modelleri, dizüstü bilgisayar performansını tablet formunda sunar.

11" ve 12.9" Liquid Retina XDR ekranlar, profesyonel renk doğruluğu sağlar. ProMotion teknolojisi ile 120Hz yenileme hızı, akıcı kaydırma ve Apple Pencil deneyimi sunar.

Kiralama hizmetimiz, Apple Pencil 2. nesil ve Magic Keyboard aksesuarlarını içerir.`,
                    features: ['iPad Pro 11" M2', 'iPad Pro 12.9" M2', 'iPad Pro 11" M4', 'iPad Pro 13" M4', 'Liquid Retina XDR', 'Apple Pencil Pro', 'Magic Keyboard', 'Smart Folio', 'USB-C Hub', 'Face ID'],
                },
                {
                    title: 'iPad Kiosk Kiralama',
                    description: `iPad kiosk sistemleri, iPad'lerin güvenli ve şık bir şekilde sergilenmesini sağlar. Fuar standları, mağazalar, restoranlar ve etkinlik alanlarında yaygın olarak kullanılır.

Masa üstü, zemin ve duvar montaj seçenekleri mevcuttur. Anti-hırsızlık özellikleri ile iPad güvenliği sağlanır.

Kiralama hizmetimiz, farklı iPad modelleri ile uyumlu kiosk seçenekleri sunar.`,
                    features: ['Masa Üstü Kiosk', 'Zemin Standı Kiosk', 'Duvar Montaj Kiosk', 'Döner Kiosk', 'Kilitli Muhafaza', 'Anti-Hırsızlık', 'Kablo Yönetimi', 'Şarj Özellikli', 'Logo Baskılı', 'Özel Renk'],
                },
                {
                    title: 'Tablet Kiralama',
                    description: `Android ve Windows tabletler, farklı ihtiyaçlara yönelik çeşitli seçenekler sunar. Samsung Galaxy Tab, Lenovo Tab ve Microsoft Surface serisi, etkinliklerde yaygın olarak kullanılan tablet markalardır.

Android tabletler, geniş uygulama desteği ve kullanım kolaylığı sunar. Windows tabletler ise masaüstü uygulamaları çalıştırabilme özelliği ile iş uygulamaları için idealdir.

Kiralama hizmetimiz, tablet ile birlikte stand, klavye ve kalem aksesuarlarını içerir.`,
                    features: ['Samsung Galaxy Tab S9', 'Samsung Galaxy Tab A', 'Lenovo Tab P12', 'Microsoft Surface Pro', 'Microsoft Surface Go', 'Tablet Stand', 'Bluetooth Klavye', 'S Pen / Surface Pen', 'Şarj İstasyonu'],
                },
                {
                    title: 'Telefon Kiralama',
                    description: `Etkinlikler ve kurumsal kullanım için akıllı telefon kiralama hizmeti sunuyoruz. Test uygulamaları, demo gösterimleri ve geçici iletişim ihtiyaçları için ideal bir çözümdür.

iPhone ve Samsung Galaxy serisi telefonlar, güncel işletim sistemi ve temiz kurulum ile teslim edilir. SIM kart takılı veya takılı olmadan kiralama seçenekleri mevcuttur.

Toplu kiralama için şarj istasyonları ve MDM yönetimi hizmeti sunuyoruz.`,
                    features: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'Samsung Galaxy S24 Ultra', 'Samsung Galaxy S24', 'Samsung Galaxy A54', 'SIM Kartlı', 'SIM Kartsız', 'Şarj İstasyonu', 'Koruyucu Kılıf'],
                },
                {
                    title: 'PlayStation Kiralama',
                    description: `PlayStation, dünya genelinde en popüler oyun konsolu markalarından biridir. Etkinliklerde gaming alanları, turnuvalar ve demo gösterimleri için PlayStation kiralama hizmeti sunuyoruz.

PlayStation 5, güçlü donanımı ve etkileyici oyun kütüphanesi ile katılımcılara unutulmaz bir deneyim sunar. DualSense kontrolcülerin haptik geri bildirimi, oyun deneyimini bir üst seviyeye taşır.

PS VR2 ile sanal gerçeklik oyunları da deneyimlenebilir.`,
                    features: ['PlayStation 5', 'PlayStation 5 Digital', 'DualSense Controller', 'DualSense Edge', 'PS VR2', 'Pulse 3D Kulaklık', 'Oyun Koltuğu', 'Gaming Monitör', 'Oyun Paketi', 'Turnuva Kurulumu'],
                },
                {
                    title: 'Xbox Kiralama',
                    description: `Xbox, Microsoft'un oyun konsolu markasıdır. Xbox Series X ve Series S, güçlü performansları ve Game Pass hizmeti ile geniş bir oyun kütüphanesine erişim sunar.

Xbox Series X, 4K 120fps oyun deneyimi sunan en güçlü Xbox konsoludur. Xbox Series S ise daha kompakt bir alternatiftir.

Game Pass Ultimate aboneliği ile yüzlerce oyuna anında erişim sağlanır.`,
                    features: ['Xbox Series X', 'Xbox Series S', 'Xbox Controller', 'Xbox Elite Controller', 'Game Pass Ultimate', 'Forza Yarış Seti', 'Yarış Direksiyonu', 'Gaming Monitör', 'Oyun Koltuğu'],
                },
                {
                    title: 'Yazıcı Kiralama',
                    description: `Etkinliklerde yazıcı ihtiyacı sıkça ortaya çıkar. Yaka kartı basımı, belge çıktısı, fotoğraf baskısı ve etiket yazdırma gibi işlemler için profesyonel yazıcı kiralama hizmeti sunuyoruz.

Hızlı baskı, yüksek çözünürlük ve çift taraflı baskı yeteneği gibi özellikler sunan profesyonel yazıcılarımız, etkinlik ihtiyaçlarınızı karşılar.

Kiralama hizmetimiz, yazıcı ile birlikte yeterli miktarda toner/mürekkep ve kağıt içerir.`,
                    features: ['Lazer Yazıcı', 'Renkli Lazer Yazıcı', 'Inkjet Yazıcı', 'Fotoğraf Yazıcı', 'A3 Yazıcı', 'Etiket Yazıcı', 'Kart Yazıcı', 'Çok Fonksiyonlu Yazıcı', 'Toner Dahil', 'Kağıt Dahil'],
                },
                {
                    title: 'Şarj İstasyonu Kiralama',
                    description: `Etkinliklerde katılımcıların mobil cihazlarını şarj etme ihtiyacı sıkça ortaya çıkar. Şarj istasyonu kiralama hizmetimiz, bu ihtiyacı profesyonel bir şekilde karşılar.

USB şarj istasyonları, çoklu cihazın aynı anda şarj edilmesini sağlar. Kablosuz şarj özellikli modeller, uyumlu cihazlar için kablo gerektirmez.

Kilitli şarj dolapları, cihazların güvenli bir şekilde şarj edilmesini sağlar.`,
                    features: ['USB Şarj İstasyonu', 'Kablosuz Şarj İstasyonu', 'Kilitli Şarj Dolabı', 'Power Bank İstasyonu', 'Multi-Device Şarj', 'Lightning Kablo', 'USB-C Kablo', 'Micro USB Kablo', 'Markalama İmkanı'],
                },
                {
                    title: 'Kiosk Kiralama',
                    description: `Dokunmatik kiosk sistemleri, self-servis uygulamalar için ideal çözümlerdir. Bilgi terminali, yol tarifi, ürün kataloğu, anket ve sipariş alma gibi birçok amaçla kullanılabilir.

Farklı boyutlarda (21", 32", 43", 55") kiosk seçenekleri mevcuttur. Barkod okuyucu, yazıcı ve kart okuyucu entegrasyonları ile genişletilebilir.

Windows veya Android işletim sistemli kiosklar, özel yazılım uygulamalarınızı çalıştırabilir.`,
                    features: ['21" Dokunmatik Kiosk', '32" Dokunmatik Kiosk', '43" Dokunmatik Kiosk', '55" Dokunmatik Kiosk', 'Windows Kiosk', 'Android Kiosk', 'Barkod Okuyucu', 'Fiş Yazıcı', 'Kart Okuyucu', 'Özel Yazılım'],
                },
            ],
        },

        // ========== NETWORK HİZMETLERİ ==========
        {
            id: 'network',
            icon: Wifi,
            title: 'Network Kiralama ve Kurulum',
            shortDesc: 'WiFi ve kablolu network altyapısı',
            color: 'from-indigo-500 to-purple-600',
            description: 'İşinize özel etkinlik alanında gerekli olan WiFi veya kablolu network topolojisini kurup yönetiyoruz.',
            subServices: [
                {
                    title: 'WiFi Sistemi Kiralama',
                    description: `Etkinlik alanlarında kesintisiz ve yüksek hızlı internet bağlantısı kritik öneme sahiptir. WiFi sistemi kiralama hizmetimiz, yüzlerce hatta binlerce kullanıcının aynı anda bağlanabileceği profesyonel çözümler sunar.

Enterprise sınıfı access point'ler, yüksek yoğunluklu ortamlarda stabil performans sağlar. WiFi 6 teknolojisi ile daha hızlı ve verimli bağlantı sunar.

Captive portal özelliği ile kullanıcılar, özelleştirilebilir bir giriş sayfası üzerinden ağa bağlanabilir.`,
                    features: ['Enterprise Access Point', 'WiFi 6 Teknolojisi', 'WiFi Controller', 'PoE Switch', 'Captive Portal', 'Bant Genişliği Yönetimi', 'Kullanıcı Analizi', 'Misafir Ağı', '7/24 Destek'],
                },
                {
                    title: 'Kablolu Network Kurulum',
                    description: `Kablolu network bağlantısı, WiFi'ye göre daha stabil ve güvenilir bir çözümdür. Özellikle canlı yayın, video konferans ve yüksek bant genişliği gerektiren uygulamalar için idealdir.

Cat6 ve Cat6a kablolama ile gigabit hızlarında veri transferi sağlanır. Fiber optik altyapı ile daha uzun mesafeler desteklenir.

Geçici etkinlik alanlarında kablolama, kablo kanalları ve rampa sistemleri ile güvenli bir şekilde yapılır.`,
                    features: ['Cat6 Kablolama', 'Cat6a Kablolama', 'Fiber Optik', 'Managed Switch', 'Unmanaged Switch', 'Gigabit Router', 'Patch Panel', 'Network Rack', 'Kablo Kanalı', 'Kablo Rampa'],
                },
                {
                    title: '4G/5G Çözümler',
                    description: `Sabit internet altyapısı olmayan veya yeterli olmayan lokasyonlarda 4G/5G mobil internet çözümleri kullanılabilir. Açık hava etkinlikleri, geçici mekanlar ve acil durumlar için idealdir.

Yüksek kapasiteli 4G/5G router'lar, birden fazla kullanıcının aynı anda bağlanmasını destekler. Harici anten sistemleri ile sinyal gücü artırılabilir.

Yedek hat olarak da kullanılabilir. Ana internet bağlantısı kesildiğinde otomatik olarak mobil hatta geçiş yapılır.`,
                    features: ['4G LTE Router', '5G Router', 'MiFi Cihaz', 'Harici Anten', 'Sinyal Güçlendirici', 'Çoklu SIM', 'Yüksek Data Paketi', 'Failover Özelliği', 'Taşınabilir Çözüm'],
                },
            ],
        },

        // ========== YAKA KARTI SİSTEMLERİ ==========
        {
            id: 'yaka-karti',
            icon: CreditCard,
            title: 'Yaka Kartı Sistemleri',
            shortDesc: 'RFID ve barkodlu yaka kartı çözümleri',
            color: 'from-amber-500 to-orange-600',
            description: 'İster RFID ister barkodlu veya barkodsuz yaka kartı çözümlerimiz ile işinize profesyonellik katın.',
            subServices: [
                {
                    title: 'RFID Yaka Kartı',
                    description: `RFID teknolojisi, temassız okuma özelliği ile hızlı ve pratik giriş-çıkış kontrolü sağlar. Kartı okuyucuya yaklaştırmak yeterlidir, fiziksel temas gerekmez.

RFID kartlar ve bileklikler, farklı etkinlik türleri için uygun seçenekler sunar. Festival ve konserler için bileklik, kurumsal etkinlikler için kart formatı tercih edilebilir.

Sistem, katılımcı hareketlerini gerçek zamanlı olarak takip eder.`,
                    features: ['RFID Kart', 'RFID Bileklik', 'RFID Okuyucu', 'El Terminali', 'Turnike Entegrasyonu', 'Kapı Geçiş Sistemi', 'Gerçek Zamanlı Takip', 'Zaman Damgası', 'Raporlama'],
                },
                {
                    title: 'Barkodlu Yaka Kartı',
                    description: `Barkod ve QR kod teknolojisi, ekonomik ve pratik bir yaka kartı çözümü sunar. Kartlar standart yazıcılarla basılabilir, özel ekipman gerektirmez.

QR kod, daha fazla veri kapasitesi ve hızlı okuma özelliği sunar. Akıllı telefon kamerası ile de okunabilir.

El terminalleri ve sabit barkod okuyucular ile hızlı giriş kontrolü sağlanır.`,
                    features: ['Barkodlu Kart', 'QR Kodlu Kart', '1D Barkod', '2D Barkod', 'Barkod Okuyucu', 'El Terminali', 'Mobil Okuyucu', 'Anında Doğrulama', 'Offline Çalışma'],
                },
                {
                    title: 'Kart Basım Hizmeti',
                    description: `Etkinlik alanında yerinde kart basım hizmeti sunuyoruz. Kayıt anında veya sonrasında kişiselleştirilmiş yaka kartları anında basılabilir.

PVC kart yazıcılar ile dayanıklı ve profesyonel görünümlü kartlar üretilir. Fotoğraflı veya fotoğrafsız, renkli veya tek renk baskı seçenekleri mevcuttur.

Kordon, kart tutucu ve askı aksesuarları ile tam çözüm sunuyoruz.`,
                    features: ['PVC Kart Yazıcı', 'Sublimation Yazıcı', 'PVC Kart', 'Kart Tutucu', 'Kordon', 'Klips', 'Yoyo', 'Fotoğraflı Kart', 'Özel Tasarım', 'Anında Basım'],
                },
            ],
        },
    ]

    const closeModal = () => {
        setActiveCategory(null)
        setActiveSubService(null)
    }

    const selectedCategory = categories.find(c => c.id === activeCategory)

    return (
        <div className="pt-24 pb-16">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">Teknoloji Kiralama Çözümleri</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            2014'den bu yana etkinlikleriniz için ihtiyacınız olan tüm teknolojik ekipmanları
                            ve ses görüntü sistemlerini profesyonel hizmet anlayışıyla sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category) => {
                            const Icon = category.icon
                            return (
                                <div
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-xl font-semibold mb-3">{category.title}</h2>
                                    <p className="text-muted-foreground mb-4">{category.shortDesc}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">{category.subServices.length} hizmet</span>
                                        <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                                            Detaylar <ChevronRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Category Modal */}
            {activeCategory && selectedCategory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    />
                    <div className="relative bg-card rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-border shadow-2xl animate-fade-in">
                        {/* Modal Header */}
                        <div className={`p-6 bg-gradient-to-r ${selectedCategory.color}`}>
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                                    {React.createElement(selectedCategory.icon, { className: "w-8 h-8 text-white" })}
                                </div>
                                <div className="text-white">
                                    <h2 className="text-2xl font-bold">{selectedCategory.title}</h2>
                                    <p className="opacity-90 mt-1">{selectedCategory.subServices.length} farklı hizmet</p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                            <p className="text-muted-foreground mb-6">{selectedCategory.description}</p>

                            {/* Sub Services Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {selectedCategory.subServices.map((sub, index) => (
                                    <div
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setActiveSubService(activeSubService === index ? null : index)
                                        }}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all ${activeSubService === index
                                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                                            : 'border-border/50 hover:border-primary/30 bg-muted/30 hover:bg-muted/50'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-semibold text-sm">{sub.title}</h3>
                                            <ChevronRight className={`w-4 h-4 text-primary transition-transform ${activeSubService === index ? 'rotate-90' : ''}`} />
                                        </div>

                                        {activeSubService === index && (
                                            <div className="mt-3 pt-3 border-t border-border/50 animate-fade-in">
                                                <p className="text-xs text-muted-foreground mb-3 whitespace-pre-line">{sub.description}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {sub.features.map((feature, fIndex) => (
                                                        <span
                                                            key={fIndex}
                                                            className={`px-2 py-1 rounded-md text-xs font-medium bg-gradient-to-r ${selectedCategory.color} text-white`}
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border/50">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-1">Detaylı Bilgi ve Fiyat Teklifi</h4>
                                        <p className="text-sm text-muted-foreground">Profesyonel ekibimiz size en uygun çözümü sunacaktır.</p>
                                    </div>
                                    <a
                                        href="/iletisim"
                                        className={`px-6 py-3 rounded-xl bg-gradient-to-r ${selectedCategory.color} text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap`}
                                    >
                                        Teklif Al
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
