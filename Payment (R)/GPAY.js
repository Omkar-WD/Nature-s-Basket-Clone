document.querySelector(".btn").addEventListener("click", proceed);

function proceed() {
  var cardname = document.querySelector("#cardname").value;

  var userCred = {
    cardname: cardname,
  };
  if (cardname == "abcd@gpay") {
    window.location.href = "OTP.html";
  } else {
    alert("invalid GPay id");
  }
}

document.querySelector("#amount").textContent =
  localStorage.getItem("cartAmount");

document.querySelector("#orderIdDisp").textContent =
  "ORD00000" + localStorage.getItem("orderId");

document.querySelector("#back-button").addEventListener("click", function () {
  window.location.href = "newupi.html";
});
