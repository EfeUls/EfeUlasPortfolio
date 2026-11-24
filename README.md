# Efe Ulaş Portföyü

## Yerel geliştirme

```sh
npm ci --legacy-peer-deps
npm start
```

Üretim çıktısını `npm run build` komutuyla oluşturabilirsiniz. Çıktı `build/` dizinine yazılır. Rotalar URL’nin `#` bölümünü kullanır, örneğin `/#/projects`.

## İçerik

- Profil, yetkinlikler, eğitim, deneyim ve iletişim bilgileri `src/portfolio.js` dosyasından düzenlenir.
- Proje kartları ve galeriye eklenecek görseller `src/shared/projects.json` dosyasında tanımlanır. Galeri görselleri `public/images/` dizininde tutulur.
- İletişim formu bir e-posta taslağı hazırlar. Ziyaretçi gönderimi kendi e-posta uygulamasında tamamlar.
- İsteğe bağlı GitHub veri aktarımı için ortamda `GITHUB_TOKEN` tanımlayıp `npm run fetch:github` komutunu çalıştırın. Üretilen dosyalar `src/shared/opensource/` dizinine yazılır. Portföydeki proje kartları elle düzenlenen proje listesini kullanır.
