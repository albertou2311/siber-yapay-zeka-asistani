
# Kali Linux AI Asistanı

Kali Linux için geliştirilmiş yapay zeka destekli penetrasyon testi asistanı.

## Özellikler

- Penetrasyon testi araçlarını otomatik kurma ve yönetme
- Ağ tarama ve güvenlik analizi
- Armitage ve Maltego entegrasyonu
- Şifre oluşturma ve yönetme
- Özelleştirilebilir komutlar
- Türkçe ve İngilizce dil desteği

## Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/kullaniciadi/kali-asistan.git
cd kali-asistan
```

2. Kurulum scriptini çalıştırın:
```bash
chmod +x kurulum.sh
./kurulum.sh
```

3. Asistanı başlatın:
```bash
asistan
```

## Kullanım

### Temel Komutlar
- `yardim` : Tüm komutları gösterir
- `egit <komut> <yanıt>` : Asistana yeni komut öğretir
- `indir <URL>` : URL'den dosya indirir

### Ağ Tarama ve Güvenlik
- `nmap_tara [IP]` : Port taraması yapar
- `guvenlik_tara [IP]` : Güvenlik analizi yapar
- `zafiyet_tara [IP]` : Zafiyet analizi yapar
- `ag_dinle` : Ağ trafiğini dinler

### Armitage Komutları
- `armitage_baslat` : Armitage'i başlatır
- `armitage_ip_tara [IP]` : IP adresini tarar
- `armitage_site_tara [URL]` : Web sitesini tarar
- `armitage_sizma_baslat [IP]` : Sızma testini başlatır

### Maltego Komutları
- `maltego_baslat` : Maltego'yu başlatır
- `maltego_hesap_ac [EMAIL]` : Yeni hesap oluşturur
- `maltego_transform [HEDEF]` : Transform çalıştırır

### Şifre Oluşturma
- `sifre_6` ile `sifre_18` arası : Belirtilen uzunlukta güvenli şifre oluşturur

## GitHub'a Yükleme

1. GitHub'da yeni bir repo oluşturun

2. Yerel reponuzu hazırlayın:
```bash
git init
git add .
git commit -m "İlk commit"
```

3. GitHub reponuzu ekleyin:
```bash
git remote add origin https://github.com/kullaniciadi/kali-asistan.git
git branch -M main
git push -u origin main
```

## Geliştirme

Yeni özellik eklemek için:
1. Yeni bir branch oluşturun
2. Kodunuzu yazın
3. Pull request açın

## Lisans

MIT License

## İletişim

- GitHub: [github.com/kullaniciadi](https://github.com/kullaniciadi)
- E-posta: ornek@email.com
