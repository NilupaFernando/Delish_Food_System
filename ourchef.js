document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".team-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.querySelector("h3").innerText;
      alert(`You clicked on ${name}`);
    });
  });
});
