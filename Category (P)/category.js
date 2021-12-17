var proddata = JSON.parse(localStorage.getItem("fgdatabase")) || [];
var cartArr = JSON.parse(localStorage.getItem("cartDatabase")) || [];
document.querySelector("#go-to-cart").textContent = "Cart [ " + cartArr.length+" ]";
print(proddata);
function print(arr) {
    document.querySelector("#items-flex").textContent = "";
    arr.map(function (elem) {
        var outerdiv = document.createElement("div");
        var image = document.createElement("img");
        image.setAttribute("src", elem.img);
        var span1 = document.createElement("span");
        span1.textContent = "DELIVERY IN 90 MINUTES";
        span1.setAttribute("id", "del-span")
        var title = document.createElement("p");
        title.textContent = elem.title;
        title.setAttribute("id", "item-name");
        var quantity = document.createElement("p");
        quantity.textContent = elem.qt;
        var div2 = document.createElement("div");
        div2.setAttribute("id", "rate-cart")
        var mrpbutton = document.createElement("span");
        mrpbutton.textContent = "MRP  ₹" + elem.rs;
        mrpbutton.setAttribute("id", "mrp-span");
        var image2 = document.createElement("img");
        image2.setAttribute("src", "https://www.naturesbasket.co.in/Images/CartAddBtn.PNG");
        image2.setAttribute("id", "trolley-img")
        div2.append(mrpbutton, image2);
        div2.addEventListener("click", function () {
            addtocart(elem);
        });
        outerdiv.append(image, span1, title, quantity, div2);
        document.querySelector("#items-flex").append(outerdiv);
    })
}
document.querySelector("#items-count").textContent = proddata.length + " Products.";

function pricesort() {
    var selected = document.querySelector("#relevance-sort").value;
    if (selected == "high") {
        var descending = proddata.sort(function (a, b) {
            return Number(b.rs) - Number(a.rs);
        })
        print(descending);
    }
    else if (selected == "low") {
        var ascending = proddata.sort(function (a, b) {
            return Number(a.rs) - Number(b.rs);
        })
        print(ascending);
    }
}

var displayCategory = localStorage.getItem("filteredCategory") || "All";
if (displayCategory == "fruits and vegetables") {
    var arr = JSON.parse(localStorage.getItem("fgdatabase"));
    var filteredArr = arr.filter(function (elem) {
        return elem.cat == displayCategory;
    });
    print(filteredArr);
    document.querySelector("#items-count").textContent = filteredArr.length + " Products.";
    document.querySelector("#selected-category-name").textContent = "Fruit and Vegetables";

}
else if (displayCategory == "grocery") {
    var arr = JSON.parse(localStorage.getItem("fgdatabase"));
    var filteredArr = arr.filter(function (elem) {
        return elem.cat == displayCategory;
    });
    //    console.log(filteredArr);
    print(filteredArr);
    document.querySelector("#items-count").textContent = filteredArr.length + " Products.";
    document.querySelector("#selected-category-name").textContent = "Groceries";

}
document.querySelector("#go-to-home").addEventListener("click", gotohome);
function gotohome() {
    window.location.href = "../Landing Page (O)/index.html";
}


var cartArr = JSON.parse(localStorage.getItem("cartDatabase")) || [];
function addtocart(elem) {
    cartArr.push(elem);
    localStorage.setItem("cartDatabase", JSON.stringify(cartArr));
    document.querySelector("#go-to-cart").textContent = "Cart [ " + cartArr.length+" ]";
}

document.querySelector("#go-to-cart").addEventListener("click",function(){
    window.location.href = "../Cart (R)/Cart.html"

})

function filteredCategory(){
    var selected = document.querySelector("#category-filter").value;
    if(selected == "All" || selected == ""){
        print(proddata);
        document.querySelector("#items-count").textContent = proddata.length + " Products.";
    document.querySelector("#selected-category-name").textContent = "All";
    }
    else{
    var categoryFiltered = proddata.filter(function(elem){
        return elem.cat == selected;
        
    })
    print(categoryFiltered);
    document.querySelector("#items-count").textContent = categoryFiltered.length + " Products.";
    if(selected == "fruits and vegetables"){
    document.querySelector("#selected-category-name").textContent = "Fruits and Vegetables";
    }
    else if(selected == "grocery"){
    document.querySelector("#selected-category-name").textContent = "Groceries";
    }
}
}
