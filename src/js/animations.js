const headings = document.querySelectorAll("[data-heading]");
const productCards = document.querySelector("[data-productsList]").children;
const vegetables = document.querySelectorAll("[data-vegetable]");
const heroImg = document.querySelector("[data-heroImg]");
const instaName = document.querySelector("[data-instaName]");

const animatonItems = [
  ...headings,
  ...productCards,
  ...vegetables,
  heroImg,
  instaName,
];

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

      if (entry.target.hasAttribute("data-heroImg")) {
        entry.target.classList.add("fadeInBottom");
      }

      if (entry.target.hasAttribute("data-instaName")) {
        entry.target.classList.add("jelloHorizontal");
      }

      if (entry.target.hasAttribute("data-vegetable")) {
        if (entry.target.classList.contains("hero__tomato")) {
          entry.target.classList.add("bounceInTopTomato");
        }
        delayAnimation += 0.2;
        entry.target.style.animationDelay = `${delayAnimation}s`;
        entry.target.classList.add("bounceInTop");
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
