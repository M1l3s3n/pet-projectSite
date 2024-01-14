const background = document.querySelector('.background-image');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    background.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
});
