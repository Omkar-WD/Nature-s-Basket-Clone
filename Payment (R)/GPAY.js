document.querySelector(".btn").addEventListener("click", proceed);

function proceed() {
  var cardname = document.querySelector("#cardname").value;

  if (cardname == "abcd@gpay") {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    localStorage.setItem("paymentDate", today);
    window.location.href = "OTP.html";
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
