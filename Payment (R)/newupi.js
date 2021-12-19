document.querySelector("#link-gpay").addEventListener("click", function () {
  window.location.href = "GPAY.html";
});
document.querySelector("#amount").textContent =
  localStorage.getItem("cartAmount");

document.querySelector("#orderIdDisp").textContent =
  "ORD00000" + localStorage.getItem("orderId");
