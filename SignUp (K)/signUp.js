document.querySelector("#signup").addEventListener("submit", signUp);
var userDataBase = JSON.parse(localStorage.getItem("userDataBase")) || [];
var flag = false;

function signUp(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var number = document.querySelector("#number").value;
    var password = document.querySelector("#password").value;

    var userData = {
        userEmail: email,
        userNumber: number,
        userPassword: password
    }
    if (userDataBase.length != 0) {
        var arr = JSON.parse(localStorage.getItem("userDataBase"));
        for (var i = 0; i < arr.length; i++) {
            if (((arr[i].userEmail == email) || (arr[i].userNumber == number))) {
                flag = true;
                break;
            }
        }
        if (flag == true) {
            alert("user already exists!!!");
        }
        else {
            userDataBase.push(userData);
            localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
            alert("Signup Successful!!!");
            window.location.href = "../Login (K)/login.html";
            document.querySelector("#email").value = "";
            document.querySelector("#number").value = "";
            document.querySelector("#password").value = "";
        }
    }
    else {
        userDataBase.push(userData);
        localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
        alert("Signup Successful!!!");
        window.location.href = "../Login (K)/login.html";
        document.querySelector("#email").value = "";
        document.querySelector("#number").value = "";
        document.querySelector("#password").value = "";
    }
}