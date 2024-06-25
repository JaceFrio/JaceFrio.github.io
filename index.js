const aboutRightCol = document.querySelector('.aboutRightCol')
let timeoutId

const aboutRightColObserver = new IntersectionObserver(entries => {
  // Clear any existing timeout
  clearTimeout(timeoutId)

  // Check if the element is intersecting
  if (entries[0].isIntersecting) {
    // Add the class immediately
    aboutRightCol.classList.add('slideFromLeft')

    // Set a timeout to remove the class after 1.5 seconds (duration of the animation)
    timeoutId = setTimeout(() => {
      aboutRightCol.classList.remove('slideFromLeft')
    }, 1500)
  }
})

aboutRightColObserver.observe(aboutRightCol)