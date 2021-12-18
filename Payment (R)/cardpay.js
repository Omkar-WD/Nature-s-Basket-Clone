document.querySelector("#myForm").addEventListener("submit", payment);
function payment(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var cardNumber = document.querySelector("#card-number").value;
  var cvv = document.querySelector("#cvv").value;
  var expiryDate = document.querySelector("#expiry-date").value;
  if (name !== "" && cardNumber !== "" && cvv !== "" && expiryDate !== "") {
    if (cardNumber == "374245455400126" && cvv == "123") {
      console.log("OK");
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;
      localStorage.setItem("paymentDate", today);
      window.location.href = "OTP.html";
    }
    console.log(name, cardNumber, cvv, expiryDate);
  } else {
    alert("error");
  }
}

document.querySelector("#amount").textContent =
  localStorage.getItem("cartAmount");
