document.querySelector("#myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "paymentpage.html";
});

var isLogin = localStorage.getItem("isLogin");
var userName = localStorage.getItem("userName");

if (isLogin == "true") {
  document.querySelector("#isLogin").textContent = userName;
  var aTag = document.createElement("a");
  aTag.setAttribute("id", "isLogout");
  aTag.textContent = "Logout";
  document.querySelector(".header-right").append(aTag);
  document.querySelector("#isLogout").addEventListener("click", function () {
    localStorage.setItem("isLogin", "false");
    window.location.href = "../Login (K)/login.html";
  });
}
