

function createHomepage () {
  let mainPage = document.createElement("div");
  mainPage.classList.add("main-page");
  let pageContainer = document.createElement("div")
  pageContainer.classList.add("page-container");
  let welcome = document.createElement("div");
  welcome.classList.add("welcome");
  let welcomeText = document.createElement("div");
  welcomeText.classList.add("welcome-text", "colorletter");
  welcomeText.innerText = "Welcome to";
  let logo = document.createElement("span");
  logo.classList.add("logo");
  logo.innerText = "Etiontdn's";

  welcomeText.appendChild(logo);
  welcome.appendChild(welcomeText);
  pageContainer.appendChild(welcome);
  mainPage.appendChild(pageContainer);
  document.querySelector(".container").insertBefore(mainPage,
     document.querySelector(".footer-container"));
}


export {createHomepage as default};
