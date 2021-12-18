document.querySelector("form").addEventListener("submit", getdata);
var arr = JSON.parse(localStorage.getItem("fgdatabase")) || [];
print(arr);
function getdata(event) {
  event.preventDefault();
  var category = document.querySelector("#admin-cat").value;
  var name = document.querySelector("#cat-name").value;
  var imgsrc = document.querySelector("#img-src").value;
  var mrp = document.querySelector("#cat-mrp").value;
  var quant = document.querySelector("#item-quantity").value;
  var obj = {
    cat: category,
    title: name,
    img: imgsrc,
    rs: mrp,
    qt: quant,
  };
  arr.push(obj);
  localStorage.setItem("fgdatabase", JSON.stringify(arr));
  print(arr);
}
function print(arr) {
  document.querySelector("tbody").innerHTML = "";
  arr.map(function (elem, index) {
    var sr = document.createElement("td");
    sr.textContent = index + 1;
    var catg = document.createElement("td");
    catg.textContent = elem.cat;
    var title = document.createElement("td");
    title.textContent = elem.title;
    var image = document.createElement("td");
    image.textContent = elem.img;
    var quantity = document.createElement("td");
    quantity.textContent = elem.qt;
    var rate = document.createElement("td");
    rate.textContent = elem.rs;
    var rm = document.createElement("td");
    rm.textContent = "Remove";
    rm.addEventListener("click", function () {
      arr.splice(index, 1);
      localStorage.setItem("fgdatabase", JSON.stringify(arr));
      print(arr);
    });
    var row = document.createElement("tr");
    row.append(sr, catg, title, image, quantity, rate, rm);
    document.querySelector("tbody").append(row);
  });
}
