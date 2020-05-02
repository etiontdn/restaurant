import "../css/main.css"

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
  let menuButton = document.createElement("button");
  menuButton.classList.add("tab-selector", "colorletter");
  menuButton.innerText = "Menu";
  let contactButton = document.createElement("button");
  contactButton.classList.add("tab-selector", "colorletter");
  contactButton.innerText = "Contact";



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
  let footer = document.createELement("footer");
  let authorsContainer = document.createElement("div");
  let author = document.createElement("div");
  let authorLink = document.createElement("a");
  authorLink.href = "https://etiontdn.github.io";
  authorLink.target = "_blank";
  author.innerText = "Made in 2020 by ";
  author.appendChild(authorLink);
  authorsContainer.appendChild(author);
  footer.appendChild(authorsContainer);
  footerContainer.appendChild(footer);
  document.querySelector(".container").appendChild(footerContainer);
}

createHeader();
createFooter();
