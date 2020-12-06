import { reset } from "./filterProducts";

const loadMoreButton = document.querySelector("[data-loadMoreButton]");
const productsList = document.querySelector("[data-productsList]");

const dummyProductsArray = [
  {
    img: "./src/assets/pizza1.png",
    name: "Tartufata",
    ingredients: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    price: 15,
    category: "pizzaB",
  },
  {
    img: "./src/assets/pizza2.png",
    name: "Salsicca",
    ingredients: "Tomatoes, Mozzarella, Hot Italian Sausage, Basil",
    price: 23,
    category: "pizzaA",
  },
  {
    img: "./src/assets/pizza3.png",
    name: "Romana",
    ingredients: "Tomatoes, Mozzarella, Ricotta, Capers, Oregano",
    price: 43,
    category: "pizzaC",
  },
  {
    img: "./src/assets/pizza4.png",
    name: "Margherita",
    ingredients: "Tomatoes, Mozzarella, Basil",
    price: 10,
    category: "pizzaA",
  },
  {
    img: "./src/assets/pizza5.png",
    name: "Popey",
    ingredients: "Tomatoes, Mozzarella, Ricotta, Baby Spinach",
    price: 22,
    category: "pizzaB",
  },
  {
    img: "./src/assets/pizza6.png",
    name: "Fresca",
    ingredients: "Cherry Tomatoes, Buffalo Mozzarella, Prosciutto di Parma",
    price: 57,
    category: "pizzaC",
  },
  {
    img: "./src/assets/pizza4.png",
    name: "Ripeno",
    ingredients:
      "Tomatoes, Mozzarella, Ricotta, Hot Soppressata, Hot Italian Sausage",
    price: 16,
    category: "pizzaA",
  },
  {
    img: "./src/assets/pizza2.png",
    name: "4 Fromaggi",
    ingredients: "Mozzarella, Smoked Mozzarella, Parmigiano, Gorgonzola, Basil",
    price: 35,
    category: "pizzaC",
  },
];

let delayAnimation = 0;

const loadMoreProducts = (e) => {
  const products = document.querySelectorAll("[data-productCategory]");
  const loadItemsArray = [];

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * dummyProductsArray.length);
    const item = dummyProductsArray.splice(index, 1);
    loadItemsArray.push(...item);
  }

  if (dummyProductsArray.length === 0) {
    loadMoreButton.classList.add("dishes__loadMoreButton--hide");
    loadMoreButton.removeEventListener("click", loadMoreProducts);
  }

  reset(e, products);

  loadItemsArray.forEach(({ img, name, ingredients, price, category }) =>
    productsList.insertAdjacentHTML(
      "beforeend",
      `<li class="productCard flipInLeft" data-productCategory='${category}' style="animation-delay: ${(delayAnimation += 0.2)}s;">
        <img src="${img}" alt="${name}" class="productCard__pizzaImage">
        <div class="productCard__header">
          <h3 class="productCard__name">${name}</h3>
          <span class="productCard__size">32cm</span>
        </div>
        <p class="productCard__ingredients ">${ingredients}</p>
        <p class="productCard__price">${price} USD</p>
        <button class="productCard__addToCart">
          <svg class="productCard__shoppingBag">
            <use xlink:href="./src/assets/sprite.svg#shoppingBag"></use>
          </svg>
        </button>
      </li>`
    )
  );
  delayAnimation = 0;
};

loadMoreButton.addEventListener("click", loadMoreProducts);
