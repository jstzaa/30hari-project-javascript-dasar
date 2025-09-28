const nilai1 = document.getElementById("nilai1");
const nilai2 = document.getElementById("nilai2");
const nilai3 = document.getElementById("nilai3");
const hitung = document.getElementById("hitung");
const reset = document.getElementById("reset");
const hasilRataRata = document.getElementById("hasilRataRata");

hitung.addEventListener("click", function () {
  let n1 = parseFloat(nilai1.value);
  let n2 = parseFloat(nilai2.value);
  let n3 = parseFloat(nilai3.value);
  let avg = (n1 + n2 + n3) / 3;

  //validasi input
  if (
    isNaN(n1) ||
    isNaN(n2) ||
    isNaN(n3) ||
    n1 < 0 ||
    n2 < 0 ||
    n3 < 0 ||
    n1 > 100 ||
    n2 > 100 ||
    n3 > 100
  ) {
    alert("Masukkan semua nilai dengan benar!");
    nilai1.value = "";
    nilai2.value = "";
    nilai3.value = "";
    hasilRataRata.innerHTML = "";
    return;
  } else {
    hasilRataRata.innerHTML = avg.toFixed(2);
  }
});

reset.addEventListener("click", function () {
  nilai1.value = "";
  nilai2.value = "";
  nilai3.value = "";
  hasilRataRata.innerHTML = "";
});
