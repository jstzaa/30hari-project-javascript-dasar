const sisi = document.getElementById("sisi");
const hitung = document.getElementById("hitung");
const hapus = document.getElementById("hapus");
const luas = document.getElementById("luas");
const persegi = document.getElementById("kotak");

hitung.addEventListener("click", function () {
  let valueSisi = parseFloat(sisi.value);
  let hasil = valueSisi * valueSisi;

  if (isNaN(valueSisi) || valueSisi <= 0) {
    luas.innerHTML = "invalid";
    persegi.style.display = "none";
  } else {
    luas.innerHTML = hasil;
    persegi.style.display = "flex";
  }
});

hapus.addEventListener("click", function () {
  sisi.value = null;
  luas.innerHTML = null;
  persegi.style.display = "none";
});
