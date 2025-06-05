document.addEventListener('DOMContentLoaded', () => {
  const ticketForm = document.getElementById('ticketForm');
  const confirmation = document.getElementById('confirmation');
  const newTicketBtn = document.getElementById('newTicketBtn');

  if (ticketForm) {
    ticketForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simulate form submission
      ticketForm.style.display = 'none';
      confirmation.classList.remove('hidden');
    });
  }

  if (newTicketBtn) {
    newTicketBtn.addEventListener('click', () => {
      confirmation.classList.add('hidden');
      ticketForm.style.display = 'flex';
      ticketForm.reset();
    });
  }
});
