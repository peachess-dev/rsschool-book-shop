fetch("books.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

//BODY STRUCTURE

const body = document.body;

const container = document.createElement("div");
container.className = "container";

const header = document.createElement("header");
const nav = document.createElement("nav");
const main = document.createElement("main");
const footer = document.createElement("footer");

body.append(container);
container.append(header, nav, main, footer);

//header structure
const headerContainer = document.createElement("div");
headerContainer.className = "inner__container grid col-12";
header.append(headerContainer);

// main structure
const mainContainer = document.createElement("div");
mainContainer.className = "inner__container flex-column";

const promoCarousel = document.createElement("section");
promoCarousel.className = "promo-carousel grid col-12";

const itemContainer = document.createElement("section");
itemContainer.className = "item-container grid col-12";

mainContainer.append(promoCarousel, itemContainer);
main.append(mainContainer);

//footer structure
const footerContainer = document.createElement("div");
footerContainer.className = "inner__container grid col-12";
footer.append(footerContainer);

//HEADER

//header ticker
const headerTickerContainer = document.createElement("div");
headerTickerContainer.className = "header__ticker__container";

const headerTicker = document.createElement("div");
headerTicker.className = "header__ticker";
headerTicker.innerHTML =
  "<div class='ticker__item'><p>Free shipping from &euro;100</p></div> <div class='ticker__item'><p>Every purchase supports independent bookstores</p></div>";

headerTickerContainer.append(headerTicker);
headerContainer.append(headerTickerContainer);

// header logo
const headerLogo = document.createElement("div");
headerLogo.className = "header__logo";

const logoImg = document.createElement("div");
logoImg.className = "logo__img";
logoImg.innerHTML = "<a href='#'><img src='../app/assets/images/logo.svg'></a>";

const logoText = document.createElement("div");
logoText.className = "logo__text";
logoText.innerHTML = "<a href='#'><h1>Book Shop</h1></a>";

headerLogo.append(logoImg, logoText);
headerContainer.append(headerLogo);

// header search bar
const headerSearch = document.createElement("div");
headerSearch.setAttribute("class", "header__search");

const searchBar = document.createElement("input");
searchBar.setAttribute("class", "search__bar", "type", "text");

const searchBarIcon = document.createElement("button");
searchBarIcon.setAttribute("class", "search__icon");
searchBarIcon.innerHTML = '<i class="fi fi-rr-search"></i>';

headerSearch.append(searchBar, searchBarIcon);
headerContainer.append(headerSearch);

// header info
const headerInfo = document.createElement("div");
headerInfo.className = "header__info";

const user = document.createElement("button");
user.className = "user";
user.innerHTML = '<i class="fi fi-rr-user"></i>';

const cart = document.createElement("button");
cart.className = "cart";
cart.innerHTML = '<i class="fi fi-rr-shopping-cart"></i>';

headerInfo.append(user, cart);
headerContainer.append(headerInfo);

// SHOPPING CART
//add shopping cart
var shoppingCart = document.createElement("div");
shoppingCart.className = "header__shopping-cart";
shoppingCart.style.display = "none";
headerContainer.append(shoppingCart);

// toggle shopping cart
cart.addEventListener("click", () => {
  if (shoppingCart.style.display === "none") {
    shoppingCart.style.display = "flex";
  } else {
    shoppingCart.style.display = "none";
  }
});

// total sum section
let totalSum = 0;
const total = document.createElement("div");
total.className = "sum-total";
total.innerHTML = `Total: $${totalSum}`;

// checkout button
const checkout = document.createElement("button");
checkout.className = "checkout-btn";
checkout.innerHTML = "proceed checkout";

shoppingCart.append(total, checkout);

// NAVIGATION BAR
const navContainer = document.createElement("div");
navContainer.className = "inner__container grid col-12";
nav.append(navContainer);

const books = document.createElement("button");
books.setAttribute("class", "nav-btn");
const booksText = document.createTextNode("Books");
books.appendChild(booksText);
books.title = "Books";
books.href = "";
navContainer.append(books);

const bestsellers = document.createElement("button");
bestsellers.setAttribute("class", "nav-btn");
const bestsellersText = document.createTextNode("Bestsellers");
bestsellers.appendChild(bestsellersText);
bestsellers.title = "Bestsellers";
bestsellers.href = "";
navContainer.append(bestsellers);

const eBooks = document.createElement("button");
eBooks.setAttribute("class", "nav-btn");
const eBooksText = document.createTextNode("eBooks");
eBooks.appendChild(eBooksText);
eBooks.title = "eBooks";
eBooks.href = "";
navContainer.append(eBooks);

const audioBooks = document.createElement("button");
audioBooks.setAttribute("class", "nav-btn");
const audioBooksText = document.createTextNode("Audiobooks");
audioBooks.appendChild(audioBooksText);
audioBooks.title = "Audiobooks";
audioBooks.href = "";
navContainer.append(audioBooks);

const toys = document.createElement("button");
toys.setAttribute("class", "nav-btn");
const toysText = document.createTextNode("Toys&Games");
toys.appendChild(toysText);
toys.title = "Toys&Games";
toys.href = "";
navContainer.append(toys);

const sale = document.createElement("button");
sale.setAttribute("class", "nav-btn");
const saleText = document.createTextNode("Sale");
sale.appendChild(saleText);
sale.title = "Sale";
sale.href = "";
navContainer.append(sale);

//MAIN SECTION
function appendData(data) {
  // render books catalog

  for (let i = 0; i < data.length; i++) {
    const item = document.createElement("div");
    item.className = "item";
    itemContainer.append(item);

    const itemImg = document.createElement("div");
    itemImg.className = "item__img";
    const bookImg = document.createElement("img");
    bookImg.src = data[i].imageLink;
    itemImg.append(bookImg);

    const itemInfo = document.createElement("div");
    itemInfo.className = "item__info";
    item.append(itemInfo);

    const itemName = document.createElement("h3");
    itemName.className = "item__name";
    itemName.innerHTML = data[i].title;

    const itemAuthor = document.createElement("h4");
    itemAuthor.className = "item__author";
    itemAuthor.innerHTML = data[i].author;

    const showMore = document.createElement("button");
    showMore.className = "show-btn";
    showMore.innerHTML = "Show more";

    const itemDescription = document.createElement("div");
    itemDescription.className = "item__description";
    itemDescription.style.display = "none";
    itemDescription.innerHTML = "<p>" + data[i].description + "</p>";
    const itemClose = document.createElement("button");
    itemClose.className = "close-btn";
    itemClose.innerHTML = '<i class="fi fi-rr-cross-small"></i>';
    itemDescription.append(itemClose);

    const itemToolbar = document.createElement("div");
    itemToolbar.className = "item__toolbar";

    const itemPrice = document.createElement("div");
    itemPrice.className = "toolbar__price";
    const bookPrice = document.createElement("p");
    bookPrice.innerHTML = data[i].price + "$";
    itemPrice.append(bookPrice);

    const itemFavorite = document.createElement("button");
    itemFavorite.className = "toolbar__favorite";
    itemFavorite.innerHTML = "<i class='fi fi-rr-heart'></i>";

    const itemCart = document.createElement("button");
    itemCart.className = "toolbar__cart";
    itemCart.innerHTML = "<i class='fi fi-rr-shopping-cart'></i>";

    itemToolbar.append(itemPrice, itemFavorite, itemCart);
    itemInfo.append(
      itemName,
      itemAuthor,
      showMore,
      itemDescription,
      itemToolbar
    );
    item.append(itemImg, itemInfo);

    //show and hide book description
    showMore.addEventListener("click", () => {
      if (itemDescription.style.display === "none") {
        itemDescription.style.display = "flex";
      } else {
        itemDescription.style.display = "none";
      }
    });

    itemClose.addEventListener("click", () => {
      if (itemDescription.style.display === "none") {
        itemDescription.style.display = "flex";
      } else {
        itemDescription.style.display = "none";
      }
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!target.closest(".item")) {
        itemDescription.style.display = "none";
      } else {
        const clickedItem = target.closest(".item");
        const currentItem = itemDescription.closest(".item");
        if (clickedItem !== currentItem) {
          itemDescription.style.display = "none";
        }
      }
    });

    //declaring shopping cart variables
    const cartRow = document.createElement("div");
    cartRow.className = "cart-row";

    const cartRowDiv = document.createElement("div");
    cartRowDiv.className = "cart-row-div";

    const cartRowTitle = document.createElement("h2");
    cartRowTitle.className = "cart-row-title";
    cartRowTitle.innerHTML = data[i].title;

    const cartRowQty = document.createElement("input");
    cartRowQty.className = "cart-row-qty";
    cartRowQty.setAttribute("type", "number");
    cartRowQty.setAttribute("step", "1");
    cartRowQty.setAttribute("min", "1");
    cartRowQty.setAttribute("max", "5");
    cartRowQty.innerHTML = cartRowQty.value;
    // cartRowQty.value = 1;
    // cartRowQty.innerHTML = updateTotalQty();

    const cartRowPrice = document.createElement("h2");
    cartRowPrice.className = "cart-row-price";
    cartRowPrice.innerHTML = data[i].price + "$";

    const cartDeleteBtn = document.createElement("button");
    cartDeleteBtn.className = "cart-delete-btn";
    cartDeleteBtn.innerHTML = '<i class="fi fi-rr-cross-small"></i>';

    // render items in shopping cart
    itemCart.addEventListener("click", addToCart);

    function addToCart() {
      shoppingCart.appendChild(cartRow);
      cartRowDiv.append(cartRowTitle, cartRowQty, cartRowPrice);
      cartRow.append(cartRowDiv, cartDeleteBtn);

      // shopping cart delete items
      cartDeleteBtn.addEventListener("click", () => {
        shoppingCart.removeChild(cartRow);
        reduceTotalSum();
      });

      updateTotalQty();

      updateTotalSum();
    }

    // total quantity
    function updateTotalQty() {
      let quantity = new Array(data[i].author);
      cartRowQty.innerHTML = `${quantity.length}`;
      console.log(cartRowQty);
    }

    //update total sum
    function updateTotalSum() {
      let newPrice = data[i].price;
      totalSum += newPrice;
      total.innerHTML = `Total: $${totalSum}`;
      console.log(totalSum);
    }

    // reduce total sum
    function reduceTotalSum() {
      let newPrice = data[i].price;
      totalSum -= newPrice;
      total.innerHTML = `Total: $${totalSum}`;
    }
  }

  // redirect to order page
  checkout.onclick = function () {
    location.href = "../app/order/order.html";
  };
}

