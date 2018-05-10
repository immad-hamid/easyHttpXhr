const http = new easyHttp;

// Get Data
http.get('https://jsonplaceholder.typicode.com/posts', function(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);               // stringified form
        console.log(JSON.parse(res));   // parsed form
        // addResponseToView(res);              Here's how you can send the response to a function and do something there
    }
});

// Create Data
const data = {
    title: "Custom Post",
    body: "Custom Post Body"
}

// Post Data
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);               // stringified form
        console.log(JSON.parse(res));   // parsed form
    }
})


// adding post data to div in an asyn way (GET)
// function addResponseToView(res) {
//     const post = JSON.parse(res);

//     post.forEach(function(post) {
//         const postDiv = document.getElementById('posts');
//         postDiv.innerHTML += `
//             <ul>
//                 <li>${post.id}</li>
//                 <li>${post.title}</li>
//                 <li>${post.body}</li>
//             </ul>
//         `
//     });
// }