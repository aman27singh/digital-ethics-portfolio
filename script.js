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
