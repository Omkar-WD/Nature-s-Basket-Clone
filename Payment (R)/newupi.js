document.querySelector("#link-gpay").addEventListener("click", function () {
  window.location.href = "GPAY.html";
});
document.querySelector("#amount").textContent =
  localStorage.getItem("cartAmount");

var number = Number(localStorage.getItem("orderId")) + 1;
document.querySelector("#orderIdDisp").textContent = "ORD00000" + number;
