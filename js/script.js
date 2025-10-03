    // Resim dosyalarının yollarını tutan diziler
const yuzler = [
    "images/yuzler/yuz_1.png",
    "images/yuzler/yuz_2.png", 
    // Diğer yüz resimlerini buraya ekle
];
const kiyafetler = [
    "images/kiyafetler/bos.png", // Varsayılan kıyafet için boş resim
    "images/kiyafetler/kiyafet_1.png",
    "images/kiyafetler/kiyafet_2.png",
    "images/kiyafetler/kiyafet_3.png", 
    "images/kiyafetler/kiyafet_4.png"
    // Diğer kıyafetlerini buraya ekle
];

const saclar = [
    "images/saclar/sac_1.png",
    "images/saclar/sac_2.png",
    "images/saclar/sac_3.png",
    "images/saclar/sac_4.png",
    "images/saclar/sac_5.png",
    "images/saclar/sac_6.png"
    // Diğer saç resimlerini buraya ekle
];



const sakallar = [
    "images/sakallar/sakal_1.png",
    "images/sakallar/sakal_2.png",
    "images/sakallar/sakal_3.png",
    "images/sakallar/sakal_4.png"
    // Diğer sakal resimlerini buraya ekle
];

// HTML elementlerini kod içinde kullanmak için seçiyoruz
const yuzImg = document.getElementById("yuz");
const kiyafetImg = document.getElementById("kiyafet");
const sacImg = document.getElementById("sac");
const sakalImg = document.getElementById("sakal");
const olusturButonu = document.getElementById("olustur-butonu");

// Rastgele bir eleman seçen fonksiyon
function rastgeleSec(dizi) {
    const rastgeleIndex = Math.floor(Math.random() * dizi.length);
    return dizi[rastgeleIndex];
}


function yeniKarakterOlustur() {
    
    yuzImg.src = rastgeleSec(yuzler);

    kiyafetImg.src = rastgeleSec(kiyafetler);

    // Saç resmini rastgele bir taneyle değiştir
    sacImg.src = rastgeleSec(saclar);

    
    
    // %50 olasılıkla sakal takar
    if (Math.random() < 0.5) {
        sakalImg.src = rastgeleSec(sakallar);
    } else {
        akalImg.src = "";
        sakalImg.style.visibility = "hidden";
    }
}


olusturButonu.addEventListener("click", yeniKarakterOlustur);

// Sayfa ilk yüklendiğinde bir karakter oluştur
yeniKarakterOlustur();