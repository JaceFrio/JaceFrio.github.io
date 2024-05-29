const aboutRightCol = document.querySelector('.aboutRightCol');
const aboutRightColObserver = new IntersectionObserver(entries => {
  aboutRightCol.classList.toggle( 'slideFromLeft', entries[0].isIntersecting );
});

aboutRightColObserver.observe( aboutRightCol );