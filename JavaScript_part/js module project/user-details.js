let id = +localStorage.getItem('userID');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {
        let selectedUserDiv = document.createElement('div');
        selectedUserDiv.classList.add('selected-user');
        document.body.appendChild(selectedUserDiv);

        for (const userKey in user) {
            let userItemDiv = document.createElement('div');
            userItemDiv.classList.add(userKey);

            if (typeof user[userKey] == 'object') {
                userItemDiv.innerText = `${userKey}:`;

                let innerObjLvl1 = user[userKey];

                let innerObjItemList = document.createElement('ul');
                userItemDiv.appendChild(innerObjItemList);

                for (const innerObjKey in innerObjLvl1) {

                    let listItem = document.createElement('li');

                    if (typeof innerObjLvl1[innerObjKey] == 'object') {
                        listItem.innerText = `${innerObjKey}:`;

                        let innerObjLvl2 = innerObjLvl1[innerObjKey];

                        let geoList = document.createElement('ul');
                        listItem.appendChild(geoList);

                        for (const key in innerObjLvl2) {

                            let list = document.createElement('li');
                            list.innerText = `${key}: ${innerObjLvl2[key]}`;

                            geoList.appendChild(list);
                        }
                    }else {
                        listItem.innerText = `${innerObjKey}: ${innerObjLvl1[innerObjKey]}`;
                    }

                    innerObjItemList.appendChild(listItem);
                }
            }else {
                userItemDiv.innerText = `${userKey}: ${user[userKey]}`;
            }

            selectedUserDiv.append(userItemDiv);
        }

        let userButton = document.createElement('button');
        userButton.innerText = 'post of current user';
        let postsWrapDiv = document.createElement('div');
        postsWrapDiv.classList.add('posts-wrap');
        document.body.append(userButton, postsWrapDiv);
        userButton.onclick = () => {
            postsWrapDiv.innerText = '';
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(posts => {
                    posts.forEach(value => {
                        let postDiv = document.createElement('div');
                        postDiv.classList.add('post-div');
                        postDiv.innerText = value.title;

                        let postDetailsLink = document.createElement('a');
                        postDetailsLink.href = 'post-details.html';
                        postDetailsLink.innerText = 'post details';
                        postDetailsLink.onclick = ()=> {
                            localStorage.removeItem('postID');
                            localStorage.setItem('postID', value.id);
                        }
                        postDiv.appendChild(postDetailsLink);

                        postsWrapDiv.append(postDiv);
                    })
                });
        }
    });
