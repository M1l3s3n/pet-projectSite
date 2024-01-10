function increaseViewCount(postElement) {
    var postId = postElement.getAttribute('data-post-id');
    var viewCountElement = postElement.querySelector('.view-count');

    // Викликати серверний ендпоінт для збільшення лічильника переглядів
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/increase-view-count', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            // Оновити значення лічильника на клієнтській стороні
            viewCountElement.textContent = response.newViewCount;
        } else {
            console.error('Помилка при збільшенні лічильника переглядів');
        }
    };

    xhr.onerror = function() {
        console.error('Помилка при збільшенні лічильника переглядів');
    };

    xhr.send(JSON.stringify({ postId: postId }));
}
