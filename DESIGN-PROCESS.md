# Vintage Caffe — AI Destekli Tasarım Süreci

Bu doküman, web sitesinin "Web Tasarım Teknikleri" dersi 9-13. hafta materyalindeki
prompt mühendisliği sürecine göre nasıl geliştirildiğini özetler. Her bölüm, o aşamada
alınan tasarım kararını ve gerekçesini içerir.

---

## Faz 1 — Kullanıcı İhtiyaçları

**3 Persona:**
1. **Nostalji Arayan Profesyonel (28-45 yaş)** — Instagram/Pinterest aktif, uzun süre
   oturup çalışan/okuyan, "üçüncü mekan" arayan kentli. Web sitesinden menü, atmosfer
   fotoğrafları ve konum bekliyor.
2. **Gezgin/Turist** — Google'da "authentic Izmir cafe" arıyor, hikaye ve otantiklik
   arıyor, İngilizce içerik ve net konum/saat bilgisi önemli.
3. **Hafta Sonu Çifti** — Sohbet edebilecekleri sakin bir mekan arıyor, menü çeşitliliği
   ve rezervasyon/yer bilgisi öncelikli.

**Motivasyon haritası:** Bilgi (menü/saat/konum) > Güven (hikaye, yorumlar) > İlham
(atmosfer görselleri) > Aksiyon (yol tarifi, telefon).

**Acı noktaları (rakip sitelerde):** Menüye ulaşmak zor, mobilde bozuk görünüm,
"gerçek mekan" hissi eksik (stok görseller), iletişim bilgisi gömülü.

## Faz 2 — İş Hedefleri

**Hedef hiyerarşisi:** 1) Marka bilinirliği (SEO + hikaye) → 2) Müşteri sadakati
(sosyal medya bağlantısı, bülten) → 3) Operasyonel verimlilik (SSS, saat, konum).
Küçük işletme + düşük teknik kapasite kısıtı nedeniyle online sipariş/rezervasyon
sistemi MVP kapsamı dışında tutuldu; CTA "Bizi Ziyaret Edin" (yol tarifi + telefon).

**Kısıt analizi:** 2 kişilik ekip, düşük teknik bilgi → statik site + kolay
güncellenebilir menü bölümü. İçerik üretim kapasitesi: haftada 1-2 fotoğraf.

## Faz 3 — Marka Tonu ve Renk Yönü

Logo dosyası olmadığından, marka tonu doğrudan tanımlandı: **sıcak, otantik, vintage,
hikaye odaklı**. Bu tondan türetilen renk stratejisi: bakır/toprak + koyu kahve + krem
— 1950'ler Levanten kahvehane estetiğine referans.

## Faz 4 — Discovery Özeti

- **Şirket ne iş yapıyor:** İzmir'de üçüncü nesil, retro atmosferli bir kahve evi.
- **Hedef kitle:** Birincil = nostalji arayan profesyoneller; ikincil = turistler.
- **Rakipler:** Modern/minimalist kafe siteleri yoğun — vintage kimlik farklılaşma
  noktası.
- **Site amacı:** Ziyaret kararını tetiklemek (konum + atmosfer + menü netliği).
- **İçerikler:** Ana Sayfa, Menü, Hikayemiz, Galeri, İletişim.
- **Bütçe/süre:** MVP — tek sayfa (one-page) statik site, 3-4 haftalık kapsam.

---

## 10. Hafta — Wireframe Kararları

**Fonksiyonel mi estetik mi?** Estetik öncelikli (marka hissi önce, CTA ikincil) —
vintage/nostaljik kimlik, atmosferi hissettirmek birincil hedef; iletişim/menü
bilgisi ikincil ama net olmalı.

- **Container:** 960px max-width, masaüstü öncelikli grid.
- **Logo yerleşimi:** Sol hizalı, sticky header'da küçülen wordmark.
- **Navigasyon:** Yatay üst bar (masaüstü) + hamburger/drawer (mobil, 768px altı).
- **İçerik hiyerarşisi:** Hero (tam ekran) → Değer önerisi → Menü öne çıkanlar →
  Hikayemiz (asimetrik) → Yorumlar → CTA/Footer.
- **Denge:** Hikayemiz bölümü asimetrik (altın oran 594px/366px), Menü bölümü simetrik
  grid (3 kart).
- **Görsel ilkeler:** 60-30-10 renk kuralı, tutarlı kart/buton bileşen sistemi,
  WCAG AA kontrast zorunluluğu.

## 11. Hafta — Renk Teorisi + CSS Değişkenleri

**Renk psikolojisi:** Bakır/toprak tonları → sıcaklık, otantiklik, "eskimeyen kalite"
hissi. Koyu kahve → güven, derinlik. Krem/bej → temizlik, ferahlık, okunabilirlik.

**Uyum şeması:** Analog + nötr vurgu hibrit — ana bakır tonu etrafında sıcak nötrler,
tek vurgu rengi (bakır) CTA ve linklerde tutarlı kullanılıyor.

**Final palet (WCAG AA doğrulanmış):**

| Rol | HEX | Kullanım |
|---|---|---|
| `--color-bg-primary` | `#FAF6F0` | Sayfa arka planı (sıcak krem) |
| `--color-bg-surface` | `#F0E6D8` | Kart/bölüm yüzeyi |
| `--color-text-primary` | `#2B1D14` | Başlık/gövde metni (koyu kahve, siyah değil) |
| `--color-text-secondary` | `#6B584A` | İkincil metin/etiket |
| `--color-accent` | `#A8542E` | CTA, link, vurgu (bakır) — beyaz üzerinde 4.6:1 |
| `--color-accent-hover` | `#8A4324` | Hover durumu (koyu bakır) |
| `--color-accent-light` | `#EFE0D1` | Vurgu bölüm arka planı (testimonials) |
| `--color-border` | `#DDD0BE` | İnce ayırıcılar |
| `--color-footer-bg` | `#241812` | Footer arka planı (en koyu kahve) |

Ton skalası, koyu mod ve tam `:root` bloğu `style.css` içinde.

## 12. Hafta — Implementasyon

Header (sticky + hamburger) → Hero (görsel + overlay + staggered animasyon) →
İçerik bölümleri (menü kartları, asimetrik hikaye, testimonials) → Footer (bülten
formu, SVG sosyal ikonlar, dinamik yıl) → Birleştirme (tek `index.html` +
`style.css` + `script.js`) → Responsive (mobile-first media query'ler) → Test.

Tüm kod production-ready: CSS değişken referanslı (hardcoded renk yok), WCAG AA
kontrast, `prefers-reduced-motion` desteği, semantic HTML, aria etiketleri.
