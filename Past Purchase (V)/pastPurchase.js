var pastPurchaseArr = JSON.parse(localStorage.getItem("pastPurchaseDB")) || [];
displayTable(pastPurchaseArr);

function displayTable(arr) {
  document.querySelector("tbody").innerHTML = "";
  arr.map(function (elem, ind) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = ind + 1;
    var td2 = document.createElement("td");
    td2.textContent = elem.date;
    var td3 = document.createElement("td");
    td3.textContent = elem.orderId;
    var td4 = document.createElement("td");
    td4.textContent = elem.amount;
    var td5 = document.createElement("td");
    td5.textContent = elem.paymentStatus;
    var td6 = document.createElement("td");
    td6.textContent = elem.paymentMode;
    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
}

document.querySelector("#go-to-home").addEventListener("click", function () {
  window.location.href = "../Landing Page (O)/index.html";
});

document.querySelector("#search-button").addEventListener("click", function () {
  var orderID = document.querySelector("#order-search").value;
  var pastPurchaseDB = JSON.parse(localStorage.getItem("pastPurchaseDB"));
  var isPresent = pastPurchaseDB.filter(function (elem, index) {
    if (orderID == index + 1) return index + 1;
  });
  displayTable(isPresent);
});

function allOrders() {
  var pastPurchaseArr = JSON.parse(localStorage.getItem("pastPurchaseDB"));
  displayTable(pastPurchaseArr);
}

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
