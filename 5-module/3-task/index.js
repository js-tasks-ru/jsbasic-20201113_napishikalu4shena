function initCarousel() {
  let carusel = document.querySelector('.carousel__inner');
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let slideWidth = carusel.offsetWidth;
  let position = 0;
  buttonLeft.style.display = 'none';
 
  function left() {
    position += slideWidth;
    carusel.style.transform = 'translateX(' +position+ 'px)';
    if (position === 0) {
      buttonLeft.style.display = 'none'
    } else {
      buttonLeft.style.display ='';
    }

  }
  function right(){
    position -= slideWidth;
    carusel.style.transform = 'translateX(' +position+ 'px)'
    if (position <= -slideWidth*3) {
    buttonRight.style.display = 'none'
    } 
    if (position !== 0) {
      buttonLeft.style.display =''
    }
  }  
  
  buttonRight.addEventListener('click', right)
  buttonLeft.addEventListener('click',left)
}
  

  



