function slider(){ 
  let buttons = document.querySelectorAll('.slider__radio')
  let items = document.querySelectorAll('.slider__item')

  document.querySelector('.slider__arrow-prev').addEventListener('click', ()=>{
    let index = 0
    for(var i=0; i<items.length; i++){
      if(window.getComputedStyle(items[i]).opacity == 1 ){
        index = i
      }
    }
    if(index>0){
      buttons[index-1].click()
    }
  })
    
  document.querySelector('.slider__arrow-next').onclick = function() {
    let index = 0
    for(var i=0; i<items.length; i++){
      if(window.getComputedStyle(items[i]).opacity == 1){
        index = i
      }
    }
    if(index<2){
      buttons[index+1].click()
    }
  }
}
export {slider}