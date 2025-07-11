document.querySelectorAll('.dropdown > a').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Dropdown clicked (add content)');
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    alert(`Filtering: ${btn.textContent}`);
  });
});

const gallery = document.getElementById('gallery');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: 220, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: -220, behavior: 'smooth' });
});

