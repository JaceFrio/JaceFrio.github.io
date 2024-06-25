const aboutRightCol = document.querySelector('.aboutRightCol');
let isAnimating = false;

const aboutRightColObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isAnimating) {
      isAnimating = true;
      aboutRightCol.classList.add('slideFromLeft');

      setTimeout(() => {
        aboutRightCol.classList.remove('slideFromLeft');
        isAnimating = false;
      }, 1500); // Match the animation duration
    }
  });
}, {
  threshold: 0.1 // Adjust threshold to ensure the element is sufficiently visible before triggering
});

aboutRightColObserver.observe(aboutRightCol);