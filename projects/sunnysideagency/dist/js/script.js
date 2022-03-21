const menuBtn = document.querySelector('.option')
const holdEr = document.querySelector('.menu-options')
// const menuTray = document.querySelector('.menu-options')

menuBtn.addEventListener('click', () =>{
    if(holdEr.classList.contains('view')){
        holdEr.classList.remove('view');
        menuBtn.classList.remove('openMenu');
    }
    else{
        holdEr.classList.add('view');
        menuBtn.classList.add('openMenu');
    }
})