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
        href: "#favourite",
    },
    {
        name: "Past Purchases",
        href: "#past-purchases",
    },
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

var specializeCardContent = [
    {
        src: "specialzeCard1.jpeg",
        alt: "specialize card 1",
    },
    {
        src: "specialzeCard2.jpeg",
        alt: "specialize card 2",
    },
    {
        src: "specialzeCard3.jpeg",
        alt: "specialize card 3",
    },
];

var eventsList = [
    {
        href: "#",
        src: "event1.jpg",
        alt: "event1"
    },
    {
        href: "#",
        src: "event2.jpg",
        alt: "event2"
    },
    {
        href: "#",
        src: "event3.png",
        alt: "event3"
    },
];

var paraInfo = [
    {
        header: "Online Grocery Store India",
        para: `Nature’s Basket is a grocery store operating in Mumbai, Bangalore and Pune with deliveries to all cities
        across
        India including Hyderabad, Delhi, Kolkata, Chennai, Surat and more.We offer a wide range of food
        products
        for
        all your everyday needs and even offer grocery home delivery as well as a grocery shop online for you to
        purchase from.Our online grocery store has fresh fruits and vegetables, fresh and frozen meats and
        seafood,
        a
        wide range of breads and other packaged bakery products as well as a range of fresh cheeses from around
        the
        world.We even have a range of every staple and international cuisine product to meet your needs along
        with
        organic products for fresh and packaged food items.With our offerings, we have the best online food
        shop &
        online grocery shopping platform available for all your grocery products as well as physical grocery stores in select cities.`
    },
    {
        header: "Best Online Grocery Supermarket India",
        para: `With stores in Mumbai, Pune and Bangalore and online delivery services, you can now have all your grocery
        supermarket shopping done online. We have a wide range of grocery products to offer at our stores for
        you to
        buy
        groceries from a channel convenient to you. Choose from fresh produce to packaged goods, buy groceries
        online
        and get them delivered straight to your doorstep, thus making it a convenient and quick process. You can
        pay
        for
        the shopping using credit cards, cash, coupons or online banking facility. We are sure to have all the
        grocery
        products for your daily dietary needs from regular local Indian brands and products to exotic and
        international
        imported ones.`
    },
    {
        header: "Online Grocery Supermarket Shopping India",
        para: `With our wide range of groceries available, Nature’s Basket is a large online supermarket and grocery
        store
        for
        all your everyday food needs. We offer you the best quality grocery products which you can buy online
        and
        have
        them delivered to you conveniently. We have our grocery stores in Mumbai, Pune and Bangalore where you
        can
        buy
        groceries and food items. We also have the best online grocery store to shop for fruits and vegetables,
        meats
        and seafood, breads and other bakery items as well as cheese and dairy. Order groceries online from the
        best
        quality grocery store at best prices.

        Find a variety of Best Christmas gifts such as delightful Cakes, Chocolates, Cookies, Turkey, Stollen,
        Gourmet
        Gift Baskets, Sweets & Lots More Here`
    }
];

headerMenus.map(function (elem) {
    var header = document.querySelector(".header-right");
    var aTag = document.createElement("a");
    aTag.setAttribute("href", elem.href);
    aTag.setAttribute("target", "_blank");
    aTag.textContent = elem.name;
    header.append(aTag);
});

specializeCardContent.map(function (elem) {
    var contentDiv = document.querySelector(".specialize_card");
    var img = document.createElement("img");
    img.setAttribute("src", elem.src);
    img.setAttribute("alt", elem.alt);
    contentDiv.append(img);
});

eventsList.map(function (elem) {
    var eventList = document.querySelector("#events-list");
    var aTag = document.createElement("a");
    var img = document.createElement("img");
    img.setAttribute("src", elem.src);
    img.setAttribute("alt", elem.alt);
    aTag.setAttribute("href", elem.href);
    aTag.setAttribute("target", "_blank");
    aTag.append(img);
    eventList.append(aTag);
});

paraInfo.map(function (elem) {
    var paraInfo = document.querySelector(".para_info");
    var h3 = document.createElement("h3");
    h3.textContent = elem.header;
    var pTag = document.createElement("p");
    pTag.textContent = elem.para;
    paraInfo.append(h3, pTag);
});

var images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpg', 'slide6.jpg', 'slide7.jpg'];
var blogImages = ["NB_paneerBlog_banner.jpg", "NB_pastaBlog_banner.jpg", "NB_seedBlog_banner.jpg"];
var i = 0, j = 0;
function slideShow() {
    document.getElementById("image").src = images[i];
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("slideShow()", 2000);
}
function blogSlideShow() {
    document.getElementById("blog-image").src = blogImages[j];
    if (j < blogImages.length - 1) {
        j++;
    }
    else {
        j = 0;
    }
    setTimeout("blogSlideShow()", 2000);
};
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
};
addLoadEvent(slideShow);
addLoadEvent(blogSlideShow);

function filteredCategory() {
    var selectedCategory = document.querySelector("#category-filter").value;
    // if(selectedCategory == "All"){
    //     window.location.href="../Category (P)/category.html";
    // }
    // else if(selectedCategory == "fruits and vegetables"){

    // }
    localStorage.setItem("filteredCategory", selectedCategory);
    window.location.href = "../Category (P)/category.html";

}
