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

var number = Number(localStorage.getItem("orderId")) + 1;
document.querySelector("#orderIdDisp").textContent = "ORD00000" + number;

document.querySelector("#back-button").addEventListener("click", function () {
  window.location.href = "newupi.html";
});
