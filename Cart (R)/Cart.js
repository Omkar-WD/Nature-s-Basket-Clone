var cartArr = JSON.parse(localStorage.getItem("cartDatabase")) || [];
displayTable(cartArr);
document.querySelector("#cart-items-count").textContent = cartArr.length;
if (cartArr.length != 0) {
    var subTotalInRs = Math.ceil(cartArr.map(function (elem) {
        return Number(elem.rs);
    }).reduce(function (a, b) {
        return a + b;
    }));
}
else {
    var subTotalInRs = 0;
}

document.querySelector("#sub-total").textContent = subTotalInRs;
var TotalInRs = subTotalInRs + 50;
document.querySelector("#total").textContent = TotalInRs;
var flagDiscount = false;

function applyPromo() {
    var promo = document.querySelector("#promoCode").value;
    if (promo == "NB30") {
        TotalInRs = Math.ceil(subTotalInRs + 50 - subTotalInRs * 0.3);
        document.querySelector("#discount").textContent = Math.ceil(subTotalInRs * 0.3);
        document.querySelector("#total").textContent = TotalInRs;
        flagDiscount = true;
        document.querySelector("#promoCode").value = "";
    }
}


function displayTable(arr) {
    document.querySelector("tbody").textContent = "";
    arr.map(function (elem, ind) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent = ind + 1;
        var td2 = document.createElement("td");
        td2.textContent = elem.title;
        var td3 = document.createElement("td");
        td3.textContent = elem.rs;
        var td4 = document.createElement("td");
        td4.textContent = "0.00";
        var td5 = document.createElement("td");
        td5.textContent = elem.qt;
        var td6 = document.createElement("td");
        td6.textContent = elem.rs;
        var td7 = document.createElement("td");
        var btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.setAttribute("id", "remove-item-button");
        btn.addEventListener("click", function () {
            arr = JSON.parse(localStorage.getItem("cartDatabase"));
            arr.splice(ind, 1);
            localStorage.setItem("cartDatabase", JSON.stringify(arr));
            displayTable(arr);
            document.querySelector("#cart-items-count").textContent = arr.length;
            if (arr.length != 0) {
                subTotalInRs = Math.ceil(arr.map(function (elem) {
                    return Number(elem.rs);
                }).reduce(function (a, b) {
                    return a + b;
                }));
            }
            else {
                subTotalInRs = 0;
            }
            document.querySelector("#sub-total").textContent = subTotalInRs;
            TotalInRs = subTotalInRs + 50;
            if (flagDiscount) {
                TotalInRs = Math.ceil(subTotalInRs + 50 - subTotalInRs * 0.3);
                document.querySelector("#discount").textContent = Math.ceil(subTotalInRs * 0.3);
                document.querySelector("#total").textContent = TotalInRs;
            } else {
                document.querySelector("#total").textContent = TotalInRs;
            }
        });
        td7.append(btn);
        tr.append(td1, td2, td3, td4, td5, td6, td7);
        document.querySelector("tbody").append(tr);
    });
}
document.querySelector("#homepage-button").addEventListener("click",function(){
    window.location.href = "../Category (P)/category.html";
})
document.querySelector("#homepage-button1").addEventListener("click",function(){
    window.location.href = "../Category (P)/category.html";
})