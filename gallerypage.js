document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked on ${img.alt}`);
  });
});