const hargaAwal = document.getElementById("harga");
const diskon = document.getElementById("diskon");
const hitung = document.getElementById("hitung");
const hapus = document.getElementById("hapus");
const hasil = document.getElementById("hasil");

hitung.addEventListener("click", function () {
  let harga = parseFloat(hargaAwal.value);
  let discount = parseFloat(diskon.value);
  let perhitungan = (discount / 100) * harga;
  let hasilDiskon = harga - perhitungan;

  if (
    isNaN(harga) ||
    isNaN(discount) ||
    discount > 100 ||
    harga < 0 ||
    discount < 0
  ) {
    alert("Input salah, harap ulangi");
    hargaAwal.value = null;
    diskon.value = null;
    hasil.innerHTML = "";
  } else {
    hasil.innerHTML = "Rp" + hasilDiskon.toLocaleString("id-ID");
  }
});

hapus.addEventListener("click", function () {
  hargaAwal.value = null;
  diskon.value = null;
  hasil.innerHTML = "";
});
