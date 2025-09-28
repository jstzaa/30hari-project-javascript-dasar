// ambil data
const grade = document.getElementsByTagName("input");
const hitung = document.getElementById("hitung");
const reset = document.getElementById("reset");
const hasilRataRata = document.getElementById("hasilRataRata");

// operasi jika di klik
hitung.addEventListener("click", function () {
  for (let i = 0; i < grade.length; i++) {
    let nilai = parseFloat(grade[i].value);

    // validasi input
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
      alert("Input salah! silakan ulangi");
      break;
    } else {
      // proses
      let sum =
        parseFloat(grade[0].value) +
        parseFloat(grade[1].value) +
        parseFloat(grade[2].value);
      let avg = sum / grade.length;
      // output
      hasilRataRata.innerHTML = avg.toFixed(2);
    }
  }
});

// tombol reset
reset.addEventListener("click", function () {
  for (let j = 0; j < grade.length; j++) {
    grade[j].value = "";
  }
  hasilRataRata.innerHTML = "";
});
