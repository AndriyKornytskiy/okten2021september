fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let usersWrapDiv = document.createElement('div');
        usersWrapDiv.classList.add('users-wrap');
        document.body.appendChild(usersWrapDiv);
        users.forEach(user => {
            let singleUserDiv = document.createElement('div');
            singleUserDiv.classList.add('single-user');

            let userIdHeader = document.createElement('h3');
            userIdHeader.innerText = '№: ' + user.id;

            let userNameHeader = document.createElement('h2');
            userNameHeader.innerText =  user.name;

            let detailsLink = document.createElement('a');
            detailsLink.href = 'user-details.html';
            detailsLink.innerText = 'show info';
            detailsLink.onclick = () => {
                localStorage.removeItem('userID');
                localStorage.setItem('userID', `${user.id}`);
            }

            singleUserDiv.append(userIdHeader, userNameHeader, detailsLink);
            usersWrapDiv.appendChild(singleUserDiv);
        })
    });