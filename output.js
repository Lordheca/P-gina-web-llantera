const price = document.querySelector("#precio_ll");
const output = document.querySelector(".precio_ll_out");

output.textContent = '$'+price.value;

price.addEventListener("input", function () {
  output.textContent = '$'+price.value;
});