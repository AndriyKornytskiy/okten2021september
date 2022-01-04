let postId = +localStorage.getItem('postID');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {
        let postWrap = document.createElement('div');
        postWrap.classList.add('post-wrap');
        document.body.appendChild(postWrap);

        for (const postKey in post) {
            let postItem = document.createElement('div');
            postItem.classList.add(postKey);
            postItem.innerText = post[postKey];
            postWrap.appendChild(postItem);
        }
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(value => value.json())
    .then(comments => {
        console.log(comments);
        let commentsWrap = document.createElement('div');
        commentsWrap.classList.add('comments-wrap');
        document.body.appendChild(commentsWrap);
        comments.forEach(comment => {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment-box');

            for (const commentKey in comment) {
                let commentItem = document.createElement('div');
                commentItem.classList.add('comment-item', 'comment_item-' + commentKey);
                commentItem.innerText = comment[commentKey];
                commentDiv.appendChild(commentItem);
            }
            commentsWrap.appendChild(commentDiv);
        })
    });