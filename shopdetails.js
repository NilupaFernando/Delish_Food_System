function showTab(id) {
  const tabs = document.querySelectorAll('.tab');
  const panes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => tab.classList.remove('active'));
  panes.forEach(pane => pane.classList.remove('active'));

  document.querySelector([onclick="showTab('${id}')"]).classList.add('active');
  document.getElementById(id).classList.add('active');
}

document.getElementById('addToCart').addEventListener('click', () => {
  alert('Item added to cart!');
});