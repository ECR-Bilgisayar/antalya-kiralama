# Antalya Kiralama - Premium Kurumsal Website

Modern, responsive ve SEO-friendly teknoloji kiralama web sitesi.

## 🚀 Teknolojiler

- **React 18.2.0** - UI Framework
- **React Router 6.16.0** - Routing
- **TailwindCSS 3.4** - Styling
- **Vite 5** - Build Tool
- **Lucide React** - Icons

## 📦 Kurulum

### 1. Bağımlılıkları yükleyin

```bash
npm install
```

### 2. Geliştirme sunucusunu başlatın

```bash
npm run dev
```

Site otomatik olarak `http://localhost:3000` adresinde açılacaktır.

### 3. Production build

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulacaktır.

### 4. Build'i önizleme

```bash
npm run preview
```

## 📁 Proje Yapısı

```
antalya-kiralama/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── CTASection.jsx
│   │   └── ContactSection.jsx
│   ├── hooks/
│   │   └── useTheme.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Özellikler

- ✅ Dark/Light mode desteği
- ✅ Tam responsive tasarım
- ✅ Smooth scroll animasyonları
- ✅ Modern gradient efektler
- ✅ Hover animasyonları
- ✅ SEO-friendly yapı
- ✅ Performans optimizasyonu
- ✅ Accessibility (a11y) uyumlu

## 🎨 Renk Paleti

### Light Mode
- Background: `hsl(0 0% 98%)`
- Primary: `hsl(271 91% 65%)` - #a855f7 (Mor)
- Secondary: `hsl(199 89% 48%)` - #06b6d4 (Cyan)

### Dark Mode
- Background: `hsl(232 47% 10%)` - #0f1629
- Primary: `hsl(271 91% 65%)` - #a855f7 (Mor)
- Secondary: `hsl(199 89% 48%)` - #06b6d4 (Cyan)

## 📝 Fontlar

- **Display (Başlıklar):** Space Grotesk
- **Body (Metin):** Inter

## 🔧 Özelleştirme

### Renkleri değiştirmek için:
`src/index.css` dosyasındaki CSS değişkenlerini düzenleyin.

### Yeni sayfa eklemek için:
1. `src/pages/` klasörüne yeni bir component ekleyin
2. `src/App.jsx` dosyasında route tanımlayın

### Component eklemek için:
1. `src/components/` klasörüne yeni component ekleyin
2. İlgili sayfada import edin

## 📞 İletişim

- **Telefon:** 0850 228 75 74
- **E-posta:** antalya@antalyakiralama.com
- **Website:** https://antalyakiralama.com

---

© 2025 Antalya Kiralama. Tüm hakları saklıdır.
