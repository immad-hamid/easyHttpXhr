// instantiating easyHttp constructor funciton
const http = new easyHttp;

// Creating Data for Post Request
const data = {
    title: "Custom Post",
    body: "Custom Post Body"
}

// Get Data
http.get('https://jsonplaceholder.typicode.com/posts', function(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);               // stringified form
        console.log(JSON.parse(res));   // parsed form
        addResponseToView(res);         // Here's how you can send the response to a function and do something there
    }
});

// Post Data
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);               // stringified form
        console.log(JSON.parse(res));   // parsed form
        post = res;
    }
});

// Put Data
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);               // stringified form
        console.log(JSON.parse(res));   // parsed form
        put = res;
    }
});

// Delete Data
http.delete('https://jsonplaceholder.typicode.com/posts/5', function(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
        del = res;
    }
});




// adding data from (GET) request to a div in an asyn way
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