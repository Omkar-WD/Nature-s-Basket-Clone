document.querySelector("#login").addEventListener("submit", login);
var flag = false;
var isLogin = localStorage.getItem("isLogin") || false;
function login(event) {
  event.preventDefault();
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;

  var arr = JSON.parse(localStorage.getItem("userDataBase")) || [];
  if (username == "admin" && password == "admin") {
    alert("Admin User!!!");
    window.location.href = "../Category (P)/catadmin.html";
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (
        (arr[i].userEmail == username || arr[i].userNumber == username) &&
        arr[i].userPassword == password
      ) {
        flag = true;
        localStorage.setItem("userName", arr[i].userName);
        break;
      }
    }
    if (flag == false) {
      alert("unregistered user");
      isLogin = false;
      localStorage.setItem("isLogin", "false");
    } else {
      console.log("registered user");
      document.querySelector("#username").value = "";
      document.querySelector("#password").value = "";
      alert("Login Successful!!!");
      isLogin = true;
      localStorage.setItem("isLogin", "true");
      window.location.href = "../index.html";
    }
  }
}
