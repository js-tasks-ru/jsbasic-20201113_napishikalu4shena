import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
    
  }
  render() {
    const carousel = document.createElement('div');
    carousel.classList.add("carousel")
    const caruselHead = `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left" style="display:none"> 
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>`
    carousel.insertAdjacentHTML('afterbegin', caruselHead);

    const caruselInner = document.createElement('div');
    caruselInner.classList.add("carousel__inner");
    carousel.append(caruselInner)
    
    for (let slide of this.slides) {
      const caruselSlide = `<div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`;
    caruselInner.insertAdjacentHTML('beforeend', caruselSlide);
    }
    carousel.append(caruselInner);
    
    const slidesLength = this.slides.length;
                
    let position = 0;
        
    carousel.addEventListener("click", function(event) {
            if (event.target.closest("div.carousel__arrow_right")) {                
              position += caruselInner.offsetWidth;
              caruselInner.style.transform = "translateX(-" + position + "px)";                
                if (position > caruselInner.offsetWidth*(slidesLength-2)){
                    event.target.closest("div.carousel__arrow_right").style.display = "none";
                };                
                if (position > 0){
                    document.querySelector(".carousel__arrow_left").style.display = "";
                };            } 
                else if(event.target.closest("div.carousel__arrow_left")){
                  position -= caruselInner.offsetWidth;
                caruselInner.style.transform = "translateX(" + position*-1 + "px)";                
                if (position === 0){
                    event.target.closest("div.carousel__arrow_left").style.display = "none";
                };                
                if (position !== caruselInner.offsetWidth*slidesLength){
                    document.querySelector(".carousel__arrow_right").style.display = "";
                };
            }
        });
        carousel.addEventListener("click", function(event){
          if(event.target.closest("button.carousel__button")){
          let customEvent = new CustomEvent("product-add", {
              detail: event.target.closest("button.carousel__button").parentNode.parentNode.dataset.id,
              bubbles: true
          });
          carousel.dispatchEvent(customEvent);
          };
      });        return carousel;
  }
}
       
    
    






