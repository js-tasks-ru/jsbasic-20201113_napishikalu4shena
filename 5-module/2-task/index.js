function toggleText() {
  // ваш код...
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  
  
  button.addEventListener('click', (event) => (text.hidden !== true) ? text.hidden = true : text.hidden = false)
   
   };




    
    
