const menuBtn = document.getElementById('menuBtn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {

    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');

})

window.onscroll = () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}