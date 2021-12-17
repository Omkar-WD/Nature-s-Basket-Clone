var data = [
  {
    cat: "fruits and vegetables",
    title: "Custard Apple",
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/63b69966-4855-4b1f-80a2-74796c8a5e09_425x425.JPG",
    rs: "57.25",
    qt: "250 g",
  },
];
print(data);

function print(arr) {
  document.querySelector("#items-flex").textContent = "";
  arr.map(function (elem) {
    var outerdiv = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", elem.img);
    var span1 = document.createElement("span");
    span1.textContent = "DELIVERY IN 90 MINUTES";
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
    outerdiv.append(image, span1, title, quantity, div2);
    document.querySelector("#items-flex").append(outerdiv);
  });
}
