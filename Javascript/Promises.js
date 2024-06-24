let url = 'https://jsonplaceholder.typicode.com/posts';

function fetchPosts() {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            if (response.ok) {
                resolve(response.json());
            } else {
                reject('Error')
            }
        }).catch(error => error);
    })
}
fetchPosts().then(posts => {
    console.log('data is here', posts)
}).catch(
    error => {
        console.log("error is here", error);
    })