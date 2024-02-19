var btn_plus = document.querySelectorAll(".plus");
var btn_min = document.querySelectorAll(".min");
var price = document.querySelectorAll(".price");
var totalprice = document.getElementById("Totale Price");
var quantity = document.querySelectorAll(".quantity");
var btn_delete = document.querySelectorAll(".delete");
var icon = document.querySelectorAll(".fa-heart");

console.log(quantity);

for (let btn of btn_plus) {
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    let quantity = parent.querySelector(".quantity");
    quantity.innerHTML++;
    totalprice.innerHTML =
      +totalprice.innerHTML + +parent.querySelector(".price").innerHTML;
  });
}
for (let btn of btn_min) {
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    let quantity = parent.querySelector(".quantity");
    if (parseInt(quantity.innerHTML) > 0) {
      quantity.innerHTML--;
      totalprice.innerHTML =
        +totalprice.innerHTML - parent.querySelector(".price").innerHTML;
    }
  });
}
for (let btn of btn_delete) {
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    parent.remove();
    let quantity = parent.querySelector(".quantity");
    let price = parent.querySelector(".price");
    let total = parseInt(totalprice.innerHTML);
    console.log(total);
    totalprice.innerHTML =
      total - parseInt(quantity.innerHTML) * parseInt(price.innerHTML);
  });
}
icon.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.classList.toggle("active");
  });
});
