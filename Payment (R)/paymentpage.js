document.querySelector("#card").addEventListener("click", fillCardDetails);

function fillCardDetails(event) {
  window.location.href = "cardpay.html";
  localStorage.setItem("paymentMode", "Card");
}
document.querySelector("#upi").addEventListener("click", fillupiDetails);

function fillupiDetails(event) {
  window.location.href = "newupi.html";
  localStorage.setItem("paymentMode", "UPI");
}

document.querySelector("#cod").addEventListener("click", fillCodDetails);

function fillCodDetails(event) {
  localStorage.setItem("paymentMode", "COD");
  window.location.href = "OTP.html";
}

document.querySelector("#back-button").addEventListener("click", function () {
  window.location.href = "inputAdd.html";
});

document.querySelector("#amount").textContent =
  localStorage.getItem("cartAmount");
