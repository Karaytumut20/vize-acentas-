export const visaDatabase: Record<string, any> = {
  'schengen-vizesi': {
    title: 'Schengen Vizesi',
    subtitle: '27 Avrupa Ülkesine Tek Vize ile Sınırları Aşın',
    heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=2000',
    description: 'Almanya, Fransa, İtalya, İspanya, Hollanda gibi 27 Avrupa ülkesinde serbest dolaşım hakkı tanıyan Schengen vizesi başvuru rehberi. 2026 yılı güncel Schengen harçları ve gerekli evraklar.',
    content: `
      <p class="mb-4"><strong>Schengen vizesi</strong>, Avrupa Kıtasındaki 27 farklı ülkeye tek bir pasaport etiketiyle serbestçe seyahat imkanı sunan dünyanın en prestijli vize türlerinden biridir. 2026 yılı itibariyle Schengen anlaşması kuralları güncellenmiş ve özellikle parmak izi (biyometrik veri) uygulamaları dijital platformlara daha entegre hale gelmiştir.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Schengen Vizesi Hangi Ülkeleri Kapsar?</h3>
      <p class="mb-4">Almanya, Avusturya, Belçika, Çek Cumhuriyeti, Danimarka, Estonya, Finlandiya, Fransa, Hırvatistan, Hollanda, İspanya, İsveç, İtalya, İzlanda, Letonya, Lihtenştayn, Litvanya, Lüksemburg, Macaristan, Malta, Norveç, Polonya, Portekiz, Slovakya, Slovenya, Yunanistan ve yeni katılan bölgelerde tamamen geçerlidir.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">VFS Global, iDATA ve Kosmos Üzerinden Randevu Nasıl Alınır?</h3>
      <p class="mb-4">Schengen randevusu almak 2026 sezonunun en zorlu adımıdır. Doğrudan konsolosluğa gitmek yerine, Fransa ve Hollanda için <strong>VFS Global</strong>, Almanya ve İtalya için <strong>iDATA</strong>, Yunanistan için ise <strong>Kosmos Vize</strong> kurumlarından randevu oluşturulur. Champ Vize, VIP randevu botları ve hızlı erişim yetkileri sayesinde haftalarca beklemenize gerek kalmadan randevunuzu en erken tarihe planlar.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">En Kolay Schengen Vizesi Veren Ülkeler (2026 Stratejisi)</h3>
      <p class="mb-4">Vize başvurusunda "Kural İhlali" (Visa Shopping) durumuna düşmemek için ilk ve en uzun konaklamayı yapacağınız ülkeden başvuru yapmalısınız. Dosya durumunuza göre Champ Vize uzmanları en hızlı sonuçlanacak konsolosluğu stratejik olarak sizinle birlikte belirler.</p>
    `,
    processingTime: 'Ortalama 15-20 İş Günü',
    validity: '6 Ay ila 5 Yıl (Profilinize Göre)',
    fees: '90 EUR Konsolosluk Harcı (2026) + Danışmanlık Bedeli',
    howToApply: `Schengen vizesi başvurularında en önemli unsur "Niyetin İspatı" ve "Maddi Yeterlilik"tir. Konsolosluklar, ülkenize geri döneceğinize ikna olmak ister. Champ Vize uzmanları, sponsorluk mektuplarından banka hesabı dökümlerinize kadar dosyanızı red riski almadan profesyonelce sunar.`,
    requirements: [
      {
        category: 'Çalışanlar İçin',
        items: [
          'Pasaport (Seyahat bitiminden itibaren en az 3 ay geçerli ve 2 boş sayfası olan)',
          'E-Devletten barkodlu SGK Tescil ve Hizmet Dökümü (Tüm geçmişi göstermeli)',
          'Son 3 aylık, bankadan kaşeli-imzalı maaş hesabı dökümü (Günlük en az 100 EUR karşılığı bakiye olmalı)',
          'İşveren tarafından antetli kağıda yazılmış, izin tarihlerinizi belirten İngilizce dilekçe',
          'Şirket evrakları fotokopileri (Vergi levhası, güncel faaliyet belgesi, imza sirküleri, sicil gazetesi)',
          '2 adet 35x45mm Schengen standartlarında biyometrik fotoğraf',
          'Tam Tekmil Vukuatlı Nüfus Kayıt Örneği ve İkametgah Belgesi (E-devlet)'
        ]
      },
      {
        category: 'İşverenler / Şirket Sahipleri',
        items: [
          'Pasaport (Seyahat bitiminden itibaren en az 3 ay geçerli)',
          'Şirket evrakları (Güncel ASO/İTO faaliyet belgesi, vergi levhası, imza sirküleri, ticaret gazetesi)',
          'Şirket banka hesabı son 3 aylık hareket dökümü (Hesapta ticari hareketi kanıtlar nitelikte olmalı)',
          'Şahsi banka hesabı son 3 aylık hareket dökümü (Kaşeli/İmzalı)',
          'Tapu, araç ruhsatı gibi şahsi ek varlıkların fotokopileri'
        ]
      }
    ],
    faq: [
      { q: 'Schengen vize başvurusu (iDATA, VFS Global, Kosmos) randevu alma hilesi var mıdır?', a: 'Randevular doğrudan yetkili aracı kurum sistemlerinden alınır. "Hile" diye bir şey yoktur; ancak Champ Vize profesyonel bot yazılımları ve premium ajans ekranları kullanarak açılan iptal randevularını sizin adınıza saniyeler içinde kilitler.' },
      { q: '10 Yıllık Schengen vizesi nasıl alınır? (Schengen Vize Kuralı)', a: 'Schengen vizeleri kademeli (cascade) kuralına göre verilir. İlk başvuruda genellikle seyahat süresi (tek giriş) verilirken, vizelerinizi kurallı kullandıkça (Önce vizeyi veren ülkeye giriş yapmak) 6 ay, 1 yıl, 3 yıl ve en son 5 yıllık (maksimum Schengen süresi) vize alabilirsiniz.' },
      { q: 'Schengen vizesi reddi (9. veya 13. madde) sonrası hemen tekrar başvuru yapılır mı?', a: 'Eğer 9. Madde (Seyahat amacı inandırıcı değil) veya 13. Madde (Ülkeye geri dönüş garantisi yok) aldıysanız, 1 ay içinde resmi, İngilizce hukuki bir "İtiraz Dilekçesi (Appeal)" yazılabilir. Durumunuz değişmemişse hemen başvurmak tekrar red getirir; eksik belgeler (banka, SGK, niyet mektubu) güçlendirilmelidir.' },
      { q: 'Schengen vizesi için banka hesabında 2026 yılı için ne kadar para bulunmalı?', a: 'Hesabınızda kalacağınız gün x 100-150 EUR tutarında bakiye olmalıdır (Örn: 7 gün için 1.000 EUR veya 35.000 TL). Ancak bu paranın hesaba bir gün önce yığılması şüpheli işlem ("Fund Parking") olarak algılanıp reddedilir.' },
      { q: 'Schengen vizesi ile İngiltere\'ye (Londra) veya Amerika\'ya gidebilir miyim?', a: 'Hayır. İngiltere ve Amerika Birleşik Devletleri Schengen Bölgesine dahil değildir, ayrı ulusal vizeler gerektirir. Ancak Schengen vizeniz ile Bulgaristan, Romanya, Güney Kıbrıs ve Hırvatistan gibi bazı AB ülkelerine transit veya doğrudan giriş yapabilirsiniz.' },
      { q: 'Çalışmayanlar, Ev Hanımları veya Öğrenciler Schengen Vizesi Alabilir mi?', a: 'Evet. Fakat birinci derece yakınınızın (Anne, Baba, Eş) "Sponsor" olması ve sponsorun kendi maaş, SGK, tapu ve banka belgelerini ıslak imzalı bir "Sponsorluk Dilekçesi" ile sunması ZORUNLUDUR.' },
      { q: 'Vize başvurusunda otel ve uçak bileti satın almak zorunlu mudur?', a: 'Konsolosluklar vize çıkmadan bilet satın alınmasını KESİNLİKLE önermezler. Champ Vize, sizin için PNR (rezervasyon) üzerinden doğrulanabilir, süresi uzun geçici biletlemeler yaparak maddi kaybınızı engeller.' },
      { q: 'İlk giriş kuralı (Visa Shopping) nedir? Vize İptal Olur mu?', a: 'Schengen vizesini hangi ülkeden aldıysanız, o vizeyle ilk seyahatinizi O ÜLKEYE yapmak zorundasınız. Almanya\'dan vize alıp ilk olarak Fransa\'ya uçarsanız sınır polisi sizi deport edebilir ve bir sonraki başvurunuz kesinlikle reddedilir.' }
    ]
  },
  'amerika-vizesi': {
    title: 'Amerika (ABD) Vizesi',
    subtitle: '10 Yıllık Amerika Vizesi İçin Profesyonel Mülakat Mentörlüğü',
    heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=2000',
    description: 'ABD DS-160 Formu nasıl doldurulur? B1/B2 turizm ve iş vizeleri için Ankara ve İstanbul Amerika Büyükelçiliği 2026 mülakat randevusu süreçleri.',
    content: `
      <p class="mb-4"><strong>Amerika (ABD) Vizesi</strong>, dünyanın en meşakkatli gibi görünen ancak mantığını anladığınızda en uzun süreli verilen vize tiplerinin başında gelir. B1/B2 Ticari ve Turistik vizelerde genellikle <strong>10 yıllık çok girişli (multiple entry)</strong> kullanım hakkı standarttır.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">DS-160 Formu: Başvurunun Kalbi</h3>
      <p class="mb-4">Amerika konsolosluğunda mülakatınız ortalama sadece 2-3 dakika sürer. Konsolosluk yetkilisinin masasına gittiğinizde kararının %90'ı çoktan bellidir. Bu kararı verdikleri yer, tamamen dijital ortamda İngilizce olarak doldurulan <strong>DS-160 (Non-immigrant Visa Application)</strong> formudur. Formda yazdığınız "Aylık gelir, önceki seyahatler, ABD'deki akrabalar, iş geçmişi" gibi soruların birbiriyle olan mantıksal uyumu red veya onay metriklerini oluşturur. Biz bu formu sıfır hatayla konsolosluk beklentilerine göre örüyoruz.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Randevu Bekleme Süreleri ve Hızlandırma Başvurusu</h3>
      <p class="mb-4">2026 yılı Amerika vizesi randevuları ciddi bir yoğunluk yaşamaktadır. Ankara ve İstanbul Konsoloslukları turistik vizeler için 9-12 ay sonrasına gün verebilmektedir. Ancak Champ Vize'nin takip sistemleri sayesinde "iptal olan randevular" yakalanarak aylar sonrasındaki randevular <strong>2-3 hafta içerisine</strong> çekilebilmektedir.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Amerika Mülakat Tüyoları</h3>
      <p class="mb-4">Konsolosa gereksiz hiçbir evrak sunmamalısınız. Mülakat esnasında dürüst, net ve özgüvenli cevaplar vermelisiniz. Vize uzmanlarımız mülakat öncesinde sizinle "Konsolos Rolü" oynayarak yaşayabileceğiniz muhtemel 10 soruyu test eder.</p>
    `,
    processingTime: 'Mülakat Günü Onay, 3 Gün İçinde PTT Kargo',
    validity: '10 Yıl Çok Girişli (B1/B2 Türleri İçin)',
    fees: '185 USD MRV Konsolosluk Harcı (2026) + Danışmanlık',
    howToApply: `ABD vizesinde yüz yüze mülakat esastır. Mülakat sırasında pasaportunuz yetkili tarafından köşeye ayrılır ("Yani vizeniz onaylandı") veya size renkli bir kağıtla (Örn: 214(b) maddesi) pasaportunuz iade edilir ("Reddedildi"). Champ Vize bu 3 dakikalık anı yönetecek psikolojik tüyoları verir.`,
    requirements: [
      {
        category: 'Konsolosluk Mülakatına Götürülecek Evraklar',
        items: [
          'Pasaport (Eski pasaportlarınızdaki vizeler altın değerindedir, mutlaka getirilmelidir)',
          'DS-160 Formu Barkodlu Onay Sayfası Gönderi Çıktısı',
          'MRV Başvuru Harcı (185$) Ödendi Dekontu PNR Ekranı',
          '1 Adet 5x5 cm (2x2 inç) beyaz fonlu, yüzün %50-69 oranında olduğu güncel fotoğraf',
          'Destekleyici Evraklar Dosyası: SGK, Maaş Bordrosu, Banka Bakiyesi, Tapu Ruhsat, Öğrenciyse Transkript (Konsolos sormadıkça dosyadan çıkarıp vermeyin.)'
        ]
      }
    ],
    faq: [
      { q: 'DS-160 vize başvuru formu Türkçe mi doldurulur?', a: 'DS-160 formu Amerikan Dışişleri Bakanlığının resmi online formudur ve tamamen, hatasız ve detaylı bir İNGİLİZCE ile doldurulmak zorundadır. Harf veya format hataları mülakatta 214(b) maddesinden direkt reddedilmenize yol açar.' },
      { q: 'Amerika vize reddi 214(b) maddesi nedir, tekrar başvurulur mu?', a: '214(b) maddesi "Göçmen olma potansiyeli taşıyan ve ülkesine bağları zayıf" kişilere verilir. Mülakattaki 1 cümleniz buna sebep olabilir. Hayatınızda olumlu bir değişiklik (yeni iş, artan mal varlığı, evlilik, daha iyi bir niyet mektubu) yaparak tekrar başvuru harcı ödeyip mülakata girebilirsiniz.' },
      { q: '10 Yıllık Amerika (B1/B2) Vizesi almak için pasaportum 10 yıllık mı olmalı?', a: 'Hayır. Pasaportunuzun bitmesine 1 yıl dahi kalmış olsa, onay alırsanız Amerika vizenizi 10 Yıllık basarlar. Eski pasaportunuzdaki geçerli vizenizi, yeni çipli pasaportunuzla birlikte zımbalayarak sınırda ömür boyu kullanabilirsiniz.' },
      { q: 'Amerika mülakatında İngilizce konuşmak zorunlu mu?', a: 'Eğer Turistik (B2) veya Ticari (B1) başvuru yapıyorsanız mülakatta KESİNLİKLE İngilizce konuşmak ZORUNDA DEĞİLSİNİZ. Sıraya girdiğinizde görevliden Türkçe bilen konsolosa yönlendirilmeyi talep edebilirsiniz (bütün memurların yanında Türk asıllı çevirmen bulunur).' },
      { q: 'F1 Öğrenci vizesi veya J1 Work and Travel mülakatında ne sorulur?', a: 'Öğrenci vizelerinde I-20 kabul belgenizin nedenleri, bölümü neden ABD\'de okumak istediğiniz (Türkiye\'de o bölüm var mı?), eğitim sponsorunuzun aylık net geliri, SEVIS harcı dekontu ve mezun olunca Türkiye\'ye dönüş vizyonunuz İngilizce olarak değerlendirilir.' },
      { q: 'Amerika vize harcı yatırdıktan sonra kaç yıl geçerlidir?', a: 'ABD Vize Randevu MRV Harcı (2026 yılı için 185$) yatırıldığı tarihten itibaren tasan 1 yıl (365 gün) boyunca kişiye aittir. 1 Yıl içinde takvimde randevu oluşturmazsanız paranız konsolosluğa irad kaydedilir (yanar).' },
      { q: 'Ankara ve İstanbul konsolosluğu mülakat yeri neye göre seçilir?', a: 'Türkiye Cumhuriyeti vatandaşları dilediği konsoloslukta (Ankara Büyükelçiliği veya İstanbul İstinye Başkonsolosluğu) mülakata girebilir. İki bölgenin de onay/red kotası eşittir, tamamen size en yakın ilk randevu tarihine odaklanılır.' },
      { q: '10 yıllık geçerli vizem var, ABD sınır memuru (CBP) beni geri çevirebilir mi?', a: 'Evet. Vize sadece havalimanına inme hakkı verir. Sınır Gümrük Memuru (CBP - Customs and Border Protection) size turistik kaç gün konaklayacağınızı sorar. Otel rezervasyonunuz yoksa, telefonunuzda kaçak çalışma mesajı vs şüpheli bulursa "İptal (Cancelled Without Prejudice)" damgası basıp aynı uçakla Deport edebilir.' }
    ]
  },
  'ingiltere-vizesi': {
    title: 'İngiltere Vizesi',
    subtitle: '6 Aylık veya 10 Yıllık Birleşik Krallık Vizelerinde Profesyonel Yönetim',
    heroImage: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=2000',
    description: 'İngiltere (UK) vizesi nasıl alınır? TLS Contact TLS başvuru merkezi detayları. Priority 5 günlük hızlı başvuru ve finansal inceleme evrakları.',
    content: `
      <p class="mb-4">İngiltere (Birleşik Krallık - UK) vizesi, Avrupa standartlarından farklı bir vize inceleme komitesine (UKVI - UK Visas and Immigration) sahiptir. İngiltere konsolosluğu, başvurunuzu değerlendirirken <strong>asla mülakat yapmaz</strong>. Bütün kararı, yüklediğiniz yüzlerce PDF evrağı, finansal hareket tablonuz ve profesyonelce yazılmış olan "İngilizce Cover Letter (Niyet Mektubu)" belirler.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">İngiltere Vize Türleri Nelerdir?</h3>
      <p class="mb-4">Standard Visitor Visa olarak geçen süreçte başvurunuzu <strong>6 aylık, 2 yıllık, 5 yıllık veya 10 yıllık</strong> olarak yatırdığınız harç bedeline göre kategorize edebilirsiniz. Ancak konsolosluk, 10 yıllık başvursanız bile maddi veya güven riskinizi taşımadığı sürece bu parayı yakar ve size 6 aylık da verebilir / red de verebilir.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Finansal Profil Analizi (DİKKAT!)</h3>
      <p class="mb-4">İngiltere vizelerinin reddedilmesinin %95'i "Açıklanmayan Para Hareketleridir". İngiliz hükümeti hesabınızdaki paranın miktarından çok, o paranın oraya "yasal olarak ve vergisi ödenmiş" olarak girdiğini bilmek ister. Champ Vize finansal tablolarınızı inceler, maaşınızın ve ek gelirlerinizin harita analizini İngilizce Cover Letter dilekçesinde tek tek ispatlayarak sunar.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Express / Priority Services (2026)</h3>
      <p class="mb-4">Normal İngiltere vizesi randevudan sonra ortalama 3 haftada İngiltere / Sheffield Home Office merkezinden gelir. Ancak 5 iş gününde (Priority) veya 24 Saat içerisinde (Super Priority) VIP hizmet ek ücreti alarak onaylanan vizenizi pasaporta işletebilirsiniz.</p>
    `,
    processingTime: 'Standart 15-21 İş Günü, Priority Seçeneği 5 İş Günü',
    validity: '6 Ay ile 10 Yıl Arasında Seçimli',
    fees: '115 GBP (6 Aylık) Harç + Danışmanlık. (Priority Hizmeti 500 GBP Ek)',
    howToApply: `Sistem TLS Contact / VFS Global web sitelerine taşınmıştır. Dosyalar, İngilizce yeminli tercümeli bir şekilde sisteme Self-Upload ile yüklenir. Randevu gününde sadece biyometrik (parmak izi) verilir. Ekibimiz tüm Self Upload işlemlerini sıfır hatayla sisteminizden gerçekleştirir.`,
    requirements: [
      {
        category: 'Tüm Başvurular İçin Ana Evraklar',
        items: [
          'Pasaport (En az 6 ay geçerli, işlem görmüş tüm eski vizelerin renkli taraması)',
          'Online Başvuru Formu ve Randevu Konfirmasyon Çıktısı',
          'Maaşın yattığı banka hesabının son 6 aylık dökümü (Aylık ne kadar yaşamsal harcama yaptığınız kontrol edilir)',
          'Şirket çalışma belgeleri, güncel karekodlu SGK dökümleri (Tümü İngilizce Tercümeli Olmalı)',
          'Birleşik Krallığa gidiş/dönüş niyetinizi bildiren Yeminli Tercümesi yapılmış destekleyici faturalar/sponsor dosyaları'
        ]
      }
    ],
    faq: [
      { q: 'İngiltere 6 aylık vize reddi aldıysam param yanar mı, itiraz hakkım var mı?', a: 'İngiltere Konsolosluğu (UKVI) ret durumunda vize harcını kesinlikle iade etmez. Red mektubunda (Refusal Letter) İdari İtiraz (Administrative Review) hakkınız olup olmadığı yazar. Ancak çoğu turistik vizede "İtiraz hakkınız yoktur ancak tekrar başvuru yapabilirsiniz" ibaresi yer alır. Niyet Mektubunuzu revize edip anında tekrar başvurabilirsiniz.' },
      { q: 'İngiltere turist vizesi hesapta ne kadar para olmalı?', a: 'İngiltere hesabınızdaki Kuru veya Total paraya bakmaz. "Kaynak ve Aylık Tüketim Analizi" yapar. Aylık 30.000 TL kazanıyorsanız hesaba aniden giren 150.000 TL doğrudan RED SEBEBİDİR. Hesabınız doğal maaş akışında olmalı ve seyahat bütçeniz aylık kazancınızın aşırı üstünde (gerçekdışı) olmamalıdır.' },
      { q: 'İngiltere Cover Letter (İngilizce Niyet Mektubu) neden kritiktir?', a: 'İngiltere mülakatsız vize verdiği için konsolosluğun elindeki tek şey dökümlerdir. Ancak dökümleri okumak yorucudur. Neden adaya gitmek istediğinizi, işinizi, hesabınıza ne kadar para girdiğini net 1 sayfada "Tercüman kaşeli İngilizce Cover Letter" ile anlatmanız %90 onay kapısı aralar.' },
      { q: 'Priority (5 Günlük Ekspres) İngiltere Vizesi 2026 fiyatları ve şartları nedir?', a: 'Standart başvuru ortalama 21 iş gününde sonuçlanır. Ancak 5 iş günü garantisi (Priority) istiyorsanız Birleşik Krallık hükümeti yaklaşık £500, tamamen 24 saat sonuç (Super Priority) istiyorsanız +£1000 ekstra ücret talep eder ve her şey yine TLS Contact / VFS üzerinden yürütülür.' },
      { q: 'İngiltere vizemle (UK Visa) İrlanda Cumhuriyeti\'ne (Dublin) geçebilir miyim?', a: 'Eğer bir BIVS (British-Irish Visa Scheme) kapsamında standart turist vizeniz varsa ve adaya girişinizi ilk olarak Birleşik Krallık (Örn: Londra, Belfast) topraklarından yaptıysanız, sonrasında otobüs, tren veya feribot ile İrlanda\'ya geçiş yapabilirsiniz.' },
      { q: 'İngiltere evrak yüklemeleri "Self-Upload" mu yoksa yetkili merkezden mi yapılmalı?', a: 'Self-upload ile sisteme evrakların %100 İngilizce veya Yeminli Çevirili (tarih ve mühür basılı) barkodlanarak PDF yüklenmesi zorunludur. Yanlış kategorideki yüklü belgeler memur tarafından incelenmeyebilir. Biz sizin yerinize "Assisted Service" profesyonelliğinde yüklemeleri ofisimizden yapıyoruz.' },
      { q: 'Türkiye\'deki sponsorla öğrenci İngiltere ziyareti (Student Visitor) yapılır mı?', a: 'Evet. Ancak Öğrenci ve ailesi Türkiye\'de bağlarının kuvvetli olduğunu, öğrencinin Türkiye\'deki örgün okuluna (Devamsızlık Belgesi, YÖK belgesi) vs devam edeceğini sunmalıdır.' },
      { q: 'İngiltere Pasaportumu benden ne zaman geri alır?', a: 'TLS Contact / VFS randevu gününde (biyometrik esnasında) pasaportunuzu merkeze bırakırsınız. Onaylandığı zaman (ya da reddedildiğinde) pasaportunuz zarflı olarak kurye ile tarafınıza geri yollanır.' }
    ]
  },
  'japonya-vizesi': {
    title: 'Japonya E-Vize ve Turistik Vizesi',
    subtitle: 'Uzak Doğu Kültürüne Güvenle Açılın',
    heroImage: 'https://images.unsplash.com/photo-1493997181344-711f5fe71e36?auto=format&fit=crop&q=80&w=2000',
    description: 'Japonya e-vize başvuru şartları, 2026 konsolosluk zorunlulukları ve Day-By-Day Itinerary (Seyahat Programı) hazırlamanın püf noktaları.',
    content: `
      <p class="mb-4">Türk vatandaşları 2026 yılında Japonya'ya gerçekleştirecekleri turistik seyahatler için <strong>E-Visa (Elektronik Vize)</strong> rejimine tabi tutulmuştur. Japonya vize sistemi oldukça disiplinlidir ve kesin rezervasyon zincirini kanıtlamanız beklenir.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Day-By-Day Itinerary (Seyahat Takvimi)</h3>
      <p class="mb-4">Konsolosluğun en çok dikkat ettiği belge, gün gün nereyi gezeceğinizi anlatan çizergedir (Itinerary form). 1. Gün: Tokyo Tower Ziyareti - Tokyo Station Hotel'de Konaklama, 2. Gün: Shinkansen treni ile Kyoto'ya geçiş vb. gibi detaylı bir seyahat turu planlanmalı ve bu tur uçak biletleriyle uyuşmalıdır.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Maddi Beklentiler</h3>
      <p class="mb-4">Japonya yüksek standartlı bir ülkedir ve vize memuru günlük konaklama + yemek için en az 100 USD tutarında bir bütçenizin hesap özetinde karşılığı olmasını şart koşar.</p>
    `,
    processingTime: 'Ortalama 7-10 İş Günü',
    validity: 'Seyahat Programına Göre Birebir (Max 90 Gün)',
    fees: 'Ücretsiz Konsolosluk Harcı + Danışmanlık ve Acente Operasyon Bedeli',
    howToApply: 'Japonya büyükelçiliği şahsi başvuru kabul etmemekte ve tüm operasyonların Gateway gibi yetkilendirilmiş vize servis kurumlarıyla gerçekleştirilmesini zorunlu kılmaktadır.',
    requirements: [
      {
        category: 'Gerekli Başlıca Belgeler',
        items: [
          'Pasaport (Seyahat dönüşünden itibaren 6 ay geçerli ve boş sayfa içeren)',
          'Japonya Formatına göre doldurulmuş ve imzalanmış Vize Başvuru Formu',
          'Detaylı Gidiş - Dönüş Uçak Rezervasyonu (PNR numaralı ama kesinlikle satın alınmamış)',
          'Onaylı ve ödenmiş otel rezervasyon dökümleri',
          '1 adet 4.5x4.5 cm ölçülerinde özel ebatlı güncel, arka fonu mat beyaz fotoğraf'
        ]
      }
    ],
    faq: [
      { q: 'Japonya vizesi için banka hesabında ne kadar para olmalı?', a: 'Japonya Konsolosluğu, seyahat süreniz boyunca günlük en az 100 USD (veya karşılığı TL/EUR) harcayabileceğinizi gösteren bir banka bakiyesi bekler. Bu tutarın seyahat öncesi aniden yatırılması yerine, düzenli birikim veya maaş akışı şeklinde olması önemlidir.' },
      { q: 'Japonya E-Vize başvurusu nasıl yapılır?', a: 'Japonya E-Vize başvurusu tamamen online platform üzerinden yapılır. Gerekli belgeler (pasaport taraması, fotoğraf, seyahat planı, otel/uçak rezervasyonları) sisteme yüklenir. Champ Vize, bu süreci hatasız yöneterek başvurunuzu tamamlar.' },
      { q: 'Japonya vizesi için seyahat planı (Itinerary) neden bu kadar önemli?', a: 'Japonya Konsolosluğu, seyahat amacınızın net ve inandırıcı olmasını ister. Gün gün detaylandırılmış seyahat planı (Day-By-Day Itinerary), konaklama ve ulaşım bilgilerinizle uyumlu olmalı ve ülkeye geri döneceğinize dair güçlü bir kanıt sunmalıdır.' },
      { q: 'Japonya vizem etiket olarak basılacak mı?', a: 'Hayır, 2026 yılı itibarıyla Japonya E-Vize sistemine geçmiştir. Vizeniz pasaportunuza fiziksel olarak basılmaz; barkodlu bir PDF belgesi olarak e-posta adresinize gönderilir. Bu belgeyi çıktısını alarak veya dijital olarak gümrükte ibraz edebilirsiniz.' },
      { q: 'Uçak biletini satın alırsam daha mı garantili olur?', a: 'Aksine, Japonya Konsolosluğu vize onaylanmadan uçak bileti satın alınmasını önermez. Rezervasyon (PNR numaralı) sunmanız yeterlidir. Champ Vize, maddi kaybınızı önlemek adına doğrulanabilir geçici biletlemeler sağlar.' },
      { q: 'Japonya vizesi için fotoğraf spesifikasyonları nelerdir?', a: 'Japonya vizesi için 4.5x4.5 cm boyutlarında, arka fonu beyaz, güncel ve biyometrik özelliklere uygun fotoğraf gereklidir. Yüzün net ve belirgin olması, gözlük veya şapka gibi aksesuarların olmaması önemlidir.' },
      { q: 'Japonya vizesi reddedilirse ne yapmalıyım?', a: 'Japonya vizesi reddedilirse, ret nedenini öğrenmek ve eksiklikleri gidermek önemlidir. Genellikle seyahat amacının inandırıcı bulunmaması veya finansal yetersizlikler ret nedenidir. Durumunuzu güçlendirerek tekrar başvuru yapabilirsiniz.' },
      { q: 'Japonya vizesi için davetiye mektubu gerekli mi?', a: 'Turistik başvurularda davetiye mektubu zorunlu değildir. Ancak aile ziyareti veya ticari amaçlı seyahatlerde Japonya\'daki bir kişi veya kurumdan alınmış resmi davetiye mektubu başvuruyu güçlendirir.' }
    ]
  },
  'kanada-vizesi': {
    title: 'Kanada Vizesi',
    subtitle: 'Kanada TRV Turistik ve Öğrenci Vizeleri (2026)',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=2000',
    description: 'Kanada ziyaretçi vizesi, Express Entry ve Göçmenlik yasalarına dair 2026 güncel bilgilendirmeler.',
    content: `
      <p class="mb-4">Kanada, TRV (Temporary Resident Visa) başvurularında dünyadaki en sıkı filtreleri kullanan ülkelerden biridir. Sistem tamamen Online (IRCC portalı) üzerinden GCKey alınarak yönetilir.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Online Sistem (IRCC) Avantajı</h3>
      <p class="mb-4">Kanada vizelerinde hiçbir orijinal evrak teslim edilmez. Evraklarınız yüksek çözünürlükte taranarak PDF haline getirilir, e-devletten veya yeminli tercümandan alınan tüm dökümler dijital olarak portala yüklenir. Champ Vize teknik destek ekibi tüm sistemsel boyutu sizin adınıza GCKey şifrenizle eksiksiz 5MB'ın altına sıkıştırarak entegre eder.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Red Riskini En Aza İndirmek</h3>
      <p class="mb-4">Geri dönmeme ihtimaliniz, Kanada'da yasadışı yollarla çalışma ihtimaliniz her başvuran Türk vatandaşında bir risk olarak skorlanır. Seyahat siciliniz (eski Schengen, UK, Amerika vizeleriniz) Kanada vizesinin onayını %80 artırır. Çok seyahat etmiş olmanız büyük bir kozdur.</p>
    `,
    processingTime: 'Randevu Sonrası 4-8 Hafta (Değişken)',
    validity: 'Pasaport Bitiş Tarihine Kadar (Maks 10 Yıl)',
    fees: '100 CAD Başvuru Harcı + 85 CAD Biyometri Ücreti',
    howToApply: 'Tüm dökümler sisteme işlendikten sonra VFS Global merkezlerine, sistemden alınan randevu çıktısıyla sadece Biyometrik (Parmak izi) ve yüz taraması yaptırmak için gidilir. Kanada pasaportunuzu ilk etapta sizden teslim almaz. Vize çıktığında "Passport Request" adı altında e-posta alırsınız ve pasaportunuz ondan sonra kargo ile konsolosluğa etiket basılması için iletilir.',
    requirements: [
      {
        category: 'Kanada Dijital Belgeler Listesi',
        items: [
          'Pasaport Bio sayfasının ve işlem görmüş vizelerin renkli taraması',
          'Aile Bilgi Formu (IMM 5645 PDF formatında - Biz dolduruyoruz)',
          'Finansal yeterliliği gösteren imza sirkülü banka ekstreleri (İngilizce)',
          'Tüm aileyi ve bağları anlatan ikametgah, tapu, araç belgeleri yeminli tercümeleri'
        ]
      }
    ],
    faq: [
      { q: 'Kanada TRV vizesi (Temporary Resident Visa) nedir?', a: 'Geçici İkamet Vizesi (TRV); turistik, aile ziyareti veya ticari amaçlı 6 aydan daha kısa süreli tüm kısa dönem ziyaretleri tanımlayan resmi Kanada Vize kategorisidir.' },
      { q: 'Kanada eTA ile vize arasındaki fark nedir?', a: 'Eğer Bulgaristan pasaportunuz veya eTA (Elektronik Seyahat İzni) onayından geçen seçili AB pasaportlarınızdan biri varsa vize almadan 7 CAD ödeyerek direkt uçağa binebilirsiniz. Ancak Türkiye (Bordo, Yeşil) pasaportlarına KESİNLİKLE fiziksel olarak çip okutmalı Vize (TRV) gereklidir.' },
      { q: 'CAN+ (Can Plus) Programı şartları nelerdir? ABD Vizem var...', a: 'Son 10 yıl içinde alınmış fiziki bir ABD (Amerika) B1/B2 vizeniz var ise, sistem bunu CAN+ kapsamında otomatik tanır. Kanada devleti, "Maddi geçmişini ABD Konsolosluğu zaten deşmiştir" prensibi güderek banka, tapu, sponsor gibi ağır evrak sirkülasyonlarını SİZDEN İSTEMEZ, dosyanız hızla onaylanır.' },
      { q: 'Kanada Vize reddi oranı neden bu kadar yüksek?', a: 'Kanada online (IRCC) portalında tek tek dosya yüklemesi esastır. Mülakat olmadığı için, Statement of Purpose (Iyi Yazılmış Eğitim veya Turistik Niyet Mektubu) barındırmayan, sadece pasaport/otel rezervasyonu atılan kuru dosyalar otomatik filtreye takılıp memurca %80 reddedilir.' },
      { q: 'Kanada GCKey hesabı nedir? Bizim şifremize sahip olacak mısınız?', a: 'GCKey, Kanada göçmenlik bürosunun (IRCC) resmi oturum portalıdır. Champ Vize olarak size yepyeni, tamamen sizin adınıza bağımsız bir GCKey tahsis eder, formu eksiksiz yazar (IMM5257, IMM5645 Aile Formu) ve dijital imzayı atarak süreci başlatır, sonrasında size şifreyi devredebiliriz.' },
      { q: 'Kanada biyometrik veri (Parmak izi) ücreti ne kadar geçerlidir?', a: 'Verdiğiniz biyometrik veriler VFS Global Kanada Merkezi aracılığıyla sisteme 85 CAD bedelle işlenir. Bu veri Kanada devleti nezdinde 10 YIL geçerliliğini korur (Sonraki başvurularınızda tekrar 85 CAD harç veya merkeze gitme zorunluluğunuz olmaz).' },
      { q: 'Kanada\'dan kabul Mektubu (LOA) olmadan Kanada Öğrenci (Study) vizesi alınır mı?', a: 'Hayır. Altı aydan (6 Ay) uzun sürecek olan kurslar (Dil okulları, Kolejler, Üniversiteler) kesinlikle bir DLI (Designated Learning Institution) onaylı kurumdan Letter of Acceptance içermek zorundadır.' },
      { q: 'Kanada vizem ile Amerika Birleşik Devletleri\'ne giriş yapabilir miyim?', a: 'Hayır, Kanada vizesinin ABD kıtasında herhangi bir diplomatik giriş geçerliliği bulunmamaktadır. Ancak güçlü bir vize siciliniz olacağı için sonraki ABD başvurunuza referans teşkil eder.' }
    ]
  },
  'cin-vizesi': {
    title: 'Çin (L/M) Vizesi',
    subtitle: 'Ticaretin ve Kadim Kültürün Merkezine Giriş',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=2000',
    description: 'Çin vize başvuru merkezi detayları, L (Turistik) ve M (Ticari) vize için gerekli PU Letter resmi davetiye kuralları.',
    content: `
      <p class="mb-4">Çin Halk Cumhuriyeti başvuruları, Türkiye'deki Çin Vize Başvuru Merkezi (CVASC) veya yetkili mercilerden yapılır. Çin hükümeti ticari ve fuar gibi seyahatleri büyük ölçüde teşvik etmekle birlikte, gümrük kaçakçılığı ve kalıcı yasa dışı yaşamı engellemek için evrak incelemelerini son yıllarda ciddi bir standarda bağlamıştır.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Davetiye Belgesinin (PU Letter) Önemi</h3>
      <p class="mb-4">Turistik seyahatler nadir onaylanmakla birlikte, Çin için asıl olan <strong>Ticari (M) vizesi</strong> almaktır. Çin'deki ithalat/ihracat yapacağınız partner şirketten yetkili belediye/il ticaret müdürlükleri onaylı barkodlu davet mektubunu bizzat talep etmelisiniz. Şirket kaşeli basit PDF mektuplar genellikle geçerli sayılmamaktadır.</p>
    `,
    processingTime: 'Standart 7 İş Günü (VIP ile 3 İş Günü)',
    validity: 'Tek, Çift veya Çok Girişli (Davetiyeye Bağlı)',
    fees: 'Süresine göre değişen ortalama 120-150 USD Harç + Danışmanlık',
    howToApply: 'Davetiyeniz ile birlikte, Çin Vize Merkezi platformundan İngilizce form doldurularak randevu gününde fiziksel olarak Ankara veya İstanbul şubesine parmak izi verilerek tamamlanır.',
    requirements: [
      {
        category: 'Ticari Gerekli Belgeler',
        items: [
          'Çin Hükümeti yetkili kurumundan veya Çinli şirketten alınmış Kaşeli Resmi Davetiye (E-posta değil asıl belge onayı aranır)',
          'Şirketinizin Faaliyet Belgesi, Vergi Levhası ve güncel SGK hizmet dökümü',
          'Pasaport ve beyaz fonlu Çin standartlarına uygun biometrik vesikalık'
        ]
      }
    ],
    faq: [
      { q: 'Çin PU Letter (resmi yetkili davetiye) nedir ve nasıl alınır?', a: 'Çin hükümetinin dış ticareti kontrol altında tutmak için zorunlu kıldığı barkodlu, QR kodlu yetkili devlet kuruluşu/belediye onaylı davetiyedir. Çin\'deki partner firmanız bunu kendi vergi dairesinden talep edip çıkartarak size PDF atmalıdır.' },
      { q: 'L tipi turistik Çin vizesi veriliyor mu? (2026 Şartları)', a: 'Çok nadiren ve grup turları (gemi vs) haricinde bireysel turistik Çin vizesi çok ciddi süzgeçten geçer. %90 oranında asıl verilen vize M tipi (Ticari) vizedir.' },
      { q: 'M tipi Çin ticari vizesi şartları nelerdir?', a: 'Başvurucunun Türkiye\'de vergi levhalı aktif bir şirkette SGK\'lı çalışıyor (veya sahibi) olması ve Çin\'den gelen PU davetiyesindeki meslek koluyla Türkiye\'deki çalıştığı iş kolunun BİREBİR uyuşması şarttır.' },
      { q: 'Çin vize başvuru formu nasıl doldurulur?', a: 'CVASC üzerinden online olarak doldurulan Çin vizesi formu (yaklaşık 8 sayfa) aile bireyleri, iş geçmişi, eğitim lise bilgilerine kadar detay ister. Eksik fotoğraf yüklenmesi sistemden anında red verir.' },
      { q: 'VFS Global veya CVASC Çin vizesi parmak izi uygulaması var mı?', a: 'Kesinlikle evet. Eğer son 5 yıl içerisinde aynı pasaportunuzla Çin Konsolosluğuna parmak izi vermediyseniz şahsen gelip biometrik kalibrasyonunuzu vermek zorundasınız. Eski pasaporttaki parmak izi YENİ pasaporta AKTARILMAZ.' },
      { q: 'Çin vizesi için gerekli biometrik fotoğraf standartları nelerdir?', a: 'Bu dünyadaki en zor şartlı fotoğraftır. Beyaz fon, gözlüksüz, dişlerin görünmediği, alnı tamamen açık bırakan saç kesimi ve kesinlikle takı (küpe/kolye) barındırmayan dijital testten %100 onay alan fotoğraflar kabul edilir.' },
      { q: 'Çin vizesi kaç günde çıkar 2026 Konsolosluk süreleri?', a: 'Parmak izi verildikten sonra standart işlem (Normal Service) 7 ila 10 iş günü sürmektedir. Ekspres Servis (VIP) ekstra harç ödenerek 3 iş gününde pasaportunuzu çekmenize olanak tanır.' },
      { q: 'Eski pasaportumdaki Çin vizem geçerli midir?', a: 'Eğer eski pasaportunuzun süresi dolmuş ancak içindeki Çok Girişli (Multiple) Çin vizenizin tarihi halihazırda devam ediyorsa; yeni çipli pasaportunuzla zımbalayarak Çin\'e sorunsuz giriş yapabilirsiniz.' }
    ]
  },
  'avustralya-vizesi': {
    title: 'Avustralya Vizesi',
    subtitle: 'Subclass 600 E-Visa Süreçleri',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=2000',
    description: 'Avustralya turist vizesi nasıl alınır? Subclass 600 vize türü işlemleri ve ImmiAccount detaylı operasyon yürütümü.',
    content: `
      <p class="mb-4">Avustralya'ya gitmek için <strong>Subclass 600 Visitor Visa</strong> başvurusunda bulunulması gerekir. Kanada sistemi gibi Avustralya sistemi de tamamen dijitaldir; pasaportunuza bir etiket basılmaz ve konsolosluğa asla fiziksel teslimat yapılmaz. Bütün evraklarınız İngilizce yeminli tercüman kaşeli olmak zorunda ve <strong>ImmiAccount</strong> adlı Avustralya göçmenlik sisteminden yüklenmek zorundadır.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">VEVO Sistemi (Evrakların Okunabilirliği)</h3>
      <p class="mb-4">Visa Entitlement Verification Online (VEVO) sayesinde vize statünüz elektronik olarak sorgulanır. Gümrük polisleri pasaport verinizden doğrudan bu sistem ekranlarına düşer.</p>
    `,
    processingTime: 'Ortalama 14-25 İş Günü',
    validity: 'Genellikle 1 Yıl Geçerli, 3-6 Aylık Çıkış',
    fees: '190 AUD Konsolosluk Harcı (2026) + Danışmanlık',
    howToApply: 'Champ Vize, ImmiAccount üzerinde sizin adınıza resmi bir profil açıp formlarınızı hatasız girer, tüm mali çevirilerinizi onaylar ve vize dosyanızı dijital olarak devlete ulaştırır. Ek olarak VFS Global e parmak izi vermek adına randevu planlar.',
    requirements: [
      {
        category: 'Ekonomik Güç & Sicile Dair Belgeler',
        items: [
          'Pasaportların ve eski vizelerin tüm damgalı sayfalarının taranmış PDF halleri',
          'Vukuatlı Nüfus Kaydı ve Askerlik terhis belgesi dahil tamamen sicil dokümanlarının tercümeleri',
          'Banka geçmişi, birikim, şirket hisseleriniz (Tümü İngilizce beyan edilmiş olmalı)'
        ]
      }
    ],
    faq: [
      { q: 'Avustralya Subclass 600 Visitor Vizesi kimleri kapsar?', a: 'Turistik gezi, aile ziyareti, kısa dönemki iş toplantıları veya 3 ayı aşmayan tüm kısa İngilizce dil eğitimi kursu öğrencilerini sarmalayan Ana Vize Sınıfıdır.' },
      { q: 'Avustralya turist vizesi ortalama kaç günde sonuçlanır (2026 Süreci)?', a: 'Sistem tamamen elektronik portal (ImmiAccount) olmakla beraber Konsolosluk yetkililerinin vizeyi işlemden çıkarması %75\'lik başvuru oranı için tam 22 İş Günü, geri kalanı için ise 38 güne kadar yoğunluk sebebiyle sürebilmektedir, bilet satın ALINMAMALIDIR.' },
      { q: 'ImmiAccount üzerinden Avustralya vize başvuru ücreti ne kadar?', a: '2026 fiyat listesine göre standart Subclass 600 e-Visitor başvurusu için devlete ödenen net harç tutarı kredi kartı komisyonlarıyla birlikte yaklaşık 195 AUD civarındadır.' },
      { q: 'VEVO Sistemi nedir? Pasaportuma vize (etiket) basılacak mı?', a: 'Kesinlikle hayır. Avustralya tamamen dijital (E-Vize) bir sınır güvenlik sistemi icat etmiştir (Visa Entitlement Verification Online). Vizeniz size PDF olarak e-mail gelir, sınır polisleri pasaport kodunuzdan sistem üzerinden dijital "Approved" ekranını teyit eder.' },
      { q: 'Sponsorlu Avustralya (Aile Ziyareti) Vizesi için Avustralya\'dan ne tür evrak gerekir?', a: 'Sizi Avustralya\'ya davet eden çocuk veya akrabanız (Subclass 600 - Sponsored Family stream) kendi maaş kağıtlarını, Commonwealth Bank vs hesap dökümlerini, Vergi levhalarını, Citizenship (Vatandaşlık) belgesini taranmış PDF formatında size atmak ZORUNDADIR.' },
      { q: 'Banka Hesabında ne kadar bakiye (AUD) bulunmalı ve Tercüme Zorunlu mu?', a: 'Öncelikle Sunulan SGK, Emeklilik veya tüm Mülk belgeleri Noter/Yeminli Tercüman tarafından %100 Resmi İngilizceye Çevrilmeli (Kaşeli). Avustralya uzun bir uçuş gerektirdiğinden, hesabınızdaki bakiyenin yalnızca (1.500 - 2.500 USD) bilet gidiş dönüşünü ve Avustralya\'daki astronomik döviz konaklama bedellerini karşılayabildiğini kanıtlaması (Min 10.000 AUD karşılığı) memuru rahatlatacaktır.' },
      { q: 'Avustralya Sağlık Muayenesi (Panel Doktor) süreci ne zaman isteniyor?', a: 'Turist (Subclass 600) vizesinde her zaman şart olmasa da, belirli ülkelerden gelenler veya belli riskli hastalıklara yatkın cevaplar veren (Form içindeki Sağlık soruları) başvuru sahipleri, konsolosluk e-maili (HAP ID) ile anlaşmalı panel doktorlara X-ray testine yollanabilir.' },
      { q: 'Avustralya\'ya Subclass 600 Turistik Vize ile gidip Çalışabilir miyim?', a: 'Asla! Subclass 600 vizesi kati Suretle "NO WORK PERMIT (Çalışma İzni Yoktur)" kuralıyla basılır. Gizli çalıştığınız (Tarım veya bar vs) fark edilirse deport edilebilirsiniz, Work and Holiday (Subclass 462) başvurusu yepyeni bir kategoridir.' }
    ]
  },
  'dubai-vizesi': {
    title: 'Dubai (BAE) Vizesi',
    subtitle: 'Kolay E-Vize ile BAE Kapıları Açık',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
    description: 'Birleşik Arap Emirlikleri Dubai e-vizesi fiyatları 2026, 30 günlük veya 60 günlük çok girişli ekspres vize şartları.',
    content: `
      <p class="mb-4">Dubai ve Abu Dhabi (Birleşik Arap Emirlikleri) kısa süreli turistik ve çalışma seyahatleri için Bordo (Umuma Mahsus) pasaport sahibi Türk vatandaşlarına ön vize uygulamaktadır. Üstelik banka hesabı, gelir tablosu, uçak bileti, otel rezervasyonu gibi <strong>hiçbir ekstra belgeye</strong> gerek duymadan online vizenizi çıkartmaktayız.</p>
    `,
    processingTime: 'Standart 2-3 İş Günü (VIP ile 24 Saat)',
    validity: 'Tek giriş/Çift giriş, 30 Gün / 60 Gün Opsiyonlu',
    fees: 'Günlük Kura Göre Değişmeli 100 - 150 USD Dolaylarında',
    howToApply: 'Sadece yüksek kaliteli bir pasaport ön sayfası (renkli tarama) ve bir adet kimlik arkalı önlü fotoğrafınızı bize mail veya WhatsApp tan göndermeniz ile tüm devlet işlem süreci başlatılır ve e-vize barkodlu PDF tarafınıza mail olarak teslim edilir.',
    requirements: [
      {
        category: 'Tek Gerekenler',
        items: [
          'Pasaportun renkli taranmış, yıpranmamış ve parlamamış temiz yüzü',
          'Arka fonu beyaz 1 adet biyometrik fotoğraf (Dijital kopya WhatsApp vb. ile atılabilir)'
        ]
      }
    ],
    faq: [
      { q: 'Dubai elektronik vizesi (E-Vize) kaç günde çıkar?', a: 'Dubai (Birleşik Arap Emirlikleri) turist vizesi normal prosedürde 48 ile 72 saat (2-3 İş Günü) içerisinde e-posta adresinize PDF olarak gönderilir. Cuma günleri BAE\'de hafta tatili olduğundan bu süreye katılmaz.' },
      { q: 'Dubai vizesi fotoğraf ölçüsü veya arka fonu nasıl olmalıdır?', a: 'Fotoğrafın boyutu standart vesikalık veya biyometrik ebatlarda (4.5x6 veya 5x5 cm) olabilir ancak kesinlikle ARKA FON BEYAZ olmalı ve PDF/JPG kalitesi çok yüksek olmalıdır.' },
      { q: '30 Günlük Tek Girişli Dubai vize harcı 2026 ne kadar?', a: 'BAE sürekli kur ayarlaması yaptığından standart tek girişli (30 days Single Entry) Dubai vizesi harç maliyetleri 100 ile 120 Amerikan Doları bandında oynamaktadır.' },
      { q: 'Dubai vizesi reddedilir mi? (Red sebepleri nelerdir?)', a: 'BAE hükümeti vizeleri çoğunlukla onaylar ancak; geçmişte Dubai de kaçak kaldıysanız, aktif bir oturumunuz zaten varsa veya interpol süzgecine takılan bir isim benzerliğiniz (Similarity) varsa vizeniz saniyeler içinde reddedilir (Refused).' },
      { q: 'Kadınlar tek başına Dubai vizesi alabilir mi (Yaş sınırı var mı)?', a: 'Türkiye Cumhuriyeti vatandaşı 18 (eskiden 23 idi) yaşından büyük her iki cinsiyetten bireyler tek başına Dubai e-vizesine başvurabilir ve ülkeye sorunsuz giriş yapabilir.' },
      { q: 'E-vize pasaporta (fiziksel etiket olarak) basılır mı?', a: 'Hayır Dubai sistemi %100 dijitaldir (E-isa). Pasaportunuza asla Damga (Sticker) yapıştırılmaz. Telefonunuza gelen PDF barkod kağıdındaki QR Code sınır polisince taranır ve içeri alınırsınız.' },
      { q: 'Abu Dhabi (veya Sharjah) Emirliği\'ne Dubai vizesi ile girilir mi?', a: 'Kesinlikle! Birleşik Arap Emirliklerinin verdiği herhangi bir emirlik vizesi (Örn. Dubai) sınırları içerisindeki tüm havalimanlarında (Abu Dhabi, Sharjah, Ras Al Khaimah vb.) kusursuz şekilde geçerlidir.' },
      { q: 'Dubai çok girişli (Multiple Entry) vize nasıl alınır?', a: 'Turistik seyahatiniz boyunca Umman\'a veya Katar\'a geçip tekrar Dubai\'ye dönecekseniz Çok Girişli (Multiple) 30 veya 60 günlük vizelere, %40 fark ücreti ödeyerek kolayca acentemizden başvurabilirsiniz.' }
    ]
  },
  'misir-vizesi': {
    title: 'Mısır Kapı Vizesi',
    subtitle: 'Sahra Çöllerine Hemen Uçuş',
    heroImage: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=2000',
    description: 'Mısır turistik vizesi 2026 yılı kapıda vize (Visa On Arrival) uygulamaları, Sharm El Sheikh muafiyetleri ve Kahire detayları.',
    content: `
      <p class="mb-4">Mısır Arap Cumhuriyeti, Türkiye ile aralarındaki vize sorununu büyük oranda diplomasiyle çözmüş ve tüm sınır kapılarına Türk vatandaşlarının <strong>25 USD ödeyip</strong> kolayca içeri girebilecekleri yetkiyi tanımıştır. Uzun süreli staj, eğitim veya kalıcı iş bağlantıları için Konsoloslukta özel inceleme şartı olmakla beraber standard turistik rotalar (Kahire, Sharm el Şeyh, Hurghada) oldukça kolaydır.</p>
    `,
    processingTime: 'Kapıda Vize / Konsolosluk ise 10-15 Gün',
    validity: '30 Gün Kapıda',
    fees: '25 USD Kapıda Tek Giriş (Visa On Arrival) Ücreti',
    howToApply: 'Kahire veya diğer havalimanlarına vardığınızda gümrük öncesi yer alan "Visa Kiosks" bankolarına pasaportunuzla yanaşarak sadece konaklama (Booking / Airbnb) makbuzunuzu sunarak tek seferlik bandrol alabilirsiniz.',
    requirements: [
      {
        category: 'Havalimanında Çantanızda Bulunması Gerekenler',
        items: [
          'Pasaport (En az 6 ay geçerli ve vize basılabilmesi için 1 boş tam yaprağı olan)',
          '25 USD Noktası Noktasına Kesin Nakit Tutar (Kredi kartı geçmemektedir)',
          'Muhakkak otel/Hostel rezervasyon kağıdı (Bunu görmeden polisin sizi uçağa bindirmeme yasal hakkı vardır)',
          'Gidiş ve Dönüş uçak billetinin referans çıktısı'
        ]
      }
    ],
    faq: [
      { q: 'Mısır kapıda vize (Visa on Arrival) ücreti 2026 yılında ne kadar?', a: 'Türkiye Cumhuriyeti vatandaşları Mısır havalimanlarına inip gümrüğe ilerlediğinde vize bankosunda TARTIŞMASIZ 25 Amerikan Doları (USD) ödeyerek turistik vizelerini pasaportlarına yapıştırtabilirler.' },
      { q: 'Mısır kapı vizesi ücretini kredi kartı veya Euro ile ödeyebilir miyim?', a: 'Katiyen Hayır! Mısır gümrük memurları kredi kartı veya havale kabul etmez. Cebinizde bozuk olmayan, yıpranmamış ve tek parça halindeki fiziksel Dolar banknotları bulunmak zorundadır.' },
      { q: 'Mısır vizesi için banka hesap dökümü veya SGK belgesi isteniyor mu?', a: 'Kapı vizesinde (Visa on arrival) SGK, Tapu, Maaş bordrosu veya Banka beyanı İSTENMEZ! Yanınızda sadece "Kalacağınız Otelin Onaylı Çıktısı" ve "Gidiş Dönüş Uçak Biletiniz" olması 25 Doları verip geçmeniz için yeterlidir.' },
      { q: 'Sharm El-Sheikh vizeli mi vizesiz mi gidilir?', a: 'Sadece Sina Yarımadasında (Sharm El-Sheikh, Dahab, Taba) kalacaksanız 15 gün boyunca VİZESİZ gezebilirsiniz (Havalimanında ücretsiz Sina Damgası basılır). Ancak oradan otobüsle Kahire (Piramitler) veya İskenderiye\'ye geçmek isterseniz 25 Dolarlık gerçek vizeyi almak ZORUNDASINIZ.' },
      { q: 'Mısır konsolosluk vizesi (Ankara/İstanbul) kaç günde sonuçlanır?', a: 'Ticari, staj veya 1 aydan uzun süreli özel vize türleri için fiziken Mısır Konsolosluğuna pasaport bıraktığınızda ortalama 10-15 İş Günü (yaklaşık 3 hafta) beklemeniz gerekir.' },
      { q: 'Mısır kapıda vize almak için 45 Yaş Altı / Üstü kuralları kalktı mı?', a: 'Evet! 2023 yılında yapılan büyük diplomatik devrimle, "Türkiye vatandaşlarının yaşlarına göre Mısır vizesine muamelesi" tamamen kaldırılmış, herkes için şartsız Kapı Vizesi uygulaması tüm kıtalarda serbest bırakılmıştır.' },
      { q: 'Mısır\'a girişte Booking AirBnb vb Otel rezervasyonu şart mı?', a: 'Gümrük polisi (Mısır Ulusal Güvenliği) ülkeye giren turistin "Nerede kalacağını" bilmek zorundadır. Arkadaşınızın evi bile olsa davetiye kağıdı/adresi elinizde olmalı. Otelsiz Mısır sınırından ÇEVRİLİRSİNİZ (Deport).' },
      { q: '30 günden fazla Mısır\'da kalmak için hangi vize alınmalı?', a: 'Kapı vizesi 30 gün geçerlidir. Eğer 3 aydan fazla eğitim veya evlilik nedeniyle Mısır\'da kalacaksanız Türkiye\'den çıkış yapmadan önce Ankara Mısır Büyükelçiliğinden Uzun Süreli (Long-term) Oturum vizesine başvurmalısınız.' }
    ]
  },
  'rusya-vizesi': {
    title: 'Rusya Vizesi / E-Vize',
    subtitle: 'Tüm Rusya Federasyonuna Tek E-Vize İle Geçiş',
    heroImage: 'https://images.unsplash.com/photo-1513622470522-26c311a68ce9?auto=format&fit=crop&q=80&w=2000',
    description: 'Rusya turist e-vize 2026 şartları, 16 gün geçerli çoklu bölge vizesi ve fiziki ticari Rusya vizesi çıkartma yolları.',
    content: `
      <p class="mb-4">Rusya Federasyonu, diplomatik sorunlarını azaltmak ve turizme alan açmak için geçtiğimiz dönemlerde getirdiği E-Vize sistemini başarıyla devam ettirmektedir. 60 günlük kapı penceresinde, Rusya sınırlarında tam 16 gün konaklamanıza sağlayan bu imkan, klasik vize bürokrasisindeki yığınla davetiye kuralını askıya almıştır.</p>
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Fotoğraf Spesifikasyonları (Aşırı Katı)</h3>
      <p class="mb-4">Rusya E-vize sisteminin makinesi çok yüksek standartlarda yapay zeka fotoğraf ölçümü yapmaktadır. Yüzün gölgesi, ışık parlaması veya saçın kapanması otomatik olarak başvuruyu anında red ettirir. Champ Vize teknik ofisindeki yazılım araçlarıyla fotoğraflarınızı bu standarta milimetrik olarak uygun hale getirmekte ve ret riskini minimize etmektedir.</p>
    `,
    processingTime: 'E-Vize 4 Gün / Etiket Vize 7-10 Gün',
    validity: '16 Gün Kalış Süresi',
    fees: 'Yaklaşık 50-60 USD E-Vize Harcı + Hizmet Bedeli',
    howToApply: 'Bizimle pasaport biyometrik veri bölgenizin kaliteli taranmış net halini paylaşırsınız, sigorta zeminlerini kurarak doğrudan İçişleri bakanlığı veri hattından gönderim sağlar dijital vize onayınızı tarafınıza iletiriz.',
    requirements: [
      {
        category: 'E-Vize Gerekli Dosyalar',
        items: [
          'Pasaport net taranmış hali (Yansıma veya flaş parlaması asla olmamalıdır)',
          'Biyometrik yüksek çözünürlüklü dijital fotoğraf dosyası (.JPEG)',
          'Geçerli Seyahat Sağlık Sigortası (Rusya devletinin kabul ettiği yabancı standartlarda) Bizim tarafımızdan online poliçelendirilir.'
        ]
      }
    ],
    faq: [
      { q: 'Rusya E-Vizesi (Elektronik Vize) hangi havaalanlarında geçerli?', a: 'Moskova (Vnukovo, Sheremetyevo, Domodedovo), St. Petersburg (Pulkovo), Kazan, Kaliningrad ve Vladivostok dahil Rusya Federal Gümrük Dairesi’ne bağlı 90’dan büyük Sınır/Havalimanı kapısında e-vizeniz barkoduyla hatasız işler.' },
      { q: 'Rusya E-vize ücreti 2026 harç tutarları kaç Dolardır?', a: 'Turistik elektronik vizenin maliyeti banka ve Rus devleti portal komisyonlarıyla birlikte devlete net 52 USD (Amerikan Doları) olarak kredi kartı ile portaldan düşülür. Champ Vize komisyon harici ücretleri hizmet bedeline ekler.' },
      { q: '16 günlük Rusya e-vizesi sınırda veya içeride uzatılır mı?', a: 'Kategorik olarak HAYIR. Elektronik vize verildiği süreyi (16 Gün konaklama) 1 dakika bile ihlal edemez. Geçerseniz deport edilir, ciddi binlerce Ruble para cezası öder ve 5 yıl Rusya\'ya giriş (Kara liste) yasağı yersiniz.' },
      { q: 'Rusya E-vize Online başvurusu kaç günde sonuçlanır?', a: 'Sistem %100 otomatiktir ve formun hatasız-fotoğrafın AI testinden geçtiği senaryolarda tam olarak 4 Günde (Takvim günü) e-posta adresinize düşmektedir.' },
      { q: 'Rusya vizesi için "Seyahat Sağlık Sigortası" zorunlu mu?', a: 'Türkiye\'den yapılan çok kritik hataların başında gelir! Rusya\'da geçerli olmayan veya teminatı USD gösterilen poliçeler reddedilir. Sigortanın "Rusya Federasyonu (Russian Fed)" ibareli ve poliçe kapsamı en az 30.000 EUR teminatlı ve İNGİLİZCE / RUSÇA yazılmış olması ZORUNLUDUR.' },
      { q: 'Fotoğraf çözünürlüğü yüzünden Rusya vize başvurusu reddedilir mi?', a: 'Evet! E-vize sistemine yüklenen vesikalık fotoğraf "Yüz Tanıma (Face ID)" yazılımına girer. Saçınız kaşınızı kapatıyor, dudaklarınız hafif açık veya JPEG oranı 50 KB altında veya bulanıksa sistem başvuruyu anında iptal eder. Paranız yanar.' },
      { q: 'Rusya ticari (konsolosluk) vizeleri için Voucher / Davetiye gerekli mi?', a: 'E-vize (16 Gün) sizi kurtarmıyorsa ve aylarca Rusya\'da kalacaksanız İçişleri Bakanlığı (FMS) onaylı orijinal barkodlu Voucher (Otellerden veya şirketlerden alınan resmi izin kağıdı) olmadan VFS ve Ankara Büyükelçiliği asla başvurunuzu kabul etmez.' },
      { q: 'Rusya\'da farklı bir şehre geçerken yeni vize veya bildirim gerekir mi (Registration)?', a: 'Aynı vizeyle tüm Rusya şehirlerini tren/uçakla gezebilirsiniz. ANCAK 7 İş Gününden fazla bir şehirde konaklarsanız, oteliniz (veya ev sahibiniz) sizi Göçmen bürosuna kayıt (Registration) ettirmek zorundadır. Aksi takdirde sınırda çevrilirsiniz.' }
    ]
  }
}
