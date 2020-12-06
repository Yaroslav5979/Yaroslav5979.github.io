document.querySelector('.mobileMenuIcon').onclick = function(){
   let nav = document.querySelector('.navMenuMob')
  let mobMenu = document.querySelector('.mobileMenu')  


   if(!nav.classList.contains("ACTIVE")){
    nav.classList.add('ACTIVE')
    mobMenu.style.background = '#672161'
   }else{
    nav.classList.remove('ACTIVE')
    mobMenu.style.background = 'none'
   }
}



