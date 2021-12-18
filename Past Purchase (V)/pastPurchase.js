var headerMenus = [
  {
    name: "Blogs",
    href: "#blogs",
  },
  {
    name: "Offers",
    href: "#offers",
  },
  {
    name: "Book Store Visit",
    href: "#book-offer-visit",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Favourite",
    href: "../Favourite List (B)/favourite.html",
  },
  // {
  //   name: "Past Purchases",
  //   href: "../Past Purchase (V)/pastPurchase.html",
  // },
  {
    name: "Cart",
    href: "../Cart (R)/Cart.html",
  },
  {
    name: "Login",
    href: "../Login (K)/login.html",
  },
  {
    name: "SignUp",
    href: "../SignUp (K)/signUp.html",
  },
];
headerMenus.map(function (elem) {
  var header = document.querySelector(".header-right");
  var aTag = document.createElement("a");
  aTag.setAttribute("href", elem.href);
  // aTag.setAttribute("target", "_blank");
  aTag.textContent = elem.name;
  header.append(aTag);
});
var pastPurchaseArr = [
  {
    date: "11/12/12",
    orderId: "ORD00001",
    amount: "500",
    paymentStatus: "Paid",
    paymentMode: "Cash",
  },
  {
    date: "12/12/12",
    orderId: "ORD00002",
    amount: "500",
    paymentStatus: "Paid",
    paymentMode: "Cash",
  },
  {
    date: "13/12/12",
    orderId: "ORD00003",
    amount: "500",
    paymentStatus: "Paid",
    paymentMode: "Cash",
  },
];
localStorage.setItem("pastPurchaseDB", JSON.stringify(pastPurchaseArr));
var orderId = 0;
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
