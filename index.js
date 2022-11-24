const btns = document.querySelectorAll('.btn');
let position = 0;
const sliderLines = document.querySelectorAll('.slider-line');
btns.forEach(el =>{
   el.addEventListener('click', (e) =>{
      let btn = e.currentTarget;
      let next = btn.classList.contains('next');
      let prev = btn.classList.contains('prev');
      let sliderLine = btn.closest('.slider-box').querySelector('.slider-line');
if(next){
   position = position + 256;
if(position > 768){
   position = 0;
      }
   sliderLine.style.left = - position +'px';
   }
   if(prev){
      position = position -256;
      if(position < 0){
         position = 768;
      }
      sliderLine.style.left = - position + 'px';
   } 
})
})

   
