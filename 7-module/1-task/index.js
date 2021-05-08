import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }
  render() {
  
    const ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');
    const buttonLeft = `<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`;
  ribbon.insertAdjacentHTML('afterbegin', buttonLeft);
    const ribbonInner = document.createElement('nav');
    ribbonInner.classList.add('ribbon__inner');
    
    for (let category of this.categories) {
      const cat = `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`
    ribbonInner.insertAdjacentHTML('beforeend', cat);
    }
    ribbon.append(ribbonInner);
    const buttonRight = `<button class="ribbon__arrow ribbon__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`;
  ribbon.insertAdjacentHTML('beforeend', buttonRight);

  
  ribbon.addEventListener('click', event => {
    if (event.target.closest(".ribbon__arrow_left")) {
      ribbonInner.scrollBy(-350, 0)}
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      console.log(scrollRight);
      console.log(scrollLeft)
      if (scrollLeft === 0) {
        document.querySelector(".ribbon__arrow_left").classList.toggle(`ribbon__arrow_visible`)
      };
      if (scrollRight !== 0) {
        document.querySelector(".ribbon__arrow_right").classList.add(`ribbon__arrow_visible`)
 
      }
      if (event.target.closest(".ribbon__arrow_right")) {
        ribbonInner.scrollBy(350, 0);}
        if (scrollRight < 1) {
          document.querySelector(".ribbon__arrow_right").classList.remove(`ribbon__arrow_visible`) 
          
     }
      if (event.target.closest(".ribbon__item")) {
         let selectedTd;
        if (selectedTd) { 
          event.target.classList.remove('.ribbon__item_active');
          }
          selectedTd = event.target;
          event.target.classList.add('.ribbon__item_active'); 
        }
        if (event.target.closest(".ribbon__item")) {
          
          event.target.dispatchEvent(new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
        detail: event.target.dataset.id, // уникальный идентификатора категории из её объекта
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
      }))}
      })

      return ribbon;
  }

 
  }


 

  

  


    

  
