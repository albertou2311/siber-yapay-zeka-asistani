
#!/bin/bash

# Renk kodları
KIRMIZI='\033[0;31m'
YESIL='\033[0;32m'
MAVI='\033[0;34m'
NORMAL='\033[0m'

echo -e "${MAVI}Kali Linux AI Asistan Kurulumu Başlıyor...${NORMAL}"

# Gerekli paketleri kur
echo -e "${YESIL}Gerekli paketler yükleniyor...${NORMAL}"
sudo apt update
sudo apt install -y python3 python3-pip nmap metasploit-framework armitage maltego apktool dex2jar jd-gui wireshark burpsuite sqlmap nikto hydra john aircrack-ng wpscan dirb gobuster netcat nessus beef-xss set hashcat kismet ettercap macchanger recon-ng zaproxy

# Python bağımlılıklarını kur
echo -e "${YESIL}Python bağımlılıkları yükleniyor...${NORMAL}"
pip3 install readline requests numpy pandas scikit-learn tensorflow

# Asistan dosyasını kopyala
echo -e "${YESIL}Asistan dosyası kopyalanıyor...${NORMAL}"
sudo cp kali_asistan.py /usr/local/bin/kali-asistan
sudo chmod +x /usr/local/bin/kali-asistan

# Alias ekle
echo -e "${YESIL}Alias ekleniyor...${NORMAL}"
echo "alias asistan='kali-asistan'" >> ~/.zshrc
echo "alias asistan='kali-asistan'" >> ~/.bashrc

# Kurulum tamamlandı mesajı
echo -e "${YESIL}Kali Linux AI Asistan kurulumu tamamlandı!${NORMAL}"
echo -e "${MAVI}Asistanı başlatmak için terminal'de 'asistan' komutunu kullanabilirsiniz.${NORMAL}"
