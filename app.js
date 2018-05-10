const http = new easyHttp;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(res) {
    console.log(res);               // stringified form
    console.log(JSON.parse(res));   // parsed form
    addResponseToView(res);
});


// adding post data to div in an asyn way (GET)
function addResponseToView(res) {
    const post = JSON.parse(res);

    post.forEach(function(post) {
        const postDiv = document.getElementById('posts');
        postDiv.innerHTML += `
            <ul>
                <li>${post.id}</li>
                <li>${post.title}</li>
                <li>${post.body}</li>
            </ul>
        `
    });
}