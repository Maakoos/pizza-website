const openignInfo = document.querySelector("[data-openingInfo]");

const openTime = 11;
const closeTime = 21;

const date = new Date();
const currentTime = date.getHours();

if (currentTime >= openTime && currentTime < closeTime) {
  openignInfo.classList.remove("header__openingHours--close");
} else {
  openignInfo.classList.add("header__openingHours--close");
}
