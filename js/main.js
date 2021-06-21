
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navContent = document.querySelector('.nav-content');
const btnFermer = document.querySelector('.btn-ferme');


hamburgerMenu.addEventListener('click', function() {
    navContent.classList.add('show');
})

btnFermer.addEventListener('click', function() {
    navContent.classList.remove('show');
})

/*

hamburgerMenu.addEventListener('click',function(){
    navContent.style.display = 'block ';
})

btnFermer.addEventListener('click',function(){
    navContent.style.display = 'none';
})
*/
