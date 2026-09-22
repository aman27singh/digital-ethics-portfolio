const revealItems = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
  revealObserver.observe(item);
});

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  const openProject = () => {
    window.open(`project.html?case=${card.dataset.project}`, '_blank');
  };

  card.addEventListener('click', openProject);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject();
    }
  });
});

// Category Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    projectCards.forEach((card) => {
      const author = card.dataset.author;
      if (filter === 'all') {
        card.style.display = 'flex';
      } else if (filter === 'joint' && author === 'joint') {
        card.style.display = 'flex';
      } else if (filter === 'aman' && (author === 'aman' || author === 'joint')) {
        card.style.display = 'flex';
      } else if (filter === 'anushka' && (author === 'anushka' || author === 'joint')) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
