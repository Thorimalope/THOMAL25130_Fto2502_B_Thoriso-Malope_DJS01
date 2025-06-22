import { podcasts, genres } from './data.js';

//////////// MODAL /////////////

// Modal Close Button //

const closeButton = document.getElementById("close-btn");
const modalWrapper = document.querySelector(".modal-wrapper");

closeButton.addEventListener("click", function () {
    modalWrapper.style.display = "none";
})

// Modal Appear //

const podcastCards = document.querySelectorAll(".podcast-card");
const podcastInfoCards = document.querySelector(".info-card");

podcastCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    console.log(`Card ${index + 1} clicked`);
    populateModal(index);
    modalWrapper.style.display = "flex";
  });
});

// Populating the podcast cards and modal //


function getGenreTitles(genreIds, allGenres) {
  return genreIds
    .map(id => {
      const genre = allGenres.find(g => g.id === id);
      return genre ? genre.title : '';
    })
    .join(', ');
}


podcastCards.forEach((card, index) => {
  const podcast = podcasts[index];

  const h2 = card.querySelector('h2');
  const h4 = card.querySelector('h4');
  const genreDiv = card.querySelector('#info-genre');
  const p = card.querySelector('p');

  h2.innerText = podcast.title;
  h4.innerText = `${podcast.seasons} Season${podcast.seasons > 1 ? 's' : ''}`;
  genreDiv.innerText = getGenreTitles(podcast.genres, genres);
  p.innerText = `Updated ${new Date(podcast.updated).toDateString()}`;
});

// Function to populate modal with podcast data
function populateModal(podcastIndex) {
  const podcast = podcasts[podcastIndex];
  
  
  const modalTitle = document.querySelector(".title-btn h2");
  modalTitle.textContent = podcast.title;
  
  
  const modalImg = document.getElementById("modal-img");
  modalImg.style.backgroundImage = `url(${podcast.image})`;
  modalImg.style.backgroundSize = "cover";
  modalImg.style.backgroundPosition = "center";
  
  
  const modalDescription = document.querySelector("#modal-content p");
  modalDescription.textContent = podcast.description;
    
    populateGenres(podcast.genres);
  
}

// Function to create and populate genre cards
function populateGenres(genreIds) {
  const modalGenreContainer = document.getElementById("modal-genre");
  
  modalGenreContainer.innerHTML = "";
  
  genreIds.forEach(genreId => {
    const genre = genres.find(g => g.id === genreId);
    if (genre) {
      const genreCard = document.createElement("div");
      genreCard.className = "genre-card";
      genreCard.textContent = genre.title;
      modalGenreContainer.appendChild(genreCard);
    }
  });
}

