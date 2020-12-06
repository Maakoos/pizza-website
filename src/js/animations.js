const headings = document.querySelectorAll("[data-heading]");
const productCards = document.querySelector("[data-productsList]").children;

const animatonItems = [...headings, ...productCards];

let delayAnimation = 0;

const options = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.hasAttribute("data-heading")) {
        entry.target.classList.add("scaleIn");
      }

      if (entry.target.hasAttribute("data-productCategory")) {
        delayAnimation += 0.2;
        entry.target.style.animationDelay = `${delayAnimation}s`;
        entry.target.classList.add("flipInLeft");
      }
    }
  });
  delayAnimation = 0;
}, options);

animatonItems.forEach((heading) => {
  observer.observe(heading);
});
