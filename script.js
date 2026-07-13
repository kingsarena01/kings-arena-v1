// King's Arena V1

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("playerSearch");

  if (searchInput) {

    searchInput.addEventListener("keyup", function () {

      const keyword = this.value.toLowerCase();

      const players = document.querySelectorAll(".player-card");

      players.forEach(function(card) {

        const name = card.dataset.player.toLowerCase();

        if (name.includes(keyword)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }

      });

    });

  }

});
