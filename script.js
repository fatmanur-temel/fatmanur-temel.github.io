var tahminEt = document.getElementById("tahminEt");
var yeni_oyun = document.getElementById("yeniOyun");
var sonuc = document.getElementById("sonuc");
var girilenSayi = "";
var randomInt = "";

yeni_oyun.onclick = yeniOyun;
tahminEt.onclick = tahmin;

function CreateRandomInt(min, max) {
  var random = [];
  while(random.length < 4){
    var sayi = Math.floor(Math.random() * (max - min + 1)) + min;
    b = random.find(function(value){
      return value == sayi;
    });
    b ? '':random.push(sayi);
  }
  return random;
}

function yeniOyun(){
    randomInt = CreateRandomInt(0, 9).join("");
    sonuc.innerHTML = "";
    randomInt.value = "";
    tahminEt.disabled = false;
    yeni_oyun.disabled = true;
}

var box = document.getElementById("sayi");
box.addEventListener('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
      tahmin();
      box.value = "";
  }
});

function tahmin(){
    girilenSayi = document.getElementById("sayi").value;
    var mesaj = "";
    var count1 = 0;
    var count2 = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (randomInt[i]===girilenSayi[i]){
          count1++;
          break;
        }
        else if(randomInt[i]==girilenSayi[j]){
          count2++;
          break;
        }
      } 
    }
    if(randomInt===girilenSayi){
      mesaj = "Tebrikler";
      tahminEt.disabled = true;
      yeni_oyun.disabled = false;
    }
    else{
      mesaj = count1+"+  "+count2+"-";
    }

    sonuc.innerHTML += girilenSayi+ ": ";
    sonuc.innerHTML += mesaj;
    sonuc.innerHTML += "<br>";
    // sonuc.innerHTML += randomInt;
    sayi.innerHTML = "";
    box.value = "";
}