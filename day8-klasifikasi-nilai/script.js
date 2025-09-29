// panggil elemen
const grade = document.getElementById("nilai");
const hitung = document.getElementById("hitung");
const hapus = document.getElementById("hapus");
const hasil = document.getElementById("hasil");

hitung.addEventListener("click", function (nilai) {
  nilai = parseFloat(grade.value);

  // validasi input
  if (isNaN(nilai) || nilai < 0 || nilai > 100) {
    alert("Input salah! silakan ulang");
    grade.value = "";
    hasil.innerHTML = "";
    // pengkondisian
  } else if (nilai >= 90) {
    hasil.innerHTML = "A";
  } else if (nilai >= 80) {
    hasil.innerHTML = "B";
  } else if (nilai >= 70) {
    hasil.innerHTML = "C";
  } else if (nilai >= 60) {
    hasil.innerHTML = "D";
  } else {
    hasil.innerHTML = "E";
  }
});

hapus.addEventListener("click", function () {
  grade.value = "";
  hasil.innerHTML = "";
});
