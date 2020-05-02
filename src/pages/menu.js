const menuDishesList = {
  "Starters": [
    {name: "Lorem Ipsum", price: 0.54},
    {name: "Lorem Ipsum", price: 0.54},
    {name: "Lorem Ipsum", price: 0.54},
    {name: "Lorem Ipsum", price: 0.54},
  ],
  "Main Courses": [
    {name: "Lorem Ipsum", price: 0.54},
    {name: "Lorem Ipsum", price: 0.54},
    {name: "Lorem Ipsum", price: 0.54},
    {name: "Lorem Ipsum", price: 0.54},
  ],
  "Desserts": [
    {name: "Lorem Ipsum", price: 0.54},
    {name: "Lorem Ipsum", price: 0.54},
    {name: "Lorem Ipsum", price: 0.54},
    {name: "Lorem Ipsum", price: 0.54},
  ]
};


function createMenupage (bg1, bg2) {
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  menuContainer.style.background = "url("+bg1+")" +
      " no-repeat center center";
  let menu = document.createElement("div");
  menu.classList.add("menu");
  let menuTitle = document.createElement("h2");
  menuTitle.classList.add("menu-title");
  let menuLogo = document.createElement("span");
  let menul = document.createElement("span");
  menuLogo.classList.add("menu-logo");
  menul.classList.add("menul");
  menuLogo.innerText = "Etiontdn's";
  menul.innerText = "Menu";

  menuTitle.appendChild(menuLogo);
  menuTitle.appendChild(menul);
  menu.appendChild(menuTitle);

  let dishes = Object.keys(menuDishesList);
  for (let i = 0; i < dishes.length; i++) {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    let menuItemTitle = document.createElement("h3");
    menuItemTitle.classList.add("menu-item-title");
    menuItemTitle.innerText = dishes[i];
    menuItem.appendChild(menuItemTitle);
    let menuDishes = document.createElement("div");
    menuDishes.classList.add("menu-dishes");
    for (let dish of menuDishesList[dishes[i]]) {
      let menuDish = document.createElement("div");
      menuDish.classList.add("menu-dish");
      let dishName = document.createElement("h4");
      dishName.classList.add("dish-name");
      dishName.innerText = dish.name;
      let dishPrice = document.createElement("h4");
      dishPrice.classList.add("dish-price");
      dishPrice.innerText = "$" + dish.price;
      menuDish.appendChild(dishName);
      menuDish.appendChild(dishPrice);
      menuDishes.appendChild(menuDish);
    }
    menuItem.appendChild(menuDishes);
    menu.appendChild(menuItem);
  }
  menuContainer.appendChild(menu);
  document.querySelector(".container").insertBefore(menuContainer,
     document.querySelector(".footer-container"));
}




export {createMenupage as default};
