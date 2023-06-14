var menu = document.querySelector('nav');

function activeScroll(){
    menu.classList.toggle('nav-ativo', scrollY > 2);
}
window.addEventListener('scroll', activeScroll);


window.sr = ScrollReveal({ reset: true }); 

sr.reveal('.texto-objetivo', { duration: 2000 });

sr.reveal('.content', { duration: 1000 });

sr.reveal('.fotos-objetivo', { duration: 2000 });