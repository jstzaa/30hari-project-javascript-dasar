const detik = document.getElementById("second");
const convert = document.getElementById("convert");
const clear = document.getElementById("clear");
const hasil = document.getElementById("hasil");

convert.addEventListener("click", function () {
  let second = detik.value;
  let jam = Math.floor(second / 3600);
  let sisa = Math.floor(second % 3600);
  let menit = Math.floor(sisa / 60);
  let sec = Math.floor(sisa % 60);

  if (isNaN(second) || second < 0) {
    alert("Input salah! Silakan ulangi");
    detik.value = null;
    hasil.innerHTML = null;
  } else {
    hasil.innerHTML = jam + "H: " + menit + "M: " + sec + "S";
  }
});

clear.addEventListener("click", function () {
  detik.value = null;
  hasil.innerHTML = null;
});
