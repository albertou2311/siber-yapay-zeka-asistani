
export const getDefaultResponses = (customCommands = {}) => ({
  tr: {
    "merhaba": "Merhaba! Ben Kali Linux uzmanı bir AI asistanım. Size penetrasyon testi, güvenlik analizi ve ağ taraması konularında yardımcı olabilirim.",
    
    // Terminal ve IDE komutları
    "terminal": "Terminal penceresi açılıyor...",
    "terminal aç": "Terminal penceresi açılıyor...",
    "terminal başlat": "Terminal penceresi açılıyor...",
    "terminali aç": "Terminal penceresi açılıyor...",
    "yeni terminal": "Terminal penceresi açılıyor...",
    
    "ide": "Visual Studio Code açılıyor...",
    "ide aç": "Visual Studio Code açılıyor...",
    "ide başlat": "Visual Studio Code açılıyor...",
    "vscode": "Visual Studio Code açılıyor...",
    "vscode aç": "Visual Studio Code açılıyor...",
    
    "ide gedit": "Gedit metin editörü açılıyor...",
    "gedit": "Gedit metin editörü açılıyor...",
    "gedit aç": "Gedit metin editörü açılıyor...",
    "metin editörü": "Gedit metin editörü açılıyor...",
    
    "ide nano": "Nano metin editörü açılıyor...",
    "nano": "Nano metin editörü açılıyor...",
    "nano aç": "Nano metin editörü açılıyor...",
    "nano editör": "Nano metin editörü açılıyor...",

    // Mevcut komutlar aynen devam ediyor...
    "yardım": `Kullanabileceğiniz komutlar:

1. Terminal ve IDE Komutları:
   - terminal, terminal aç, terminali aç : Terminal penceresi açar
   - ide, ide aç, vscode : Visual Studio Code'u açar
   - ide gedit, gedit, gedit aç : Gedit editörünü açar
   - ide nano, nano, nano aç : Nano editörünü açar

[Mevcut yardım mesajının geri kalanı...]`,

    // Diğer mevcut komutlar ve yanıtlar aynen devam ediyor...
    "default": "Üzgünüm, bu komutu anlamadım. 'yardım' yazarak kullanılabilir komutları görebilirsiniz."
  },
  en: {
    // English responses remain the same
  },
  ...customCommands
});
