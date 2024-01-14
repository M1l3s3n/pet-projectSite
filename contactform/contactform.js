document.addEventListener('DOMContentLoaded', function() {
    var scrollToContactButton = document.querySelector('.scroll-to-contact');
    var contactBox = document.querySelector('.additional-box');

    scrollToContactButton.addEventListener('click', function() {
       
        if (window.innerWidth <= 767) {
            var contactBox = document.querySelector('.contactinfo');
            contactBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            contactBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
    });
});

