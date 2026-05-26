English Version
Netflix-Like Movie/Series Platform Web Application
A responsive, type-safe full-stack film streaming dashboard built using Next.js (App Router), TypeScript, and Tailwind CSS. This application implements clean architectural boundaries guided by the SOLID design principles, complete with route-guarded authentication, live global search across polymorphic arrays, and local persistence for custom watchlist management.

Evaluation Quick Start
To evaluate this application with zero local configuration overhead, use the official prescriptive testing accounts below:

Demo Credentials
Email: test@example.com

Password: 123456

Features Implemented
Core Mandatory Requirements
Responsive Layout & Design (35 Points): Pixel-perfect cinematic dark mode matching the traditional Netflix aesthetic. Completely responsive scaling using Tailwind fluid breakpoints across mobile, tablet, and desktop interfaces. Includes horizontal scrolling genre strips with custom overlay navigation arrows.

Dynamic Home Screen & Hero Banner: Features an immersive widescreen hero graphic fetched dynamically via abstract contract calls, styled using backdrop blur filters and custom linear bottom gradients to eliminate harsh edges.

Dynamic Title Detail Routing (/title/[id]): Fully dynamic Next.js parameter capture segment that splits presentational component layout wrappers from data retrieval cycles. Includes an automated custom fallback to the Next native notFound() component tree when encountering unregistered tracking vectors.

State Persistence Control ("My List"): Global cross-component data synching powered by clean React Context layers. Saves, appends, updates, and deduplicates custom watchlists via persistent browser storage hooks that instantly recalculate lists on current render screens.

Full-Spectrum Filter Search: Client-side instant query evaluation mechanism wrapped elegantly inside an app-level React <Suspense> container to pass zero-loss static optimization build checks.

Bonus Items Included
Contextual Category Recommendation Matrix: The Title Details screen extracts properties from the targeted module to instantly build a local "More Like This" row containing shared tags while cleanly ignoring duplication of the primary source asset.

Browser Preflight Reset Validation: Form text nodes inherit text element variables safely across native Tailwind preflight reset configurations to guarantee consistent user field entry readability.

Turkish Version
Netflix Benzeri Film/Dizi Platformu Web Uygulaması
Next.js (App Router), TypeScript ve Tailwind CSS kullanılarak geliştirilmiş; duyarlı (responsive) ve tip güvenli (type-safe) bir full-stack film akış panelidir. Bu uygulama, SOLID tasarım prensipleri rehberliğinde temiz mimari sınırlar uygulamanın yanı sıra, rota korumalı kimlik doğrulama (authentication), polimorfik diziler üzerinde canlı genel arama ve özel izleme listesi yönetimi için yerel kalıcılık (local persistence) özelliklerini barındırır.

Değerlendirme İçin Hızlı Başlangıç
Bu uygulamayı yerel kurulum gereksinimleri olmadan değerlendirmek için aşağıdaki resmi test hesaplarını kullanabilirsiniz:

Demo Giriş Bilgileri
E-posta: test@example.com

Şifre: 123456

Uygulanan Özellikler
Temel Zorunlu Gereksinimler
Duyarlı Düzen ve Tasarım (35 Puan): Geleneksel Netflix estetiğine uygun, piksel düzeyinde mükemmel sinematik karanlık mod. Mobil, tablet ve masaüstü arayüzlerinde Tailwind akışkan kesme noktaları (breakpoints) kullanılarak tamamen duyarlı ölçeklendirme. Özel yön oklarına sahip yatay kaydırılabilir tür şeritleri içerir.

Dinamik Ana Ekran ve Tanıtım (Hero) Afişi: Soyut sözleşme (contract) çağrıları aracılığıyla dinamik olarak getirilen, keskin kenarları ortadan kaldırmak için arka plan bulanıklaştırma (backdrop-blur) filtreleri ve özel doğrusal alt geçiş efektleri (gradients) ile canlandırılmış geniş ekran bir tanıtım görseli barındırır.

Dinamik Başlık Detay Rotası (/title/[id]): Sunumsal bileşen düzeni sarmalayıcılarını veri getirme döngülerinden ayıran tamamen dinamik Next.js parametre yakalama segmenti. Kayıtlı olmayan bir kimlik algılandığında yerel Next notFound() bileşen ağacına otomatik bir geçiş içerir.

Durum Kalıcılık Kontrolü ("Listem"): Temiz React Context katmanları tarafından desteklenen, bileşenler arası küresel veri senkronizasyonu. Tarayıcı depolama kancaları (hooks) vasıtasıyla özel izleme listelerini kaydeder, ekler, günceller ve tekilleştirir; listeleri mevcut render ekranlarında anında yeniden hesaplar.

Tam Kapsamlı Filtreli Arama: Sıfır kayıplı statik optimizasyon derleme kontrollerinden geçebilmesi için uygulama düzeyinde bir React <Suspense> kapsayıcısı içine temiz bir şekilde sarılmış, istemci tarafı anlık sorgu değerlendirme mekanizması.

Dahil Edilen Bonus Maddeler
Bağlamsal Kategori Öneri Matrisi: Başlık Detayları ekranı, hedeflenen modülden özellikleri çıkararak, ana varlığın kopyalanmasını temiz bir şekilde göz ardı ederken, paylaşılan etiketleri içeren yerel bir "Bunun Gibiler" satırını anında oluşturur.

Tarayıcı Ön Kontrol (Preflight) Sıfırlama Doğrulaması: Form metin düğümleri, kullanıcı alan girişlerinin tutarlı okunabilirliğini garanti etmek için Tailwind ön kontrol sıfırlama yapılandırmaları altında metin öğesi değişkenlerini güvenli bir şekilde devralır.

export interface ContentRepository {
  getAll(): Promise<CardContent[]>;
  getById(id: number): Promise<Content | null>;
  search(query: string): Promise<CardContent[]>;
  similarTo(id: number): Promise<CardContent[]>;
}