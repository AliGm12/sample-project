const card = document.querySelector(".card");
const container = document.querySelector(".container")

container.addEventListener("mouseover", function () {
    card.classList.add("is-flipped");

});
container.addEventListener("mouseout", function () {
    card.classList.remove("is-flipped");

});
