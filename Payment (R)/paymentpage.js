document.querySelector("#card").addEventListener("click", fillCardDetails);

function fillCardDetails(event) {
  window.location.href = "cardpay.html";
}
document.querySelector("#upi").addEventListener("click", fillupiDetails);

function fillupiDetails(event) {
  window.location.href = "newupi.html";
}

document.querySelector("#back-button").addEventListener("click", function () {
  window.location.href = "inputAdd.html";
});
