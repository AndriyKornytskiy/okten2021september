// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        let postsWrap = document.createElement('div');
        postsWrap.classList.add('postsWrap');
        document.body.appendChild(postsWrap);
        posts.forEach((post)=> {
            let divPost = document.createElement('div');
            let postID = document.createElement('h3');
            postID.innerText = `${post.id}/${post.userId}`;
            let postTitle = document.createElement('h2');
            postTitle.innerText = post.title;
            let postBody = document.createElement('p');
            postBody.innerText = post.body;
            let postBtn = document.createElement('button');
            postBtn.innerText = 'Show comments';
            let commentsWrap = document.createElement('div');
            commentsWrap.classList.add('commentsWrap', 'hide');
            postBtn.onclick = () => {
                commentsWrap.classList.toggle('hide');
                commentsWrap.innerText = '';
                fetch('https://jsonplaceholder.typicode.com/comments')
                  .then(value => value.json())
                  .then(comments => {
                      comments.forEach((comment) => {
                          if (comment.postId === post.id){
                              let divComment = document.createElement('div');
                              divComment.classList.add('divComment');
                              let commentID = document.createElement('h4');
                              commentID.innerText = `${comment.id} - ${comment.name}`;
                              let commentBody = document.createElement('p');
                              commentBody.innerText = comment.body;
                              let userEmail = document.createElement('p');
                              userEmail.innerText = comment.email;
                              divComment.append(commentID, commentBody, userEmail);
                              commentsWrap.appendChild(divComment);
                          }
                      })
                  })
            };
            divPost.append(postID, postTitle, postBody, postBtn, commentsWrap);
            postsWrap.append(divPost);
        })
    });