import { reset } from "./filterProducts";
import { productsArray } from "./productsArray";

const loadMoreButton = document.querySelector("[data-loadMoreButton]");
const productsList = document.querySelector("[data-productsList]");

const dummyProductsArray = [...productsArray];
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
