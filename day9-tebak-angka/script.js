// ambil elemen
const player = document.getElementById("player");
const tebak = document.getElementById("submit");
const reset = document.getElementById("clear");
const hasil = document.getElementById("hasil");

tebak.addEventListener("click", function () {
  let ai = Math.floor(Math.random() * 10);
  let playerInput = parseInt(player.value);

  if (playerInput == ai) {
    hasil.innerHTML = `Benar! angka = ${ai}`;
  } else if (playerInput > ai) {
    hasil.innerHTML = `Terlalu tinggi! angka = ${ai}`;
  } else if (playerInput < ai) {
    hasil.innerHTML = `Terlalu rendah! angka = ${ai}`;
  } else {
    alert("Input salah! silakan coba lagi");
    player.value = "";
    hasil.innerHTML = "";
  }
});

reset.addEventListener("click", function () {
  player.value = "";
  hasil.innerHTML = "";
});
