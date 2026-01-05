const cards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalBody.innerHTML   = card.dataset.body;  // <-- allows lists
    modal.style.display = 'flex';
  });
});

// Close when clicking X
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close when clicking outside modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});