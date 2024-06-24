function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //dummy data for user
            let userData = { id: 1, name: 'shubham' };
            resolve(userData)
        }, 1000)
    })
}


function fetchPostData() {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     let postData = { userId: 1, title: 'Sample Post' };
        //     resolve(postData);
        // }, 2500)
        // setTimeout(() => {
        //     reject('Failed to fetch comments');
        // }, 2000);
    })
}

function fetchCommentData() {
    return new Promise((resolve,reject) => {
        let commentData = [
            { postId: 1, body: 'Comment 1' },
            { postId: 1, body: 'Comment 2' }
        ];
        resolve(commentData);
    }, 1000)
}

//By using promise.all 
Promise.all([fetchUserData(), fetchPostData(), fetchCommentData()])
    .then(([userData, postData, commentData]) => {
        console.log('User Data:', userData);
        console.log('Post Data:', postData);
        console.log('Comment Data:', commentData);
    }).catch(error => {
        console.log('error is here', error);
})