// FOOTER
const footerTop = document.createElement("div");
footerTop.className = "footer__top flex-column";
footerTop.innerHTML =
  "<a>About</a> <a>Shipping</a> <a>Return policy</a> <a>Get support</a> <a>Contacts</a> <a>Follow us</a>";

const footerMiddle = document.createElement("div");
footerMiddle.className = "footer__middle flex-row hidden";

footerMiddle.innerHTML =
  '<p>We accept</p><i class="fa-brands fa-cc-visa fa-2xl" style="color: #e9c48e;"></i><i class="fa-brands fa-cc-mastercard fa-2xl" style="color: #e9c48e;"></i><i class="fa-brands fa-google-pay fa-2xl" style="color: #e9c48e;"></i><i class="fa-brands fa-apple-pay fa-2xl" style="color: #e9c48e;"></i><i class="fa-brands fa-bitcoin fa-bounce fa-2xl" style="color: #e9c48e;"></i>';

const footerBot = document.createElement("div");
footerBot.className = "footer__bot flex-row hidden";
footerBot.innerHTML =
  '<a>Terms of use</a> <a>Privacy notes</a> <div style="display: flex; align-items: center; gap: .2rem;"><i class="fa-solid fa-copyright fa-xs" style="color: #e9c48d;"></i><p>All rights reserved</p></div>';

footerContainer.append(footerTop, footerMiddle, footerBot);

//FUNCTIONS

function tickerAnimation() {
  const tickerContainer = document.querySelector(".header__ticker__container");
  const ticker = document.querySelector(".header__ticker");
  const tickerItems = document.querySelectorAll(".ticker__item");

  let tickerWidth = 0;
  tickerItems.forEach((item) => {
    tickerWidth += item.offsetWidth + 10; // Consider margin-right value
  });

  ticker.style.width = tickerWidth + "px";
  console.log(tickerWidth);

  function animate() {
    if (tickerContainer.scrollLeft >= tickerWidth) {
      tickerContainer.scrollLeft = 0;
    } else {
      tickerContainer.scrollLeft += 1;
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  // setInterval(animate, 30); // Adjust the speed as needed
}

tickerAnimation();
