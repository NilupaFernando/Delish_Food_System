document.querySelectorAll('.tags span').forEach(tag => {
  tag.addEventListener('click', () => {
    alert(`Searching posts for tag: ${tag.innerText}`);
  });
});

document.getElementById('commentForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  alert(`Thanks, ${name}! Your comment has been submitted.`);
  form.reset();
});