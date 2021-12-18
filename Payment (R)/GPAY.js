document.querySelector(".btn").addEventListener("click", proceed);
// document.querySelector("#newAccount").addEventListener("click", signup);
var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
// console.log(regdUsers);
// function signup() {
// window.location.href = "signup.html";
//}
function proceed() {
  var cardname = document.querySelector("#cardname").value;

  var userCred = {
    cardname: cardname,
  };

  userData.push(userCred);
  localStorage.setItem("userDatabase", JSON.stringify(userData));

  if (cardname == "abcd@gpay") {
    window.location.href = "OTP.html";
  } else {
    alert("invalid GPay id");
  }
}
