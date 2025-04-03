
import os
import sys
import subprocess
import readline
import json
import random
import string
from datetime import datetime

class KaliAsistan:
    def __init__(self):
        # Mevcut başlatma kodları aynen kalacak
        self.komut_gecmisi = []
        self.veritabani_dosyasi = os.path.expanduser('~/.kali_asistan_db.json')
        self.sifreler_dosyasi = os.path.expanduser('~/.kali_asistan_passwords.json')
        self.egitim_dosyasi = os.path.expanduser('~/.kali_asistan_training.json')
        self.veritabanini_yukle()
        self.sifreleri_yukle()
        self.egitim_verilerini_yukle()

    # Terminal ve IDE komutları
    def terminal_ac(self):
        """Yeni terminal penceresi aç"""
        try:
            subprocess.Popen(['gnome-terminal'])
            return "Yeni terminal penceresi açıldı"
        except:
            return "Terminal açılırken hata oluştu"

    def ide_ac(self, editor="code"):
        """IDE veya metin editörü aç"""
        try:
            if editor == "code":
                subprocess.Popen(['code', '.'])
                return "Visual Studio Code açıldı"
            elif editor == "gedit":
                subprocess.Popen(['gedit'])
                return "Gedit açıldı"
            elif editor == "nano":
                os.system('nano')
                return "Nano editör açıldı"
            else:
                return f"Bilinmeyen editör: {editor}"
        except:
            return f"Editör açılırken hata oluştu: {editor}"

    def komut_isle(self, girdi):
        komut_parcalari = girdi.split()
        if not komut_parcalari:
            return ""

        komut = komut_parcalari[0].lower()
        parametreler = komut_parcalari[1:]

        # Terminal ve IDE komutları
        if komut == "terminal":
            return self.terminal_ac()
        elif komut == "ide":
            if parametreler:
                return self.ide_ac(parametreler[0])
            return self.ide_ac()

        # Mevcut komutlar aynen devam edecek...
        # [Önceki komut işleme kodları buraya gelecek]

    def yardim_goster(self):
        return """
Kali Linux AI Asistan - Komut Listesi:

1. Terminal ve IDE Komutları:
   - terminal : Yeni terminal penceresi açar
   - ide : Visual Studio Code'u açar
   - ide gedit : Gedit editörünü açar
   - ide nano : Nano editörünü açar

[Mevcut yardım mesajı devam edecek...]
"""

# Ana program kodları aynen devam edecek...
