
document.querySelector(".btn").addEventListener("click", proceed);
// document.querySelector("#newAccount").addEventListener("click", signup);
var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
// console.log(regdUsers);
// function signup() {
// window.location.href = "signup.html";
//}
function proceed() {
  var cardno = document.querySelector("#cardno").value;
  var expirydate = document.querySelector("#expirydate").value;
  var cvvno = document.querySelector("#cvvno").value;
  var cardname = document.querySelector("#cardname").value;

  var userCred = {
    cardno: cardno,
    expirydate: expirydate,
    cvvno: cvvno,
    cardname: cardname,
  };

  userData.push(userCred);
  localStorage.setItem("userDatabase", JSON.stringify(userData));

  if (cardno == "123456789" || cvvno == "123" || cardname == "abcd") {
    //window.location.href = "admin.html";
    console.log("s");
    alert("payment sucessful");
  } else {
    alert("invalid DAta");
  }
}