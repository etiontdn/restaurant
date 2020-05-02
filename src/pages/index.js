import "../css/main.css"
import createHomepage from "./home.js";
import createMenupage from "./menu.js";
import createContactpage from "./contact.js";
import foodBG1 from "../images/food-wide-1-comp.jpg";
import foodBG1B from "../images/food-wide-1-big-comp.jpg";
import foodBG2 from "../images/food-wide-2-comp.jpg";
import foodBG2B from "../images/food-wide-2-big-comp.jpg";
import foodBG3 from "../images/food-wide-3-comp.jpg";
import foodBG3B from "../images/food-wide-3-big-comp.jpg";

let foodbg1 = new Image();
if (window.matchMedia('(max-width: 800px)').matches) {
  foodbg1.src = foodBG1;
} else foodbg1.src = foodBG1B;

let foodbg2 = new Image();
if (window.matchMedia('(max-width: 800px)').matches) {
  foodbg2.src = foodBG2;
} else foodbg2.src = foodBG2B;

let foodbg3 = new Image();
if (window.matchMedia('(max-width: 800px)').matches) {
  foodbg3.src = foodBG3;
} else foodbg3.src = foodBG3B;


function createHeader () {
  let containerDiv = document.createElement("div");
  containerDiv.classList.add("container")
  let header = document.createElement("header");
  header.classList.add("header")
  let headerContent = document.createElement("div");
  headerContent.classList.add("header-content");
  let title = document.createElement("div");
  title.classList.add("title", "colorletter");
  let tabs = document.createElement("div");
  tabs.classList.add("tabs");
  let headerTitle = document.createElement("h1");
  headerTitle.innerText = "Etiontdn's";
  let homeButton = document.createElement("button");
  homeButton.classList.add("tab-selector", "active", "colorletter");
  homeButton.innerText = "Home";
  homeButton.tabIndex = 1;
  homeButton.addEventListener ("click", () => {
    changePage("home", currentPage);
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
    homeButton.classList.add("active");
  });
  let menuButton = document.createElement("button");
  menuButton.classList.add("tab-selector", "colorletter");
  menuButton.innerText = "Menu";
  menuButton.tabIndex = 2;
  menuButton.addEventListener ("click", () => {
    changePage("menu", currentPage);
    contactButton.classList.remove("active");
    homeButton.classList.remove("active");
    menuButton.classList.add("active");
  });
  let contactButton = document.createElement("button");
  contactButton.classList.add("tab-selector", "colorletter");
  contactButton.innerText = "Contact";
  contactButton.tabIndex = 3;
  contactButton.addEventListener ("click", () => {
    changePage("contact", currentPage);
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.add("active");
  });



  title.appendChild(headerTitle);
  headerContent.appendChild(title);
  tabs.appendChild(homeButton);
  tabs.appendChild(menuButton);
  tabs.appendChild(contactButton);
  headerContent.appendChild(tabs);
  header.appendChild(headerContent);
  containerDiv.appendChild(header);
  document.querySelector(".content").appendChild(containerDiv);
}

function createFooter () {
  let footerContainer = document.createElement("div");
  footerContainer.classList.add("footer-container");
  let footer = document.createElement("footer");
  footer.classList.add("footer");
  let authorsContainer = document.createElement("div");
  authorsContainer.classList.add("authors");
  let author = document.createElement("div");
  author.classList.add("author");
  author.innerText = "Made in 2020 by ";
  let authorLink = document.createElement("a");
  authorLink.href = "https://etiontdn.github.io";
  authorLink.target = "_blank";
  authorLink.innerText = "Etiontdn";
  author.appendChild(authorLink);
  authorsContainer.appendChild(author);
  footer.appendChild(authorsContainer);
  footerContainer.appendChild(footer);
  document.querySelector(".container").appendChild(footerContainer);
}

function deleteCurrent () {
  document.querySelector(".container").childNodes[1].remove();
}

function changePage (to, from) {
  if (to != from) {
    if (to === "home") {
      currentPage = to;
      deleteCurrent();
      createHomepage(foodbg1);
    } else if (to === "menu") {
      currentPage = to;
      deleteCurrent();
      createMenupage(foodbg2);
    } else if (to === "contact") {
      currentPage = to;
      deleteCurrent();
      createContactpage(foodbg3);
    }
  }
}

let currentPage;

function startPage () {
  createHeader();
  createFooter();
  currentPage = "home";
  createHomepage(foodbg1);
}



window.addEventListener("load", (e) => {
  startPage();
});
