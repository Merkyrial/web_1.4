const popup = document.querySelectorAll('.card');
const open = document.querySelector('.show-more');
popup[3].style.display = 'none'
popup[4].style.display = 'none'
popup[5].style.display = 'none'

  open.addEventListener("click", ()=> {
   
    if(popup[3].style.display == 'none')  popup[3].style.display = 'block';
    else popup[3].style.display = 'none'
    
    if(popup[4].style.display == 'none')  popup[4].style.display = 'block';
    else popup[4].style.display = 'none'
    
    if(popup[5].style.display == 'none')  popup[5].style.display = 'block';
    else popup[5].style.display = 'none'
    
  });
   
  //laptop
  const mq = window.matchMedia('(max-width: 1099px)')
  if (mq.matches) {
    popup[2].style.display = 'none'
      open.addEventListener("click",()=>{
        if(popup[2].style.display == 'none')  popup[2].style.display = 'block';
        else popup[2].style.display = 'none'
        
      });
  } else {
  }
  //button
  open.onclick = ()=>{
    open.classList.toggle('rotate')
  }
  