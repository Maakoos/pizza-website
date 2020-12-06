const filterButtons = document.querySelectorAll("[data-filterButton]");

export const reset = (e, productsList) => {
  currentButton = null;
  if (e.target.hasAttribute("data-filterButton")) {
    e.target.classList.remove("dishes__button--active");
  } else {
    filterButtons.forEach((button) =>
      button.classList.remove("dishes__button--active")
    );
  }
  productsList.forEach((product) =>
    product.classList.remove("productCard--hide")
  );
};

let currentButton = null;

const filterItems = (e) => {
  const products = document.querySelectorAll("[data-productCategory]");
  const filterValue = e.target.value;

  filterButtons.forEach((button) =>
    button.classList.remove("dishes__button--active")
  );
  e.target.classList.add("dishes__button--active");

  if (currentButton === e.target) {
    reset(e, products);
    return;
  }

  products.forEach((product) => product.classList.remove("productCard--hide"));
  products.forEach((product) => {
    if (product.dataset.productcategory !== filterValue) {
      product.classList.add("productCard--hide");
    }
  });

  currentButton = e.target;
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterItems)
);
