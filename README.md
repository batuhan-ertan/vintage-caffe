# ☕ Vintage Caffe

İzmir'in kalbinde, 1950'lerin sıcak kahvehane atmosferini yaşatan bir üçüncü nesil kahve evi için geliştirilmiş, tek sayfalık, tamamen responsive bir web sitesi.

**🔗 Canlı site:** [batuhan-ertan.github.io/vintage-caffe](https://batuhan-ertan.github.io/vintage-caffe/)

![Vintage Caffe önizleme](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80)

## Proje Hakkında

Bu site, *Web Tasarım Teknikleri* dersi kapsamında öğrenilen **AI destekli prompt mühendisliği** süreciyle sıfırdan geliştirildi. Klasik bir "tasarla ve kodla" akışı yerine, her tasarım kararı (kullanıcı personaları, iş hedefleri, renk psikolojisi, wireframe kararları, CSS sistemi) yapılandırılmış promptlarla üretildi ve doğrulandı.

Sürecin tamamı — persona analizinden final koda kadar — [`DESIGN-PROCESS.md`](./DESIGN-PROCESS.md) dosyasında belgelenmiştir.

## Özellikler

- 🎨 **Tutarlı tasarım sistemi** — CSS custom properties ile merkezi renk, tipografi ve boşluk yönetimi
- 🌗 **Koyu mod desteği** — `prefers-color-scheme` ile otomatik
- 📱 **Mobile-first responsive** — masaüstü / tablet / mobil için ayrı breakpoint stratejisi
- ♿ **Erişilebilirlik** — WCAG AA kontrast oranları, aria etiketleri, `prefers-reduced-motion` desteği, skip-navigation
- ⚡ **Sade & hızlı** — framework yok, sadece saf HTML / CSS / JavaScript
- 🍔 **Mobil navigasyon** — sticky header + erişilebilir hamburger drawer menü
- ✉️ **Bülten formu** — client-side doğrulama ve başarı geri bildirimi

## Kullanılan Teknolojiler

| Katman | Teknoloji |
|---|---|
| Yapı | Semantic HTML5 |
| Stil | Saf CSS3 (custom properties, Grid, Flexbox) |
| Etkileşim | Vanilla JavaScript (framework yok) |
| Tipografi | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts) |
| Barındırma | GitHub Pages |

## Proje Yapısı

```
vintage-caffe/
├── index.html          # Tüm sayfa bölümleri (header, hero, menü, hikayemiz, yorumlar, footer)
├── style.css            # Tasarım sistemi + tüm bileşen stilleri + responsive kurallar
├── script.js             # Sticky header, hamburger menü, form, dinamik yıl
├── DESIGN-PROCESS.md  # AI destekli tasarım sürecinin tam dökümü
└── README.md
```

## Yerelde Çalıştırma

Herhangi bir kurulum veya bağımlılık gerekmez:

```bash
git clone https://github.com/batuhan-ertan/vintage-caffe.git
cd vintage-caffe
# index.html dosyasını tarayıcıda aç, ya da:
python3 -m http.server 8000
```

## Tasarım Sistemi Özeti

| Rol | Renk | Kullanım |
|---|---|---|
| `--color-bg-primary` | `#FAF6F0` | Sayfa arka planı |
| `--color-text-primary` | `#2B1D14` | Başlık / gövde metni |
| `--color-accent` | `#A8542E` | CTA, link, vurgu (bakır) |
| `--color-footer-bg` | `#241812` | Footer arka planı |

Tam palet, ton skalası ve tasarım kararlarının gerekçeleri için `DESIGN-PROCESS.md`'ye bakın.

## Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

*Geliştiren: [Batuhan Ertan](https://github.com/batuhan-ertan) — Yönetim Bilişim Sistemleri, Dokuz Eylül Üniversitesi*
