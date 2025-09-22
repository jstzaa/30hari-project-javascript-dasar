const celsius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");
const reamur = document.getElementById("reamur");
const convert = document.getElementById("convert");
const clear = document.getElementById("clear");

convert.addEventListener("click", function () {
  let c = parseFloat(celsius.value);
  let f = parseFloat(fahrenheit.value);
  let k = parseFloat(kelvin.value);
  let r = parseFloat(reamur.value);
  if (!isNaN(c)) {
    celsius.value = c.toFixed(2) + " \u00B0C";
    fahrenheit.value = ((9 / 5) * c + 32).toFixed(2) + " \u00B0F";
    kelvin.value = (c + 273.15).toFixed(2) + " K";
    reamur.value = ((4 / 5) * c).toFixed(2) + " \u00B0R";
  } else if (!isNaN(f)) {
    fahrenheit.value = f.toFixed(2) + " \u00B0F";
    celsius.value = ((5 / 9) * (f - 32)).toFixed(2) + " \u00B0C";
    kelvin.value = ((5 / 9) * (f - 32) + 273.15).toFixed(2) + " K";
    reamur.value = ((4 / 9) * (f - 32)).toFixed(2) + " \u00B0R";
  } else if (!isNaN(k)) {
    kelvin.value = k.toFixed(2) + " K";
    celsius.value = (k - 273.15).toFixed(2) + " \u00B0C";
    fahrenheit.value = ((9 / 5) * (k - 273.15) + 32).toFixed(2) + " \u00B0F";
    reamur.value = ((4 / 5) * (k - 273.15)).toFixed(2) + " \u00B0R";
  } else if (!isNaN(r)) {
    reamur.value = r.toFixed(2) + " \u00B0R";
    celsius.value = ((5 / 4) * r).toFixed(2) + " \u00B0C";
    fahrenheit.value = ((9 / 4) * r + 32).toFixed(2) + " \u00B0F";
    kelvin.value = ((5 / 4) * r + 273.15).toFixed(2) + " K";
  }
});

clear.addEventListener("click", function () {
  celsius.value = null;
  fahrenheit.value = null;
  kelvin.value = null;
  reamur.value = null;
});
