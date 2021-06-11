window.onload=function(){
  let foto=document.querySelectorAll('.text-info')
  let buttonLeft=document.querySelector('.arrows-button-left')
  let buttoRight=document.querySelector('.arrows-button-right')
  let buttonDetail=document.querySelector(".button-block")
  let lines=document.querySelectorAll('.nav-item-button')
  let details=document.querySelectorAll(".details-text")
  let counter=0
console.log(details)
  buttoRight.addEventListener('click',function(){
    if(counter>=0 &&  (counter)<(foto.length-1)){
      foto[counter].classList.toggle('text-info-active');
      lines[counter].classList.toggle('nav-item-button_active');
      counter++
      foto[counter].classList.toggle('text-info-active');
      lines[counter].classList.toggle('nav-item-button_active');
    }
  })
  buttonLeft.addEventListener('click',function(){
    if(counter>0 && (counter)<(foto.length)){
      foto[counter].classList.toggle('text-info-active');
      lines[counter].classList.toggle('nav-item-button_active');
      counter--
      foto[counter].classList.toggle('text-info-active');
      lines[counter].classList.toggle('nav-item-button_active');
    }
    
  })
  buttonDetail.addEventListener('click',function(){
    console.log(1)
    details[counter].classList.toggle('details-text_active');
    // details[counter].style.display="block"

  })

}