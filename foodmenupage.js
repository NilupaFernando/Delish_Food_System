document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const persons = document.getElementById('persons').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!date) {
        alert('Please select a date!');
        return;
    }

    alert(`Table booked for ${persons} person(s) on ${date} at ${time}.`);
});

document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    alert('Redirecting to full article...');
  });
});