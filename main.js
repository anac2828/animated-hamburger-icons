const buttonThree = document.querySelector('.button-three');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    
    let animatedState = button.getAttribute('data-animate')
    let isOpenState = button.getAttribute('aria-expanded');

    // this applies to the second button so that the animation does not run on a page load
  if(animatedState) button.setAttribute('data-animate', 'true')
  
  isOpenState = isOpenState === 'true' ? 'false' : 'true';
  button.setAttribute('aria-expanded', isOpenState);
})
})