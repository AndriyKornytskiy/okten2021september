// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        let postsWrap = document.createElement('div');
        postsWrap.classList.add('postsWrap');
        document.body.appendChild(postsWrap);
        posts.forEach((post)=> {
            let divPost = document.createElement('div');
            divPost.classList.add('singlePost');
            let postID = document.createElement('h3');
            postID.innerText = `${post.id}/${post.userId}`;
            let postTitle = document.createElement('h2');
            postTitle.innerText = post.title;
            let postBody = document.createElement('p');
            postBody.innerText = post.body;
            divPost.append(postID, postTitle, postBody);
            postsWrap.append(divPost);
        })
    });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        let commentsWrap = document.createElement('div');
        commentsWrap.classList.add('commentsWrap');
        document.body.appendChild(commentsWrap);
        comments.forEach((comment)=> {
            let divComment = document.createElement('div');
            divComment.classList.add('singleComment');
            let commentID = document.createElement('h3');
            commentID.innerText = `id: ${comment.id} - postId: ${comment.postId}`;
            let commentName = document.createElement('h2');
            commentName.innerText = comment.name;
            let commentBody = document.createElement('p');
            commentBody.innerText = comment.body;
            let userEmail = document.createElement('p');
            userEmail.innerText = comment.email;
            divComment.append(commentID, commentName, commentBody, userEmail);
            commentsWrap.append(divComment);
        })
    });