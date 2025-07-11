document.addEventListener("DOMContentLoaded", function () {
  const teamCards = document.querySelectorAll(".team-card");

  teamCards.forEach((card) => {
    card.addEventListener("click", function () {
      const name = card.querySelector("h3").innerText;
      alert("You clicked on " + name);
    });
  });
});
