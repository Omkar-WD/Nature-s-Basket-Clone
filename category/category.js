var proddata = JSON.parse(localStorage.getItem("fgdatabase")) || [];
print(proddata);
function print(arr){
    document.querySelector("#items-flex").textContent = "";
    arr.map(function(elem){
        var outerdiv = document.createElement("div");
        var image = document.createElement("img");
        image.setAttribute("src",elem.img);
        var span1 = document.createElement("span");
        span1.textContent = "DELIVERY IN 90 MINUTES";
        span1.setAttribute("id","del-span")
        var title = document.createElement("p");
        title.textContent=elem.title;
        title.setAttribute("id","item-name");
        var quantity = document.createElement("p");
        quantity.textContent = elem.qt;
        var div2 = document.createElement("div");
        div2.setAttribute("id","rate-cart")
        var mrpbutton = document.createElement("span");
        mrpbutton.textContent = "MRP  ₹"+elem.rs;
        mrpbutton.setAttribute("id","mrp-span");
        var image2 = document.createElement("img");
        image2.setAttribute("src","https://www.naturesbasket.co.in/Images/CartAddBtn.PNG");
        image2.setAttribute("id","trolley-img")
        div2.append(mrpbutton,image2);
        outerdiv.append(image,span1,title,quantity,div2);
        document.querySelector("#items-flex").append(outerdiv);
})
}
document.querySelector("#items-count").textContent = proddata.length+" Products.";

function pricesort(){
    var selected = document.querySelector("#relevance-sort").value;
    if(selected == "high"){
        var descending = proddata.sort(function(a,b){
            return Number(b.rs) - Number(a.rs);
        })
        print(descending);
    }
    else if(selected == "low"){
        var ascending = proddata.sort(function(a,b){
            return Number(a.rs) - Number(b.rs);
        })
        print(ascending);
    }
}
document.querySelector("#divSearch > div.filter-product-body > div.divLeftSearchSideBar")