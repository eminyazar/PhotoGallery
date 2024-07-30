document.addEventListener("DOMContentLoaded", function() {
    const imageCards = document.querySelectorAll(".card");
    
    imageCards.forEach(function(card) {
      card.addEventListener("click", function() {
        const imageUrl = "https://picsum.photos/200/300?random="+ Math.floor(Math.random() * 100) + 21;
        const image = card.querySelector(".card-img-top");
        image.src = imageUrl;
      });
    });
  
    const searchForm = document.querySelector("form[role='search']");
    
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const searchInput = searchForm.querySelector("input[type='search']");
      const searchTerm = searchInput.value;
      
    });
  });