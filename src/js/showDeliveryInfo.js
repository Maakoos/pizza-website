const deliveryButton = document.querySelector("[data-deliveryButton]");
const deliveryMessage = document.querySelector("[data-deliveryMessage]");

deliveryButton.addEventListener("click", () => {
  deliveryMessage.classList.toggle("hero__deliveryInfoWrapper--show");
});
