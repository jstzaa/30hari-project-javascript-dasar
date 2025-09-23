const tanggalLahir = document.getElementById("tanggalLahir");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const umur = document.getElementById("umur");

submit.addEventListener("click", function () {
  let hariIni = new Date();
  let lahir = new Date(tanggalLahir.value);

  // cek tanggal lahir
  let tahun = hariIni.getFullYear() - lahir.getFullYear();
  let bulan = hariIni.getMonth() - lahir.getMonth();
  let hari = hariIni.getDate() - lahir.getDate();

  // jika hasil dari variabel bulan negatif atau 0 dan hari negatif maka kurangi tahun 1
  if (bulan < 0 || (bulan === 0 && hari < 0)) {
    tahun--;
  }

  // output
  umur.innerHTML = tahun;
});
