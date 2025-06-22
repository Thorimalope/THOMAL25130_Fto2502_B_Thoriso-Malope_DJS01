console.log("js is working");

// Modal Close Button //

const closeButton = document.getElementById("close-btn");
const modalWrapper = document.querySelector(".modal-wrapper");

closeButton.addEventListener("click", function () {
    modalWrapper.style.display = "none";
    console.log("button clicked");
})

// Modal Appear //

const podcastCards = document.querySelectorAll(".podcast-card");
const podcastInfoCards = document.querySelector(".info-card");

podcastCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    console.log(`Card ${index + 1} clicked`);
    modalWrapper.style.display = "flex";
  });
});

