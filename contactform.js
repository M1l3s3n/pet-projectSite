document.addEventListener('DOMContentLoaded', function() {
    var scrollToContactButton = document.querySelector('.scroll-to-contact');
    var contactBox = document.querySelector('.contactbox');

    scrollToContactButton.addEventListener('click', function() {
       
        contactBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});

