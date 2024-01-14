document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtn = document.getElementById("dropdown-btn");
    var dropdownContent = document.getElementById("dropdown-content");

    dropdownBtn.addEventListener("click", function() {
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        if (!event.target.matches("#dropdown-btn") && !event.target.matches("#dropdown-content")) {
            dropdownContent.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollToPosts = document.querySelector('.button-1');
    var posts = document.querySelector('.posts');

    scrollToPosts.addEventListener('click', function() {
       
        if (window.innerWidth <= 767) {
            var littlePosts = document.querySelector('.allposts');
            littlePosts.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            posts.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollToProjects = document.querySelector('.button-2');
    var projects = document.querySelector('.split-container');

    scrollToProjects.addEventListener('click', function() {
        if (window.innerWidth <= 767) {
            var leftBox = document.querySelector('.left-box');
            leftBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            projects.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var scrollToMap = document.querySelector('.button-3');
    var map = document.querySelector('#map');

    scrollToMap.addEventListener('click', function() {
       
        map.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
