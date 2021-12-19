var favouriteDataArr =
  JSON.parse(localStorage.getItem("favouriteItemsDB")) || [];
print(favouriteDataArr);

function print(arr) {
  document.querySelector("#items-flex").textContent = "";
  arr.map(function (elem, ind) {
    var outerdiv = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", elem.img);
    var span1 = document.createElement("span");
    span1.textContent = "DELIVERY IN 90 MINUTES";
    var button = document.createElement("button");
    button.setAttribute("class", "star");
    button.textContent = "Remove Fav";
    button.addEventListener("click", function () {
      var favouriteItemsArr =
        JSON.parse(localStorage.getItem("favouriteItemsDB")) || [];
      favouriteItemsArr.splice(ind, 1);
      localStorage.setItem(
        "favouriteItemsDB",
        JSON.stringify(favouriteItemsArr)
      );
      window.location.href = "favourite.html";
    });
    span1.setAttribute("id", "del-span");
    var title = document.createElement("p");
    title.textContent = elem.title;
    title.setAttribute("id", "item-name");
    var quantity = document.createElement("p");
    quantity.textContent = elem.qt;
    var div2 = document.createElement("div");
    div2.setAttribute("id", "rate-cart");
    var mrpbutton = document.createElement("span");
    mrpbutton.textContent = "MRP  ₹" + elem.rs;
    mrpbutton.setAttribute("id", "mrp-span");
    var image2 = document.createElement("img");
    image2.setAttribute(
      "src",
      "https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"
    );
    image2.setAttribute("id", "trolley-img");
    div2.append(mrpbutton, image2);
    div2.addEventListener("click", function () {
      addtocart(elem);
    });
    outerdiv.append(image, span1, button, title, quantity, div2);
    document.querySelector("#items-flex").append(outerdiv);
  });
}

document.querySelector("#count-of-fav").textContent =
  "Favourite  [ " + favouriteDataArr.length + " ]";

document.querySelector("#go-to-cart").addEventListener("click", function () {
  window.location.href = "../Cart (R)/Cart.html";
});

document.querySelector("#go-to-home").addEventListener("click", function () {
  window.location.href = "../Landing Page (O)/index.html";
});

var cartArr = JSON.parse(localStorage.getItem("cartDatabase")) || [];
function addtocart(elem) {
  cartArr.push(elem);
  localStorage.setItem("cartDatabase", JSON.stringify(cartArr));
  document.querySelector("#go-to-cart").textContent =
    "Cart [ " + cartArr.length + " ]";
}
document.querySelector("#go-to-cart").textContent =
  "Cart [ " + cartArr.length + " ]";

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
