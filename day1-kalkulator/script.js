const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operator = document.querySelectorAll("#operator");
const result = document.getElementById("result");

operator.forEach(function (btn) {
  btn.addEventListener("click", function (a, b) {
    a = parseFloat(number1.value);
    b = parseFloat(number2.value);

    if (isNaN(a) || isNaN(b)) {
      result.innerHTML = "Error";
    } else {
      if (btn === operator[0]) {
        result.innerHTML = a + b;
      } else if (btn === operator[1]) {
        result.innerHTML = a - b;
      } else if (btn === operator[2]) {
        result.innerHTML = a * b;
      } else if (btn === operator[3]) {
        result.innerHTML = a / b;
      } else {
        number1.value = null;
        number2.value = null;
        result.innerHTML = null;
      }
    }
  });
});
