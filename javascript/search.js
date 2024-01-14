function searchPosts() {
    var searchText = document.querySelector('#searchForm input[name="q"]').value.toLowerCase();
    var posts = document.querySelectorAll('.post');

    for (var i = 0; i < posts.length; i++) {
        var postText = posts[i].innerText.toLowerCase();

        if (postText.includes(searchText)) {
            
            posts[i].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });

           
            posts[i].classList.add('highlight');

            setTimeout(function(element) {
                element.classList.remove('highlight');
            }, 3850, posts[i]);
            break;
        }
    }
}

function handleEnterSearch(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchPosts();
    }
}
