document.querySelector("#link-gpay").addEventListener("click", function () {
  window.location.href = "GPAY.html";
});
document.querySelector("#amount").textContent =
  localStorage.getItem("cartAmount");
