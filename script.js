// Pilihan Computer
function getPilihanComp() {
  const comp = Math.round(Math.random() * 3 + 1);
  if (comp == 1) return "gajah";
  if (comp == 2) return "orang";
  return "semut";
}

// Rules
function getHasil(comp, player) {
  var hasil = "";
  if (player == comp) return "Seri";
  if (player == "gajah") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
    return hasil;
  }
  if (player == "orang") {
    hasil = comp == "semut" ? "MENANG" : "KALAH";
    return hasil;
  }
  if (player == "semut") {
    hasil = comp == "gajah" ? "MENANG" : "KALAH";
    return hasil;
  }
}

// Animasi Komputer
function putar() {
  const imgComp = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}
 
// Events
const pilihan = document.querySelectorAll("li img");
let sComp = 0;
let sPlayer = 0;
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);
    // Putar Gambar
    putar();
    // Hasil
    setTimeout(function () {
      // Ganti Gambar Komputer
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", "img/" + pilihanComp + ".png");
      // Tampilkan Info
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
      // Score
      let scoreComp = document.querySelector(".score.komputer");
      let scorePlayer = document.querySelector(".score.player");
      if (hasil == "MENANG") {
        sPlayer++;
        scorePlayer.innerHTML = "Score: " + sPlayer;
        console.log(sPlayer);
      }
      if (hasil == "KALAH") {
        sComp++;
        scoreComp.innerHTML = "Score: " + sComp;
        console.log(sComp);
      }
    }, 1000);
  });
});





