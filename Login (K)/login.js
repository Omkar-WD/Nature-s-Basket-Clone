document.querySelector("#login").addEventListener("submit", login);
var flag = false;
function login(event) {
    event.preventDefault();
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    var arr = JSON.parse(localStorage.getItem("userDataBase"));
    if (username == "admin" && password == "admin") {
        alert("Admin User!!!");
        window.location.href = "../Category (P)/catadmin.html";
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if (((arr[i].userEmail == username) || (arr[i].userNumber == username)) && arr[i].userPassword == password) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            alert("unregistered user");
        }
        else {
            console.log("registered user");
            document.querySelector("#username").value = "";
            document.querySelector("#password").value = "";
            alert("Login Successful!!!");
            window.location.href = "../Landing Page (O)/index.html";
        }
    }
}